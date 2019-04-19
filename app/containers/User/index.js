import React from 'react';
// import history from '../../store/history';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import reducer from './reducer';
import saga from './saga';

class User extends React.Component {
  constructor(props) {
    super(props); 
    console.log(this.props)   
  }
  render() { 
    return ( 
      <div>
        Hello adklf
        <button onClick={()=> this.props.onChangeUsername()}>home</button>
        {/* <Link to="/home">home</Link> */}
      </div>
     );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    // onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onChangeUsername: evt => console.log('user compone t  action'),
    // onSubmitForm: evt => {
    //   if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    //   dispatch(loadRepos());
    // },
  };
}

const mapStateToProps = state => ({ 
  cars: state.get('cars'),
  ads : state.get('ads')
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

// const withReducer = injectReducer({ key: 'home', reducer });
// const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  // withReducer,
  // withSaga,
  withConnect,
)(User);
