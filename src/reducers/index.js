
import { combineReducers } from "redux";
import team_members from './reducer_APIcall'
import filters from './reducer_filter'


const rootReducer = combineReducers({

  team_members: team_members,
  filters: filters

});


export default rootReducer;
