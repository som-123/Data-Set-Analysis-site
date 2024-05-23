import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import MainTable from './components/MainTable';
import LineGraph from './components/LineGraph';
import JobDetailsTable from './components/JobDetailsTable';
import { parseCSV } from './utils/parseCSV';
import { aggregateData } from './utils/aggregateData';

const { Header, Content } = Layout;

const App = () => {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const rawData = await parseCSV('/salaries.csv'); 
      const aggregatedData = aggregateData(rawData);
      setData(aggregatedData);
    };

    fetchData();
  }, []);

  const handleRowClick = (year) => {
    setSelectedYear(year);
  };

  const jobDetails = selectedYear
    ? data.find((item) => item.year === selectedYear)?.jobDetails
    : [];

  return (
    <Layout>
      <Header>
        <h1 style={{ color: 'white' }}>ML Engineer Salaries</h1>
      </Header>
      <Content style={{ padding: '20px' }}>
        <MainTable data={data} onRowClick={handleRowClick} />
        <LineGraph data={data} />
        {selectedYear && jobDetails && (
          <JobDetailsTable year={selectedYear} jobDetails={jobDetails} />
        )}
      </Content>
    </Layout>
  );
};

export default App;
