const routes = require('next-routes')

// Setup router.
module.exports = routes()
	.add('index', '/')
	.add('branches')
	.add('member')
	.add('volunteer')
	.add('about')
	.add('donations')
	.add('contact')
	.add('single', '/branches/:slug')
