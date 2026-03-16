import {Link} from 'react-router';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        {/* <li>
          <Link to="/student/1">Student</Link>
        </li> */}
      </ul>
    </nav>
    );

}
export default NavBar;