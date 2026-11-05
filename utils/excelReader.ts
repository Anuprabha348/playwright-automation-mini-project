import * as XLSX from 'xlsx';

// Reads 'loginTestData.xlsx' directly from the project root folder

export function getExcelData(sheetName: string) {
  
  const workbook = XLSX.readFile('playwright Test Data.xlsx');
  const worksheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(worksheet); // converting excel data into json Array.
  
  return jsonData;
}


// short 

// export function getExcelData1(sheetName: string) {
//   const workbook = XLSX.readFile('loginTestData.xlsx');
//   return XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]); // converting excel data into json Array.
// }
