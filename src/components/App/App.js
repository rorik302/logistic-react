import './App.css'
import 'antd/dist/antd.min.css'
import locale from 'antd/lib/locale/ru_RU';
import { ConfigProvider } from 'antd';
import { Switch, Route } from "react-router-dom"
import MainLayout from "../MainLayout/MainLayout";
import Requests from "../Requests/Requests";
import Contractors from "../Contractors/Contractors";

function App() {
    return (
        <ConfigProvider locale={ locale }>
            <Switch>
                <Route path="/requests/" component={ Requests }/>
                <Route path="/contractors/" component={ Contractors }/>
                <Route path="/" component={ MainLayout }/>
            </Switch>
        </ConfigProvider>
    );
}

export default App;
