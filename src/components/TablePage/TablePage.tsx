import React from 'react';
import { Table, Row, Col, Layout } from 'antd';
import { useEffect, useState } from 'react';

import s from '../TablePage/TablePage.module.css';

import { ModalWithForm } from '../ModalWithForm';

import fetchUsers from '../../services/users-api';

type TablePageProps = {
  users: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    ip_address: number;
  };
  fetchUsers: () => void;
};

export const TablePage: React.FC<TablePageProps> = () => {
  const [users, setUsers] = useState(null);

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'first_name',
      dataIndex: 'first_name',
      key: 'first_name'
    },
    {
      title: 'last_name',
      dataIndex: 'last_name',
      key: 'last_name'
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'gender',
      dataIndex: 'gender',
      key: 'gender'
    },
    {
      title: 'ip_address',
      dataIndex: 'ip_address',
      key: 'ip_address'
    }
  ];

  useEffect(() => {
    fetchUsers().then((data) => localStorage.setItem('users', JSON.stringify(data)));
  }, []);

  useEffect(() => {
    fetchUsers().then((data) =>
      setUsers(
        data.map(
          (
            Row: {
              id: number;
              first_name: string;
              last_name: string;
              email: string;
              gender: string;
              ip_address: number;
            },
            index: number
          ) => ({
            key: index,
            id: Row.id,
            first_name: Row.first_name,
            last_name: Row.last_name,
            email: Row.email,
            gender: Row.gender,
            ip_address: Row.ip_address
          })
        )
      )
    );
  }, []);

  return (
    <Layout>
      <Layout.Header
        style={{
          backgroundColor: '#19202B'
        }}
      >
        Users Table
      </Layout.Header>
      <ModalWithForm />
      <div className={s.table}>
        <Row>
          <Col>
            <Table dataSource={users} columns={columns} />
          </Col>
        </Row>
      </div>
      <Layout.Footer
        style={{
          backgroundColor: '#19202B'
        }}
      >
        Footer
      </Layout.Footer>
    </Layout>
  );
};
