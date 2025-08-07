import React from 'react';
import { Select, Space } from 'antd';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const SelectYear: React.FC = () => (
  <Space wrap>
    <Select
      defaultValue="2568"
      style={{ width: 100 }}
      onChange={handleChange}
      options={[
        { value: '2567', label: '2567' },
        { value: '2568', label: '2568' },
        { value: '2569', label: '2569' },
        { value: '2570', label: '2570' },
      ]}
    />
    {/* <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      disabled
      options={[{ value: 'lucy', label: 'Lucy' }]}
    /> */}
    {/* <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      loading
      options={[{ value: 'lucy', label: 'Lucy' }]}
    />
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      allowClear
      options={[{ value: 'lucy', label: 'Lucy' }]}
      placeholder="select it"
    /> */}
  </Space>
);

export default SelectYear;