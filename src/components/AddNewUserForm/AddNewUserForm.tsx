import React from 'react';
import { Button, Form, Input, Select } from 'antd';
import { useState } from 'react';

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!'
  }
};

type AddNewUserFormProps = {
  onClick: () => void;
  onFinish: () => void;
};

export const AddNewUserForm: React.FC<AddNewUserFormProps> = ({ onClick }) => {
  const [users, setUsers] = useState(() => {
    localStorage.getItem('users');
  });
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
    setUsers(values);
  };
  return (
    <Form {...layout} name="Add new user" form={form} onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['user', 'first_name']}
        label="First Name"
        rules={[
          {
            required: true
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'last_name']}
        label="Last Name"
        rules={[
          {
            required: true
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
            required: true
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'ip_adress']}
        label="ip_adress"
        rules={[
          {
            whitespace: false,
            min: 0,
            max: 20,
            required: true
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true
          }
        ]}
      >
        <Select placeholder="Select a option and change input text above" allowClear>
          <Select.Option value="male">male</Select.Option>
          <Select.Option value="female">female</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8
        }}
      >
        <Form.Item shouldUpdate className="submit">
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              onClick={onClick}
              disabled={
                !form.isFieldsTouched(true) ||
                form.getFieldsError().filter(({ errors }) => errors.length).length > 0
              }
            >
              Add
            </Button>
          )}
        </Form.Item>
      </Form.Item>
    </Form>
  );
};
