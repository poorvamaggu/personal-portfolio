import { useState, useEffect } from "react";
import { Container , Row } from "react-bootstrap"
import { Col } from 'react-bootstrap';
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/images/header-img11.png";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "A Web Developer", "A Web Designer", "A Graphic Designer", "A Writer" ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }
    return (
        <section className="banner" id="home"> 
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline"> Welcome to my Portfolio</span>
                    <h1>{'Hi, I am Poorva Maggu!'}<p><h2><span className="wrap">{text}</span></h2></p></h1>
                    <p>In a world where code meets canvas, I am Poorva Maggu, a computer science student and a captivating creative force. With a palette of web design, development, graphic design, and writing at my fingertips, I blend technology and art to craft digital wonders.<p>As a web designer, I sculpt immersive interfaces that transcend the ordinary, infusing each pixel with my artistic vision. With an eye for aesthetics and a passion for user experience, I create virtual realms that leave visitors breathless.</p><p>Armed with a vivid imagination, I master the art of graphic design, conjuring captivating visuals that ignite the imagination. From logos that mesmerize to illustrations that transport.</p>Join me on this extraordinary journey, where technology becomes art, where pixels dance, and where creativity knows no bounds. Together, let us reshape the digital landscape and leave an indelible mark on the canvas of possibility.</p>
                    <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header img" />

                </Col>
            </Row>
        </Container>
        </section>
    )
}