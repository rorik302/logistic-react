import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { show } from "redux-modal";
import { connect } from "react-redux";
import { selectPaymentTerm } from "../../../redux/actions/paymentTermsActions";

const PaymentTermsTable = (props) => {
    const { data, show, selectPaymentTerm } = props

    const onDelete = (rowData) => {
        selectPaymentTerm(rowData)
        show("PaymentTermDeleteDialog", { item: rowData })
    }

    const actionBodyTemplate = (rowData) => (
        <>
            <Button label="Редактировать" icon="pi pi-pencil" className="p-button-sm p-button-warning"
                    onClick={ () => {} }/>
            <Button label="Удалить" icon="pi pi-trash" className="p-button-sm p-button-danger p-ml-2"
                    onClick={ () => onDelete(rowData) }/>
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

export default connect(null, { show, selectPaymentTerm })(PaymentTermsTable)