import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { connect } from "react-redux";
import { show } from "redux-modal"
import { selectCompanyType } from "../../../redux/actions/companyTypesActions";

const CompanyTypesTable = (props) => {
    const { data, show } = props

    const onEdit = (item) => {
        props.selectCompanyType(item)
        show("CompanyTypeFormDialog")
    }

    const onDelete = (item) => {
        props.selectCompanyType(item)
        show("CompanyTypeDeleteDialog", { item: item })
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
            <Column field="nameShort" header="Наименование (сокращенное)"/>
            <Column field="nameFull" header="Наименование (полное)"/>
            <Column body={ actionBodyTemplate }/>
        </DataTable>
    )
}

export default connect(null, { show, selectCompanyType })(CompanyTypesTable)