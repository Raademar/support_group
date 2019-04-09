import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'

const SectionStyle = styled.section`
	margin-left: 24px;
	margin-right: 24px;
	margin-top: 0px;
	background-color: ${props => props.backgroundColor };
`

const Section = props => {
	const { children } = props
	return <SectionStyle {...props}>{children}</SectionStyle>
}
export default Section
