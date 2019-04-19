import React from 'react';
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';

class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }
    render(){
      return(
        <div>
          <h1>Homoe page</h1>
          <Link to="/user">user</Link>
          {/* <button onClick={()=> history.push('/user')}>click</button> */}
        </div>
      )
    }
}
// const mapStateToProps = state => ({
//   cars: state.cars.cars,  
// });

export default Home;



