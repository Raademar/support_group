import Navigation from '../components/Navigation'
import styled from 'styled-components'
import Head from 'next/head'
import { Fragment } from 'react'

export default () => (
	<Fragment>
		<Navigation />
		<Head>
			<title>This is our page title!</title>
			<meta
				name="description"
				content="This is an example of a meta description. This will show up in search results."
			/>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<h1>Our home page!</h1>
	</Fragment>
)
