import express from 'express';
import compression from 'compression';
import { fileURLToPath } from 'url';
import path, { join, dirname } from 'path';

import connectToDb from './db/db.js';
import api from './routes/api/index.js';

const PORT = process.env.PORT || 4000;
const app = express();
const __filename = dirname(fileURLToPath(import.meta.url));
const __dirname = path.dirname(__filename);

app.use(compression());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// production config
app.use(express.static(path.join(__dirname, '/server/client/build')));

app.get("*", (req, res) => 
    res.sendFile(path.join(__dirname, '/client/build'))
);

app.use('/api', api);

Promise.all([connectToDb()])
    .then( () => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((error) => {
        console.error(`MongoDB Atlas error: ${error}`);
        process.exit();
});