import mongoose from "mongoose";

const connectDB = (uri) => {
  mongoose
    .connect(uri, { dbName: "LinkUp" })
    .then((data) =>
      console.log(`Connected to LinkUp Database ${data.connection.host}`)
    )
    .catch((err) => {
      throw err;
    });
};

export {connectDB};
