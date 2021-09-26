import React from "react";
import { Table as RTable } from "react-bootstrap";

function defaultTableRenderer(row, index, col) {
  if (Array.isArray(row)) {
    return row[index];
  } else if (typeof row === "object" && col in row) {
    return row[col];
  }
  return JSON.stringify(row);
}

function defaultRowKey(row) {
  return row["id"];
}

export const Table = ({
  tableModel,
  tableRenderer = defaultTableRenderer,
  rowKey = defaultRowKey
}) => {
  return (
    <RTable striped bordered hover size="sm">
      <thead>
        <tr>
          {tableModel?.columns.map((col) => (
            <th key={col}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableModel?.rows.map((row) => {
          const key = rowKey(row);
          return (
            <tr key={key}>
              {tableModel.columns.map((col, index) => {
                const colKey = `${key}-${index}`;
                const rowValue = tableRenderer(row, index, col);
                return <td key={colKey}>{rowValue}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </RTable>
  );
};
