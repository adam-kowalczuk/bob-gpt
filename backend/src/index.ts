import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//Connection
connectToDatabase()
  .then(() => {
    app.listen(8080, () => console.log("Server running on PORT 8080"));
  })
  .catch((err) => console.log(err));
