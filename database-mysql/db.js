    
const Sequelize = require("sequelize");

//Database connection
const db = new Sequelize('userdb', 'root', 'root', {
    host: 'localhost',
    dialect:'mysql'
  });

db.sync({ force: false, logging: false  }).then(() => {
    console.log(`Database & tables created!`)
});

module.exports.db = db;
module.exports.Sequelize = Sequelize;