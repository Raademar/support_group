import Link from "next/link";
import styled from "styled-components";
import Button from "../Button";
import BodyText from "../BodyText";
import Image from "../Image";
import Heading from "../Heading";
import Section from "../Section";

const AboutStyle = styled.div`
  margin: 0 auto;
  background-color: ${props => props.backgroundColor || "white"};
  margin-top: 3em;

  button {
    width: 319px;
    height: 50px;
    left: 28px;
    top: 1156px;
    border: 4px solid #3d73cf;
    background-color: white;
    color: #3d73cf;
    font-weight: 900;
    font-size: 16px;
    font-family: Lato;
    border-radius: 8px;
    margin-top: 16%;
    margin-bottom: 16%;
  }
`;

const About = props => {
  if (props.pageData) {
    // console.log(props.pageData)

    return (
      <AboutStyle>
        <Section>
          <Heading
            position="relative"
            heroText={props.pageData.title.rendered.toUpperCase()}
            letterSpacing="4px"
            marginTop="2%"
          />
          {/* <Image position="relative" image={props.aboutImage} /> */}
          <BodyText bodyText={props.pageData.content.rendered} />
          <button>READ MORE ABOUT OUR WORK</button>
        </Section>
      </AboutStyle>
    );
  } else {
    return null;
  }
};

export default About;
