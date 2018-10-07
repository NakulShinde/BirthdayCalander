import React, { Component} from "react";
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

class PersonInitials extends Component {
    constructor() {
        super();
        this.state = {}
        this.getPersonInitials = this.getPersonInitials.bind(this);
    }

    getPersonInitials(person){
        let personArr = person && person.name ? person.name.split(" ") : [];
        let initials = "";
        for(const index in personArr){
            if(index > 1){ break; }
            initials += personArr[index].charAt(0).toUpperCase(); 
        }

        return initials !== ""? initials : '--';
    }

    render(){
        let {person, personsCount} = this.props;
        let customClass = classNames({ 'day__person': true, 
                                        'day--empty': personsCount === 0,
                                        'day__person_flex':  personsCount === 1,
                                        'day__person_2_to_4':  personsCount > 1 && personsCount <= 4,
                                        'day__person_more_than_4':  personsCount > 4
                                         });
        return(
            <div className={customClass}>
                <Link to={`/person/${person.dayOfWeek}/${person.name}`}>
                    {this.getPersonInitials(person)}
                </Link>
            </div>
        );
    }
}

export default PersonInitials;