import React from 'react'
import styled from 'styled-components'
import Heading from '../Heading'
import Section from '../Section'

const StyledModal = styled.div`
	height: 80vh;
	width: 100%;
	background: #ffdd7e;
	color: #1c1c1c;
	position: absolute;
	top: 10%;
	left: 0;
	z-index: 99;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

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

const MemberModal = props => {
	return (
		<StyledModal {...props}>
			<Section>
				<Heading
					heroText="BECOME A MEMBER"
					color="#1c1c1c"
					position="initial"
				/>
				<p>
					Do you have any questions about our work? Do you want to work with us?
					Give us a message!
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
		</StyledModal>
	)
}

export default MemberModal
