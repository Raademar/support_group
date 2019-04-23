import React from 'react'
import styled from 'styled-components'
import Heading from '../Heading'
import Section from '../Section'

const StyledVolunteer = styled.div`
  height: ${props => (props.isDesktop ? "50vh" : "100vh")};
  width: 100%;
  background: #3d73cf;
  color: #fff;
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    line-height: 28px;
    letter-spacing: 0.04em;
  }
  span {
    font-size: 42px;
    position: absolute;
    right: 24px;
    top: 8px;
  }
  input {
    height: 30px;
    padding: 10px 0 10px 10px;
  }
  textarea {
    padding: 18px 0 0 10px;
    padding-top: -10px;
  }
  input,
  textarea {
    width: 96%;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    margin: 2px 0;
    /* font-size: 20px; */
    font-family: Lato;
    color: #1c1c1c;
  }
  button {
    background-color: #2f86ed;
    border-radius: 8px;
    left: 0%;
    right: 0%;
    top: 0.39%;
    bottom: 0%;
    height: 51px;
    width: 100%;
    margin-top: 1.2em;
    color: #1c1c1c	;
    font-size: 18px;
    border: none;
    background-color: #ffd256;
  }
  form p {
    margin-bottom: 1px;
    font-weight: normal;
  }
`;

const VolunteerModal = props => {
	return (
    <StyledVolunteer {...props}>
      <Section>
        <span onClick={props.toggleModal}>&times;</span>
        <Heading
          heroText="BECOME A Voluenteer"
          color="#fff"
          position="initial"
          textAlign="lefft"
        />
        <p>
          Do you have any questions about our work? Do you want to work with
          us? Give us a message!
        </p>
        <form action="" method="get" id="contact">
          <p>Name</p>
          <input type="text" name="name" placeholder="Name" />
          <p>Email</p>
          <input type="mail" name="mail" placeholder="Email" />
          <p>Telephone</p>
          <input type="mail" name="mail" placeholder="Telephone" />
          <p>Name</p>
          <textarea type="" name="message" placeholder="Message" rows="8" />
        </form>
        <button
          type="submit"
          form="contact"
          value="Submit"
        >
          Send Request
        </button>
      </Section>
    </StyledVolunteer>
  );
}

export default VolunteerModal
