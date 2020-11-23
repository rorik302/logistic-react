import "./AuthLayout.css"
import { Card, PageHeader } from "antd";

const AuthLayout = props => {
    const { children, title } = props

    return (
        <div className="auth-layout">
            <Card style={ { margin: "auto", minWidth: "500px" } }>
                <PageHeader title={ title }/>
                { children }
            </Card>
        </div>
    )
}

export default AuthLayout