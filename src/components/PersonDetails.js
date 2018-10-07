import React, { Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {getPersonData} from './../actions/PersonActions'

class PersonDetails extends Component {

    constructor() {
        super();
        this.state = {
            personId : null,
            dayOfWeek : null
        }
    }

    componentDidMount() {
        this.props.getPersonData(
            this.props.match.params['id'],
            this.props.match.params['dayOfWeek']
        );
    }

    render(){
        const person = this.props.personData.slectedPerson || {};
        console.log(person);
        // const bornOn = 
        return(
            <div className="intro__task">
                <div className="block-detail">
                  <div className="list-group-item list-group-item-action">
                    <div className="b-left">Name </div><div> {person.name}</div>
                  </div>
                  <div className="list-group-item list-group-item-action">
                    <div className="b-left">Born On  </div><div> {person.bornOnDate}</div>
                  </div>
                  <div className="list-group-item list-group-item-action">
                    <div className="b-left">Age  </div><div> {person.age}</div>
                    </div>
                  <div className="list-group-item list-group-item-action">
                    <div className="b-left b-bottom">Current birthday  </div><div className="b-bottom"> {person.currentBirthday}</div>
                   </div>
  
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
            getPersonData: getPersonData
    	}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(PersonDetails);
