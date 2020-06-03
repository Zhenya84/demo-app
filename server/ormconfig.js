const {
	resolve
} = require('path')

module.exports = [{
		// url - Connection url where perform connection to. Please note that other connection options will override parameters set from url.
		// debug: true,
		type: 'mysql',
		charset: "utf8mb4",
		extra: {
			charset: "utf8mb4",
		},
		host: 'localhost',
		port: 3306,
		username: 'root',
		password: 'qwerty',
		name: 'development',
		database: 'myapp',
		logging: ['query', 'schema', 'error'],
		dropSchema: true,
		synchronize: true,
		entities: [resolve(__dirname, 'app/entity/**/*{.ts,.js}')],
		// migrations: [resolve(__dirname, 'app/migration/**/**{.ts,.js}')],
	}
]