'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true },
      name: STRING(64),
      account:	{ type: STRING(64), primaryKey: true, unique: true },
      mobile:	{ type: STRING(64), unique: true },
      password:	STRING(64),
      login_count:	INTEGER,
      last_login:	STRING(64),
      email:	{ type: STRING(64), unique: true },
      url:	STRING(255),
      creat_time:	STRING(64),
    });
  },

  down: async queryInterface => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');
  },
};
