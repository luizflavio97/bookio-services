module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST || 'ec2-34-200-15-192.compute-1.amazonaws.com' ,
  username: process.env.DB_USER || 'ncojnmwbhcrxag' ,
  password: process.env.DB_PASSWORD || 'fc9f79fd7c17ce00512a378a849a5df3f7da316f0e6760017c3793c8cf00d1d2',
  database: process.env.DB_NAME || 'dd4itq3cqjh4j7',
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  define: {
    timestamps: false
  }
}