import "./MainLayout.css"
import Navbar from "../Navbar/Navbar";
import { Content } from "antd/es/layout/layout";
import { Card } from "antd";

const MainLayout = ({ children, title, onAddClick }) => {
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