import { useState, useEffect } from "react"
import MainLayout from "../../MainLayout/MainLayout";
import { Button } from "antd";
import CompanyTypesTable from "./Table";
import CompanyTypesService from "../../../services/companyTypesService";
import { fetchCompanyTypesSuccess } from "../../../redux/actions/companyTypesActions";
import { connect } from "react-redux";

const service = new CompanyTypesService()

const CompanyTypes = props => {
    const title = "Справочник правовых форм"
    const [tableData, setTableData] = useState([])
    const [tableLoading, setTableLoading] = useState(false)

    const { openFormModal, fetchCompanyTypesSuccess, companyTypes } = props

    useEffect(() => {
        setTableLoading(true)
        service.getCompanyTypes()
            .then(data => fetchCompanyTypesSuccess(data))
            .finally(() => setTableLoading(false))
    }, [])

    useEffect(() => {
        setTableData(companyTypes)
    }, [companyTypes])

    return (
        <MainLayout title={ title }>
            <Button style={ { marginBottom: "0.5rem", backgroundColor: "lime" } }
                    onClick={ () => openFormModal("Создание правовой формы") }>Добавить</Button>
            <CompanyTypesTable data={ tableData } loading={ tableLoading }/>
        </MainLayout>
    )
}

const mapStateToProps = state => ({
    companyTypes: state.companyTypes.companyTypesList
})

export default connect(mapStateToProps, { fetchCompanyTypesSuccess })(CompanyTypes)