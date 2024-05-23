export const aggregateData = (data) => {
    const yearData = {};
  
    data.forEach((row) => {
      const year = parseInt(row.work_year, 10);
      const salary = parseFloat(row.salary_in_usd);
  
      if (!yearData[year]) {
        yearData[year] = {
          year,
          totalJobs: 0,
          totalSalary: 0,
          jobDetails: {},
        };
      }
  
      yearData[year].totalJobs += 1;
      yearData[year].totalSalary += salary;
  
      if (!yearData[year].jobDetails[row.job_title]) {
        yearData[year].jobDetails[row.job_title] = 0;
      }
      yearData[year].jobDetails[row.job_title] += 1;
    });
  
    return Object.values(yearData).map((year) => ({
      ...year,
      averageSalary: year.totalSalary / year.totalJobs,
      jobDetails: Object.entries(year.jobDetails).map(([title, count]) => ({
        title,
        count,
      })),
    }));
  };
  