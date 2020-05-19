import React, { useMemo, useState, useEffect }  from 'react'
import './AvailableImages.css'
import Table from '../Table'
import '../Table/Table.css';
import CodeBox from '../CodeBox';
import RadioButtons from '../RadioButtons';

const ThirdPage = ({table, show}) => {

    const badge_colours = {
      "done": "#9ae6b4",
      "building": "#9abbe6",
      "pending": "#f1afe1"
    }

    const columns = useMemo(
        () => [
          {
            Header: "CMSSW",
            accessor: "cmssw"
          },
          {
            Header: "SCRAM ARCH",
            accessor: "scram_arch"
          },
         {
            Header: "Docker Pull",
            accessor: "url",
            Cell: ({ cell: { value } }) => value === "" ? <CodeBox text={["-.-.-.-.-.-.-.-.-.-.-.-.-.-.- ", "not yet available", " -.-.-.-.-.-.-.-.-.-.-.-.-.-.-"]}/> : <CodeBox text={["docker pull ", value]}/>
          },
          {
            Header: "Status",
            accessor: "status",
            Cell: ({ cell: { value } }) => <span className="badge" style = {{ backgroundColor: badge_colours[value] }}>{value}</span>
          },
          {
            Header: "Created At",
            accessor: "createdAt"
          }
        ],
      );

    const data = show.show;

    return (
        <div className="Home">
            <div className="Background"></div>
            <div className="Home-text">
            <div className="Radio"><RadioButtons/></div>
            <Table columns={columns} data={data}/>
            </div>
        </div>
    )
}

export default ThirdPage