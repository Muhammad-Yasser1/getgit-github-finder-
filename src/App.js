import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

const App = () => {
    return (
        <GithubState>
            <AlertState>
                <div className="App">
                    <BrowserRouter>
                        <Navbar></Navbar>
                        <div className="container">
                            <Alert></Alert>
                            <Switch>
                                <Route exact path="/" component={Home}></Route>
                                <Route
                                    path="/about"
                                    exact
                                    component={About}
                                ></Route>
                                <Route
                                    path="/user/:login"
                                    exact
                                    component={User}
                                ></Route>
                                <Route component={NotFound}></Route>
                            </Switch>
                        </div>
                    </BrowserRouter>
                </div>
            </AlertState>
        </GithubState>
    );
};

export default App;
