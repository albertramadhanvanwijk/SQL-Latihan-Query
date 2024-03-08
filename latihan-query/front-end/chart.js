// Fetch data from API count movie by special features
fetch('http://localhost:3000/count-by-special-features')
    .then(response => response.json())
    .then(data => {
        let chartData = {
            features: data[0].map(x => x.feature),
            values: data[0].map(x => x.movie_count)
        };

        const chartOptions = {
            chart: {
                type: 'bar',
                height: '350',
                parentHeightOffset: 0,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#333'
            },
            series: [{
                name: 'Movie Count',
                data: chartData.values
            }],
            plotOptions: {
                bar: {
                    borderRadius: 10
                }
            },
            title: {
                text: 'Movie Count by Special Features', // Update with desired title
                align: 'center',
                style: {
                    fontSize: '18px',
                    fontWeight: 'bold'
                }
            },
            xaxis: {
                categories: chartData.features,
                labels: {
                    show: true
                }
            }
        };

        const chart = new ApexCharts(document.querySelector('#chart-container'), chartOptions);
        chart.render();
    })
    .catch(error => {
        console.log('Error:', error);
    });


// Fetch data from API top 10 Customer dengan jumlah frekuensi rental film terbanyak
fetch('http://localhost:3000/top-10-customers-rental')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        let chartData = {
            customer_id: data.map(x => x.customer_id),
            first_name: data.map(x => x.first_name),
            last_name: data.map(x => x.last_name),
            rental_count: data.map(x => x.rental_count)  // Adjusted property name to match SQL query
        };

        // Define chart options
        const chartOptions = {
            chart: {
                type: 'bar',
                height: '350',
                parentHeightOffset: 0,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#333'
            },
            series: [{
                name: 'Rental Count',
                data: chartData.rental_count
            }],
            plotOptions: {
                bar: {
                    borderRadius: 10
                }
            },
            title: {
                text: 'Top 10 Customer dengan jumlah frekuensi rental film terbanyak',
                align: 'center',
                style: {
                    fontSize: '18px',
                    fontWeight: 'bold'
                }
            },
            xaxis: {
                categories: chartData.customer_id.map((id, index) => `${chartData.first_name[index]} ${chartData.last_name[index]}`),
                labels: {
                    show: true
                }
            }
        };

        // Create chart
        const chart = new ApexCharts(document.querySelector('#top-10-customers-rental'), chartOptions);
        chart.render();
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


// Fetch data from API percentase_film_count
fetch('http://localhost:3000/percentase-film-count')
    .then(response => response.json())
    .then(data => {
        let chartData = {
            category_name: data.map(x => x.category_name),
            film_count: data.map(x => x.film_count),
            percentage: data.map(x => x.percentage)
        };

        const chartOptions = {
            chart: {
                type: 'pie',
                height: '350',
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#333'
            },
            series: chartData.percentage,
            labels: chartData.category_name,
            plotOptions: {
                pie: {
                    startAngle: -90,
                    endAngle: 90,
                    donut: {
                        size: '50%',
                    }
                }
            },
            title: {
                text: 'Persentase Jumlah Film berdasarkan Kategori',
                align: 'center',
                style: {
                    fontSize: '18px',
                    fontWeight: 'bold'
                }
            },
        };

        const chart = new ApexCharts(document.querySelector('#percentase-film-count'), chartOptions);
        chart.render();
    })
    .catch(error => {
        console.log('Error:', error);
    });


// Fetch data from API Top 25 film dengan bintang aktor terbanyak
fetch('http://localhost:3000/top-25-actor')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        let chartData = {
            film_id: data.map(x => x.film_id),
            film_title: data.map(x => x.film_title),
            actor_count: data.map(x => x.actor_count)
        };

        // Define chart options
        const chartOptions = {
            chart: {
                type: 'bar',
                height: '350',
                parentHeightOffset: 0,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#333'
            },
            series: [{
                name: 'Actor Count',
                data: chartData.actor_count
            }],
            plotOptions: {
                bar: {
                    borderRadius: 10
                }
            },
            title: {
                text: 'Top 25 film dengan bintang aktor terbanyak',
                align: 'center',
                style: {
                    fontSize: '18px',
                    fontWeight: 'bold'
                }
            },
            xaxis: {
                categories: chartData.film_id.map((id, index) => `${chartData.film_title[index]} (ID: ${id})`),
                labels: {
                    show: true
                }
            }
        };

        // Create chart
        const chart = new ApexCharts(document.querySelector('#top-25-actor'), chartOptions);
        chart.render();
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });



