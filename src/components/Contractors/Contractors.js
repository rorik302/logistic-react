import { useState, useEffect } from "react"
import MainLayout from "../MainLayout/MainLayout";
import { Button } from "antd";
import ContractorsTable from "./Table";
import { connect } from "react-redux";
import ContractorsService from "../../services/contractorsService";
import { fetchContractorsSuccess, clearSelectedContractor, deleteContractor } from "../../redux/actions/contractorsActions";
import ConfirmModal from "../UI/ConfirmModal";
import { closeDeleteConfirmModal } from "../../redux/actions/modalsActions";

const service = new ContractorsService()

const Contractors = props => {
    const title = "Журнал контрагентов"
    const [tableData, setTableData] = useState([])
    const [tableLoading, setTableLoading] = useState(false)

    const { contractors, fetchContractorsSuccess, showDeleteConfirmModal, clearSelectedContractor, closeDeleteConfirmModal, selectedContractor, deleteContractor } = props

    useEffect(() => {
        setTableLoading(true)
        service.getContractors().then(data => {
            fetchContractorsSuccess(data)
            setTableLoading(false)
        })
    }, [])

    useEffect(() => {
        setTableData(contractors)
    }, [contractors])

    const handleDelete = () => {
        service.deleteContractor(selectedContractor)
            .then(() => deleteContractor(selectedContractor))
        closeDeleteConfirmModal()
    }

    const handleDeleteConfirmModalClose = () => {
        clearSelectedContractor()
        closeDeleteConfirmModal()
    }

    return (
        <MainLayout title={ title }>
            <Button style={ { marginBottom: "0.5rem", backgroundColor: "lime" } }>Добавить</Button>
            <ContractorsTable data={ tableData } loading={ tableLoading }/>
            { showDeleteConfirmModal &&
            <ConfirmModal title="Удаление контрагента" visible={ showDeleteConfirmModal }
                          onSubmit={ handleDelete }
                          onClose={ handleDeleteConfirmModalClose }>
                <p>Вы действительно хотите удалить контрагента <b>{ selectedContractor && selectedContractor.name }</b>?
                </p>
            </ConfirmModal> }
        </MainLayout>
    )
}

const mapStateToProps = state => ({
    contractors: state.contractors.contractorsList,
    showDeleteConfirmModal: state.modals.showDeleteConfirmModal,
    selectedContractor: state.contractors.selectedContractor
})

export default connect(mapStateToProps, {
    fetchContractorsSuccess,
    clearSelectedContractor,
    closeDeleteConfirmModal,
    deleteContractor
})(Contractors)