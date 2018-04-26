import React from "react";
import { render } from "react-dom";
//import { makeData } from "./Utils";
import matchSorter from 'match-sorter'
//import * as css from 'react-table/react-table.css';
// Import React Table
import ReactTable from "react-table";
//import { -striped, -highlight } from 'react-table/react-table.css';

const mydata = [{
  firstName: 'Tanner',
  lastName: "babies",
  age: 26
},
  {
    firstName: 'Suraj',
    lastName: "Behera",
    age: 36
  },{
    firstName: "judge",
    lastName: "babies",
    age: 16
  },
  {
    firstName: "quarter",
    lastName: "driving",
    age: 17
  },
  {
    firstName: "division",
    lastName: "society",
    age: 3
  },
  {
    firstName: "lamp",
    lastName: "point",
    age: 2
  },
  {
    firstName: "argument",
    lastName: "insurance",
    age: 13
  },
  {
    firstName: "pets",
    lastName: "fan",
    age: 27
  },
  {
    firstName: "learning",
    lastName: "board",
    age: 9
  },
  {
    firstName: "observation",
    lastName: "drink",
    age: 28
  },
  {
    firstName: "burst",
    lastName: "glove",
    age: 1
  },
  {
    firstName: "acoustics",
    lastName: "animal",
    age: 19
  },
  {
    firstName: "beetle",
    lastName: "branch",
    age: 25
  },
  {
    firstName: "invention",
    lastName: "servant",
    age: 14
  },
  {
    firstName: "letters",
    lastName: "driving",
    age: 12
  },
  {
    firstName: "chess",
    lastName: "bread",
    age: 21
  },
  {
    firstName: "ship",
    lastName: "muscle",
    age: 29
  },
  {
    firstName: "drug",
    lastName: "suit",
    age: 13
  },
  {
    firstName: "edge",
    lastName: "statement",
    age: 19
  },
  {
    firstName: "chickens",
    lastName: "start",
    age: 20
  },
  {
    firstName: "donkey",
    lastName: "laugh",
    age: 14
  },
  {
    firstName: "beetle",
    lastName: "branch",
    age: 25
  },
  {
    firstName: "invention",
    lastName: "servant",
    age: 14
  },
  {
    firstName: "letters",
    lastName: "driving",
    age: 12
  },
  {
    firstName: "chess",
    lastName: "bread",
    age: 21
  },
  {
    firstName: "ship",
    lastName: "muscle",
    age: 29
  }
];
export default class ReactTables extends React.Component {

  constructor() {
    super();
    this.state = {
      data: mydata
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName",
                  filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value) &&
                    row[filter.id].endsWith(filter.value)
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["lastName"] }),
                  filterAll: true
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age"
                },
                {
                  Header: "Over 21",
                  accessor: "age",
                  id: "over",
                  Cell: ({ value }) => (value >= 21 ? "Yes" : "No"),
                  filterMethod: (filter, row) => {
                    if (filter.value === "all") {
                      return true;
                    }
                    if (filter.value === "true") {
                      return row[filter.id] >= 21;
                    }
                    return row[filter.id] < 21;
                  },

                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />

      </div>
    );
  }
}

