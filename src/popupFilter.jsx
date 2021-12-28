import React from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { makeStyles } from "@material-ui/core/styles";
import { Popper, Paper } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import FilterElement from "./filterElement.jsx";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper
  },
  filterListIcon: {
    verticalAlign: "middle",
    marginLeft: "5px"
  }
}));

export default function PopupFilter(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [checkedItems, setCheckedItems] = props.stateCheckedItems;
  const [keywords, setKeywords] = props.stateKeywords;
  const data = props.data;
  const columnName = props.columnName;

  const isChecked = checkedItems[columnName].length > 0;

  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "popup-filter" : undefined;

  return (
    <>
      <FilterListIcon
        className={classes.filterListIcon}
        aria-describedby={id}
        onClick={event => handleClick(event)}
        color={isChecked ? "secondary" : "primary"}
      />
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <ClickAwayListener onClickAway={event => handleClick(event)}>
          <Paper className={classes.paper}>
            <FilterElement
              stateCheckedItems={[checkedItems, setCheckedItems]}
              stateKeywords={[keywords, setKeywords]}
              data={data}
              columnName={columnName}
            />
          </Paper>
        </ClickAwayListener>
      </Popper>
    </>
  );
}
