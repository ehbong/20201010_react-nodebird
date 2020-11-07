/** @format */
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define(
    // MySQL 에 Image 테이블 생성
    "Image",
    {
      // id 는 기본적으로 포함
      src: {
        type: DataTypes.STRING(200),
        allowNull: false, //필수
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    },
  );
  Image.accociate = (db) => {};
  return Image;
};
