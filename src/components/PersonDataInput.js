import React, { Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames/bind';

import {updatePersonData} from './../actions/PersonListActions'

class PersonDataInput extends Component {
    constructor() {
        super();
        this.state = {
            yearData: '',
            invalidData: '',
            personData: ''
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        switch(e.target.name){
            case "yearData":
                this.setState({ yearData: e.target.value });
            break;
            case "personData":
                this.setState({ personData: e.target.value });
            break;
            default:
            break;
        }
    }
    
    handleUpdate(){
        try{
            let data = JSON.parse(this.state.personData);
            let year = this.state.yearData;
            var numbers = /^[0-9]+$/;
            if(year.match(numbers)){
                this.props.updatePersonData(data, this.state.yearData);
                this.setState({invalidData: ''});
            }else{
                this.setState({invalidData: "Invalid year."});
            }
        }catch(e){
            this.setState({invalidData: "Invalid JSON input data."});
        }
    }

    render(){
        let customTextareaClass = classNames({ 'app__txt js-json': true, 'app__error_border': this.state.invalidData === "Invalid JSON input data." });
        let customTextInputClass = classNames({ 'app__input js-year': true, 'app__error_border': this.state.invalidData === "Invalid year." });
        return(
            <div className="app__inputs">
  
                <textarea className={customTextareaClass} 
                    id="json-input" 
                    placeholder="Paste your friends list json here."
                    name="personData"
                    value={this.state.personData}
                    onChange={this.handleChange}>
                
                </textarea>
    
                <div className="app__actions">
                    <label>Year</label>
                    
                    <input className={customTextInputClass} type="text"
                        name="yearData"
                        value={this.state.yearData}
                        onChange={this.handleChange} />
                    <button className="app__button js-update" onClick={this.handleUpdate}>Update</button>
                    {
                        (this.state.invalidData !== '')? <div className="app__error">{this.state.invalidData}</div> : ""
                    }
                </div>
          </div>
        );
    }
}

// export default PersonDataInput;
const mapStateToProps = (state) => {
    return {
        personData: state.personData
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
            updatePersonData: updatePersonData
    	}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(PersonDataInput);
