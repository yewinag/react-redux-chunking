import React from 'react';
// import history from '../../store/history';
import { Link } from 'react-router-dom'

class User extends React.Component {
  constructor(props) {
    super(props); 
    console.log(this.props)   
  }
  render() { 
    return ( 
      <div>
        Hello adklf
        <button onClick={()=> history.push('/home')}>home</button>
        {/* <Link to="/home">home</Link> */}
      </div>
     );
  }
}
 
export default User;