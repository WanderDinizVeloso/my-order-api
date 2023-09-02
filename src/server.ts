import app from './app';

const LOCAL_PORT = 3001;
const PORT = process.env.PORT || LOCAL_PORT;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
