import express, { Application } from "express";
import 'dotenv/config'
import routerAdmin from "./routes/admin.routes";
import seedData from "./config/seed";



const app = express();

app.set("view engine", "ejs");
app.set('views', __dirname + '/views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//config static files
app.use(express.static('public'))

app.use('/admin', routerAdmin);
seedData()
// app.use('/', routerUser);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
