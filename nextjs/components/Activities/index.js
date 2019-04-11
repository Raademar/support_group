import Link from 'next/link'
import styled from 'styled-components'
import Button from '../Button'
import Heading from '../Heading'

const ActivitiesList = styled.section`
  padding: 0;
  margin: 0;
  height: auto;
  text-align: center;
  position: relative;
  height: 100vh;
  & ul {
    list-style-type: none;
    width: 100vw;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    margin-top: 4em;
  }
  & img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-bottom: 12px;
  }
  & div {
    grid-template-columns: 3fr 1fr;
    left: 0;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: 40px;
  }
`;

const getBeer = async () => {
  await fetch(
    `http://${process.env.HOSTNAME}wp-json/wp/v2/media?parent=${index}`
  )
    .then(res => res.json())
    .then(data => data);
    return data
};

const Activities = props => {
    if (props.activitiesData || props.activitisImage) {
      const activitiesData = props.activitiesData;
      const activitiesImage = props.activitiesImage;
      console.log(activitiesData);
      // console.log(activitiesImage);


      //wordpress_3.test/wp-json/wp/v2/media?parent=88
      http: return (
              <ActivitiesList {...props}>
                <Heading
                  heroText="ACTIVITIES"
                  position="relative"
                />
                <ul>
                  {activitiesData.map((item, index) => (
                    <div>
                      <img src={`${item.acf.Image}`} />
                      <li key={index}>{`${
                        item.title.rendered
                      }`}</li>
                    </div>
                  ))}
                </ul>
              </ActivitiesList>
            );
    } else {
      return null;
    }
}
     

export default Activities
