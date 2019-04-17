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
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 165px;
    height: 50px;
    left: 106px;
    top: 6224px;
    /* Donation green */
    background: #12e7b4;
    color: #fff;
    font-weight: 900;
    font-size: 16px;
    font-family: Lato;
    border-radius: 8px;
    border: none;
    margin-top: 14%;
    margin-bottom: 18%;
  }
  .donateButtonDiv {
      padding-bottom:18%
  }
`;

const About = props => {

    return (
      <AboutStyle>
        <Section>
          <Heading
            marginTop="5%"
            position="relative"
            heroText="DONATE TO US"
            letterSpacing="4px"
            marginBottom="10%"
          />
          {/* <Image position="relative" image={props.aboutImage} /> */}
          <BodyText bodyText="Support our work. We appreciate all donations. Your donation helps us make a better future for everyone. " />
          <div className="donateButtonDiv">
            <button>DONATE TO US</button>
          </div>
        </Section>
      </AboutStyle>
    );
};

export default About;
