const routes = require('next-routes')

// Setup router.
module.exports = routes()
	.add('index', '/')
	.add('branches')
	.add('single', '/branches/:slug')