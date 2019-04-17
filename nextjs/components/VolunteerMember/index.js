import Link from "next/link";
import styled from "styled-components";
import BodyText from "../BodyText";
import Image from "../Image";
import Heading from "../Heading";
import Section from "../Section";
import Volunteer from "../Volunteer";
import Member from "../Member";

const StyledVolunteerMember = styled.div`
    display:${props => props.isDesktop ? 'flex' : ''};
`;

const VolunteerMember = props => {
  
    // console.log(props.isDesktop)

    return (
      <StyledVolunteerMember {...props}>
        <Volunteer
          pageData={props.pageData}
          aboutImage={props.aboutImage}
          isDesktop={props.isDesktop}
        />
        <Member
          pageData={props.pageData}
          aboutImage={props.aboutImage}
          isDesktop={props.isDesktop}
        />
      </StyledVolunteerMember>
    );
};

export default VolunteerMember;
