const http = require("http");
const DatabaseService = require("./src/database/databaseService.js");
const app = require("./src/routes/router/postRouter.js");

async function initialize() {
    await DatabaseService.init();

    const server = http.createServer(app);

    server.listen(process.env.PORT || 5000, () =>
        console.log(`Server running on port ${process.env.PORT || 5000}`)
    );
}

initialize();