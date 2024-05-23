import React from 'react';
import { Table } from 'antd';

const JobDetailsTable = ({ year, jobDetails }) => {
  const columns = [
    {
      title: 'Job Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Number of Jobs',
      dataIndex: 'count',
      key: 'count',
    },
  ];

  return (
    <div>
      <h3>Job Details for {year}</h3>
      <Table columns={columns} dataSource={jobDetails} rowKey="title" />
    </div>
  );
};

export default JobDetailsTable;
