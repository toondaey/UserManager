var mongoose = require('mongoose'),
    db = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

mongoose.connect(
    db,
    { useMongoClient: true }
);
