import { useState, useEffect } from "react"
import MainLayout from "../MainLayout/MainLayout";
import ContractorsToolbar from "./Toolbar";
import ContractorsTable from "./Table";
import { fetchAll } from "../../redux/actions/contractorsActions";
import { connect } from "react-redux";
import ContractorDeleteDialog from "./DeleteDialog";
import ContractorForm from "./Form";

const Contractors = (props) => {
    const [showForm, setShowForm] = useState(false)
    const { fetchAll, contractorsList, deleteDialog, formDialog } = props
    const title = "Контрагенты"

    useEffect(() => {
        document.title = title
        fetchAll()
    }, [])

    useEffect(() => {
        setShowForm(!showForm)
    }, [formDialog])

    return (
        <MainLayout title={ title }>
            <ContractorsToolbar/>
            <ContractorsTable data={ contractorsList }/>
            { deleteDialog && <ContractorDeleteDialog/> }
            { showForm && <ContractorForm/> }
        </MainLayout>
    )
}

const mapStateToProps = (state) => ({
    contractorsList: state.contractors.contractorsList,
    formDialog: state.modal.ContactorFormDialog,
    deleteDialog: state.modal.ContractorDeleteDialog
})

export default connect(mapStateToProps, { fetchAll })(Contractors)