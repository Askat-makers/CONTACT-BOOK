import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import RenderContacts from './components/RenderContacts/RenderContacts';
import Home from './components/Home/Home'
import Navibar from './components/Navibar/Navibar';
import EditContact from './components/EditContact/EditContact';
import {history} from './heplers/history'
import ContactDetail from './components/ContactDetail/ContactDetail';

const Routes = () => {
    return (
        <BrowserRouter history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/render" component={RenderContacts}/>
                <Route exact path="/navibar" component={Navibar}/>
                <Route exact path="/edit" component={EditContact}/>
                <Route exact path="/detail" component={ContactDetail}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;