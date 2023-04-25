const express = require("express");

const connection = require("../database/index.js");
const app = express();
var db = require("../database");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const port = 3000;
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.post("/stripe/charge", async (req, res) => {
    let { amount, id } = req.body;
    console.log("amount & id:", amount, id);
    try {
        const payment = await stripe.paymentIntents.create({
            amount: amount,
            currency: "EUR",
            description: "",
            payment_method: id,
            confirm: true,
        });
        res.json({
            message: "Payment successful",
            success: true,
        });
    } catch (error) {
        console.log("error", error);
        res.json({
            message: "Payment failed",
            success: false,
        });
    }
});

app.use(express.json());
app.use(cors());

// Define customers list
app.get("/customers", (req, res) => {
  db.connection.query(db.allCustomers, (err, result) => {
    if (err) console.log(err.message);
    else res.json(result);
  });
});
// add a new customer
app.post("/customers", (req, res) => {
  var { name, email, password } = req.body;
  db.connection.query(
    db.newCustomer,
    [name, email, password],
    (err, result) => {
      if (err) console.log(err.message);
      else {
        console.log("hello");
        res.status(200).send("inserted successfully");
      }
    }
  );
});
// get a list of products
app.get("/products", (req, res) => {
  db.connection.query(db.getProducts, (err, result) => {
    if (err) console.log(err.message);
    else res.json(result);
  });
});
//add a product
app.post("/products", (req, res) => {
  const { name_product, price, quantity, idcategory } = req.body;

  connection.query(
    "SELECT * FROM products WHERE name_product = ?",
    [name_product],
    (err, result) => {
      if (err) throw err;

      if (result.length) {
        // Product already exists, update only the quantity
        const newQuantity = result[0].quantity + quantity;
        connection.query(
          db.updateProduct,
          [newQuantity, name_product],
          (err, result) => {
            if (err) throw err;
            res.send("Product quantity updated!");
          }
        );
      } else {
        // Product doesn't exist, insert the new product
        connection.query(
          db.addProduct,
          [name_product, price, quantity, idcategory],
          (err, result) => {
            if (err) throw err;
            res.send("Product added to database!");
          }
        );
      }
    }
  );
});
//modify quantity of products after selling operation
app.put("/products", (req, res) => {
  const { soldQuantity, productsid } = req.body;
  db.connection.query(
    db.quantityAfterPurchase,
    [soldQuantity, productsid],
    (err, result) => {
      if (err) console.log(err.message);
      else {
        res.status(200).send("updated");
      }
    }
  );
});

//record orders
app.post("/order", (req, res) => {
  const { orderdate, totalprice, id_customers } = req.body;
  db.connection.query(
    db.newOrder,
    [orderdate, totalprice, id_customers],
    (err, result) => {
      if (err) console.log(err.message);
      else {
        res.status(200).send("new order inserted");
      }
    }
  );
});
//insert new orderItem
app.post("/order", (req, res) => {
  const { product_id, order_id, quantity, price } = req.body;
  db.connection.query(
    db.newOrderItem,
    [product_id, order_id, quantity, price],
    (err, result) => {
      if (err) console.log(err.result);
      else {
        res.status(200).send("order item inserted");
      }
    }
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
