import React, { Component } from "react";
import { connect } from "react-redux";
import Dates from './Dates'
import Headings from './Headings'
import SingleTeamMember from "../components/SingleTeamMember";
import myFilter from "../helpers/filters"
class TeamPage extends Component {
  renderList() {
    return this.props.team_members.map( member => {
      return (
          <SingleTeamMember {...member} key={member.userKey}/>
      );
    });
  }
  render() {

    console.log('team_members', this.props.team_members)
    return (
      <div className="entire-container">
          <div className="container">
            <Headings/>
            {this.renderList()}
          </div>
        </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    team_members: myFilter(state)
  };
}


export default connect(
  mapStateToProps
)(TeamPage);


// <Dates/>
