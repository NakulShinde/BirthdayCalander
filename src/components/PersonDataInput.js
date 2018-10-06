import React, { Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames/bind';

import {updatePersonData} from './../actions/PersonActions'

class PersonDataInput extends Component {
    constructor() {
        super();
        this.state = {
            yearData: '',
            invalidData: '',
            personData: '[{"name":"Tyrion Lannister","birthday":"12/02/1978"},{"name":"Cersei Lannister","birthday":"11/30/1975"},{"name":"Daenerys Targaryen","birthday":"11/24/1991"},{"name":"Arya Stark","birthday":"11/25/1996"},{"name":"Jon Snow","birthday":"12/03/1989"},{"name":"Sansa Stark","birthday":"15/08/1992"},{"name":"Jorah Mormont","birthday":"12/16/1968"},{"name":"Jaime Lannister","birthday":"12/06/1975"},{"name":"Sandor Clegane","birthday":"11/07/1969"},{"name":"Tywin Lannister","birthday":"10/12/1951"},{"name":"Theon Greyjoy","birthday":"12/31/1989"},{"name":"Samwell Tarly","birthday":"12/07/1990"},{"name":"Joffrey Baratheon","birthday":"06/12/1992"},{"name":"Catelyn Stark","birthday":"12/03/1962"},{"name":"Bran Stark","birthday":"12/02/1995"},{"name":"Petyr Baelish","birthday":"11/20/1974"},{"name":"Robb Stark","birthday":"11/28/1986"},{"name":"Brienne of Tarth","birthday":"11/27/1985"},{"name":"Margaery Tyrell","birthday":"12/02/1989"},{"name":"Stannis Baratheon","birthday":"09/14/1971"},{"name":"Davos Seaworth","birthday":"02/13/1973"},{"name":"Tormund Giantsbane","birthday":"12/14/1974"},{"name":"Jeor Mormont","birthday":"11/01/1955"},{"name":"Eddard Stark","birthday":"12/02/1963"},{"name":"Khal Drogo","birthday":"12/05/1980"},{"name":"Ramsay Bolton","birthday":"12/05/1976"},{"name":"Robert Baratheon","birthday":"12/02/1965"},{"name":"Daario Naharis","birthday":"12/02/1985"},{"name":"Viserys Targaryen","birthday":"12/06/1984"}]'
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
