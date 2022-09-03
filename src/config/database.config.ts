export default (): Record<string, any> => ({
    databaseHost: process.env.DB_HOST,
    databasePort: parseInt(process.env.DB_PORT,10) || 3306,
    databaseUsername: process.env.DB_USER,
    databasePassword: process.env.DB_PASSWORD,
    databaseName: process.env.DB_NAME
})