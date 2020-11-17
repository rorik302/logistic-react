import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";

const CompanyTypesToolbar = () => {
    const left = (
        <Button icon="pi pi-plus" label="Добавить" className="p-button-success p-button-sm"/>
    )

    return (
        <Toolbar left={ left } className="p-p-1 p-mb-1"/>
    )
}

export default CompanyTypesToolbar