
# Data Set Analysis Site

This project is a React application that displays a table of ML Engineer salaries from 2020 to 2024. It includes the following features:

-A sortable table showing the number of jobs and average salary for each year.

-A line graph showing the change in total jobs and average salary over the years.

-A detailed table showing job titles and their counts for a selected year.


## Installation

Step 1: Clone the Repository

```bash
  git clone https://github.com/som-123/Data-Set-Analysis-site.git
  cd Data-Set-Analysis-site
```

Step 2: Install Dependencies

```bash
  npm install
```

Step 3: Add/Replace CSV Data
Place your salaries.csv file in the public directory of the project.

Step 4: Start the React Application
```bash
  npm start
```

    
## Components

### MainTable

Displays the main table with the following columns:

-Year

-Number of total jobs for that year

-Average salary in USD

### LineGraph

Displays a line graph showing:

-Total jobs for each year from 2020 to 2024

-Average salary in USD for each year from 2020 to 2024

### JobDetailsTable
Displays a detailed table showing:

-Job titles for a selected year

-Number of jobs for each title in that year


## Utils

### parseCSV.js
Utility function to fetch and parse the CSV data.

### aggregateData.js
Utility function to aggregate data for the main table and line graph.
