import "./MainLayout.css"
import Navbar from "../Navbar/Navbar";
import { Content } from "antd/es/layout/layout";
import { Card } from "antd";
import { Redirect } from "react-router-dom";

const MainLayout = ({ children, title, onAddClick }) => {
    if (!localStorage.getItem("refresh") || localStorage.getItem("refresh") === undefined) {
        return <Redirect to="/login/"/>
    }

    return (
        <>
            <header>
                <Navbar/>
            </header>

            <Content>
                <Card title={ title }>
                    { children }
                </Card>
            </Content>
        </>
    )
}

export default MainLayout