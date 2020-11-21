import { Menu } from "antd";

const { SubMenu, ItemGroup } = Menu

const LeftMenu = () => {
    return (
        <Menu mode="horizontal">
            <Menu.Item>
                <a href="">Заявки</a>
            </Menu.Item>
            <Menu.Item>
                <a href="">Контрагенты</a>
            </Menu.Item>
            <SubMenu key="sub1" title={ <span>Справочники</span> }>
                <Menu.Item key="setting:1">Организационно-правовые формы</Menu.Item>
                <Menu.Item key="setting:2">Сроки оплат</Menu.Item>
            </SubMenu>
        </Menu>
    )
}

export default LeftMenu