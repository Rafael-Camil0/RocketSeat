const createUsers = `
    CREATE TABLE IF NOT EXISTS users(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name varchar,
	email varchar,
	password varchar ,
	avatar varchar NULL ,
	created_at Timestamp DEFAULT Current_timestamp,
	update_at Timestamp DEFAULT Current_timestamp


);
`
module.exports = createUsers;