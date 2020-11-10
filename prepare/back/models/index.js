/** @format */

const Sequelize = require("sequelize");
// 환경 설정 정보 가져오기
const env = process.env.NODE_ENV || "development";
// 환경에 맞는 DB 설정 불러오기
const config = require("./../config/config")[env];
const db = {};

db.Comment = require("./comment")(sequelize, Sequelize);
db.Hashtag = require("./hashtag")(sequelize, Sequelize);
db.Image = require("./image")(sequelize, Sequelize);
db.Comment = require("./comment")(sequelize, Sequelize);
db.Post = require("./post")(sequelize, Sequelize);
db.User = require("./user")(sequelize, Sequelize);

// 시퀄라이즈 객체 가져오기
const sequelize = new Sequelize(config.database, config.username, config.password, config);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
