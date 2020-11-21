import './App.css'
import 'antd/dist/antd.min.css'
import locale from 'antd/lib/locale/ru_RU';
import { ConfigProvider } from 'antd';
import { Switch, Route } from "react-router-dom"
import CompanyTypes from "../Catalogs/CompanyTypes/CompanyTypes";
import MainLayout from "../MainLayout/MainLayout";
import PaymentTerms from "../Catalogs/PaymentTerms/PaymentTerms";
import Contractors from "../Contractors/Contractors";
import Requests from "../Requests/Requests";

function App() {
    return (
        <ConfigProvider locale={ locale }>
            <Switch>
                <Route path="/catalogs/company-types/" component={ CompanyTypes }/>
                <Route path="/catalogs/payment-terms/" component={ PaymentTerms }/>
                <Route path="/contractors/" component={ Contractors }/>
                <Route path="/requests/" component={ Requests }/>
                <Route path="/" component={ MainLayout }/>
            </Switch>
        </ConfigProvider>
    );
}

export default App;
