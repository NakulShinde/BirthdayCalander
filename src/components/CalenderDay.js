import React, { Component} from "react";
import classNames from 'classnames/bind';

import PersonInitials from "./PersonInitials"

class CalenderDay extends Component {
    
    render(){
        const {dayOfWeek, dayOfWeekPersonData} = this.props;
        const dayOfWeekData = dayOfWeekPersonData ? dayOfWeekPersonData : [];
        const customClass = classNames({ 'cal__day': true, 'day--empty': dayOfWeekData.length === 0 });
        return(
            <li className={customClass} data-day={dayOfWeek}>
                <div className="day__date"></div>
                <div className="day__people">
                    {
                        dayOfWeekData.map(function(person, index){
                            return <PersonInitials key={index} person={person} personsCount={dayOfWeekData.length}></PersonInitials>       
                        })
                    }
                   
                </div>
            </li>
        );
    }
}

export default CalenderDay;