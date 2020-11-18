import { useEffect } from "react"
import MainLayout from "../../MainLayout/MainLayout";
import PaymentTypesToolbar from "./Toolbar";
import PaymentTermsTable from "./Table";
import { connect } from "react-redux";
import { fetchAllPaymentTerms } from "../../../redux/actions/paymentTermsActions";

const PaymentTerms = (props) => {
    const { fetchAllPaymentTerms } = props
    const title = "Справочник сроков оплат"

    useEffect(() => {
        document.title = title
        fetchAllPaymentTerms()
    }, [])

    return (
        <MainLayout title={ title }>
            <PaymentTypesToolbar/>
            <PaymentTermsTable data={ props.paymentTermsList }/>
        </MainLayout>
    )
}

const mapStateToProps = (state) => ({
    paymentTermsList: state.paymentTerms.paymentTermsList
})

export default connect(mapStateToProps, { fetchAllPaymentTerms })(PaymentTerms)