import { FC } from 'react'

import { Button, Form, Input } from 'antd'
import { LoginFormProps } from './login.type'

const { Password } = Input
const { Item: ItemForm } = Form

const Item = ItemForm<UserLogin>

export const LoginForm: FC<LoginFormProps> = ({ onFinish, onFinishFailed }) => (
  <Form
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Item
      label="Email"
      name="email"
      rules={[{ required: true, type: 'email' }]}
    >
      <Input />
    </Item>

    <Item label="Password" name="password" rules={[{ required: true }]}>
      <Password />
    </Item>

    <Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Login
      </Button>
    </Item>
  </Form>
)
