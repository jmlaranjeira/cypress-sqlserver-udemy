const { defineConfig } = require("cypress");

const sqlServer = require('cypress-sql-server');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      tasks = sqlServer.loadDBPlugin(config.db);
      on('task', tasks);
    },
  },
  db: {
    userName: "jmlaranjeira",
    password: "d4fdtzpMNeYy53o1FapT",
    server: "servermex.database.windows.net",
    options: {
        database: "udemyacademy",
        encrypt: true,
        rowCollectionOnRequestCompletion : true
    }
}
});
