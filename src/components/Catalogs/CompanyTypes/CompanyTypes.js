import { useState, useEffect } from "react"
import MainLayout from "../../MainLayout/MainLayout";
import { Button } from "antd";
import CompanyTypesTable from "./Table";
import CompanyTypesService from "../../../services/companyTypesService";
import {
    clearSelectedCompanyType,
    deleteCompanyType,
    fetchCompanyTypesSuccess
} from "../../../redux/actions/companyTypesActions";
import { connect } from "react-redux";
import ConfirmModal from "../../UI/ConfirmModal";
import { closeDeleteConfirmModal, openFormModal } from "../../../redux/actions/modalsActions";
import CompanyTypeModalForm from "./Form";

const service = new CompanyTypesService()

const CompanyTypes = props => {
    const title = "Справочник правовых форм"
    const [tableData, setTableData] = useState([])
    const [tableLoading, setTableLoading] = useState(false)

    const {
        openFormModal, fetchCompanyTypesSuccess, companyTypes, showDeleteConfirmModal, selectedCompanyType,
        closeDeleteConfirmModal, clearSelectedCompanyType, deleteCompanyType, showFormModal
    } = props

    useEffect(() => {
        document.title = title
        setTableLoading(true)
        service.getCompanyTypes()
            .then(data => fetchCompanyTypesSuccess(data))
            .finally(() => setTableLoading(false))
    }, [])

    useEffect(() => {
        setTableData(companyTypes)
    }, [companyTypes])

    const handleDelete = () => {
        service.deleteCompanyType(selectedCompanyType)
            .then(() => deleteCompanyType(selectedCompanyType))
            .finally(() => closeDeleteConfirmModal())
    }

    const handleDeleteConfirmModalClose = () => {
        clearSelectedCompanyType()
        closeDeleteConfirmModal()
    }

    return (
        <MainLayout title={ title }>
            <Button style={ { marginBottom: "0.5rem", backgroundColor: "lime" } }
                    onClick={ () => openFormModal("Создание правовой формы") }>Добавить</Button>
            <CompanyTypesTable data={ tableData } loading={ tableLoading }/>

            { showFormModal && <CompanyTypeModalForm visible={ showFormModal } initialData={ selectedCompanyType }/> }

            { showDeleteConfirmModal &&
            <ConfirmModal visible={ showDeleteConfirmModal } title="Удаление правовой формы"
                          onSubmit={ handleDelete }
                          onClose={ handleDeleteConfirmModalClose }
            >
                <p>Вы действительно хотите удалить правовую
                    форму <b>{ selectedCompanyType && `${ selectedCompanyType.name_short } (${ selectedCompanyType.name_full })` }</b>?
                </p>
            </ConfirmModal> }
        </MainLayout>
    )
}

const mapStateToProps = state => ({
    companyTypes: state.companyTypes.companyTypesList,
    showDeleteConfirmModal: state.modals.showDeleteConfirmModal,
    selectedCompanyType: state.companyTypes.selectedCompanyType,
    showFormModal: state.modals.showFormModal
})

export default connect(mapStateToProps, {
    fetchCompanyTypesSuccess,
    closeDeleteConfirmModal,
    clearSelectedCompanyType,
    deleteCompanyType,
    openFormModal
})(CompanyTypes)