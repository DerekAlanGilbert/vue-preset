const appConfig = require('./src/app.config')
module.exports = {
	configureWebpack: {
		name: appConfig.title,
		resolve: {
			alias: {
				'@': '.',
				'@src': 'src',
				'@router': 'src/router',
				'@views': 'src/router/views',
				'@layouts': 'src/router/layouts',
				'@components': 'src/components',
				'@assets': 'src/assets',
				'@utils': 'src/utils',
				'@state': 'src/state',
				'@design': 'src/design/index.scss'
			}
		}
	}
}
