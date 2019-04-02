import Link from 'next/link'
import styled from 'styled-components'
import Axios from 'axios';

const Image = styled.div`
		display: flex;
		flex-direction: column;
		grid-column: 3;

`

const url = 'http://wordpress_3.test/wp-json/wp/v2/media/';

Axios.get(url).then(response => console.log(response))

export default () => {
	return (
	<Image>
		<img src="" alt="LOGO" />
	</Image>
	)}	


