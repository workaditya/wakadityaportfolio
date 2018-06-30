import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Aboutme } from './pages/about me.jsx';
import { Contactme } from './pages/contact me.jsx';
import { myblog } from './pages/blog.jsx';
import { Project } from './pages/projects.jsx';
import { Work } from './pages/work.jsx';
import * as firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyAHr4mh0g_mkceXUJfuutKj-_r3WEEmDpU",
    authDomain: "portfolio-d7bcd.firebaseapp.com",
    databaseURL: "https://portfolio-d7bcd.firebaseio.com",
    projectId: "portfolio-d7bcd",
    storageBucket: "portfolio-d7bcd.appspot.com",
    messagingSenderId: "797848868906"
  };
  firebase.initializeApp(config);



class App extends React.Component {
	render() {
		return (
            
			<HashRouter>
				<Switch>
					
                    <Route exact path='/aboutme' component={ Aboutme }/>
                    <Route path='/contactme' component={Contactme}/>
                    <Route path='/work' component={Work}/>
                    <Route path='/blog' component={myblog}/>
                    
                </Switch>
			</HashRouter>
            
        );
	}
}


ReactDOM.render(<App />, document.getElementById('app'));