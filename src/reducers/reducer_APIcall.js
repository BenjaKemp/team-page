
const initialState = [ {
 "$id":"1",
 "UserId":62823,
 "UserKey":"123456",
 "CompanyId":14138,
 "FirstName":"Antonio",
 "LastName":"Banderas",
 "Acronym":"Ab",
 "Email":"adminsupertrial@hotmail.com",
 "EmployeeStartDate":"2017-11-17T00:00:00.000",
 "ImageURL":"https://woffu.blob.core.windows.net/images/1526982073668.png",
 "DepartmentId":14350,
 "JobTitleId":null,
 "ResponsibleUserId":62823,
 "AuthorizingUserId":63286,
 "AllocatedDays":24.000,
 "UsedDays":8.000,
 "AvailableDays":16.000,
 "AccumulatedDays":8.003,
 "LanguageId":1,
 "CalendarId":null,
 "AgreementId":null,
 "Weekends":"6,0",
 "IsAdmin":true,
 "IsResponsible":true,
 "Active":true
 },
 {
 "$id":"2",
 "UserId":63287,
 "UserKey":"00004",
 "CompanyId":14138,
 "FirstName":"Ashton",
 "LastName":"Kutcher",
 "Acronym":"Ak",
 "Email":"empleado4@woffutest.com",
 "EmployeeStartDate":"2005-01-04T00:00:00.000",
 "ImageURL":"https://woffu.blob.core.windows.net/images/1526982032157.png",
 "DepartmentId":14350,
 "JobTitleId":null,
 "ResponsibleUserId":62823,
 "AuthorizingUserId":63284,
 "AllocatedDays":25.000,
 "UsedDays":7.000,
 "AvailableDays":18.000,
 "AccumulatedDays":10.003,
 "LanguageId":1,
 "CalendarId":6960,
 "AgreementId":6001,
 "Weekends":"0,6",
 "IsAdmin":false,
 "IsResponsible":false,
 "Active":false
},
 {
 "$id":"3",
 "UserId":63287,
 "UserKey":"00004",
 "CompanyId":14138,
 "FirstName":"Ben",
 "LastName":"Kemp",
 "Acronym":"Ak",
 "Email":"empleado4@woffutest.com",
 "EmployeeStartDate":"2003-01-04T00:00:00.000",
 "ImageURL":"https://woffu.blob.core.windows.net/images/1526982032157.png",
 "DepartmentId":14350,
 "JobTitleId":null,
 "ResponsibleUserId":62823,
 "AuthorizingUserId":63284,
 "AllocatedDays":25.000,
 "UsedDays":7.000,
 "AvailableDays":18.000,
 "AccumulatedDays":10.003,
 "LanguageId":1,
 "CalendarId":6960,
 "AgreementId":6001,
 "Weekends":"0,6",
 "IsAdmin":false,
 "IsResponsible":false,
 "Active":false
 }
]



export default function(state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}
