
export default (searches) => {
  return searches.team_members.sort((a, b) => {
    if (searches.filters.sortBy === "name") {
      return a.LastName < b.LastName ? 1 : -1;
    }
    if (searches.filters.sortBy === "id") {
      return a.UserId < b.UserId ? 1 : -1;
    }
    if (searches.filters.sortBy === "vacations") {
      return a.UsedDays < b.UsedDays ? 1 : -1;
    } else if (searches.filters.sortBy === "start") {
      return a.EmployeeStartDate < b.EmployeeStartDate ? 1 : -1;
    }
  });
};
