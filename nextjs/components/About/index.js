import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import BodyText from '../BodyText';
import Image from '../Image';
import Heading from '../Heading';
import Section from '../Section';

const AboutStyle = styled.div`

            margin: 0 auto;
            height: 100vh;
            background-color: ${props => props.backgroundColor || 'white'};
`

const About = props => {
    if (props.pageData) {
        console.log(props.pageData)

        return (
            <AboutStyle>
                <Section>
                    <Heading position="relative" heroText={props.pageData.title.rendered} />
                    {/* <Image position="relative" image={props.aboutImage} /> */}
                    <BodyText position="relative" bodyText={props.pageData.content.rendered}/>
                    {/* <Button /> */}
                </Section>
            </AboutStyle>
        )
    } else {
        return null
    }
}

export default About

