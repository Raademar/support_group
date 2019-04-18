import Link from 'next/link'
import styled from 'styled-components'
import BodyText from '../BodyText'
import Heading from '../Heading'
import Section from '../Section'

const GdprStyle = styled.div`

`;

const GdprPage = props => {
    // console.log(props.gdprData)

    return (
      <GdprStyle {...props}>
        <Section backgroundColor="#fff">
          {props.gdprData.map((item, index) => (
            <div className="gdprInfo">
              <Heading
                heroText={item.title.rendered}
                textAlign="left"
                key={index}
                position="relative"
                paddingTop="4%"
                color="393939"
              />
              <BodyText
                bodyText={`${item.content.rendered}`}
                textAlign="left"
              />
            </div>
          ))}
        </Section>
      </GdprStyle>
    );
}

export default GdprPage
