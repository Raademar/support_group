import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'

const SectionStyle = styled.section`
	margin-left: 24px;
	margin-right: 24px;
	background-color: ${props => props.backGroundColor};
`

const Section = props => {
	const { children } = props
	return <SectionStyle>{children}</SectionStyle>
}
export default Section
