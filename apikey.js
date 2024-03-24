import express from 'express';

const app = express();
const port = 6000;

app.get('/kon', async (req, res) => {
    let totalreg = Object.keys(global.db.data.users).length
    res.json(totalreg)
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
