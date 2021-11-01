import React, { useContext } from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  // Router,
  Redirect,
  useHistory
} from "react-router-dom";
import history from "./routing";

import Landing from '../modules/LandingPage/index';

//Auth Pages
import Login from '../modules/AuthPages/login';
import Register from '../modules/AuthPages/register';


//Admin Pages
import AdminDashboardPage from "../modules/AdminPages/dashboard";
import AdminAccessoriesPage from "../modules/AdminPages/accessories";
import AdminUsersPage from "../modules/AdminPages/users";

//User Pages
import UserDashboardPage from "../modules/UserPages/dashboard";
import UserSettingPage from "../modules/UserPages/settings";

const MainRouter = (props) => {
    let TOKEN = localStorage.getItem('TOKEN') || null;
  return (
    // <ThemeProvider theme={ theme }>   
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <Landing /> 
                </Route>
                <Route exact path="/login">
                    <Login /> 
                </Route>
                <Route exact path="/register">
                    <Register /> 
                </Route>

                <Route exact path="/admin">
                    <AdminDashboardPage /> 
                </Route>
                <Route exact path="/admin/dashboard">
                    <AdminDashboardPage /> 
                </Route>
                <Route exact path="/admin/devices">
                    <AdminAccessoriesPage /> 
                </Route>
                <Route exact path="/admin/users">
                    <AdminUsersPage /> 
                </Route>
                <Route exact path="/home">
                    <UserDashboardPage /> 
                </Route>
                <Route exact path="/accountsetting">
                    <UserSettingPage /> 
                </Route>
                
            </Switch>
        </Router>
  );
};

export default MainRouter;
