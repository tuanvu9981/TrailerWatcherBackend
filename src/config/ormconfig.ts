import { DataSource } from "typeorm"

export const dataSource = new DataSource({
    host: process.env.DB_HOST,
    type: 'mysql',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    migrations: [
        'src/database/migrations/*.ts',
    ],
    // synchronize: false
    // cli: {
    //     migrationsDir: 'src/database/migrations'
    // }
});

dataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
