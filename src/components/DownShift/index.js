import React from 'react'
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { connect } from 'react-redux';
require('./DownShift.css');


const ComboBox = (props) => {

  const onChange = (selected, kind) => {

    const selected_release = selected == null ? "" : selected.release;
    const scram_arch_list = selected == null 
      ? {
          release: "",
          scram_archs: []
        } : selected;
    const selected_scram_arch = selected == null ? "" : selected.scram_arch;

    if ( kind === "release" )  {
      props.dispatch({
        type: 'REQUEST_IMAGE',
        request_image: selected_release
      })
      props.dispatch({
        type: 'CREATE_SCRAM_ARCH_LIST',
        scram_arch_list: scram_arch_list
      })
    } else if ( kind === "scram_arch" ) {
      props.dispatch({
        type: 'REQUEST_SCRAM_ARCH',
        request_scram_arch: selected_scram_arch
      }) 
    }
  };

  console.log("books" , props.buildImage);

  return (
      <div>
      <Autocomplete 
        onChange={(event, value) => onChange(value, props.kind)}
        id={props.text}
        options={props.books}
        getOptionLabel={(option) => option.release}
        style={{ width: 400, height: 100}}
        renderInput={(params) => <TextField 
            {...params} 
            label={props.text}
            margin="normal"
            fullWidth />}
        />
        </div>
    );
  }

  const mapStateToProps = (state) => {
    return {
      downShift: state.downShift,
      buildImage: state.buildImage
    }
  }
  
  const DownShiftContainer = connect(
    mapStateToProps,
    null
  )(ComboBox)
  
  export default DownShiftContainer
  