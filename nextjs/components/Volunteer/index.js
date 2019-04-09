import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import BodyText from '../BodyText'
import Image from '../Image'
import Heading from '../Heading'
import Section from '../Section'

const VolunteerStyle = styled.div`
	margin: 0 auto;
	height: 100vh;
	background-color: ${props => props.backGroundColor || '#558FF0'};

    img{
        position: absolute;
        z-index: 1;
        margin-top: 21px;
        left: 0;
    }
`

const Volunteer = props => {
    if (props.pageData) {
        console.log(props.pageData)

        return (
            <VolunteerStyle>
                <Section backgroundColor="#558FF0">
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
                        widthP="90%"
                        color="#fff"
                        marginTop="18px"
                        lineHeight="140%"
                        bodyText={props.pageData.content.rendered}

                    />
                    <Button 
                         position="absolute"
                        color="#fff" 
                        fontSize="16px" 
                        width="198px" 
                        height="52px" 
                        text="BECOME A VOLUNTEER"
                        marginTop="50px"
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
                        widthP="50%"
                        zIndex="3"
                        marginTop="150px;"
                        />
                    <img src="../../static/images/voul_bg.svg" alt="bg" />
                </Section>
            </VolunteerStyle>
        )
    } else {
        return null
    }
}

export default Volunteer
