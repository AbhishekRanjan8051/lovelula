
const express = require("express");

const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://abhishek:abhishek123456@cluster0.jouxt.mongodb.net/loveLula?retryWrites=true&w=majority"
  );
};

const app = express();

app.use(express.json());

// app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.set("view Engine", "ejs");



// index ============

const indexSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },

    description: { type: String, required: true },
    price: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Index = mongoose.model("indexs", indexSchema);

// =================================================================

app.post("/indexs", async (req, res) => {
  const index = await Index.create(req.body);

  return res.status(200).json({ index });
});

app.get("/indexs", async (req, res) => {
  const index = await Index.find().lean().exec();
  return res.status(200).json({ index });
});

app.post("/indexs/top", async (req, res) => {
  const indextop = await Index.create(req.body);

  return res.status(200).json({ indextop });
});

app.get("/indexs/top", async (req, res) => {
  const indextop = await Index.find().lean().exec();
  return res.status(200).json({ indextop });
});


 //================================================

const Gift = require("./models/gift.model");



const Product = require("./models/product.model");

const Skincare = require("./models/skin.model");

const registerSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    phoneno: { type: Number, required: true },
    password: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// create collection of user and coonect to mongoose
const Register = mongoose.model("registers", registerSchema);

//----------------------------CRUD API for user------------------------------------

//post
app.post("/registers", async (req, res) => {
  // const registers = await Register.create(req.body);
  // return res.status(200).send({ registers });

  const registeruser = new Register({
    email: req.body.email,
    password: req.body.password,
    phoneno: req.body.phoneno,
  });

  const registered = await registeruser.save();
  res.status("201").render("index");
});

//get user
app.get("/registers", async (req, res) => {
  const registers = await Register.find().lean().exec();

  return res.status(200).send({ registers });

  // return res.render("gift.ejs", {
  //   users: users,
  // });
});

//===================================================================================================================

//posts
app.post("/gifts", async (req, res) => {
  const gift = await Gift.create(req.body);
  return res.status(200).send({ gift });
});

//get items

app.get("/gifts", async (req, res) => {
  const gifts = await Gift.find().lean().exec();

  return res.status(200).send({ gifts });
  // return res.render("gift.ejs", {
  //   gifts: gifts,
  // });
});



app.post("/products", async (req, res) => {
  const index = await Product.create(req.body);

  return res.status(200).json({ index });
});

app.get("/products", async (req, res) => {
  const index = await Product.find().lean().exec();
  return res.status(200).json({ index });
});

app.post("/skincares", async (req, res) => {
  const index = await Skincare.create(req.body);

  return res.status(200).json({ index });
});

app.get("/skincares", async (req, res) => {
  const index = await Skincare.find().lean().exec();
  return res.status(200).json({ index });
});

app.get("/views/index.ejs", async (req, res) => {
  return res.render("index.ejs");
});
app.get("/gift.ejs", async (req, res) => {
  return res.render("../views/gift.ejs");
});
app.get("/views/gift.ejs", async (req, res) => {
  return res.render("../views/gift.ejs");
});
app.get("/views/hair.ejs", async (req, res) => {
  return res.render("hair.ejs");
});
app.get("/views/brands.ejs", async (req, res) => {
  return res.render("brands.ejs");
});
app.get("/views/products.ejs", async (req, res) => {
  return res.render("products.ejs");
});
app.get("/views/skincare.ejs", async (req, res) => {
  return res.render("skincare.ejs");
});
app.get("/views/register.ejs", async (req, res) => {
  return res.render("register.ejs");
});
app.get("/register.ejs", async (req, res) => {
  return res.render("register.ejs");
});
app.post("/register.ejs", async (req, res) => {
  return res.render("register.ejs");
});



// /listening server on port
app.listen(2345, async function () {
  await connect();
  console.log("Listening to port 2345");
});
