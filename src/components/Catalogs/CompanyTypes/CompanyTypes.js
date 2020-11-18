import React, { Component } from 'react'
import MainLayout from "../../MainLayout/MainLayout";
import CompanyTypesToolbar from "./Toolbar";
import CompanyTypesTable from "./Table";
import { connect } from "react-redux";
import { getAllCompanyTypes } from "../../../redux/actions/companyTypesActions";
import CompanyTypeForm from "./Form";

class CompanyTypes extends Component {
    state = {
        title: "Справочник правовых форм"
    }

    componentDidMount() {
        document.title = this.state.title
        this.props.getAllCompanyTypes()
    }

    render() {
        return (
            <MainLayout title={ this.state.title }>
                <CompanyTypesToolbar/>
                <CompanyTypesTable data={ this.props.companyTypesList }/>
                { this.props.formModal && <CompanyTypeForm/> }
            </MainLayout>
        );
    }
}

const mapStateToProps = (state) => ({
    companyTypesList: state.companyTypes.companyTypesList,
    formModal: state.modal.CompanyTypeFormDialog
})

export default connect(mapStateToProps, { getAllCompanyTypes })(CompanyTypes)