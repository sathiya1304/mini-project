import { Link } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import './AppBar.css';

const AppBar = ({ show,onClick }) => {
  return (
    <div className={show ? 'sidenav active' : 'sidenav'}>
      <ul>
        <img src={require('../../assets/logo.png')} className="logo" alt='logo' />
        <li onClick={onClick}> <Link to="/home"> <IoHomeOutline /> Dashboard</Link></li>
        <li onClick={onClick}><Link to="/investor"><ImProfile /> Investor</Link></li>
        <li onClick={onClick}> <Link to="/collectionmember"> <IoHomeOutline />Collection Member</Link></li>
        <li onClick={onClick}><Link to="/assignaccount"><ImProfile /> Assign Account</Link></li>
        <li onClick={onClick}> <Link to="/scheme"> <IoHomeOutline /> Scheme</Link></li>
        <li onClick={onClick}><Link to="/loan"><ImProfile />Loan</Link></li>
        <li onClick={onClick}> <Link to="/loancollection"> <IoHomeOutline />Loan Collection</Link></li>
        <li onClick={onClick}><Link to="/reports"><ImProfile />Reports</Link></li>
      </ul>
    </div>
  )
}

export default AppBar