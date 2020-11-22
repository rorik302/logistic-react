import { Button, Space, Table as AntTable } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table } from "../UI/Table";

const { Column } = AntTable

const ContractorsTable = props => {
    const { data, loading } = props

    const onEditBtnClick = record => {
    }

    const onDeleteBtnClick = record => {
    }

    return (
        <Table data={ data } loading={ loading }>
            <Column title="Тип" key="type" render={ record => (
                <span>{ record.is_customer && record.is_transporter ? "Заказчик / Перевозчик" :
                    record.is_customer ? "Заказчик" : record.is_transporter ? "Перевозчик" : null }</span>
            ) }/>
            <Column title="Наименование" dataIndex="name" key="name"/>
            <Column title="ИНН" dataIndex="inn" key="inn"/>
            <Column title="Адрес" dataIndex="address" key="address"/>
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

export default ContractorsTable