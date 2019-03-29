import Link from 'next/link'

export default () => (
	<ul>
		<li>
			<Link href="/">
				<a href="/">Home</a>
			</Link>
		</li>
		<li>
			<Link href="/branches">
				<a href="/branches">Posts</a>
			</Link>
		</li>
	</ul>
)
