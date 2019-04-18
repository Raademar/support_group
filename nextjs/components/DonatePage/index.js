import Link from 'next/link'
import styled from 'styled-components'
import BodyText from '../BodyText'
import Image from '../Image'
import Heading from '../Heading'
import Section from '../Section'

const DonateStyle = styled.div`
    background-color:   #CEFFF3;
    img{
        margin-bottom: 24px;
    }
`;

const DonatePage = props => {
        // console.log(props.isDesktop)

        return (
          <DonateStyle {...props}>
            <Section
                    backgroundColor="#CEFFF3"
            >
              <Heading 
                backgroundColor="#CEFFF3"
                heroText="DONATE TO US" 
                position="relative"
                paddingTop="14%"
                textAlign="left"
                color="#1C1C1C"
                fontWeight="normal"
            />
              <BodyText 
                bodyText="Support our work. We appreciate all donations. Your donation helps us make a better future for everyone." 
                backgroundColor="#CEFFF3"
                textAlign="left"
                marginBottom="50px"
                // fontWeight="lighter"
                lineHeight="30px"
                />

                    <img src="/static/images/swish.png" alt="swish"/>
                    <img src="/static/images/bankgiro.png" alt="bakgiro"/>
            </Section>
          </DonateStyle>
        );
}

export default DonatePage
