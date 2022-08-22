import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import WebinarS1 from "../components/webinar-s1";
import WebinarS2 from "../components/webinar-s2";
import WebinarS3 from "../components/webinar-s3";

class Webinar extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <WebinarS1/>
                <WebinarS2/>
                <WebinarS3/>
            </Container>    
        );
    }
}

export default Webinar;