import React, {
    Component
} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import CalendarWeek from "./CalendarWeek"
import PersonDataInput from "./PersonDataInput"

import {setPersonsList, fetchPersonsList} from "../actions/PersonListActions"
import {getPersonListData} from './../services/APIService'

class Home extends Component {
    
    componentDidMount() {
        this.props.fetchPersonsList();
        getPersonListData().then(data => {
            //delay
            setTimeout(() => {
                this.props.setPersonsList(data)
            }, 500);

        }).catch(e =>{
            console.log("getPersonListData Error", e);
            this.props.setPersonsList([])
        });
    }

    render() {
        return (
            <div id="work-area">
                <CalendarWeek />
                <PersonDataInput></PersonDataInput>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({
            setPersonsList: setPersonsList,
            fetchPersonsList: fetchPersonsList
    	}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Home)
