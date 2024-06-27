import type { FormProps } from 'antd'

export type LoginFormProps = {
  onFinish: FormProps<UserLogin>['onFinish']
  onFinishFailed: FormProps<UserLogin>['onFinishFailed']
}
