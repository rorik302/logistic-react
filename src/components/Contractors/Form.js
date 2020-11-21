import { useState, useEffect } from "react"
import { Field, reduxForm } from "redux-form";
import { Dialog } from "primereact/dialog";
import { compose } from "redux";
import { connectModal } from "redux-modal";
import { Button } from "primereact/button";
import { connect } from "react-redux";
import { getAllCompanyTypes } from "../../redux/actions/companyTypesActions";
import { clear, save } from "../../redux/actions/contractorsActions";
import { Dropdown } from "primereact/dropdown";
import { Select } from "antd";
import { Option } from "antd/es/mentions";

const ContractorForm = (props) => {
    const [title, setTitle] = useState("Создание контрагента")
    const [companyTypes, setCompanyTypes] = useState([])
    const [form, setForm] = useState({})
    const { show, dialogType, handleSubmit, handleHide, getAllCompanyTypes, companyTypesList, clear, save } = props

    useEffect(() => {
        if (dialogType === "edit") {
            setTitle("Редатирование контрагента")
        }
        getAllCompanyTypes()
    }, [])

    useEffect(() => {
        setCompanyTypes(companyTypesList)
    }, [companyTypesList])

    const onSubmit = (values) => {
        save(values)
        clear()
        handleHide()
    }

    const onClose = () => {
        clear()
        handleHide()
    }

    return (
        <Dialog contentStyle={ { overflow: "initial" } } visible={ show } closable={ false } header={ title }
                style={ { minWidth: "700px" } }>
            <Form onSubmit={ handleSubmit((values) => onSubmit(values)) } handleHide={ onClose }
                  companyTypes={ companyTypes }/>
        </Dialog>
    )
}

const CompanyTypesDropdown = field => {
    const { input, options } = field
    return (
        <Dropdown
            { ...input }
            options={ options }
            optionLabel="nameShort"
            onChange={value => input.onChange(value)}
            onBlur={() => input.onBlur(input.value)}
        />
    )
}

const Form = (props) => {
    const { onSubmit, handleHide, companyTypes } = props

    return (
        <form onSubmit={ onSubmit }>
            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field">
                    <Field component="input" name="isCustomer" id="isCustomer" type="checkbox"/>
                    <label htmlFor="isCustomer">Заказчик</label>
                </div>
                <div className="p-field p-ml-5">
                    <Field component="input" type="checkbox" name="isTransporter" id="isTransporter"/>
                    <label htmlFor="isTransporter">Перевозчик</label>
                </div>
            </div>
            <div className="p-fluid p-formgrid p-grid">
                <Select>
                    { companyTypes && companyTypes.map(item => (
                        <Option value={ JSON.stringify(item) }>{ item.nameShort }</Option>
                    ))}
                </Select>
                <div className="p-field p-col-8 p-pr-0">
                    <label>Наименование</label>
                    <Field component="input" className="p-inputtext" name="name"/>
                </div>
            </div>
            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-px-0">
                    <label>ИНН</label>
                    <Field component="input" className="p-inputtext" name="inn"/>
                </div>
            </div>
            <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-px-0">
                    <label>Адрес</label>
                    <Field component="input" className="p-inputtext" name="address"/>
                </div>
            </div>
            <div className="p-d-flex p-jc-end">
                <Button type="submit" label="Сохранить" icon="pi pi-check" className="p-button-sm p-button-success"/>
                <Button type="button" label="Отмена" icon="pi pi-ban"
                        className="p-button-sm p-button-text p-button-plain p-ml-2"
                        onClick={ handleHide }/>
            </div>
        </form>
    )
}

const mapStateToProps = state => ({
    companyTypesList: state.companyTypes.companyTypesList,
    initialValues: state.contractors.selected
})

export default compose(
    connect(mapStateToProps, { getAllCompanyTypes, clear, save }),
    connectModal({ name: "ContractorFormDialog" }),
    reduxForm({ form: "ContractorForm" })
)(ContractorForm)