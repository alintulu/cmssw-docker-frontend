import React, { useState } from "react";
import { useTable, useFilters, useSortBy } from "react-table";
import TableScrollbar from 'react-table-scrollbar';
import './Table.css';

export default function Table({ columns, data }) {
  const [filterInput, setFilterInput] = useState("");
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
    setAllFilters
  } = useTable(
    {
      columns,
      data
    },
    useFilters,
    useSortBy
  );

  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setFilter("cmssw", value);
    setFilterInput(value);
  };

  return (
    <>
      <p>

      <input className="search"
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"Search CMSSW release.."}
      /> 
      </p>
      <TableScrollbar height="550px">
      <table
        {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  console.log("Cell is", cell.column.Header)
                  return (
                    <td style={{ background: cell.column.Header === "Docker Pull" ? "#f5ecec" : null }} {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      </TableScrollbar>
    </>
  );
}
