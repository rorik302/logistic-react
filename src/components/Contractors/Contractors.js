import { useState, useEffect } from "react"
import MainLayout from "../MainLayout/MainLayout";
import { Button } from "antd";
import ContractorsTable from "./Table";
import { connect } from "react-redux";
import ContractorsService from "../../services/contractorsService";
import { fetchContractorsSuccess } from "../../redux/actions/contractorsActions";

const service = new ContractorsService()

const Contractors = props => {
    const title = "Журнал контрагентов"
    const [tableData, setTableData] = useState([])
    const [tableLoading, setTableLoading] = useState(false)

    const { contractors, fetchContractorsSuccess } = props

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

    return (
        <MainLayout title={ title }>
            <Button style={ { marginBottom: "0.5rem", backgroundColor: "lime" } }>Добавить</Button>
            <ContractorsTable data={ tableData } loading={ tableLoading }/>
        </MainLayout>
    )
}

const mapStateToProps = state => ({
    contractors: state.contractors.contractorsList
})

export default connect(mapStateToProps, { fetchContractorsSuccess })(Contractors)