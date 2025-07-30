require("dotenv").config();
const mongoose = require("mongoose");
const mongoURI = process.env.MONGODB_URI;

const connectToMongo = async () => {
	try {
		const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
		console.log("MONGODB connected !!");
	} catch (error) {
		console.error("MONGODB connection error ", error);
		process.exit(1);
	}
};

module.exports = connectToMongo;

