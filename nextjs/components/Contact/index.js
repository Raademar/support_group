import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import BodyText from '../BodyText'
import Image from '../Image'
import Heading from '../Heading'
import Section from '../Section'
import Layout from '../Layout'

const ContactStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #dfeafa;

	input {
		width: 100%;
		height: 40px;
		-webkit-border-radius: 8px;
		-moz-border-radius: 8px;
		border-radius: 8px;
		border: none;
		font-weight: bold;
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
	p {
		font-weight: lighter;
	}

	/* & .image img{
            margin-top: 1.6em;
            width: 100%;
            /* display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center; */
	/* } */
	*/ & .members {
		margin-top: 1em;
		grid-template-columns: 1fr 3fr;
		display: grid;
		align-items: center;
		margin-left: 24px;
		margin-right: 24px;
		width: 90%;

		p {
			margin-right: 24px;
			font-weight: bold;
		}
	}
`

const Contact = props => {
	return (
		<ContactStyle>
			<Layout navigationMenu={props.pages}>
				<Section>
					<Heading
						heroText="CONTACT"
						position="relativ"
						marginTop="2em"
						color="#1C1C1C"
					/>
					<BodyText
						bodyText="Do you have any questions about our work? Give us a message!"
						textAlign="left"
						lineHeight="180%"
					/>
					<form action="" method="get" id="contact">
						<p>Name</p>
						<input type="text" name="Name" value="" />
						<p>E-mail</p>
						<input type="mail" name="mail" value="" />
						<p>Subject</p>
						<input type="subject" name="subject" value="" />
						<p>Message</p>
						<input type="textarea" name="subject" value="" />
					</form>
					<button type="submit" form="contact" value="Submit">
						Submit
					</button>
				</Section>
				<Section>
					<Heading
						heroText="OUR PLACES AND CITIES"
						position="relativ"
						marginTop="2em"
						color="#1C1C1C"
					/>
					{props.branchesData.map((item, index) => (
						<div className="branches">
							<img src={`${item.acf.image}`} />
							<h3 key={index}>{`${item.title.rendered}`}</h3>
							<p key={index}>{`${item.acf.adress}`}</p>
							<p key={index}>{`${item.acf.postal_nr_and_city}`}</p>
							<p key={index}>{`${item.acf.phone}`}</p>
						</div>
					))}
				</Section>
			</Layout>
		</ContactStyle>
	)
}

export default Contact
