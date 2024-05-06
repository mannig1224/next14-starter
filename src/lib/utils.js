const { default: mongoose } = require("mongoose");

const connection = {};

export const connectToDb = async () => {
    try {
        if(connection.isConnected) {
            console.log("Using existing Connection");
            return;
        }
        const db = await mongoose.connect(process.env.MONGO);
        console.log("we are connecting to mongo.")
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}