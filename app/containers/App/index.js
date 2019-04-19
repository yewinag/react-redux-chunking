/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import {connect} from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Home from '../Home/Loadable';
import User from '../User/Loadable';

import GlobalStyle from '../../global-styles';

import Loadable from 'react-loadable';
import LoadingSpinner from '../../components/LoadingSpinner';

const LoadableComponent = (component) => Loadable({
  loader: () => import(`../../components/${component}`),
  loading: LoadingSpinner,
});

const App= ()=> {
  return (
    <div>
      <div>
        <ul>
          <li><Link to="/">Index page</Link></li>
          <li><Link to="/home">Home page</Link></li>
          <li><Link to="/user">user page</Link></li>
        </ul>        
      </div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/home" component={Home}  />
        <Route path="/user" component={User}  />
        <Route component={NotFoundPage} />
      </Switch>
      {/* <GlobalStyle /> */}
    </div>
  );
}

const mapStateToProps = state => ({ locales: state.locales, navBar: state.navBar, downloadApp: state.downloadApp });

export default App;
// import NavBar from '../NavBar';
// import React from 'react';
// import en from 'react-intl/locale-data/en';
// import mm from 'react-intl/locale-data/my';
// import {IntlProvider, addLocaleData} from 'react-intl';
// import {connect} from 'react-redux';
// // import { Switch, Route } from 'react-router-dom';
// import {routerActions} from 'react-router-redux';
// import { connectedRouterRedirect } from 'redux-auth-wrapper/history3/redirect'
// import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

// import Loadable from 'react-loadable';
// import LoadingSpinner from '../../components/LoadingSpinner';

// import User from '../../components/User';

// addLocaleData([...mm,...en]);

// const LoadableComponent = (component) => Loadable({
//   loader: () => import(`../../components/${component}`),
//   loading: LoadingSpinner,
// });

// const UserIsAuthenticated = connectedRouterRedirect({
//   redirectPath: '/users/sign_in',
//   authenticatedSelector: state => state.user.user !== null,    
//   redirectAction: routerActions.replace,
//   wrapperDisplayName: 'UserIsAuthenticated'
// })

// const App = props => {
//   return (
//     // <IntlProvider locale={props.locales.lang} messages={props.locales.messages}>
//       <div>
//         {/* <NavBar/> */}
//         {/* <div className={props.downloadApp.showApp ? "content show":"content"}> */}
//           {/* {props.children}           */}
//           <Switch>
//             <Route 
//               path="/"
//               exact
//               component={LoadableComponent('Home')} 
//             />            
//             <Route 
//               path="/home"               
              
//               component={LoadableComponent('Home') }               
//             />
//             <Route
//               path="/user"
//               component={LoadableComponent('User')} 
//             />
//             <Route 
//               path="*" 
//               component={LoadableComponent('NotFoundPage')}               
//             />          
//           </Switch>
//         {/* </div> */}
//       </div>
//     // </IntlProvider>
//   );
// };

// const mapStateToProps = state => ({ locales: state.locales, navBar: state.navBar, downloadApp: state.downloadApp });

// export default connect(mapStateToProps)(App);
