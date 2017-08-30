//sequelize
let Sequelize = require("sequelize");
let sequelize = new Sequelize("issue", "root", "root", {
  dialect: "mysql", // or "sqlite", "postgres", "mariadb"
  port: 3306, // or 5432 (for postgres)
  pool: {
    max: 10,
    min: 0,
    idle: 10000
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to MySQL has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

let projects = sequelize.define("projects", {
  project_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  project_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  project_issue_sum: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  project_issue_close: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  project_issue_open: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
}, {
    timestamps: false           // this will deactivate the timestamp columns
  }
);

let issues = sequelize.define("issues", {
  issue_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  project_id: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  issue_statu: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  issue_cotent: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  issue_time: {
    type: Sequelize.DATE,
    allowNull: true
  },
  issue_type: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  issue_degree: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
}, {
    timestamps: false
  }
);

let myTable = {
  projects: projects,
  issues: issues
};

module.exports = myTable;    