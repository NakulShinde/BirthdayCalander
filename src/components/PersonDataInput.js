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
        let friendsData = this.state.personData;
        let year = this.state.yearData;
        
        try{
            
            var numbers = /^[0-9]+$/;
            if(friendsData === "" && year === "" ){
                this.setState({invalidData: "Please enter friends data or year."});
                return;
            }
            
            if(year !== "" && !year.match(numbers)){
                this.setState({invalidData: "Invalid year."});
                return;
            }else if(year === ""){
                year = null;
            }

            if(friendsData !== ""){
                friendsData = JSON.parse(this.state.personData);
            }else{
                friendsData = null;
            }

            this.props.updatePersonData(friendsData, year);
            this.setState({invalidData: ''});
            
        }catch(e){
            this.setState({invalidData: "Invalid friends data."});
        }
    }

    render(){
        let customTextareaClass = classNames({ 
            'app__txt js-json': true, 
            'app__error_border': (
                this.state.invalidData === "Invalid friends data." ||
                this.state.invalidData === "Please enter friends data or year." )
             });
        let customTextInputClass = classNames({ 
            'app__input js-year': true, 
            'app__error_border': (
                this.state.invalidData === "Invalid year." ||
                this.state.invalidData === "Please enter friends data or year." )
            });
        return(
            <div className="app__inputs">
                <div className="app__actions_left ">
                    <label>Friends Data</label>
                    <textarea className={customTextareaClass} 
                        id="json-input" 
                        placeholder="Paste your friends list json here."
                        name="personData"
                        value={this.state.personData}
                        onChange={this.handleChange}>
                    
                    </textarea>
                </div>
                <div className="app__actions_right">
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
