import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import { connect } from 'react-redux'

const RadioButtons = (props) => {
    const [selectedValue, setSelectedValue] = useState("a");

    const handleChange = event => {
        console.log(event.target.value);
        setSelectedValue(event.target.value);

        if ( event.target.value === "a" )  {
            props.dispatch({
              type: 'SHOW',
              show: props.table.available
            })
          } else if ( event.target.value === "b" ) {
            props.dispatch({
              type: 'SHOW',
              show: props.table.building
            }) 
          } else if ( event.target.value === "c" ) {
            props.dispatch({
              type: 'SHOW',
              show: props.table.pending
            }) 
          }
    };

    return (
      <div>
        <Radio checked={selectedValue === "a"} onChange={handleChange} value="a" name="images" /> Available now
        <Radio checked={selectedValue === "b"} onChange={handleChange} value="b" name="images" /> Currently building
        <Radio checked={selectedValue === "c"} onChange={handleChange} value="c" name="images" /> Pending requests
      </div>
    );
}


const mapStateToProps = (state) => {
  return {
    table: state.table
  }
}

const RadioButtonsContainer = connect(
  mapStateToProps,
  null
)(RadioButtons)

export default RadioButtonsContainer