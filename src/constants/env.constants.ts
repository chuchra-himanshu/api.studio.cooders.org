import dotenv from "dotenv";
dotenv.config();

const ENV_CONSTANTS = {
  PORT: Number(process.env.PORT) || 3001,
  MONGODB_URI: String(process.env.MONGODB_URI),
};

export default ENV_CONSTANTS;
