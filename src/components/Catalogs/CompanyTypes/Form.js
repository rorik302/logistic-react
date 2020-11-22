import { Modal, Form, Col, Row, Input, Button } from "antd";
import { connect } from "react-redux";
import { closeFormModal } from "../../../redux/actions/modalsActions";
import CompanyTypesService from "../../../services/companyTypesService";
import {
    clearSelectedCompanyType,
    companyTypeCreated,
    companyTypeUpdated
} from "../../../redux/actions/companyTypesActions";

const service = new CompanyTypesService()

const CompanyTypeModalForm = props => {
    const { title, visible, initialData, closeFormModal, clearSelectedCompanyType, companyTypeUpdated, companyTypeCreated } = props

    const onModalClose = () => {
        clearSelectedCompanyType()
        closeFormModal()
    }

    const handleSubmit = values => {
        service.saveCompanyType(values)
            .then(data => values.id ? companyTypeUpdated(data) : companyTypeCreated(data))
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
            <CompanyTypeForm initialValues={ initialData } onClose={ onModalClose } handleSubmit={ handleSubmit }/>
        </Modal>
    )
}

const CompanyTypeForm = props => {
    const [form] = Form.useForm()

    const { handleSubmit, initialValues, onClose } = props

    return (
        <Form layout="vertical" form={ form } preserve={ false } onFinish={ handleSubmit }
              initialValues={ initialValues }>
            <Form.Item hidden name="id"/>
            <Row gutter={ 16 }>
                <Col span={ 6 }>
                    <Form.Item label="Наименование (сокр.)" name="name_short">
                        <Input/>
                    </Form.Item>
                </Col>
                <Col span={ 18 }>
                    <Form.Item label="Наименование (полн.)" name="name_full">
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

export default connect(null, { clearSelectedCompanyType, closeFormModal, companyTypeUpdated, companyTypeCreated })(CompanyTypeModalForm)