import React, { Component} from "react";
import { connect } from 'react-redux';

import CalenderDay from "./CalenderDay"

class CalendarWeek extends Component {

    render(){
        const {personData} = this.props;
        return(
            <div>
                <h1 className="cal__title">Work Area</h1>
                
                <ul className="calendar clearfix js-calendar">
                
                    <CalenderDay dayOfWeek="mon" dayOfWeekPersonData={personData.mon}></CalenderDay>
                    <CalenderDay dayOfWeek="tue" dayOfWeekPersonData={personData.tue}></CalenderDay>
                    <CalenderDay dayOfWeek="wed" dayOfWeekPersonData={personData.wed}></CalenderDay>
                    <CalenderDay dayOfWeek="thu" dayOfWeekPersonData={personData.thu}></CalenderDay>
                    <CalenderDay dayOfWeek="fri" dayOfWeekPersonData={personData.fri}></CalenderDay>
                    <CalenderDay dayOfWeek="sat" dayOfWeekPersonData={personData.sat}></CalenderDay>
                    <CalenderDay dayOfWeek="sun" dayOfWeekPersonData={personData.sun}></CalenderDay>

                </ul>
          </div>
        );
    }
}

// export default CalendarWeek;

const mapStateToProps = (state) => {
    return {
        personData: state.personData
    }
}
export default connect(mapStateToProps)(CalendarWeek);