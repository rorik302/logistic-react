import axios from "axios"
import { useEffect } from "react"
import AuthLayout from "../AuthLayout/AuthLayout";
import { Button, Col, Form, Input, Row } from "antd";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom"

const Login = props => {
    const title = "Авторизация"
    const [form] = Form.useForm()

    const history = useHistory()

    useEffect(() => {
        document.title = title
    }, [])

    const handleSubmit = values => {
        axios.post("http://localhost:8000/api/token/", values)
            .then(res => {
                localStorage.setItem("access", res.data.access)
                localStorage.setItem("refresh", res.data.refresh)
                history.push("/requests/")
            })
    }

    return (
        <AuthLayout title={ title }>
            <Form layout="vertical" form={ form } preserve={ false } onFinish={ handleSubmit }>
                <Row>
                    <Col span={ 24 }>
                        <Form.Item label="Логин" name="username">
                            <Input/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={ 24 }>
                        <Form.Item label="Пароль" name="password">
                            <Input.Password/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={ 24 } style={ { textAlign: "right" } }>
                        <Form.Item>
                            <Button key="submit" type="primary" htmlType="submit">
                                Войти
                            </Button>,
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </AuthLayout>
    )
}

export default connect(null, {  })(Login)