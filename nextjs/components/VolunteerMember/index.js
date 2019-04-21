import styled from 'styled-components'
import Volunteer from '../Volunteer'
import Member from '../Member'

const StyledVolunteerMember = styled.div`
	display: ${props => (props.isDesktop ? 'flex' : '')};
`

const VolunteerMember = props => {
	// console.log(props.isDesktop)

	return (
		<StyledVolunteerMember {...props}>
			<Member
				pageData={props.pageData}
				aboutImage={props.aboutImage}
				isDesktop={props.isDesktop}
				memberData={props.memberData}
			/>
			<Volunteer
				pageData={props.pageData}
				aboutImage={props.aboutImage}
				isDesktop={props.isDesktop}
				volunteerData={props.volunteerData}
			/>
		</StyledVolunteerMember>
	)
}

export default VolunteerMember
