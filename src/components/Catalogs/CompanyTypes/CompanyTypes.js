import React, { Component } from 'react'
import MainLayout from "../../MainLayout/MainLayout";
import { DataTable } from "primereact/datatable";
import { getAllCompanyTypes } from "../../../services/companyTypes";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import classNames from 'classnames'
import { Toast } from "primereact/toast";

class CompanyTypes extends Component {
    state = {
        title: "Справочник правовых форм",
        companyTypes: [],
        type: this.emptyType,
        typeDialog: false,
        submitted: false,
        deleteTypeDialog: false
    }

    emptyType = {
        id: null,
        nameShort: "",
        nameFull: ""
    };

    componentDidMount() {
        document.title = this.state.title
        getAllCompanyTypes()
            .then(res => this.setState({ companyTypes: res }))
    }

    openNew = () => {
        this.setState({
            type: this.emptyType,
            submitted: false,
            typeDialog: true
        });
    }

    hideDialog = () => {
        this.setState({
            submitted: false,
            typeDialog: false
        });
    }

    leftToolbarTemplate = () => {
        return (
            <Button label="Добавить" icon="pi pi-plus" className="p-button-success p-button-sm p-mr-2"
                    onClick={ this.openNew }/>
        )
    }

    onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let type = { ...this.state.type };
        type[`${ name }`] = val;

        this.setState({ type });
    }

    findIndexById(id) {
        let index = -1;
        for (let i = 0; i < this.state.companyTypes.length; i++) {
            if (this.state.companyTypes[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId() {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }

    saveType = () => {
        let state = { submitted: true };

        if (this.state.type.nameShort.trim()) {
            let companyTypes = [...this.state.companyTypes];
            let type = { ...this.state.type };
            if (this.state.type.id) {
                const index = this.findIndexById(this.state.type.id);

                companyTypes[index] = type;
                this.toast.show({ severity: 'success', summary: 'Успешно', detail: 'Правовая форма успешно обновлена', life: 3000 });
            } else {
                type.id = this.createId();
                companyTypes.push(type);
                this.toast.show({ severity: 'success', summary: 'Успешно', detail: 'Правовая форма успешно добавлена', life: 3000 });
            }

            state = {
                ...state,
                companyTypes,
                typeDialog: false,
                type: this.emptyType
            };
        }

        this.setState(state);
    }

    editProduct = (type) => {
        this.setState({
            type: { ...type },
            typeDialog: true
        });
    }

    confirmDeleteType = (type) => {
        this.setState({
            type,
            deleteTypeDialog: true
        });
    }

    actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-sm p-button-success p-mr-2"
                        onClick={ () => this.editProduct(rowData) }/>
                <Button icon="pi pi-trash" className="p-button-sm p-button-warning"
                        onClick={ () => this.confirmDeleteType(rowData) }/>
            </React.Fragment>
        );
    }

    hideDeleteTypeDialog = () => {
        this.setState({ deleteTypeDialog: false });
    }

    deleteType = () => {
        let companyTypes = this.state.companyTypes.filter(val => val.id !== this.state.type.id);
        this.setState({
            companyTypes,
            deleteTypeDialog: false,
            type: this.emptyType
        });
        this.toast.show({ severity: 'success', summary: 'Успешно', detail: 'Правовая форма успешно удалена', life: 3000 });
    }

    render() {
        const typeDialogFooter = (
            <>
                <Button label="Сохранить" icon="pi pi-check" className="p-button-text p-button-sm p-button-success" onClick={ this.saveType }/>
                <Button label="Отмена" icon="pi pi-times" className="p-button-text p-button-sm" onClick={ this.hideDialog }/>
            </>
        );

        const deleteTypeDialogFooter = (
            <>
                <Button label="Да" icon="pi pi-check" className="p-button-text p-button-sm p-button-danger" onClick={ this.deleteType }/>
                <Button label="Нет" icon="pi pi-times" className="p-button-text p-button-sm"
                        onClick={ this.hideDeleteTypeDialog }/>
            </>
        );

        return (
            <MainLayout title={ this.state.title }>
                <Toast ref={(el) => this.toast = el} />

                <div className="card">
                    <Toolbar className="p-p-1" left={ this.leftToolbarTemplate }/>

                    <DataTable value={ this.state.companyTypes }
                               removableSort
                               sortField="nameFull"
                               sortOrder={1}
                               className="p-datatable-sm p-datatable-striped">
                        <Column field="nameShort" header="Наименование (сокращенное)" sortable></Column>
                        <Column field="nameFull" header="Наименование (полное)" sortable></Column>
                        <Column body={ this.actionBodyTemplate }></Column>
                    </DataTable>
                </div>

                <Dialog visible={ this.state.typeDialog } style={ { minWidth: "700px" } } header="Type Details" modal
                        className="p-fluid" footer={ typeDialogFooter } onHide={ this.hideDialog }>
                    <div className="p-field">
                        <label htmlFor="nameShort">Наименование (сокращенное)</label>
                        <InputText id="nameShort"
                                   value={ this.state.type && this.state.type.nameShort }
                                   onChange={ (e) => this.onInputChange(e, 'nameShort') }
                                   autoFocus
                                   className={ classNames({ 'p-invalid': this.state.submitted && !this.state.type.nameShort }) }/>
                        { this.state.submitted && !this.state.type.nameShort &&
                        <small className="p-invalid">Обязательное поле</small> }
                    </div>
                    <div className="p-field">
                        <label htmlFor="nameFull">Наименование (полное)</label>
                        <InputText id="nameFull"
                                   value={ this.state.type && this.state.type.nameFull }
                                   onChange={ (e) => this.onInputChange(e, 'nameFull') }
                                   autoFocus
                                   className={ classNames({ 'p-invalid': this.state.submitted && !this.state.type.nameFull }) }/>
                        { this.state.submitted && !this.state.type.nameFull &&
                        <small className="p-invalid">Обязательное поле</small> }
                    </div>
                </Dialog>

                <Dialog visible={ this.state.deleteTypeDialog } style={ { width: '450px' } } header="Удалить?" modal
                        footer={ deleteTypeDialogFooter } onHide={ this.hideDeleteTypeDialog }>
                    <div className="confirmation-content">
                        <i className="pi pi-exclamation-triangle p-mr-3" style={ { fontSize: '2rem' } }/>
                        { this.state.type &&
                        <span>Вы действительно хотите удалить <b>{ this.state.type.nameFull } ({ this.state.type.nameShort })</b>?</span> }
                    </div>
                </Dialog>
            </MainLayout>
        );
    }
}

export default CompanyTypes