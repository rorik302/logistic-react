import React, { Component } from 'react'
import MainLayout from "../../MainLayout/MainLayout";

class CompanyTypes extends Component {
    state = {
        title: "Справочник правовых форм"
    }

    componentDidMount() {
        document.title = this.state.title
    }

    render() {
        return (
            <MainLayout title={ this.state.title }></MainLayout>
        );
    }
}

export default CompanyTypes