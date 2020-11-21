import { Button, Space, Table as AntTable } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table } from "../UI/Table";
import { connect } from "react-redux";
import { openDeleteConfirmModal, openFormModal } from "../../redux/actions/modalsActions";
import { selectRequest } from "../../redux/actions/requestsActions";

const { Column } = AntTable

const RequestsTable = (props) => {
    const { data, loading, openDeleteConfirmModal, openFormModal, selectRequest } = props

    const onEditBtnClick = record => {
        selectRequest(record)
        openFormModal("Редактирование заявки")
    }
    const onDeleteBtnClick = record => {
        selectRequest(record)
        openDeleteConfirmModal()
    }

    return (
        <Table data={ data } loading={ loading }>
            <Column title="№" dataIndex="number" key="number"/>
            <Column title="Дата загрузки" dataIndex="loading_date" key="loading_date"/>
            <Column title="Адрес загрузки" dataIndex="loading_address" key="loading_address"/>
            <Column title="Дата выгрузки" dataIndex="unloading_date" key="unloading_date"/>
            <Column title="Адрес выгрузки" dataIndex="unloading_address" key="unloading_address"/>
            <Column title="Заказчик" dataIndex="customer" key="customer" render={ record => (
                <span>{ record.name }</span>
            ) }/>
            <Column title="Перевозчик" dataIndex="transporter" key="transporter" render={ record => (
                <span>{ record.name }</span>
            ) }/>
            <Column title="Ставка (зак.)" dataIndex="customer_rate" key="customer_rate"/>
            <Column title="Ставка (пер.)" dataIndex="transporter_rate" key="transporter_rate"/>
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

export default connect(null, { openDeleteConfirmModal, openFormModal, selectRequest })(RequestsTable)