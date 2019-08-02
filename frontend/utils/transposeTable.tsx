const transpose = (table: string[][]) =>
  Object.keys(table[0]).map((column: any) => table.map(row => row[column]));

export default transpose;
