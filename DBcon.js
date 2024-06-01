const mongose = require('mongoose');

const DBcon = async () => {
    const connectionString = 'YOUR CONNECTION STRING HERE';
    try {
        const conn = await mongose.connect(connectionString);
        console.log(`Database connected:${conn.connection.host}, ${conn.connection.name}`);
    } catch (err) {
        console.log(`Error: ${err.message}`);
        process.exit(1);
    }
}


module.exports = DBcon;