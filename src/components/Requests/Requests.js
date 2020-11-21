import { useEffect, useState } from "react"
import { Button } from "antd";
import MainLayout from "../MainLayout/MainLayout";
import ConfirmModal from "../UI/ConfirmModal";
import RequestsTable from "./Table";
import { connect } from "react-redux";
import { clearSelectedRequest, deleteRequest, fetchRequestsSuccess } from "../../redux/actions/requestsActions";
import RequestModalForm from "./Form";
import { closeDeleteConfirmModal, openFormModal } from "../../redux/actions/modalsActions";
import { getRequests } from "../../services/requestsService";

const Requests = (props) => {
    const [title] = useState("Журнал заявок")
    const [tableLoading, setTableLoading] = useState(false)
    const [tableData, setTableData] = useState([])

    const {
        showDeleteConfirmModal, showFormModal, openFormModal, selectedRequest, formModalTitle,
        deleteRequest, clearSelectedRequest, closeDeleteConfirmModal, requests, fetchRequestsSuccess
    } = props

    useEffect(() => {
        setTableLoading(true)
        getRequests().then(data => {
            fetchRequestsSuccess(data)
            setTableLoading(false)
        })
    }, [])

    useEffect(() => {
        setTableData(requests)
    }, [requests])

    useEffect(() => {
        document.title = title
    }, [title])

    const handleDelete = () => {
        deleteRequest(selectedRequest)
        closeDeleteConfirmModal()
    }

    const handleDeleteConfirmModalClose = () => {
        clearSelectedRequest()
        closeDeleteConfirmModal()
    }

    return (
        <MainLayout title={ title }>
            <Button style={ { marginBottom: "0.5rem", backgroundColor: "lime" } }
                    onClick={ () => openFormModal("Создание новой заявки") }>Добавить</Button>

            <RequestsTable data={ tableData } loading={ tableLoading }/>

            { showFormModal &&
            <RequestModalForm visible={ showFormModal } initialData={ selectedRequest } title={ formModalTitle }/> }

            { selectedRequest &&
            <ConfirmModal visible={ showDeleteConfirmModal } title={ `Удаление заявки № ${ selectedRequest.number }` }
                          onSubmit={ handleDelete }
                          onClose={ handleDeleteConfirmModalClose }>
                <p>Вы действительно хотите удалить заявку
                    № <b>{ selectedRequest && selectedRequest.number }</b>?</p>
            </ConfirmModal> }

        </MainLayout>
    )
}

const mapStateToProps = state => ({
    requests: state.requests.requestsList,
    showDeleteConfirmModal: state.modals.showDeleteConfirmModal,
    showFormModal: state.modals.showFormModal,
    formModalTitle: state.modals.formModalTitle,
    selectedRequest: state.requests.selectedRequest
})

export default connect(mapStateToProps, {
    clearSelectedRequest,
    openFormModal,
    deleteRequest,
    closeDeleteConfirmModal,
    fetchRequestsSuccess
})(Requests)