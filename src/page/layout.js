import { Col, Row } from "reactstrap"
import AppRouters from "../routes/appRouter";
import Header from "./header"
import Sidebar from "./sideBar";

const ColumnLayout = () => {
    return(
        <>
        <Row>
            <Col sm='12' className="p-0">
                <Header/>
            </Col>
        </Row>
        <Row>
            <Col sm='12' className="p-0">
                <Sidebar/>
            </Col>
            <Col sm='12' className="p-0">
                <AppRouters/>
            </Col>
        </Row>
        </>
    )
}

export default ColumnLayout;