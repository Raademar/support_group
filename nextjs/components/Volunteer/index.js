import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import BodyText from '../BodyText'
import Image from '../Image'
import Heading from '../Heading'
import Section from '../Section'

const VolunteerStyle = styled.div`
    position: relative;
	margin: 0 auto;
	height: 100vh;
	background-color: ${props => props.backGroundColor || '#3D73CF'};

    svg{
        position: absolute;
        z-index: 1;
        margin-top: -109px;
        left: 0;
        bottom: 0;
    }
`

const Volunteer = props => {
    if (props.pageData) {
        // console.log(props.pageData)

        return (
            <VolunteerStyle>
                <Section backgroundColor="#3D73CF">
                    <Heading
                        textAlign="left"
                        position="relative"
                        heroText="BECOME A VOLUNTEER"
                        width="70%"
                        paddingTop="46px"
                        color="#fff"
                        // heroText={props.pageData.title.rendered}
                    />
                    <BodyText
                        position="relative"
                        textAlign="left"
                        width="96%"
                        color="#fff"
                        marginTop="18px"
                        lineHeight="140%"
                        bodyText={props.pageData.content.rendered}

                    />
                    <Button 
                        position="absolute"
                        color="#000" 
                        fontSize="16px" 
                        width="198px" 
                        height="52px" 
                        text="BECOME A VOLUNTEER"
                        marginTop="12%"
                        marginBottom="90px"
                        zIndex="3"
                    />
                    <Image  
                        position="relative" 
                        image={props.VolunteerImage} 
                    />
                    <BodyText
                        position="absolute"
                        bodyText="“As a member i get a democratic possibility to vote. That together with all fun activities makes my membership a great thing.”
                        Kajsa Nilsson"
                        textAlign="left"
                        fontSize="14px"
                        widthP="50%"
                        zIndex="3"
                        marginBottom="24%"
                        width="50%"
                        left="40%"
                        lineHeight="130%"
                        bottom="0"
                        />
                    {/* <img src="../../static/images/voul_bg.svg" alt="bg" /> */}

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 317.7"><path d="M0 317l.9.6h345.8V198.3c3.1-64.8-16.5-188-119.8-162.7C97.8 67.2 55.2 46.1 10.5 7.7 7.1 4.8 3.6 2.2 0 0v317z" fill="#fff" /></svg>

                </Section>
            </VolunteerStyle>
        )
    } else {
        return null
    }
}

export default Volunteer
