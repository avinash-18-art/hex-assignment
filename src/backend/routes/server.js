import { app } from './app.js';
import { config } from 'dotenv';
const PORT = 4000 || process.env.PORT;

config({
    path: "backend/config/config.env"
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})