import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

const exitProcessWhenError = () => {
  // Stop process without app crash
  process.exitCode = 1;
};

const showMessageWhenSuccess = () => {
  // eslint-disable-next-line no-console
  console.log("oke");
};

const connection = async () => {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection
    .once("open", showMessageWhenSuccess)
    .on("error", (err) => exitProcessWhenError(err));
};

export default connection;
