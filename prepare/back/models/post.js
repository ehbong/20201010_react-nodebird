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
  Post.accociate = (db) => {
    db.Post.belongsTo(db.User);
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.Hashtag); // belongsToMany 는 다대다 서로 매칭할 수 있는 임의의 테이블이 생성
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" }); // belongsToMany 는 다대다 서로 매칭할 수 있는 임의의 테이블이 생성
  };
  return Post;
};
