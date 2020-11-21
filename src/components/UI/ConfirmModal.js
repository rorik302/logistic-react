import { Button, Modal } from "antd";
import { connect } from "react-redux";
import { closeDeleteConfirmModal } from "../../redux/actions/modalsActions";

const ConfirmModal = (props) => {
    const { children, visible, title, onSubmit, onClose } = props

    const handleClose = () => {
        console.log('asdasdasd')
        onClose()
    }

    return (
        <Modal
            visible={ visible }
            centered
            title={ title }
            closable={ false }
            footer={ [
                <Button key="submit" type="primary" onClick={ () => onSubmit() }>
                    Сохранить
                </Button>,
                <Button key="cancel" onClick={ () => handleClose() }>
                    Отмена
                </Button>
            ] }>
            { children }
        </Modal>
    )
}

export default connect(null, { closeDeleteConfirmModal })(ConfirmModal)