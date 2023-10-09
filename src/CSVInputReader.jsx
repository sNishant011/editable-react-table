import React from "react";
import CSVReader from "react-csv-reader";


const papaparseOptions = {
  header: true,
  dynamicTyping: true,
  skipEmptyLines: true,
  transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
};

const CSVInputReader = ({setData}) => {
  const handleForce = (data) => setData(data);
  return (
    <CSVReader
        cssClass="csvInput"
        label="Upload CSV"
        onFileLoaded={handleForce}
        parserOptions={papaparseOptions}
      />
  )
}

export default CSVInputReader
