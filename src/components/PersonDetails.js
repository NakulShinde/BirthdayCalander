import React, { Component} from "react"
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';

import {fetchPersonData, setPersonData} from './../actions/PersonDetailsActions'
import {getPersonListData} from './../services/APIService'

class PersonDetails extends Component {

    componentDidMount() {
        let personId = parseInt(this.props.match.params['id'])
        
        this.props.fetchPersonData()
        getPersonListData().then(data => {
            //delay
            setTimeout(() => {
                this.props.setPersonData(data.data[personId])
            }, 500);
        }).catch(e =>{
            console.log("getPersonListData Error", e)
            this.props.setPersonData([])
        });

    }

    render(){
        if(!this.props.personData || this.props.personData.isLoading){
            return <div><h1 className="cal__title">Loading...</h1></div>
        }
        const person = this.props.personData.selectedPerson || {};
        if(!this.props.personData.isLoading && Object.keys(person).length === 0){
            return <div><h1 className="cal__title">No Data Found</h1></div>
        }
        
        return(
            <div className="intro__task">
                <Link to={`/`}>
                    <button className="app__button">Back</button>
                </Link>
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
        personData: state.personDetails
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({
            setPersonData: setPersonData,
            fetchPersonData: fetchPersonData
    	}, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(PersonDetails);
