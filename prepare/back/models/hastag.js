/** @format */
module.exports = (sequelize, DataTypes) => {
  const Hashtag = sequelize.define(
    // MySQL 에 Hashtag 테이블 생성
    "Hashtag",
    {
      // id 는 기본적으로 포함
      name: {
        type: DataTypes.STRING(20),
        allowNull: false, //필수
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    },
  );
  Hashtag.accociate = (db) => {
    db.Hashtag.belongsToMany(db.Post);
  };
  return Hashtag;
};
