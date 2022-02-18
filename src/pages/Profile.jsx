import React from "react";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { Skeleton } from "antd";
import { Button } from "antd";

export const Profile = () => {
  return (
    <>
      <Row justify="center">
        <h1>Имя Фамилия Отчество</h1>
      </Row>
      <Row justify="center">
        <h3>Статус</h3>
      </Row>
      <Row justify="center">
        <Col span={6}>
          <Avatar size={{ lg: 150 }} icon={<UserOutlined />} />
        </Col>
        <Col span={6}>
          <Skeleton />
        </Col>
      </Row>
      <Button href="https://google.com">Войти с гугл</Button>
    </>
  );
};
