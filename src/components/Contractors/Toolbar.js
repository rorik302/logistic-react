import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";

const ContractorsToolbar = () => {
    const onAdd = () => {

    }

    const left = (
        <Button icon="pi pi-plus" label="Добавить" className="p-button-success p-button-sm" onClick={ () => onAdd() }/>
    )

    return (
        <Toolbar left={ left } className="p-p-1 p-mb-1"/>
    )
}

export default ContractorsToolbar