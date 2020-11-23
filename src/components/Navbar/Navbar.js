import './Navbar.css'
import { Menu } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <Menu mode="horizontal">
                    <Menu.Item key="requests"><Link to="/requests/">Заявки</Link></Menu.Item>
                    <Menu.Item key="contractors"><Link to="/contractors/">Контрагенты</Link></Menu.Item>
                    <SubMenu key="catalogs" title="Справочники">
                        <Menu.Item key="companyTypes"><Link to="/catalogs/company-types/">Правовые
                            формы</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </nav>
        </>
    )
}

export default Navbar