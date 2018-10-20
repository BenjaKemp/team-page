import React from 'react';
import timeConverter from '../helpers/timeConverter'

const SingleTeamMember = (props) => (

 <div className="team-member">
   <img src={props.ImageURL} />
   <div className="employee-details">
   <a>{props.FirstName} {props.LastName}</a>
   <div className="job-details">
     <a>{props.DepartmentId}</a>
     <a>{props.JobTitleId}</a>
    </div>
  </div>
   <a>{props.UserId}</a>
   <a>{props.UsedDays}</a>
   <a>{timeConverter(props.EmployeeStartDate)}</a>
 </div>
);

export default SingleTeamMember;
