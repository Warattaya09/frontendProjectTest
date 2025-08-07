import React from 'react';
import { Select, Space } from 'antd';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const SelectTerm: React.FC = () => (
  <Space wrap>
    <Select
      defaultValue="1"
      style={{ width: 80 }}
      onChange={handleChange}
      options={[
        { value: '1', label: '1' },
        { value: '2', label: '2' ,disable: true},
        
      ]}
    />
    {/* <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      disabled
      options={[{ value: 'lucy', label: 'Lucy' }]}
    />
    <Select
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

export default SelectTerm;