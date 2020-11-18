import { Component } from "react"
import { Field, reduxForm } from "redux-form";
import { Dialog } from "primereact/dialog";
import { connectModal } from "redux-modal";
import { compose } from "redux";
import { Button } from "primereact/button";
import { connect } from "react-redux";
import { submitPaymentTerm, clearPaymentTerm } from "../../../redux/actions/paymentTermsActions";

class PaymentTermForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null
        }
    }

    componentDidMount() {
        if (this.props.dialogType === "edit") {
            this.setState({ title: "Редактирование срока оплаты" })
        } else {
            this.setState({ title: "Добавление срока оплаты" })
        }
    }

    onSubmit = (values) => {
        this.props.submitPaymentTerm(values)
        this.props.clearPaymentTerm()
        this.props.handleHide()
    }

    onClose = () => {
        this.props.clearPaymentTerm()
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
                    <label>Кол-во дней</label>
                    <Field component="input" name="daysCount" className="p-inputtext"/>
                </div>
                <div className="p-field">
                    <label>Тип</label>
                    <Field component="select" name="daysType" className="p-dropdown p-p-2 p-col-12">
                        <option/>
                        <option value="банковские">банковские</option>
                        <option value="календарные">календарные</option>
                    </Field>
                </div>
                <div className="p-field">
                    <label>Основание</label>
                    <Field component="select" name="reason" className="p-dropdown p-p-2 p-col-12">
                        <option/>
                        <option value="по оригиналам документов">по оригиналам документов</option>
                        <option value="по копиям документов">по копиям документов</option>
                    </Field>
                </div>
            </div>
            <div className="p-d-flex p-jc-end">
                <Button type="submit" label="Сохранить" icon="pi pi-check" className="p-button-sm p-button-success"/>
                <Button type="button" label="Отмена" icon="pi pi-ban"
                        className="p-button-sm p-button-text p-button-plain p-ml-2"
                        onClick={ handleHide }/>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => ({
    initialValues: state.paymentTerms.selected
})

export default compose(
    connect(mapStateToProps, { submitPaymentTerm, clearPaymentTerm }),
    connectModal({ name: "PaymentTermFormDialog" }),
    reduxForm({ form: 'PaymentTermForm' })
)(PaymentTermForm)
