import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import BodyText from '../BodyText'
import Image from '../Image'
import Heading from '../Heading'
import Section from '../Section'

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

	.textarea {
		height: 100px;
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
		/* font-weight: bold; */
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
	.socialIcons {
		margin-left: 64vw;
		display: absolute;
		z-index: 7;
		margin-top: -40px;
		margin-bottom: 36px;
		align-content: right;
		align-items: right;
		justify-content: right;
		img {
			margin-left: 20px;
			right: 400px;
		}
	}
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
			font-weight: lighter;
		}
	}
`


const Contact = props => {
	render()
	return (
		<ContactStyle>
			<Section>
				<Heading
					heroText="CONTACT"
					position="relative"
					marginTop="2em"
					color="#1C1C1C"
					textAlign="left"
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
					<input className="textarea" type="textarea" name="subject" value="" />
				</form>
				<button type="submit" form="contact" value="Submit">
					Submit
				</button>
			</Section>
			<Section marginTop="20px" paddingTop="0px;">
				<Heading
					heroText="OUR PLACES AND CITIES"
					position="relativ"
					marginTop="2em"
					color="#1C1C1C"
					marginBottom="30px"
					textAlign="left"
				/>
				{props.branchesData.map((item, index) => (
					<div className="branches">
						<img src={`${item.acf.image}`} />
						<h3 key={index}>{`${item.title.rendered}`}</h3>
						<p>{`${item.acf.adress}`}</p>
						<p>{`${item.acf.postal_nr_and_city}`}</p>
						<p>{`${item.acf.phone}`}</p>
						<div className="socialIcons">
							<a href="http://www.facebook.com">
								<img src="/static/images/fb_icon.png" />
							</a>
							<a href="http://www.instagram.com">
								<img src="/static/images/ig_icon.png" />
							</a>
						</div>
					</div>
				))}
			</Section>
		</ContactStyle>
	)
}

export default Contact
