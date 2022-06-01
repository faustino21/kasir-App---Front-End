import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate()

    return (
        <>
        <Nav variant="pills" defaultActiveKey="/protected" className="flex-column">
            <Nav.Item>
                <Nav.Link eventKey="/protected" onClick={()=> navigate("/protected")}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="cashiers" onClick={()=> navigate("cashiers")}>Cashier</Nav.Link>
            </Nav.Item>
        </Nav>
        </>
    )
}

export default Sidebar;