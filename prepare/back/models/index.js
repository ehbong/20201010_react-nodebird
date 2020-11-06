/** @format */

const Sequelize = require("sequelize");
// 환경 설정 정보 가져오기
const env = process.env.NODE_ENV || "development";
// 환경에 맞는 DB 설정 불러오기
const config = require("./../config/config")[env];
const db = {};

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
