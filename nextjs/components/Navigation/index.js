import Link from 'next/link'
import styled from 'styled-components'

const MenuItemsList = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 10%;
  display: flex;
  flex-direction: ${props => props.flexDir || "column"};
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  /* padding: 0 24px; */
  grid-column: ${props => props.gridCol || ""};
  & li {
    color: #fff;
    margin-top: 10%;
    & a {
      text-decoration: none;
      color: #fff;
      font-weight: 900;
      font-size: 18px;
    }
  }
  ul {
    padding-inline-start: 24px;

    & li {
      text-decoration: none;
      color: #fff;
      font-weight: 900;
      font-size: 18px;
      list-style: none;
      margin-top: 14%;
    }
  }
  .topMenu{
	  margin-top: 28%;
  }
`;

const Navigation = props => {
	if (props.navigationMenu) {
		const menuItem = props.navigationMenu
		// console.log(menuItem)

		return (
      <MenuItemsList {...props}>
        <div className="topMenu">
          {menuItem.map((item, index) => (
            <li key={index}>
              <Link href={`${item.url.toLowerCase()}`}>
                <a href={`${item.url.toLowerCase()}`}>
                  {`${item.title.toUpperCase()}`}
                </a>
              </Link>
            </li>
          ))}
        </div>
        <ul>
          <li>BECOME A MEMBER</li>
          <li>BECOME A VOLUNTEER</li>
          <li>DONATE TO US</li>
        </ul>
      </MenuItemsList>
    );
	} else {
		return null
	}
}
export default Navigation
