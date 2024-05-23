import React from 'react';
import { Table } from 'antd';

const MainTable = ({ data, onRowClick }) => {
  const columns = [
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
      sorter: (a, b) => a.year - b.year,
    },
    {
      title: 'Total Jobs',
      dataIndex: 'totalJobs',
      key: 'totalJobs',
      sorter: (a, b) => a.totalJobs - b.totalJobs,
    },
    {
      title: 'Average Salary (USD)',
      dataIndex: 'averageSalary',
      key: 'averageSalary',
      sorter: (a, b) => a.averageSalary - b.averageSalary,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey="year"
      onRow={(record) => ({
        onClick: () => {
          onRowClick(record.year);
        },
      })}
    />
  );
};

export default MainTable;
