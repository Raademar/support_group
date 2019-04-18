import React from 'react'
import styled from 'styled-components'
import Heading from '../Heading'
import Section from '../Section'

const StyledVolunteer = styled.div`
	height: ${props => (props.isDesktop ? '50vh' : '87vh')};
	width: 100%;
	background: #ffdd7e;
	color: #1c1c1c;
	position: fixed;
	top: 15%;
	left: 0;
	z-index: 99;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	span {
		font-size: 42px;
		position: absolute;
		right: 24px;
		top: 8px;
	}
	input {
		height: 40px;
		padding: 10px 0 10px 24px;
	}
	textarea {
		padding: 20px 0 0 24px;
	}
	input,
	textarea {
		width: 90%;
		-webkit-border-radius: 8px;
		-moz-border-radius: 8px;
		border-radius: 8px;
		border: none;
		font-weight: bold;
		margin: 8px 0;
		font-size: 20px;
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
		margin-top: 2em;
		color: white;
		font-size: 18px;
		border: none;
	}
	form p {
		margin-bottom: 6px;
		font-weight: bold;
	}
`

const VolunteerModal = props => {
	return (
    <StyledVolunteer {...props}>
      <Section>
        <span onClick={props.toggleModal}>&times;</span>
        <Heading
          heroText="BECOME A MEMBER"
          color="#1c1c1c"
          position="initial"
        />
        <p>
          Do you have any questions about our work? Do you want to work with
          us? Give us a message!
        </p>
        <form action="" method="get" id="contact">
          <input type="text" name="name" placeholder="Name" />
          <input type="mail" name="mail" placeholder="Email" />
          <textarea type="" name="message" placeholder="Message" rows="8" />
        </form>
        <button type="submit" form="contact" value="Submit">
          Send Request
        </button>
      </Section>
    </StyledVolunteer>
  );
}

export default VolunteerModal
