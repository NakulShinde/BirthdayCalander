import React, { Component} from "react";

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

        return(
            <div className="day__person">{this.getPersonInitials(this.props.person)}</div>
        );
    }
}

export default PersonInitials;