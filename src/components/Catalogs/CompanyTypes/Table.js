import { Table } from "../../UI/Table";
import { Button, Space, Table as AntTable } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { openDeleteConfirmModal, openFormModal } from "../../../redux/actions/modalsActions";
import { connect } from "react-redux";
import { selectCompanyType } from "../../../redux/actions/companyTypesActions";

const { Column } = AntTable

const CompanyTypesTable = props => {
    const { data, loading, openDeleteConfirmModal, selectCompanyType, openFormModal } = props

    const onEditBtnClick = record => {
        selectCompanyType(record)
        openFormModal("Редактирование правовой формы")
    }

    const onDeleteBtnClick = record => {
        selectCompanyType(record)
        openDeleteConfirmModal()
    }

    return (
        <Table data={ data } loading={ loading }>
            <Column title="Наименование сокращенное" dataIndex="name_short" key="nameShort"/>
            <Column title="Наименование полное" dataIndex="name_full" key="nameFull"/>
            <Column key="actions" render={ (record) => (
                <Space size="large">
                    <Button type="text" icon={ <EditOutlined/> }
                            style={ { backgroundColor: "gold", color: "black" } }
                            onClick={ () => onEditBtnClick(record) }
                    />
                    <Button type="text" icon={ <DeleteOutlined/> }
                            style={ { backgroundColor: "red", color: "black" } }
                            onClick={ () => onDeleteBtnClick(record) }
                    />
                </Space>) }/>
        </Table>
    )
}

export default connect(null, { openDeleteConfirmModal, selectCompanyType, openFormModal })(CompanyTypesTable)