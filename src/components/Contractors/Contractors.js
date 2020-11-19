import { useEffect } from "react"
import MainLayout from "../MainLayout/MainLayout";
import ContractorsToolbar from "./Toolbar";
import ContractorsTable from "./Table";
import { fetchAll } from "../../redux/actions/contractorsActions";
import { connect } from "react-redux";

const Contractors = (props) => {
    const { fetchAll, contractorsList } = props
    const title = "Контрагенты"

    useEffect(() => {
        document.title = title
        fetchAll()
    }, [])

    return (
        <MainLayout title={ title }>
            <ContractorsToolbar/>
            <ContractorsTable data={ contractorsList }/>
        </MainLayout>
    )
}

const mapStateToProps = (state) => ({
    contractorsList: state.contractors.contractorsList
})

export default connect(mapStateToProps, { fetchAll })(Contractors)