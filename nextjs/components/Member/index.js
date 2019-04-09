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
`

const Member = props => {
    if (props.pageData) {
        console.log(props.pageData)

        return (
            <MemberStyle>
                <Section backgroundColor="#FFDD7E">
                    <Heading
                        textAlign="left"
                        position="relative"
                        heroText="BECOME A MEMBER"
                        width="70%"
                        paddingTop="46px"
                        color="black"
                        // heroText={props.pageData.title.rendered}
                    />
                    <BodyText
                        position="relative"
                        bodyText={props.pageData.content.rendered}
                        textAlign="left"
                        width="80%"
                        lineHeight="140%"
                        color="white"
                    />
                    <Button 
                        color="#fff" 
                        fontSize="16px" 
                        width="198px" 
                        height="52px" 
                        text="BECOME A MEMBER"
                        marginTop="50px"
                        marginBottom="150px"
                        primary
                    />
                    <Image  
                        position="relative" 
                        image={props.MemberImage} 
                    />
                    <BodyText
                        position="absolute"
                        marginTop="70vh"
                        bodyText="“As a member i get a democratic possibility to vote. That together with all fun activities makes my membership a great thing.”
                        Kajsa Nilsson"
                        textAlign="left"
                        widthP="90%"
                        
                    />
                    
                </Section>
            </MemberStyle>
        )
    } else {
        return null
    }
}

export default Member
