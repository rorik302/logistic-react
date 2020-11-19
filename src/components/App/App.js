import './App.css'
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Switch, Route } from "react-router-dom"
import CompanyTypes from "../Catalogs/CompanyTypes/CompanyTypes";
import MainLayout from "../MainLayout/MainLayout";
import PaymentTerms from "../Catalogs/PaymentTerms/PaymentTerms";
import Contractors from "../Contractors/Contractors";

function App() {
    return (
        <Switch>
            <Route path="/catalogs/company-types/" component={ CompanyTypes }/>
            <Route path="/catalogs/payment-terms/" component={ PaymentTerms }/>
            <Route path="/contractors/" component={ Contractors }/>
            <Route path="/" component={ MainLayout }/>
        </Switch>
    );
}

export default App;
