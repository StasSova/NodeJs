import { Router } from "express";
import path from "node:path";
const __dirname = path.dirname(import.meta.dirname);

const product_routes = Router();

let products = [
  { id: 1, title: "Laptop", price: 23 },
  { id: 2, title: "Smartphone", price: 3 },
];

product_routes
  .route("/")
  .get((req, res) => {
    res.sendFile(path.join(__dirname, "public", "pages", "form.html"));
  })
  .post((req, res) => {
    console.log(req.body);
    res.sendFile(path.join(__dirname, "public", "pages", "form.html"));
  });

// product_routes
//   .route("/")
//   .get((req, res) => {
//     res.json({ products });
//   })
//   .post((req, res) => {
//     const newProduct = req.body;
//     products.push(newProduct);
//     res.status(201).json(newProduct);
//   })
//   .delete((req, res) => {
//     products = [];
//     res.status(204).send();
//   });
//
// product_routes
//   .route("/:id")
//   .get((req, res) => {
//     const product = products.find((p) => p.id === parseInt(req.params.id));
//     if (product) {
//       res.json(product);
//     } else {
//       res.status(404).send("Product not found");
//     }
//   })
//   .delete((req, res) => {
//     products = products.filter((p) => p.id !== parseInt(req.params.id));
//     res.status(204).send();
//   })
//   .put((req, res) => {
//     const productIndex = products.findIndex(
//       (p) => p.id === parseInt(req.params.id),
//     );
//     if (productIndex !== -1) {
//       products[productIndex] = { ...products[productIndex], ...req.body };
//       res.json(products[productIndex]);
//     } else {
//       res.status(404).send("Product not found");
//     }
//   });

export default product_routes;
