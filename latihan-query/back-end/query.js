const database = require('../back-end/no-need-to-edit/db.config');


const query = {


    getCountByRating: async () => {
        return await database.raw(`
            SELECT rating, COUNT(film_id) as movie_count FROM film GROUP BY rating;
        `);
    },
    

    getCountBySpecialFeatures: async () => {
        return await database.raw(`
            SELECT tag_name as feature, COUNT(film_id) AS movie_count
            FROM (
            SELECT film_id, SUBSTRING_INDEX(SUBSTRING_INDEX(special_features, ',', t.n), ',', -1) AS tag_name
            FROM film
            CROSS JOIN (
                SELECT 1 AS n UNION ALL SELECT 2 UNION ALL SELECT 3
            ) AS t
            WHERE CHAR_LENGTH(special_features) - CHAR_LENGTH(REPLACE(special_features, ',', '')) >= t.n - 1
            ) AS subquery
            GROUP BY tag_name;
        `);
    },


    
    // silakan tambahkan item query seperti diatas untuk menambahkan query lainnya


    getTopTenCustomersRental: async () => {
        try {
            const query = `
                SELECT * FROM top_10_customers;
            `;
    
            const result = await database.raw(query);
            return result[0];
        } catch (error) {
            console.error('Error in getTopTenCustomersRental:', error);
            throw error;
        }
    },     
        

    getPercentaseFilmCount: async () => {
        try {
            const query = `
            SELECT * FROM percentase_film_count;
            `;
    
            const result = await database.raw(query);
            return result[0]; // Mengembalikan hasil dari query (mungkin perlu disesuaikan dengan bentuk data yang dikembalikan oleh pustaka database yang Anda gunakan)
        } catch (error) {
            console.error('Error in percentase film count:', error);
            throw error; // Melempar kembali error untuk ditangani di lapisan panggilan fungsi
        }
    },  


    getTopTwoFiveActor: async () => {
        try {
            const query = `
            SELECT * FROM top_25_aktor;
            `;
    
            const result = await database.raw(query);
            return result[0]; // Mengembalikan hasil dari query (mungkin perlu disesuaikan dengan bentuk data yang dikembalikan oleh pustaka database yang Anda gunakan)
        } catch (error) {
            console.error('Error in getTopTwoFiveActor:', error);
            throw error; // Melempar kembali error untuk ditangani di lapisan panggilan fungsi
        }
    },    


    getTopTenCustomersBiggestPaymentRental: async () => {
        try {
            const query = `
            SELECT * FROM top_10_customers_biggest_payment_rental;
            `;
    
            const result = await database.raw(query);
            return result[0]; // Mengembalikan hasil dari query (mungkin perlu disesuaikan dengan bentuk data yang dikembalikan oleh pustaka database yang Anda gunakan)
        } catch (error) {
            console.error('Error in getTopTenCustomersBiggestPaymentRental:', error);
            throw error; // Melempar kembali error untuk ditangani di lapisan panggilan fungsi
        }
    },    


    getCountFilmLanguage: async () => {
        try {
            const query = `
            SELECT * FROM count_film_language;
            `;
    
            const result = await database.raw(query);
            return result[0]; // Mengembalikan hasil dari query (mungkin perlu disesuaikan dengan bentuk data yang dikembalikan oleh pustaka database yang Anda gunakan)
        } catch (error) {
            console.error('Error in query.js getCountFilmLanguage:', error);
            throw error; // Melempar kembali error untuk ditangani di lapisan panggilan fungsi
        }
    }, 



    getDailyIncome: async () => {
        try {
            const query = `
            SELECT * FROM daily_income;
        `;
    
            const result = await database.raw(query);
            return result[0]; // Mengembalikan hasil dari query (mungkin perlu disesuaikan dengan bentuk data yang dikembalikan oleh pustaka database yang Anda gunakan)
        } catch (error) {
            console.error('Error in query.js getDailyIncome:', error);
            throw error; // Melempar kembali error untuk ditangani di lapisan panggilan fungsi
        }
    }, 



    getMonthlyFilmRentalbyCategories: async () => {
        try {
            const query = `
                SELECT * FROM monthly_film_rental_byCategories;
            `;
        
            const result = await database.raw(query);
            return result; // Adjust as needed based on the structure of the result
        } catch (error) {
            console.error('Error in query.js getMonthlyFilmRentalbyCategories:', error);
            throw error;
        }
    },

    getTwoFiveLongestRentalTime: async () => {
        try {
            const query = `
                SELECT * FROM top_25_longest_rental_time;
            `;
        
            const result = await database.raw(query);
            return result;
        } catch (error) {
            console.error('Error in query.js getTwoFiveLongestRentalTime:', error);
            throw error;
        }
    },
    
    


}
module.exports = query;