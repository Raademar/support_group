import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import BodyText from '../BodyText'
import Image from '../Image'
import Heading from '../Heading'
import Section from '../Section'

const MemberStyle = styled.div`
	margin: 0 auto;
	height: 100vh;
	background-color: ${props => props.backGroundColor || '#FFDD7E'};
    position: relative;

    svg{
        position: absolute;
        z-index: 1;
        margin-top:-109px;
        left: 0;
        bottom: 0;
    }   
    `

const Member = props => {
    if (props.pageData) {
        // console.log(props.pageData)

        return (
            <MemberStyle>
                <Section backgroundColor="#FFDD7E">
                    <Heading
                        textAlign="left"
                        position="relative"
                        heroText="BECOME A MEMBER"
                        width="90%"
                        paddingTop="46px"
                        color="black"
                        marginTop="0"
                        // heroText={props.pageData.title.rendered}
                    />
                    <BodyText
                        position="relative"
                        bodyText={props.pageData.content.rendered}
                        textAlign="left"
                        width="96%"
                        lineHeight="140%"
                        zIndex="3"
                    />
                    <Button 
                        color="#fff" 
                        fontSize="16px" 
                        width="198px" 
                        height="52px" 
                        text="BECOME A MEMBER"
                        marginTop="50px"
                        marginBottom="80px"
                        zIndex="2"
                        primary
                    />
                    <Image  
                        position="relative" 
                        image={props.MemberImage} 
                    />
                    <BodyText
                        position="absolute"
                        bodyText="“As a member i get a democratic possibility to vote. That together with all fun activities makes my membership a great thing.”
                        Kajsa Nilsson"
                        textAlign="left"
                        fontSize="14px"
                        widthP="50%"
                        zIndex="3"
                        marginBottom="44%"
                        width="50%"
                        left="6%"
                        lineHeight="130%"
                        bottom="0"

                        
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 375 363"><path d="M375 104.2C246.4 117.7 188.3 84 127.8 32.1 90.1-.3 41.6-9.2 0 10.1V363h375V104.2z" fill="#fff" /></svg>
                </Section>
            </MemberStyle>
        )
    } else {
        return null
    }
}

export default Member
