import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

const CompanyTypesTable = (props) => {
    const { data } = props

    const actionBodyTemplate = (rowData) => (
        <>
            <Button label="Редактировать" icon="pi pi-pencil" className="p-button-sm p-button-warning"/>
            <Button label="Удалить" icon="pi pi-trash" className="p-button-sm p-button-danger p-ml-2"/>
        </>
    )
    return (
        <DataTable value={ data } className="p-datatable-hoverable-rows p-datatable-striped p-datatable-sm">
            <Column field="nameShort" header="Наименование (сокращенное)"/>
            <Column field="nameFull" header="Наименование (полное)"/>
            <Column body={ actionBodyTemplate }/>
        </DataTable>
    )
}

export default CompanyTypesTable