require("dotenv").config();
const express = require("express");
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 3000;
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/globalErrorHandler");

//Middlware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//Console whether app is running in development/production mode
// eslint-disable-next-line no-console
console.log(process.env.NODE_ENV);


//= =====================================================
// DATABASE
//= =====================================================
const dbSetup = require("./database/setup");

dbSetup();

//= =====================================================
// ROUTES
//= =====================================================
app.get("/", (req, res) => {
  res.send("Get-Swole Coming soon!");
});

//Import Routes
const userRoutes = require('./routes/userRoutes');
const workoutRoutes = require("./routes/workoutRoutes")

//Route Middlewares
app.use('/user', userRoutes);
app.use("/workout", workoutRoutes)

//Unhandled Routes
app.all("*", (req, res, next) => {
  next(new AppError(404, "Sorry the page you are looking for cannot be found"));
});

app.use(globalErrorHandler);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port: ${port}`);
});
