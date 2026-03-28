// server.js
import app from "./app.js";

const port = 3000;
app.listen(port, "localhost", () => {
  console.log(`Server started on port ${port}, urls for tests:`);
  console.log(
    ` ${encodeURI(`http://localhost:${port}/tasks/`)} \n`,
    `${encodeURI(`http://localhost:${port}/health/`)} \n`,
    `${encodeURI(`http://localhost:${port}/`)} \n`,
  );
});
