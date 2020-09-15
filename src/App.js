import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import "react-datepicker/dist/react-datepicker.css";


import FieldSelector from './components/FieldSelector';
import PrintSection from './components/PrintSection';
import InputSection from './components/InputSection';

class App extends React.Component {
 
  render(){
    return (
      <div className="App">
        <FieldSelector />
        { this.props.enableInput ? <InputSection /> : null }
        { this.props.enablePrint ? <PrintSection /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    enableInput: state.enableInput,
    enablePrint: state.enablePrint,
  };
}

export default connect(mapStateToProps)(App);