import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'

const SectionStyle = styled.section`
  margin-left: ${props => props.marginLeft || "24px"};
  margin-right: ${props => props.marginRight || "24px"};
  padding-top: ${props => props.paddingTop || "80px"};
  padding-bottom: ${props => props.paddingBottom || "24px"};
  margin-top: 0px;
  background-color: ${props => props.backgroundColor};
  width: ${props => props.width};
  left: ${props => props.left || "0"};
  display: ${props => props.display};
  height: ${props => props.height};
`;

const Section = props => {
	const { children } = props
	return <SectionStyle {...props}>{children}</SectionStyle>
}
export default Section
