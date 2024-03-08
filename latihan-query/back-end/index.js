const express = require('express');
const cors = require('cors');
const query = require('./query');
const app = express();
const port = 3000;


// Enable CORS
app.use(cors());

// Define routes
app.get('/count-by-special-features', async (req, res) => {
  let data = await query.getCountBySpecialFeatures();
  res.status(200).json(data);
});

app.get('/count-by-rating', async (req, res) => {
    let data = await query.getCountByRating();
    res.status(200).json(data);
});

//silakan tambahkan route lainnya untuk membuat api end-point baru dengan query yang baru juga

app.get('/top-10-customers-rental', async (req, res) => {
  try {
    // Panggil fungsi yang mengambil data dari database
    let data = await query.getTopTenCustomersRental();

    // Kirim data sebagai respons ke klien
    res.status(200).json(data);
  } catch (error) {
    // Tangkap dan log error jika terjadi
    console.error('Error in top-10-customers-rental:', error);

    // Kirim respons error 500 Internal Server Error ke klien
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/percentase-film-count', async (req, res) => {
  try {
    // Panggil fungsi yang mengambil data dari database
    let data = await query.getPercentaseFilmCount();
    
    // Kirim data sebagai respons ke klien
    res.status(200).json(data);
  } catch (error) {
    // Tangkap dan log error jika terjadi
    console.error('Error in percentase film count', error);
    
    // Kirim respons error 500 Internal Server Error ke klien
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/top-25-actor', async (req, res) => {
  try {
    // Panggil fungsi yang mengambil data dari database
    let data = await query.getTopTwoFiveActor();

    // Kirim data sebagai respons ke klien
    res.status(200).json(data);
  } catch (error) {
    // Tangkap dan log error jika terjadi
    console.error('Error in top-25-actor:', error);

    // Kirim respons error 500 Internal Server Error ke klien
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/top-10-customers-biggest-payment-rental', async (req, res) => {
  try {
    // Panggil fungsi yang mengambil data dari database
    let data = await query.getTopTenCustomersBiggestPaymentRental();

    // Kirim data sebagai respons ke klien
    res.status(200).json(data);
  } catch (error) {
    // Tangkap dan log error jika terjadi
    console.error('Error in top-10-customers-biggest-payment-rental:', error);

    // Kirim respons error 500 Internal Server Error ke klien
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/count-film-language', async (req, res) => {
  try {
    // Panggil fungsi yang mengambil data dari database
    let data = await query.getCountFilmLanguage();

    // Kirim data sebagai respons ke klien
    res.status(200).json(data);
  } catch (error) {
    // Tangkap dan log error jika terjadi
    console.error('Error in index.js count-film-language:', error);

    // Kirim respons error 500 Internal Server Error ke klien
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/daily-income', async (req, res) => {
  try {
    // Panggil fungsi yang mengambil data dari database
    let data = await query.getDailyIncome();

    // Kirim data sebagai respons ke klien
    res.status(200).json(data);
  } catch (error) {
    // Tangkap dan log error jika terjadi
    console.error('Error in index.js daily income:', error);

    // Kirim respons error 500 Internal Server Error ke klien
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/monthly-film-rental-byCategories', async (req, res) => {
  try {
    // Panggil fungsi yang mengambil data dari database
    let data = await query.getMonthlyFilmRentalbyCategories();

    // Kirim data sebagai respons ke klien
    res.status(200).json(data);
  } catch (error) {
    // Tangkap dan log error jika terjadi
    console.error('Error in index.js daily income:', error);

    // Kirim respons error 500 Internal Server Error ke klien
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/top25-longest-rental-time', async (req, res) => {
  try {
    // Panggil fungsi yang mengambil data dari database
    let data = await query.getTwoFiveLongestRentalTime();

    // Kirim data sebagai respons ke klien
    res.status(200).json(data);
  } catch (error) {
    // Tangkap dan log error jika terjadi
    console.error('Error in index.js daily income:', error);

    // Kirim respons error 500 Internal Server Error ke klien
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});