/** @format */
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    // MySQL 에 User 테이블 생성
    "User",
    {
      // id 는 기본적으로 포함
      email: {
        type: DataTypes.STRING(30),
        allowNull: false, //필수
        unique: true, // 고유 값
      },
      nickname: {
        type: DataTypes.STRING(30),
        allowNull: false, //필수},
      },
      password: {
        type: DataTypes.STRING(30),
        allowNull: false, //필수},
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    },
  );
  User.accociate = (db) => {};
  return User;
};
