import { Dialog } from "primereact/dialog";
import { connectModal } from "redux-modal";
import { Button } from "primereact/button";
import { clear, remove } from "../../redux/actions/contractorsActions";
import { compose } from "redux";
import { connect } from "react-redux";

const ContractorDeleteDialog = (props) => {
    const { show, item, clear, remove, handleHide } = props

    const title = "Удаление"

    const onDelete = (item) => {
        remove(item)
    }
    const onClose = () => {
        clear()
        handleHide()
    }

    return (
        <Dialog visible={ show } closable={ false } header={ title } onHide={ onClose }>
            <p>Вы действительно хотите удалить контрагента <b>{ item.name } (ИНН: { item.inn })</b>?</p>
            <div className="p-d-flex p-jc-end">
                <Button type="submit" label="Удалить" icon="pi pi-check" className="p-button-sm p-button-danger"
                        onClick={ () => {
                            onDelete(item)
                        } }/>
                <Button type="button" label="Отмена" icon="pi pi-ban"
                        className="p-button-sm p-button-text p-button-plain p-ml-2"
                        onClick={ onClose }/>
            </div>
        </Dialog>
    )
}

export default compose(
    connect(null, { clear, remove }),
    connectModal({ name: "ContractorDeleteDialog" }),
)(ContractorDeleteDialog)