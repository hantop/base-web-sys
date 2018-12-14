
const _config ={
	'development': {
		// baseURL: '/dsIntegration-manager',
		baseURL: '',
		BASE_FILE_URL: ''
	},
	'test': this.development,
	'production': {
		baseURL: 'http://172.16.10.37:8081',
		BASE_FILE_URL: ''
	}
}
const baseURL = _config[process.env.NODE_ENV].baseURL

export { baseURL }
