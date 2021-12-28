import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import { indigo } from "@material-ui/core/colors";
import PopupFilter from "./popupFilter.jsx";

const thColor = indigo[50];
const useStyles = makeStyles({
  base: {
    maxWidth: 900,
    margin: "auto"
  },
  table: {
    maxWidth: 500,
    margin: "40px auto 50px auto"
  },
  tableHead: {
    fontWeight: "bold",
    backgroundColor: thColor
  },
  textField: {
    margin: "30px 0 0 70px"
  },
  filterListIcon: {
    verticalAlign: "middle",
    marginLeft: "5px"
  }
});

function createData(book, name, brand, Location, Sales) {
  return { book, name, brand, Location, Sales };
}

const rows = [
  createData(<a href="https://www.choicehotels.com">Brand Page</a>, "Comfort Inn", "Choice", "Location", <a href="https://www.choicehotels.com">Sales</a>),
  createData(<a href="https://www.choicehotels.com">Brand Page</a>, "Comfort Inn", "Choice", "Location", <a href="https://www.choicehotels.com">Sales</a>),
  createData(<a href="https://www.choicehotels.com">Brand Page</a>, "Comfort Inn", "Choice", "Location", <a href="https://www.choicehotels.com">Sales</a>),
  createData(<a href="https://www.choicehotels.com">Brand Page</a>, "Comfort Inn", "Choice", "Location", <a href="https://www.choicehotels.com">Sales</a>),
  createData(<a href="https://www.choicehotels.com">Brand Page</a>, "Comfort Inn", "Choice", "Location", <a href="https://www.choicehotels.com">Sales</a>),
];

const getColumns = rows => {
  return {
    book: Array.from(new Set(rows.map(row => row.book))),
    name: Array.from(new Set(rows.map(row => row.name))),
    brand: Array.from(new Set(rows.map(row => row.brand))),
    Location: Array.from(new Set(rows.map(row => row.Location))),
    Sales: Array.from(new Set(rows.map(row => row.Sales)))
  };
};

const filterRows = (obj, rows) => {
  const keys = Object.keys(obj);

  const filterRecursive = (keys, rows) => {
    if (keys.length === 0) return rows;

    if (obj[keys[0]].length === 0) {
      return filterRecursive(keys.slice(1), rows);
    }

    const filtered = rows.filter(row => {
      return obj[keys[0]].indexOf(row[keys[0]]) > -1;
    });

    return filterRecursive(keys.slice(1), filtered);
  };

  return filterRecursive(keys, rows);
};

export default function Content() {
  const classes = useStyles();
  const [checkedItems, setCheckedItems] = React.useState({
    book: [],
    name: [],
    brand: [],
    Location: [],
    Sales: []
  });
  const [keywords, setKeywords] = React.useState({
    book: "",
    name: "",
    brand: "",
    Location: "",
    Sales: ""
  });

  const filteredRows = filterRows(checkedItems, rows);
  const filteredColumns = getColumns(rows);

  return (
    <TableContainer component={Paper} className={classes.base}>
      <Table className={classes.table} aria-label="table-filterable">
        <TableHead className={classes.tableHead}>
          <TableRow>
             <TableCell align="center">
              
              <PopupFilter
                stateCheckedItems={[checkedItems, setCheckedItems]}
                stateKeywords={[keywords, setKeywords]}
                data={filteredColumns.book}
                columnName="book"
              />
            </TableCell>
            <TableCell align="center">

              <PopupFilter
                stateCheckedItems={[checkedItems, setCheckedItems]}
                stateKeywords={[keywords, setKeywords]}
                data={filteredColumns.name}
                columnName="name"
              />
            </TableCell>
            <TableCell align="center">

              <PopupFilter
                stateCheckedItems={[checkedItems, setCheckedItems]}
                stateKeywords={[keywords, setKeywords]}
                data={filteredColumns.brand}
                columnName="brand"
              />
            </TableCell>
            <TableCell align="center">
              <PopupFilter
                stateCheckedItems={[checkedItems, setCheckedItems]}
                stateKeywords={[keywords, setKeywords]}
                data={filteredColumns.Location}
                columnName="Location"
              />
            </TableCell>
            <TableCell align="center">
              <PopupFilter
                stateCheckedItems={[checkedItems, setCheckedItems]}
                stateKeywords={[keywords, setKeywords]}
                data={filteredColumns.Sales}
                columnName="Sales"
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredRows.map((row, index) => (
            <TableRow key={index}>
              <TableCell align="center">{row.book}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.brand} </TableCell>
              <TableCell align="center">{row.Location}</TableCell>
              <TableCell align="center">{row.Sales}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
