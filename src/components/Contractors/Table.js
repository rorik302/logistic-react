import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { show } from "redux-modal";
import { connect } from "react-redux";
import { select } from "../../redux/actions/contractorsActions";

const ContractorsTable = (props) => {
    const { data, show, select } = props

    const onEdit = () => {
    }
    const onDelete = (rowData) => {
        select(rowData)
        show("ContractorDeleteDialog", { item: rowData })
    }

    const isCustomerBodyTemplate = (rowData) => {
        return <span>{ rowData.isCustomer && "✔" }</span>;
    }
    const isTransporterBodyTemplate = (rowData) => {
        return <span>{ rowData.isTransporter && "✔" }</span>;
    }
    const actionBodyTemplate = (rowData) => (
        <>
            <Button label="Редактировать" icon="pi pi-pencil" className="p-button-sm p-button-warning"
                    onClick={ () => onEdit(rowData) }/>
            <Button label="Удалить" icon="pi pi-trash" className="p-button-sm p-button-danger p-ml-2"
                    onClick={ () => onDelete(rowData) }/>
        </>
    )

    return (
        <DataTable value={ data } className="p-datatable-hoverable-rows p-datatable-striped p-datatable-sm">
            <Column header="Заказчик" body={ isCustomerBodyTemplate }/>
            <Column header="Перевозчик" body={ isTransporterBodyTemplate }/>
            <Column field="name" header="Наименование"/>
            <Column field="inn" header="ИНН"/>
            <Column field="address" header="Адрес"/>
            <Column body={ actionBodyTemplate }/>
        </DataTable>
    )
}

export default connect(null, { show, select })(ContractorsTable)