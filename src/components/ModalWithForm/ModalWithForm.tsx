import React from 'react';
import { useState } from 'react';

import { AddNewUserForm } from '../AddNewUserForm';

import s from '../ModalWithForm/ModalWithForm.module.css';

import { Modal, Button } from 'antd';

type ModalWithFormProps = {
  showModal: () => void;
  onClick: () => void;
  handleCancel: () => void;
};

export const ModalWithForm: React.FC<ModalWithFormProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const onClick = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className={s.btn_wrapper}>
        <Button type="primary" onClick={showModal} className={s.btn}>
          Add new User
        </Button>
      </div>
      <Modal
        title="Add a new user to the form"
        open={isModalOpen}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <AddNewUserForm onClick={onClick} />
      </Modal>
    </>
  );
};
