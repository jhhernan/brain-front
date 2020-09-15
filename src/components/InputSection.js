import React from 'react';
import { changeCheckStatus, changeEnableStatus, savePrintStatus, RESET_STATUS } from '../store/';
import { connect } from 'react-redux';

import DateField from './DateField';
import TextField from './TextField';
import RangeField from './RangeField';


function InputSection(props) {

  const handleSend = () => {
    const { textValue, dateValue, rangeValue } = props;
    const { textField, dateField, rangeField } = props;
    let printStatus = {};
    if (textField) { printStatus.textValue = textValue };
    if (rangeField) { printStatus.rangeValue = rangeValue };
    if (dateField) { printStatus.dateValue = dateValue };
    props.changeEnable("enableInput", false);
    props.changeEnable("enablePrint", true);
    props.saveData(printStatus);
    props.clearData();
  }
  return (
    <div className="container">
      <div className="fieldContainer">
        {props.textField ? <TextField /> : null}
        {props.dateField ? <DateField /> : null}
        {props.rangeField ? <RangeField /> : null}
      </div>
      <div className="createButton" >
        <input type="submit" value="Send" onClick={handleSend} className="button" />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    dateField: state.dateField,
    rangeField: state.rangeField,
    textField: state.textField,
    dateValue: state.dateValue,
    rangeValue: state.rangeValue,
    textValue: state.textValue,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    handleChange(item,status) {
      dispatch(changeCheckStatus(item,status));
    },
    changeEnable(item,status) {
      dispatch(changeEnableStatus(item,status));
    },
    saveData(status) {
      dispatch(savePrintStatus(status));
    },
    clearData(){
      dispatch({type: RESET_STATUS})
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InputSection);