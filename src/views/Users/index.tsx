import { Button, Table } from 'antd'
import type { TableProps } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'

import { UsersResponse } from './user.type'
import { useData } from '../../hooks/useData'
import { useAuthStore } from '../../store/user.store'

import './users.css'

const Users = () => {
  const { data, isLoading, refetch } = useData<UsersResponse>()
  const { logout, username } = useAuthStore(state => state)

  const handleClick = () => refetch()
  const handleLogout = () => logout()

  const columns: TableProps<Users>['columns'] = [
    { title: 'Id', dataIndex: 'id', key: 'id' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'First Name', dataIndex: 'first_name', key: 'first_name' },
    { title: 'Last Name', dataIndex: 'last_name', key: 'last_name' },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (value: string) => <img src={value} className="avatar" />,
    },
  ]

  return !isLoading ? (
    <>
      <h1>Username : {username}</h1>
      <Button onClick={handleClick}>Refetch</Button>
      <Button icon={<LogoutOutlined />} onClick={handleLogout}>
        Logout
      </Button>
      <Table dataSource={data.data} columns={columns} rowKey={row => row.id} />
    </>
  ) : (
    <p>cargando</p>
  )
}

export default Users
