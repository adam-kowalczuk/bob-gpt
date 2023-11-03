import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//Connection
const PORT = process.env.PORT || 8080;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log("Server running on PORT 8080 and connected to database.")
    );
  })
  .catch((err) => console.log(err));
