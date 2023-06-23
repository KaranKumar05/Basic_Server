import express from 'express';
const app = express();

app.get('/', (req, res) => {
    console.log("Home Page");
    const html = `
    <style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    h1
    {  display: flex; height: 100vh; font-size: 5em; color: white; align-items: center; 
       font-family: cursive; justify-content: center; background-color: rgb(10, 46, 68); 
    }
    </style>
    <h1> HOME PAGE </h1>`
    return res.send(html);
});
app.get('/profile', (req, res) => {
    console.log("Profile Page");
    const html = `
    <style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    h1
    {  display: flex; height: 100vh; font-size: 5em; color: white; align-items: center; 
       font-family: cursive; justify-content: center; background-color: rgb(10, 13, 68); 
    }
    </style>
    <h1> PROFILE PAGE </h1>`
    return res.send(html);
});
app.get('/about', (req, res) => {
    console.log("About Page");
    const html = `
    <style>
    *{ margin: 0; padding: 0; box-sizing: border-box; }
    h1
    {  display: flex; height: 100vh; font-size: 5em; color: white; align-items: center; 
       font-family: cursive; justify-content: center; background-color: rgb(43, 8, 54); 
    }
    </style>
    <h1> ABOUT PAGE </h1>`
    return res.send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`)
});