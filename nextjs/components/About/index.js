import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import BodyText from '../BodyText';
import Image from '../Image';
import Heading from '../Heading';
import Section from '../Section';

const AboutStyle = styled.div`
            background-color: ${props => props.backgroundColor || 'white'};
`

const About = props => {
    console.log(props.About)
    return (
        <Section>
            <Heading backgroundColor="blue" />
            <Image />
            <BodyText />
            <Button />
        </Section>
    )
}
export default About