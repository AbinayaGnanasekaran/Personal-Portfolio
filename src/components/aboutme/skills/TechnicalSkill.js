import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Tada from "react-reveal/Tada";

export default function TechnicalSkill() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        
        <Link className="btn btn-primary " to="/toolkit">
          Toolkit
        </Link>
      </div>
     
      
    </div>
  );
}
