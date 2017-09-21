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
  timezone: '+8:00',
  dateStrings: true
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection to MySQL has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
let users = sequelize.define("users", {
  user_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    // allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },

}, {
    timestamps: false
  }
);
let projects = sequelize.define("projects", {
  project_id: {
    type: Sequelize.INTEGER,
    // allowNull: false,
    primaryKey: true
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  project_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  project_description: {
    type: Sequelize.TEXT,
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
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  project_id: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  issue_title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  issue_statu: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  issue_content: {
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

let issue_items = sequelize.define("issue_items", {
  issue_item_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  issue_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  issue_item_content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  issue_item_time: {
    type: Sequelize.DATE,
    allowNull: true
  }
}, {
    timestamps: false
  }
);


let myTable = {
  users:users,
  projects: projects,
  issues: issues,
  issue_items: issue_items
};

module.exports = myTable;    