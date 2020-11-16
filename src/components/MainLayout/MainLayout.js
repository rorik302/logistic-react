import "./MainLayout.css"
import Navbar from "../Navbar/Navbar";
import { Card } from "primereact/card";

const MainLayout = () => {
    return (
        <>
            <Navbar/>
            <main>
                <Card/>
            </main>
        </>
    )
}

export default MainLayout