import React from 'react';
import { changeCheckStatus, changeEnableStatus } from '../store/';
import { connect } from 'react-redux';

function FieldSelector(props) {

  const handleCheck = (event) => {
     props.handleChange(event.target.name,event.target.checked);
  }

  const handleSubmit = () => {
    const { textField, dateField, rangeField } = props;
    if (!textField && !dateField && !rangeField){
      alert("Favor seleccionar al menos un tipo de input");
    }else{ 
      props.changeEnable("enableInput", true);
      props.changeEnable("enablePrint", false);
    }
 }

    return (
      <div className="fieldSelectorContainer">
        <div className="checkboxTitle">
        <p>Seleccione los campos que tendra el formulario:</p>
        </div>
        <div className={`checkboxContainer ${props.enableInput ? "select--inactive" : null}`}>
          <div className="checkbox">
            <input type="checkbox" id="textField" name="textField" checked={props.textField} onChange={handleCheck} />
            <label htmlFor="textField">Texto</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="dateField" name="dateField" checked={props.dateField} onChange={handleCheck}/>
            <label htmlFor="dateField">Fecha</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="rangeField" name="rangeField" checked={props.rangeField} onChange={handleCheck}/>
            <label htmlFor="rangeField">Numero</label>
          </div>
          </div>
          {!props.enableInput ? <div className="createButton" ><input type="submit"  value="Crear" onClick={handleSubmit}/> </div>: null }
      </div>
    )
}

const mapStateToProps = state => {
  return {
    dateField: state.dateField,
    rangeField: state.rangeField,
    textField: state.textField,
    enableInput: state.enableInput,
    enablePrint: state.enablePrint,
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FieldSelector);