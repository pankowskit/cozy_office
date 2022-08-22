import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import ConsultationS1 from "../components/consultation-s1";
import ConsultationS2 from "../components/consultation-s2";

class Consultation extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <ConsultationS1/>
                <ConsultationS2/>
            </Container>    
        );
    }
}

export default Consultation;