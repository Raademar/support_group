import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import BodyText from '../BodyText'
import Image from '../Image'
import Heading from '../Heading'
import Section from '../Section'
import Layout from '../Layout'

const ContactStyle = styled.div`
	/* margin: 0 auto;
	background-color: ${props => props.backgroundColor || "white"};
	margin-top: 3em; */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #DFEAFA;

      input{
          width:100%;
          height: 40px;
          -webkit-border-radius: 8px;
            -moz-border-radius: 8px;
            border-radius: 8px;
            border: none;
            font-weight: bold;
      }
      button{
            background-color: #2F86ED;
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
      form p{
             margin-bottom: 6px;
            font-weight: bold;
      }

      & .image img{
            margin-top: 1.6em;
            width: 100%;
            /* display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center; */
      }

      

      & .members{
        margin-top: 1em;
        grid-template-columns: 1fr 3fr;
        display: grid;
        align-items: center;
        margin-left: 24px;
        margin-right: 24px;
        width: 90%;

        & img{
          grid-column: 1;
        }

        p{
            margin-right: 24px;
            font-weight: bold;
        }
      }
`;

const Contact = props => {
    if (true) {
        // console.log(props.pageData)
        console.log(props.navigationMenu)

        return (
          <ContactStyle>
            <Layout navigationMenu={props.pages}>
              <Section>
                <Heading
                  heroText="CONTACT"
                  position="relativ"
                  marginTop="2em"
                />
                <BodyText
                  bodyText="Do you have any questions about our work? Give us a message!"
                  textAlign="left"
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
                        <button type="submit" form="contact" value="Submit">Submit</button>
              </Section>
              <Section>
                {/* <Heading
                  heroText={props.whatWeDo[0].title.rendered}
                  left="0"
                  position="relative"
                  marginTop="1em"
                />
                <BodyText
                  bodyText={props.whatWeDo[0].content.rendered}
                  lineHeight="180%"
                  textAlign="left"
                  fontSize="18"
                  width="100%"
                  paddingBottom="2em"
                /> */}
              </Section>
            </Layout>
          </ContactStyle>
        );
    } else {
        return null
    }
}

export default Contact
