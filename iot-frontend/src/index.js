import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Statistics from './components/Statistics';
import About from './components/About';
import Navigation from './components/Navigation';
import Home from './components/Home';

class App extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navigation />
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/statistics" component={Statistics}/>
                        <Route path="/about" component={About}/>
                        <Route component={Error}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );