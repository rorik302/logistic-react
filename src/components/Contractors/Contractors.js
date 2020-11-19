import { useEffect } from "react"
import MainLayout from "../MainLayout/MainLayout";
import ContractorsToolbar from "./Toolbar";
import ContractorsTable from "./Table";
import { fetchAll } from "../../redux/actions/contractorsActions";
import { connect } from "react-redux";
import ContractorDeleteDialog from "./DeleteDialog";

const Contractors = (props) => {
    const { fetchAll, contractorsList, deleteDialog } = props
    const title = "Контрагенты"

    useEffect(() => {
        document.title = title
        fetchAll()
    }, [])

    return (
        <MainLayout title={ title }>
            <ContractorsToolbar/>
            <ContractorsTable data={ contractorsList }/>
            { deleteDialog && <ContractorDeleteDialog/>}
        </MainLayout>
    )
}

const mapStateToProps = (state) => ({
    contractorsList: state.contractors.contractorsList,
    deleteDialog: state.modal.ContractorDeleteDialog
})

export default connect(mapStateToProps, { fetchAll })(Contractors)