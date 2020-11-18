import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { connect } from "react-redux";
import { show } from "redux-modal";

const CompanyTypesToolbar = (props) => {
    const { show } = props

    const onAdd = () => {
        show("CompanyTypeFormDialog")
    }

    const left = (
        <Button icon="pi pi-plus" label="Добавить" className="p-button-success p-button-sm" onClick={ () => onAdd() }/>
    )

    return (
        <Toolbar left={ left } className="p-p-1 p-mb-1"/>
    )
}

export default connect(null, { show })(CompanyTypesToolbar)