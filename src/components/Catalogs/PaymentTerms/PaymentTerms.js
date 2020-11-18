import { Component } from "react"
import MainLayout from "../../MainLayout/MainLayout";
import PaymentTypesToolbar from "./Toolbar";
import PaymentTermsTable from "./Table";
import { connect } from "react-redux";
import { fetchAllPaymentTerms } from "../../../redux/actions/paymentTermsActions";
import PaymentTermDeleteDialog from "./DeleteDialog";
import PaymentTermForm from "./Form";

class PaymentTerms extends Component {
    state = { title: "Справочник сроков оплат" }

    componentDidMount() {
        document.title = this.state.title
        this.props.fetchAllPaymentTerms()
    }

    render() {
        return (
            <MainLayout title={ this.state.title }>
                <PaymentTypesToolbar/>
                <PaymentTermsTable data={ this.props.paymentTermsList }/>
                { this.props.formModal && <PaymentTermForm/> }
                { this.props.deleteModal && <PaymentTermDeleteDialog/> }
            </MainLayout>
        )
    }
}

const mapStateToProps = (state) => ({
    paymentTermsList: state.paymentTerms.paymentTermsList,
    formModal: state.modal.PaymentTermFormDialog,
    deleteModal: state.modal.PaymentTermDeleteDialog,
})

export default connect(mapStateToProps, { fetchAllPaymentTerms })(PaymentTerms)