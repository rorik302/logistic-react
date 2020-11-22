import { Modal, Form, Col, Row, Switch, Select, Input, Button } from "antd";
import { connect } from "react-redux";
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { clearSelectedContractor, contractorCreated, contractorUpdated } from "../../redux/actions/contractorsActions";
import { closeFormModal } from "../../redux/actions/modalsActions";
import ContractorsService from "../../services/contractorsService";

const service = new ContractorsService()

const ContractorModalForm = props => {
    const { title, visible, initialData, clearSelectedContractor, closeFormModal, contractorUpdated, contractorCreated } = props

    const onModalClose = () => {
        clearSelectedContractor()
        closeFormModal()
    }

    const handleSubmit = values => {
        service.saveContractor(values)
            .then(data => values.id ? contractorUpdated(data) : contractorCreated(data))
            .finally(() => closeFormModal())
    }

    return (
        <Modal
            centered
            title={ title }
            closable={ false }
            visible={ visible }
            style={ { minWidth: "700px" } }
            footer={ null }>
            <ContractorForm initialValues={ initialData } onClose={ onModalClose } handleSubmit={ handleSubmit }/>
        </Modal>
    )
}

const ContractorForm = props => {
    const [form] = Form.useForm()

    const { handleSubmit, initialValues, onClose } = props

    const worker = {
        ...initialValues,
        type_of_company: initialValues && initialValues.type_of_company.id
    }

    return (
        <Form layout="vertical" form={ form } preserve={ false } onFinish={ handleSubmit } initialValues={ worker }>
            <Form.Item hidden name="id"/>
            <Row>
                <Form.Item label="Заказчик" name="is_customer" style={ { marginRight: "3rem" } }>
                    <Switch checkedChildren={ <CheckOutlined/> } unCheckedChildren={ <CloseOutlined/> }
                            defaultChecked={ initialValues && initialValues.is_customer }/>
                </Form.Item>
                <Form.Item label="Перевозчик" name="is_transporter">
                    <Switch checkedChildren={ <CheckOutlined/> } unCheckedChildren={ <CloseOutlined/> }
                            defaultChecked={ initialValues && initialValues.is_transporter }/>
                </Form.Item>
            </Row>
            <Row gutter={ 16 }>
                <Col span={ 6 }>
                    <Form.Item label="Правовая форма" name="type_of_company">
                        <Select style={ { width: "100%" } }>

                        </Select>
                    </Form.Item>
                </Col>
                <Col span={ 18 }>
                    <Form.Item label="Наименование" name="name">
                        <Input/>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Form.Item label="ИНН" name="inn">
                    <Input/>
                </Form.Item>
            </Row>
            <Row>
                <Form.Item label="Адрес" name="address" style={ { width: "100%" } }>
                    <Input/>
                </Form.Item>
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

export default connect(null, {
    clearSelectedContractor,
    closeFormModal,
    contractorUpdated,
    contractorCreated
})(ContractorModalForm)