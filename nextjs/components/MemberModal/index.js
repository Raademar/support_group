import React from 'react'
import styled from 'styled-components'
import Heading from '../Heading'
import Section from '../Section'

const StyledModal = styled.div`
  height: 100%;
  width: 100%;
  background: #ffdd7e;
  color: #1c1c1c;
  position: fixed;
  top: 0%;
  left: 0;
  z-index: 999;
  p {
    line-height: 28px;
    letter-spacing: 0.04em;
  }

  section {
	padding-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
  }
  span {
    font-size: 52px;
    /* position: absolute;
		right: 24px;
		top: 8px; */
    align-self: flex-end;
  }
  input {
    height: 30px;
    padding: 10px 0 10px 10px;
  }
  textarea {
    padding: 18px 0 0 10px;
  }
  input,
  textarea {
    width: 96%;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    border: none;
    font-weight: normal;
    margin: 0px 0;
    /* font-size: 20px; */
    font-family: Lato;
    color: #1c1c1c;
  }
  button {
    background-color: ${props =>
      props.memberMessageSent ? "#1b1b1b" : "#2f86ed"};
    border-radius: 8px;
    left: 0%;
    right: 0%;
    top: 0.39%;
    bottom: 0%;
    height: 51px;
    width: 100%;
    margin-top: 1.2em;
    color: white;
    font-size: 18px;
    border: none;
  }
  form p {
    margin-bottom: 6px;
    font-weight: normal;
  }
`;

const MemberModal = props => {
	return (
		<StyledModal {...props}>
			<Section>
				<span onClick={props.toggleModal}>&times;</span>
				<Heading
					heroText={
						props.memberMessageSent
							? 'THANK YOU FOR YOUR MESSAGE'
							: 'BECOME A MEMBER'
					}
					color="#1c1c1c"
					position="initial"
					textAlign="left"
				/>
				<p>
					Do you have any questions about our work? Do you want to work with us?
					Give us a message!
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
				<button form="contact" onClick={props.submitMemberMessage}>
					{props.memberMessageSent ? 'MESSAGE SENT' : 'SEND REQUEST'}
				</button>
			</Section>
		</StyledModal>
	)
}

export default MemberModal
