import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
        <Nav>
            <NavItem>
                <NavLink to='/' className="nav-link">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/cashiers' className="nav-link">Cashiers</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to='/' className="nav-link">Product</NavLink>
            </NavItem>
        </Nav>
        </>
    )
}

export default Sidebar;