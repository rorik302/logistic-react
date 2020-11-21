import { useState, useEffect } from "react"
import { Button, Col, DatePicker, Form, Input, Modal, Row, Select } from "antd";
import moment from "moment";
import { connect } from "react-redux";
import { closeFormModal } from "../../redux/actions/modalsActions";
import { clearSelectedRequest } from "../../redux/actions/requestsActions";

const { Option } = Select

const RequestModalForm = (props) => {
    const [customers, setCustomers] = useState([])
    const [transporters, setTransporters] = useState([])

    const { visible, initialData, closeFormModal, clearSelectedRequest, title } = props

    useEffect(() => {
        fetch("http://localhost:8000/api/companies/")
            .then(res => res.json())
            .then(data => {
                    setCustomers(data.filter(item => item.is_customer))
                    setTransporters(data.filter(item => item.is_transporter))
                }
            )
    }, [])

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
            footer={ [
                <Button key="submit" type="primary">
                    Сохранить
                </Button>,
                <Button key="cancel" onClick={ () => onModalClose() }>
                    Отмена
                </Button>
            ] }>
            { initialData &&
            <RequestForm initialValues={ initialData } customers={ customers } transporters={ transporters }/> }
        </Modal>
    )
}

const RequestForm = (props) => {
    const [form] = Form.useForm()

    const { initialValues, customers, transporters } = props

    useEffect(() => form.resetFields(), [initialValues, form]);

    const worker = {
        ...initialValues,
        loading_date: initialValues.loading_date && moment(initialValues.loading_date, "YYYY-MM-DD"),
        unloading_date: initialValues.unloading_date && moment(initialValues.unloading_date, "YYYY-MM-DD"),
        customer: initialValues.customer && initialValues.customer.id,
        transporter: initialValues.transporter && initialValues.transporter.id
    }

    return (
        <Form layout="vertical" initialValues={ worker } form={ form }>
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
                        <Select style={ { width: "100%" } }>
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
        </Form>
    )
}

const mapStateToProps = state => ({
    initialData: state.requests.selectedRequest
})

export default connect(mapStateToProps, { closeFormModal, clearSelectedRequest })(RequestModalForm)