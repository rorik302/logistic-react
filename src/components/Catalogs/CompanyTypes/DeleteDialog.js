import { Dialog } from "primereact/dialog";
import { connectModal } from "redux-modal";
import { Button } from "primereact/button";
import { connect } from "react-redux";
import { compose } from "redux";
import { clearCompanyType, removeCompanyType } from "../../../redux/actions/companyTypesActions";

const CompanyTypeDeleteDialog = (props) => {
    const { item } = props
    const title = "Удаление"

    const onDelete = (item) => {
        props.removeCompanyType(item)
        props.clearCompanyType()
        props.handleHide()
    }

    const onCancel = () => {
        props.clearCompanyType()
        props.handleHide()
    }

    return (
        <Dialog visible={ props.show } header={ title } closable={ false }>
            <p>Вы действительно хотите удалить правовую форму <b>{ item.nameShort } ({ item.nameFull })</b>?</p>
            <div className="p-d-flex p-jc-end">
                <Button type="submit" label="Удалить" icon="pi pi-check" className="p-button-sm p-button-danger"
                        onClick={ () => onDelete(item) }/>
                <Button type="button" label="Отмена" icon="pi pi-ban"
                        className="p-button-sm p-button-text p-button-plain p-ml-2"
                        onClick={ onCancel }/>
            </div>
        </Dialog>
    )
}

export default compose(
    connect(null, { clearCompanyType, removeCompanyType }),
    connectModal({ name: "CompanyTypeDeleteDialog" })
)(CompanyTypeDeleteDialog)