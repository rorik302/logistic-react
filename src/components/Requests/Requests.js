import { useEffect, useState } from "react"
import { Button, Space, Table, Modal, Form, Input, DatePicker, Row, Col, Select } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import MainLayout from "../MainLayout/MainLayout";

const { Column } = Table
const { Option } = Select

const Requests = () => {
    const [title] = useState("Журнал заявок")
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [modalFormVisible, setModalFormVisible] = useState(false)
    const [modelConfirmVisible, setModalConfirmVisible] = useState(false)

    useEffect(() => {
        document.title = title
    }, [title])
    useEffect(() => {
        setLoading(true)
        fetch("http://localhost:8000/api/requests/")
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
    }, [])

    return (
        <MainLayout title={ title }>
            <Button style={ { marginBottom: "0.5rem", backgroundColor: "lime" } }
                    onClick={ () => setModalFormVisible(true) }>Добавить</Button>
            <Table bordered dataSource={ data.map(item => ({ ...item, key: item.id })) } loading={ loading }
                   size="small">
                <Column title="№" dataIndex="number" key="number"/>
                <Column title="Дата загрузки" dataIndex="loading_date" key="loading_date"/>
                <Column title="Адрес загрузки" dataIndex="loading_address" key="loading_address"/>
                <Column title="Дата выгрузки" dataIndex="unloading_date" key="unloading_date"/>
                <Column title="Адрес выгрузки" dataIndex="unloading_address" key="unloading_address"/>
                <Column title="Заказчик" dataIndex="customer" key="customer" render={ record => (
                    <span>{ record.name }</span>
                ) }/>
                <Column title="Перевозчик" dataIndex="transporter" key="transporter" render={ record => (
                    <span>{ record.name }</span>
                ) }/>
                <Column title="Ставка (зак.)" dataIndex="customer_rate" key="customer_rate"/>
                <Column title="Ставка (пер.)" dataIndex="transporter_rate" key="transporter_rate"/>
                <Column key="actions" render={ (text, record) => (
                    <Space size="large">
                        <Button type="text" icon={ <EditOutlined/> }
                                style={ { backgroundColor: "gold", color: "black" } }
                                onClick={ () => setModalFormVisible(true) }
                        />
                        <Button type="text" icon={ <DeleteOutlined/> }
                                style={ { backgroundColor: "red", color: "black" } }
                                onClick={ () => setModalConfirmVisible(true) }
                        />
                    </Space>) }/>
            </Table>

            <Modal
                centered
                visible={ modalFormVisible }
                title="Форма"
                onCancel={ () => setModalFormVisible(false) }
                footer={ [
                    <Button key="submit" type="primary">
                        Сохранить
                    </Button>,
                    <Button key="cancel" onClick={ () => setModalFormVisible(false) }>
                        Отмена
                    </Button>
                ] }>
                <Form layout="vertical">
                    <Row>
                        <Col span={ 6 }>
                            <Form.Item label="№">
                                <Input/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={ 16 }>
                        <Col span={ 12 }>
                            <Form.Item label="Заказчик">
                                <Select style={ { width: "100%" } }>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>
                                        Disabled
                                    </Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={ 12 }>
                            <Form.Item label="Перевозчик">
                                <Select style={ { width: "100%" } }>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="disabled" disabled>
                                        Disabled
                                    </Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={ 16 }>
                        <Col span={ 12 }>
                            <Form.Item label="Дата загрузки">
                                <DatePicker style={ { width: "100%" } }/>
                            </Form.Item>
                        </Col>
                        <Col span={ 12 }>
                            <Form.Item label="Дата выгрузки">
                                <DatePicker style={ { width: "100%" } }/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item label="Адрес загрузки">
                        <Input/>
                    </Form.Item>
                    <Form.Item label="Адрес выгрузки">
                        <Input/>
                    </Form.Item>
                    <Row gutter={ 16 }>
                        <Col span={ 12 }>
                            <Form.Item label="Ставка (зак.)">
                                <Input/>
                            </Form.Item>
                        </Col>
                        <Col span={ 12 }>
                            <Form.Item label="Ставка (пер.)">
                                <Input/>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>

            <Modal
                visible={ modelConfirmVisible }
                centered
                title="Удаление заявки"
                onCancel={ () => setModalConfirmVisible(false) }
                footer={ [
                    <Button key="submit" type="primary" onClick={() => console.log()}>
                        Сохранить
                    </Button>,
                    <Button key="cancel" onClick={ () => setModalConfirmVisible(false) }>
                        Отмена
                    </Button>
                ] }>
                <p>Вы действительно хотите удалить заявку?</p>
            </Modal>
        </MainLayout>
    )
}

export default Requests