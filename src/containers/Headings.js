import React, { Component } from "react";
import { connect } from "react-redux";
import {sortBy} from '../actions'


class Headings extends Component {
  handleClick = (e) => {
let filterName = e.target.value;
this.props.dispatch(sortBy(filterName))


  }

  render() {

    return (
        <div className="one-line-flex">
          <button value="name" onClick={this.handleClick} className="select-me ">Name</button>
          <button  value="id" onClick={this.handleClick} className="select-me ">Id</button>
          <button value="vacations" onClick={this.handleClick} className="select-me ">Vacations</button>
          <button value="start" onClick={this.handleClick} className="select-me ">Start Date</button>
        </div>


    );
  }
}

function mapStateToProps(state) {
  return {
    team_members: state

  };
}


export default connect(
  mapStateToProps
)(Headings);


// <Dates/>
