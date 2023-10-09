
export function shortId() {
  return '_' + Math.random().toString(36)?.substr(2, 9);
}

export function randomColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 95%, 90%)`;
}

export function makeData() {
  let data = [];
  // for (let i = 0; i < count; i++) {
  //   let row = {
  //     ID: faker.mersenne.rand(),
  //     address: faker.name.firstName(),
  //     propertyType: faker.name.lastName(),
  //     email: faker.internet.email(),
  //     age: Math.floor(20 + Math.random() * 20),
  //     music: faker.music.genre(),
  //   };
  //   options.push({ label: row.music, backgroundColor: randomColor() });
  //
  //   data.push(row);
  // }

  let columns = [
    {
      id: 'address',
      label: 'Full Address',
      accessor: 'address',
      minWidth: 300,
      dataType: DataTypes.TEXT,
      options: [],
    },
    {
      id: 'latitude',
      label: 'Latitude',
      accessor: 'latitude',
      minWidth: 100,
      dataType: DataTypes.NUMBER,
      options: [],
    },
    {
      id: 'longitude',
      label: 'Longitude',
      accessor: 'longitude',
      minWidth: 100,
      dataType: DataTypes.NUMBER,
      options: [],
    },
    {
      id: 'property_type',
      label: 'Property Type',
      accessor: 'property_type',
      minWidth: 300,
      dataType: DataTypes.TEXT,
      options: [],
    },
    {
      id: 'bedrooms',
      label: 'Bedrooms',
      accessor: 'bedrooms',
      minWidth: 100,
      dataType: DataTypes.NUMBER,
      options: [],
    },
    {
      id: 'bathrooms',
      label: 'Bathrooms',
      accessor: 'bathrooms',
      minWidth: 100,
      dataType: DataTypes.NUMBER,
      options: [],
    },
    {
      id: Constants.ADD_COLUMN_ID,
      width: 20,
      label: '+',
      disableResizing: true,
      dataType: 'null',
    },
  ];
  return { columns: columns, data: data, skipReset: false };
}

export const ActionTypes = Object.freeze({
  ADD_OPTION_TO_COLUMN: 'add_option_to_column',
  ADD_ROW: 'add_row',
  UPDATE_COLUMN_TYPE: 'update_column_type',
  UPDATE_COLUMN_HEADER: 'update_column_header',
  UPDATE_CELL: 'update_cell',
  ADD_COLUMN_TO_LEFT: 'add_column_to_left',
  ADD_COLUMN_TO_RIGHT: 'add_column_to_right',
  DELETE_COLUMN: 'delete_column',
  ENABLE_RESET: 'enable_reset',
  RESET_TABLE: 'reset_table'
});

export const DataTypes = Object.freeze({
  NUMBER: 'number',
  TEXT: 'text',
  SELECT: 'select',
});

export const Constants = Object.freeze({
  ADD_COLUMN_ID: 999999,
});
