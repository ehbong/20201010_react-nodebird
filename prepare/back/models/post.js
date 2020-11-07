/** @format */
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    // MySQL 에 Post 테이블 생성
    "Post",
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
  Post.accociate = (db) => {};
  return Post;
};
