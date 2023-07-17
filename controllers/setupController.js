const Products = require('../models/productModel');

module.exports = function (app) {
    app.get('/api/setuppro', function (req, res) {

        const starterProducts = [
            {
                title: 'Mens',
                description: 'Striped Men Polo Neck White, Blue, Yellow T-Shirt',
                price: 1000,
                category: 'Clothes',
                image: 'https://rukminim1.flixcart.com/image/880/1056/kzegk280/t-shirt/n/h/l/s-t285hs-as7whdnmt-eyebogler-original-imagbfyge6kae4xg.jpeg?q=50'
            },
            {
                title: 'Womens',
                description: 'Lux Golden Rose Awards, Best Dressed Celebrities',
                price: 120000,
                category: 'Clothes',
                image: 'https://rukminim1.flixcart.com/image/880/1056/kwmfqfk0/kids-dress/i/i/t/6-12-months-rbianewred-ms-brother-original-imag99b5gtkfrhag.jpeg?q=50'
            },
            {
                title: 'Washing Machine',
                description: 'LG 8 kg with Jet Sprey, Auto Pre Wash, Smart Diagnosis, Smart Closing Door and 10 Water Levels Fully Automatic Top Load Silver',
                price: 25000,
                category: 'Electronic',
                image: 'https://rukminim1.flixcart.com/image/312/312/kdga1zk0/washing-machine-new/u/f/8/t80sjsf1z-lg-original-imafuctfwfvgppf9.jpeg?q=70'
            },
            {
                title: 'Smartwatch',
                description: 'Auto Ryde id115 Smartwatch  (Black Strap, Free Size)',
                price: 600,
                category: 'Electronic',
                image: 'https://rukminim1.flixcart.com/image/416/416/kvwpt3k0/smartwatch/f/a/v/120-android-ios-id115-auto-ryde-no-original-imag8p8p8hqyhrhg.jpeg?q=70'
            }
        ];
        Products.create(starterProducts, function (err, results) {
            res.send(results);
        });
    });

}
