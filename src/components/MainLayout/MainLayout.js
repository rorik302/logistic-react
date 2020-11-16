import "./MainLayout.css"
import Navbar from "../Navbar/Navbar";
import { Card } from "primereact/card";

const MainLayout = ({ children, title }) => {
    return (
        <>
            <Navbar/>
            <main>
                <Card title={ title }>
                    { children }
                </Card>
            </main>
        </>
    )
}

export default MainLayout