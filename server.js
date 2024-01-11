const mongoose = require("mongoose");
const app = require("./index");
const MONGOOSE_URL = process.env.MONGOLINK;
const PORT = process.env.PORT;

const serverStart = () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(MONGOOSE_URL, () => {
      console.log("Connected to mongoose server");
    });
    app.listen(PORT, () => {
      console.log(`SERVER is RUNNING AT PORT ${PORT}`);
    });
  } catch (error) {
    console.log(`There is some big error happening... ${error}`);
  }
};

serverStart();
