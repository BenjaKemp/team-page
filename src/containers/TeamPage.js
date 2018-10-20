import React, { Component } from "react";
import { connect } from "react-redux";

import SingleTeamMember from "../components/SingleTeamMember";

class TeamPage extends Component {
  renderList() {
    return this.props.team_members.map( member => {
      return (
          <SingleTeamMember {...member} key={member.userKey}/>
      );
    });
  }
  render() {

    return (
      <div className="entire-container">
          <div className="container">{this.renderList()}</div>
        </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    team_members: state.team_members

  };
}


export default connect(
  mapStateToProps
)(TeamPage);
