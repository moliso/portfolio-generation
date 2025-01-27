import mariadb from "mariadb"

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    connectionLimit: 5,
    acquireTimeout: Number(process.env.DB_TIMEOUT)
})

const getConnection = () => { return pool.getConnection() }

const database = process.env.DB_DATABASE

function executeQuery(options: { query: string, values?: any, batch?: boolean }): Promise<any> {
    return getConnection()
        .then(async conn => {
            let result: Promise<any> | mariadb.UpsertResult | mariadb.UpsertResult[]

            try {
                if (options.batch) {
                    result = await conn.batch(options.query, options.values);
                } else {
                    result = await conn.query(options.query, options.values);
                }
            } catch (err: any) {
                conn.end();
                err.dbErrorType = "query";
                err.status = 500;
                return Promise.reject(err)
            }
            conn.end()

            return result
        })
        .catch(err => {
            if (!err.dbErrorType) {
                err.dbErrorType = "connection"
                err.status = 500
            }
            return Promise.reject(err)
        })
}

export {
    executeQuery
}