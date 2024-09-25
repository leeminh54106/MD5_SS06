import { DownOutlined, FileSearchOutlined } from '@ant-design/icons';
import { Button, Dropdown, notification, Space } from 'antd';
import React from 'react';

export default function AntdDemo() {
  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];

  const handleShowNotification = () => {
    notification.success({
      message: 'Thành công',
      description: 'Đăng nhập thành công',
      duration: 1,
    });
  };

  return (
    <div>
      <Button onClick={handleShowNotification} type="primary" danger>
        Show notification
      </Button>
      <FileSearchOutlined style={{ fontSize: 40 }} />
      <Dropdown
        menu={{
          items,
        }}
        trigger={['click']}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Click me
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
}
