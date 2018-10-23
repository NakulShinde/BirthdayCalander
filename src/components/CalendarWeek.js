import React, { Component} from "react";
import { connect } from 'react-redux';

import CalenderDay from "./CalenderDay"

import {convertPersonDataWithDay} from "../services/dataParser"

class CalendarWeek extends Component {

    render(){
        const {personData} = this.props;
        if(!personData || personData.isLoading){
            return <div><h1 className="cal__title">Loading...</h1></div>
        }
        const modifiedPersondata = convertPersonDataWithDay(personData.data, personData.year);
        return(
            <div>
                <h1 className="cal__title">Work Area</h1>
                
                <ul className="calendar clearfix js-calendar">
                
                    <CalenderDay dayOfWeek="mon" dayOfWeekPersonData={modifiedPersondata.mon}></CalenderDay>
                    <CalenderDay dayOfWeek="tue" dayOfWeekPersonData={modifiedPersondata.tue}></CalenderDay>
                    <CalenderDay dayOfWeek="wed" dayOfWeekPersonData={modifiedPersondata.wed}></CalenderDay>
                    <CalenderDay dayOfWeek="thu" dayOfWeekPersonData={modifiedPersondata.thu}></CalenderDay>
                    <CalenderDay dayOfWeek="fri" dayOfWeekPersonData={modifiedPersondata.fri}></CalenderDay>
                    <CalenderDay dayOfWeek="sat" dayOfWeekPersonData={modifiedPersondata.sat}></CalenderDay>
                    <CalenderDay dayOfWeek="sun" dayOfWeekPersonData={modifiedPersondata.sun}></CalenderDay>

                </ul>
          </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        personData: state.personData
    }
}

export default connect(mapStateToProps)(CalendarWeek);