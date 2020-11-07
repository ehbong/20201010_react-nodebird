/** @format */
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    // MySQL 에 Comment 테이블 생성
    "Comment",
    {
      // id 는 기본적으로 포함
      content: {
        type: DataTypes.STRING(140),
        allowNull: false, //필수
      },
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    },
  );
  Comment.accociate = (db) => {};
  return Comment;
};
