import React from 'react';
import FrontPage from './front-page';
import AboutUs from './pages/about-us';
import ContactUs from './pages/contact';
import FileNotFound from './pages/404-file-not-found';

import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={FrontPage} />
                    <Route exact path="/about-us" component={AboutUs} />
                    <Route exact path="/contact-us" component={ContactUs} />
                    <Route exact path="/404" component={FileNotFound} />
                    <Redirect to="/404" />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;