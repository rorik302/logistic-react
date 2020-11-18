import { Component } from "react"
import { Field, reduxForm } from "redux-form";
import { Dialog } from "primereact/dialog";
import { connectModal } from "redux-modal";
import { compose } from "redux";
import { Button } from "primereact/button";
import { connect } from "react-redux";
import { clearCompanyType, submitCompanyType } from "../../../redux/actions/companyTypesActions";

class CompanyTypeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null
        }
    }

    componentDidMount() {
        if (this.props.dialogType === "edit") {
            this.setState({ title: "Редактирование правовой формы" })
        } else {
            this.setState({ title: "Добавление правовой формы" })
        }
    }

    onSubmit = (values) => {
        this.props.submitCompanyType(values)
        this.props.clearCompanyType()
        this.props.handleHide()
    }

    onClose = () => {
        this.props.clearCompanyType()
        this.props.handleHide()
    }

    render() {
        return (
            <Dialog visible={ this.props.show } header={ this.state.title } onHide={ this.onClose } closable={ false }>
                <Form onSubmit={ this.props.handleSubmit((values) => this.onSubmit(values)) }
                      handleHide={ this.onClose }/>
            </Dialog>
        )
    }
}

const Form = (props) => {
    const { onSubmit, handleHide } = props

    return (
        <form onSubmit={ onSubmit }>
            <div className="p-fluid">
                <div className="p-field">
                    <label>Наименование (сокр.)</label>
                    <Field component="input" name="nameShort" className="p-inputtext"/>
                </div>
                <div className="p-field">
                    <label>Наименование (полное)</label>
                    <Field component="input" name="nameFull" className="p-inputtext"/>
                </div>
            </div>
            <div className="p-d-flex p-jc-end">
                <Button type="submit" label="Сохранить" icon="pi pi-check" className="p-button-sm p-button-success"/>
                <Button type="button" label="Отмена" icon="pi pi-cancel"
                        className="p-button-sm p-button-text p-button-plain p-ml-2"
                        onClick={ handleHide }/>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => ({
    initialValues: state.companyTypes.selectedItem
})

export default compose(
    connect(mapStateToProps, { clearCompanyType, submitCompanyType }),
    connectModal({ name: "CompanyTypeFormDialog" }),
    reduxForm({ form: 'CompanyTypeForm' })
)(CompanyTypeForm)
