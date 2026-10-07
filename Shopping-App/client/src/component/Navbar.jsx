import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
            <Link to ="/">Home</Link>
            <Link to ="mycart">MyCart</Link>
            <Link to = "/myorder">MyOrder</Link>
            <Link to = "/setting">Settings</Link>
            <Link to="/stopwatch">Stopwatch</Link>
            <Link>MyProfile</Link>
            <Link>LOgout</Link>
        </div>
    )
}

export default Navbar;