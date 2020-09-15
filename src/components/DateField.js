import React from 'react';
import DatePicker from 'react-datepicker';
import { changeDateValue } from '../store/';
import { connect } from 'react-redux';

function DateField(props) {
    return (
      <div className="dateField">
        <p>Selecciona la fecha:</p>
        <DatePicker selected={props.dateValue} onChange={props.handleInput} dateFormattttt="yyyy/MM/dd" className="date" />
        <br />
      </div>
    )
}

const mapStateToProps = state => {
    return {
      dateValue: state.dateValue
    };
}
  
const mapDispatchToProps = dispatch => {
    return {
      handleInput(date) {
        dispatch(changeDateValue(date));
      }
    };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(DateField);