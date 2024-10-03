import {app} from "./index.js";
import { port } from "./config/server.js";

app.listen(port, () => {
    console.log(`server is running on port `.blue + ` http://localhost:${port}/ `.green);
});