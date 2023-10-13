import express from 'express';

import routes from '../router/router';

const PORT = process.env.PORT || 3008;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT} 🚀`));

export default app;
