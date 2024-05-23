import Papa from 'papaparse';

export const parseCSV = async (filePath) => {
  const response = await fetch(filePath);
  const reader = response.body.getReader();
  const decoder = new TextDecoder('utf-8');
  const result = await reader.read();
  const csv = decoder.decode(result.value);
  const parsedData = Papa.parse(csv, { header: true, skipEmptyLines: false});
  return parsedData.data;
};
