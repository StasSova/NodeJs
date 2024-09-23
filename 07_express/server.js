import express from "express";
import "dotenv/config";
import user_routes from "./routers/user-routers.js";
import product_routes from "./routers/products-routers.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public")); // middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", user_routes);
app.use("/product", product_routes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// app.use(express.static("file3")); // middleware
// app.use(express.static("file2")); // middleware

// app.get("/prod", (req, res) => {
//   console.log(req.url);
//   res.status(233).send("<h1>Hello world</h1>");
// });
//
// app.get("/prod/images", (req, res) => {
//   console.log(req.url);
//   res.sendFile(
//     path.join(import.meta.dirname, "public", "pages", "/index.html"),
//   );
// });
//
// app.get("/prod/:id", (req, res) => {
//   console.log(req.url);
//   res.status(233).send(`<h1>Products ID: ${req.params.id}</h1>`);
// });

// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });
