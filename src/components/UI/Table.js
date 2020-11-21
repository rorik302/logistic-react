import { Table as AntTable } from "antd";

export const Table = (props) => {
    const { children, data, loading } = props

    return (
        <AntTable bordered dataSource={ data && data.map(item => ({ ...item, key: item.id })) } loading={ loading }
               size="small">
            { children }
        </AntTable>
    )
}