import './Navbar.css'
import { Menu } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Menu mode="horizontal">
                <Menu.Item key="requests"><Link to="/requests/">Заявки</Link></Menu.Item>
                <Menu.Item key="contractors"><Link to="/contractors/">Контрагенты</Link></Menu.Item>
                <Menu.Item key="catalogs">Справочники</Menu.Item>
            </Menu>
        </nav>
    )
}

export default Navbar