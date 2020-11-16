import { withRouter } from "react-router-dom"
import { Menubar } from "primereact/menubar";

const Navbar = (props) => {
    const items = [
        { label: "Контрагенты", icon: "pi pi-fw pi-users", command: () => { props.history.push("/contractors/") } },
        {
            label: "Справочники", icon: "pi pi-fw pi-briefcase", items: [
                { label: "Правовые формы", command: () => { props.history.push("/catalogs/company-types/") } },
                { label: "Сроки оплат", command: () => { props.history.push("/catalogs/payment-terms/") } }
            ]
        }
    ]
    return (
        <Menubar model={ items }/>
    )
}

export default withRouter(Navbar)