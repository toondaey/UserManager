var mongoose = require('mongoose'),
    db = `mongodb://${process.env.DB_URL}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

mongoose.connect(
    db,
    { useMongoClient: true }
);
