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
    if (props.pageData) {
        console.log(props.pageData)

        return (
            <Section>
                <Heading backgroundColor="blue" heading={props.pageData.title.rendered} />
                <Image />
                <BodyText bodyText={props.pageData.content.rendered}/>
                <Button />
            </Section>
        )
    } else {
        return null
    }
}

export default About

