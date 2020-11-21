import { useState, useEffect } from "react"
import { Button, Col, DatePicker, Form, Input, Modal, Row, Select } from "antd";
import moment from "moment";
import { connect } from "react-redux";
import { closeFormModal } from "../../redux/actions/modalsActions";
import { clearSelectedRequest, saveRequest } from "../../redux/actions/requestsActions";

const { Option } = Select

const RequestModalForm = (props) => {
    const [customers, setCustomers] = useState([])
    const [transporters, setTransporters] = useState([])

    const { visible, initialData, closeFormModal, clearSelectedRequest, title, saveRequest } = props

    useEffect(() => {
        fetch("http://localhost:8000/api/companies/")
            .then(res => res.json())
            .then(data => {
                    setCustomers(data.filter(item => item.is_customer))
                    setTransporters(data.filter(item => item.is_transporter))
                }
            )
    }, [])

    const handleSubmit = values => {
        saveRequest(values)
        clearSelectedRequest()
        closeFormModal()
    }

    const onModalClose = () => {
        clearSelectedRequest()
        closeFormModal()
    }

    return (
        <Modal
            centered
            title={ title }
            closable={ false }
            visible={ visible }
            style={ { minWidth: "700px" } }
            footer={null}>
            <RequestForm initialValues={ initialData } customers={ customers } transporters={ transporters }
                         onClose={ onModalClose } handleSubmit={ handleSubmit }
            />
        </Modal>
    )
}

const RequestForm = (props) => {
    const [form] = Form.useForm()

    const { initialValues, customers, transporters, onClose, handleSubmit } = props

    const worker = {
        ...initialValues,
        loading_date: initialValues && moment(initialValues.loading_date, "YYYY-MM-DD"),
        unloading_date: initialValues && moment(initialValues.unloading_date, "YYYY-MM-DD"),
        customer: initialValues && initialValues.customer.id,
        transporter: initialValues && initialValues.transporter.id
    }

    return (
        <Form layout="vertical" initialValues={ worker } form={ form } preserve={ false } onFinish={ handleSubmit }>
            <Form.Item hidden name="id"/>
            <Row>
                <Col span={ 6 }>
                    <Form.Item label="№" name="number">
                        <Input/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={ 16 }>
                <Col span={ 12 }>
                    <Form.Item label="Заказчик" name="customer">
                        <Select style={ { width: "100%" } } >
                            { customers && customers.map(item => (
                                <Option key={ item.id } value={ item.id }>{ item.name }</Option>
                            )) }
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={ 12 }>
                    <Form.Item label="Перевозчик" name="transporter">
                        <Select style={ { width: "100%" } }>
                            { transporters && transporters.map(item => (
                                <Option key={ item.id } value={ item.id }>{ item.name }</Option>
                            )) }
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={ 16 }>
                <Col span={ 12 }>
                    <Form.Item label="Дата загрузки" name="loading_date">
                        <DatePicker style={ { width: "100%" } }/>
                    </Form.Item>
                </Col>
                <Col span={ 12 }>
                    <Form.Item label="Дата выгрузки" name="unloading_date">
                        <DatePicker style={ { width: "100%" } }/>
                    </Form.Item>
                </Col>
            </Row>
            <Form.Item label="Адрес загрузки" name="loading_address">
                <Input/>
            </Form.Item>
            <Form.Item label="Адрес выгрузки" name="unloading_address">
                <Input/>
            </Form.Item>
            <Row gutter={ 16 }>
                <Col span={ 12 }>
                    <Form.Item label="Ставка (зак.)" name="customer_rate">
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={ 12 }>
                    <Form.Item label="Ставка (пер.)" name="transporter_rate">
                        <Input/>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={ 24 } style={ { textAlign: "right" } }>
                    <Form.Item>
                        <Button key="submit" type="primary" htmlType="submit">
                            Сохранить
                        </Button>,
                        <Button key="cancel" htmlType="button" onClick={ () => onClose() }>
                            Отмена
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )
}

const mapStateToProps = state => ({
    initialData: state.requests.selectedRequest
})

export default connect(mapStateToProps, { closeFormModal, clearSelectedRequest, saveRequest })(RequestModalForm)