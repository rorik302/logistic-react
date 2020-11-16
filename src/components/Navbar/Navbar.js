import { Menubar } from "primereact/menubar";

const Navbar = () => {
    const items = [
        { label: "Контрагенты", icon: "pi pi-fw pi-users" },
        {
            label: "Справочники", icon: "pi pi-fw pi-briefcase", items: [
                { label: "Правовые формы" },
                { label: "Сроки оплат" }
            ]
        }
    ]
    return (
        <Menubar model={ items }/>
    )
}

export default Navbar