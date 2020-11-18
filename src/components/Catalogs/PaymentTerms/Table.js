import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const PaymentTermsTable = (props) => {
    const { data } = props
    const actionBodyTemplate = (rowData) => (
        <>
            <Button label="Редактировать" icon="pi pi-pencil" className="p-button-sm p-button-warning"
                    onClick={ () => {} }/>
            <Button label="Удалить" icon="pi pi-trash" className="p-button-sm p-button-danger p-ml-2"
                    onClick={ () => {} }/>
        </>
    )
    return (
        <DataTable value={ data } className="p-datatable-hoverable-rows p-datatable-striped p-datatable-sm">
            <Column field="daysCount" header="Кол-во дней"/>
            <Column field="daysType" header="Тип дней"/>
            <Column field="reason" header="Основание"/>
            <Column body={ actionBodyTemplate }/>
        </DataTable>
    )
}

export default PaymentTermsTable