// Fetch data from API top 10 customers biggest payment rental
fetch('http://localhost:3000/top-10-customers-biggest-payment-rental')
    .then(response => response.json())
    .then(data => {
        let chartData = {
            customer_id: data.map(x => x.customer_id),
            first_name: data.map(x => x.first_name),
            last_name: data.map(x => x.last_name),
            total_payment: data.map(x => x.total_payment)
        };

        const chartOptions = {
            chart: {
                type: 'bar',
                height: '350',
                parentHeightOffset: 0,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#333'
            },
            series: [{
                name: 'Total Payment',
                data: chartData.total_payment
            }],
            plotOptions: {
                bar: {
                    borderRadius: 10
                }
            },
            title: {
                text: 'Top 10 customer dengan jumlah pembayaran terbesar dari merental film',
                align: 'center',
                style: {
                    fontSize: '18px',
                    fontWeight: 'bold'
                }
            },
            xaxis: {
                categories: chartData.customer_id.map((id, index) => `${chartData.first_name[index]} ${chartData.last_name[index]}`),
                labels: {
                    show: true
                }
            }
        };

        const chart = new ApexCharts(document.querySelector('#top-10-customers-biggest-payment-rental'), chartOptions);
        chart.render();
    })
    .catch(error => {
        console.log('Error:', error);
    });


// Fetch data from API Jumlah film berdasarkan bahasa
fetch('http://localhost:3000/count-film-language')
    .then(response => response.json())
    .then(data => {
        let chartData = {
            language: data.map(x => x.language),
            film_count: data.map(x => x.film_count)
        };

        const chartOptions = {
            series: chartData.film_count,
            chart: {
                type: 'donut',
                height: '350',
                parentHeightOffset: 0,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#333'
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            total: {
                                show: true,
                                showAlways: true
                            }
                        }
                    }
                }
            },
            title: {
                text: 'Film Count by Language',
                align: 'center',
                style: {
                    fontSize: '18px',
                    fontWeight: 'bold'
                }
            },
            labels: chartData.language,
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: '100%'
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };

        const chart = new ApexCharts(document.querySelector('#count-film-language'), chartOptions);
        chart.render();
    })
    .catch(error => {
        console.log('Error:', error);
    });

// Fetch data from API Daily Incame
fetch('http://localhost:3000/daily-income')
    .then(response => response.json())
    .then(data => {
        let chartData = {
            transaction_date: data.map(x => x.transaction_date),
            total_daily_revenue: data.map(x => x.total_daily_revenue)
        };

        const chartOptions = {
            series: [{
                name: 'Total Daily Revenue',
                data: chartData.total_daily_revenue
            }],
            chart: {
                type: 'line',
                height: '350',
                parentHeightOffset: 0,
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#333'
            },
            plotOptions: {
                line: {
                    markers: {
                        show: true
                    }
                }
            },
            title: {
                text: 'Daily Income',
                align: 'center',
                style: {
                    fontSize: '18px',
                    fontWeight: 'bold'
                }
            },
            xaxis: {
                categories: chartData.transaction_date,
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: '100%'
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };

        const chart = new ApexCharts(document.querySelector('#daily-income'), chartOptions);
        chart.render();
    })
    .catch(error => {
        console.log('Error:', error);
    });


// Fetch data from API Jumlah rental film perbulannya berdasarkan kategori filmnya
fetch('http://localhost:3000/monthly-film-rental-byCategories')
    .then(response => response.json())
    .then(data => {
        // Assuming the response structure has 'transaction_date', 'category_name', and 'total_daily_revenue' properties

        // Group the data by category for each transaction_date
        let groupedData = data.reduce((result, item) => {
            if (!result[item.transaction_date]) {
                result[item.transaction_date] = {};
            }
            result[item.transaction_date][item.category_name] = item.total_daily_revenue;
            return result;
        }, {});

        let categories = Object.keys(data.reduce((result, item) => {
            result[item.category_name] = true;
            return result;
        }, {}));

        let series = categories.map(category => ({
            name: category,
            data: Object.values(groupedData).map(dateData => dateData[category] || 0)
        }));

        const chartOptions = {
            series: series,
            chart: {
                type: 'bar',
                height: '350',
                stacked: true,
                stackType: '100%'
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                },
            },
            xaxis: {
                categories: Object.keys(groupedData),
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: '100%'
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        };

        const chart = new ApexCharts(document.querySelector('#monthly-film-rental-byCategories'), chartOptions);
        chart.render();
    })
    .catch(error => {
        console.log('Error:', error);
    });


// Fetch data from API Top 25 Film dengan waktu rental terlama (dalam satuan jam)
fetch('http://localhost:3000/top25-longest-rental-time')
    .then(response => response.json())
    .then(data => {
        // Check if data is undefined or not an array
        if (!data || !Array.isArray(data)) {
            console.error('Invalid data received from the API');
            return;
        }

        let chartData = {
            labels: data.map(item => item.film_title),
            series: [data.map(item => item.rental_duration_hours)]
        };

        const chartOptions = {
            chart: {
                type: 'bar',
                height: 400
            },
            plotOptions: {
                bar: {
                    horizontal: true
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                title: {
                    text: 'Rental Duration (hours)'
                }
            },
            title: {
                text: 'Top 25 Film Rental Duration'
            }
        };

        const chart = new ApexCharts(document.querySelector('#top25-longest-rental-time'), chartOptions);
        chart.render();

    })
    .catch(error => {
        console.log('Error:', error);
    });
