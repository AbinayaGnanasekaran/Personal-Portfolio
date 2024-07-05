import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">Abinaya G</b> 
                  and I am a <b className="purple">Computer Science and Engineering </b> 
                    student at <b className="purple">Sri Eshwar College of Engineering </b>
                      in Coimbatore, Tamil Nadu.
                <br />
                <br />
                As a second-year computer science and engineering student, my experience with technology is multifaceted and continuously evolving.

My experience as a class representative has equipped me with valuable leadership skills, including effective communication, teamwork, problem-solving, and decision-making. I am confident in my ability to lead projects and teams successfully, and I am excited about the opportunity to apply and further develop these skills as a web developer.
I leveraged my leadership position to empower team members and encourage their active participation and contribution. I listened to their ideas and feedback, valued their input, and created a supportive environment where everyone felt heard and valued.

I am excited about the opportunity to lead as a web developer to share my enthusiasm for technology and innovation.
&nbsp;
                  <b className="purple">
                    {" "}
                    C, C++, Java, Python, HTML, CSS, PHP, and JavaScript.{" "}
                  </b>
                <br />
                <br />
                I am proficient in various programming languages such as &nbsp;
                  <b className="purple">
                    {" "}
                    C, C++, Java, Python, HTML, CSS, PHP, and JavaScript.{" "}
                  </b>
                <br />
                <br />
                I also have experience working with frameworks and libraries such as &nbsp;

                  <b className="purple">
                    {" "}
                    NodeJS, ReactJS, OpenCV, Pandas, and NumPy.{" "}
                  </b>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with &nbsp;
                  <b className="purple">
                    {" "}
                    Modern Javascript Library and Frameworks.
                  </b>
                <br />
                <br />In my free time, I enjoy learning new technologies and &nbsp;
                  <b className="purple">building new web technologies and products. </b>
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
