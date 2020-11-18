import { Dialog } from "primereact/dialog";
import { connectModal } from "redux-modal";
import { Button } from "primereact/button";
import { connect } from "react-redux";
import { compose } from "redux";
import { clearPaymentTerm, removePaymentTerm } from "../../../redux/actions/paymentTermsActions";

const PaymentTermDeleteDialog = (props) => {
    const { item, clearPaymentTerm, handleHide, removePaymentTerm } = props
    const title = "Удаление"

    const onDelete = (item) => {
        removePaymentTerm(item)
        clearPaymentTerm()
        handleHide()
    }

    const onClose = () => {
        clearPaymentTerm()
        handleHide()
    }

    return (
        <Dialog visible={ props.show } header={ title } closable={ false } onHide={ onClose }>
            <p>Вы действительно хотите удалить срок
                оплаты <b>{ item.daysCount } { item.daysType.slice(0, -2) + 'ых' } дней { item.reason }</b>?</p>
            <div className="p-d-flex p-jc-end">
                <Button type="submit" label="Удалить" icon="pi pi-check" className="p-button-sm p-button-danger"
                        onClick={ () => { onDelete(item) } }/>
                <Button type="button" label="Отмена" icon="pi pi-ban"
                        className="p-button-sm p-button-text p-button-plain p-ml-2"
                        onClick={ onClose }/>
            </div>
        </Dialog>
    )
}

export default compose(
    connect(null, { clearPaymentTerm, removePaymentTerm }),
    connectModal({ name: "PaymentTermDeleteDialog" })
)(PaymentTermDeleteDialog)