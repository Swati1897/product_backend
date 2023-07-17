const Products = require('../models/productModel');
const bodyParser = require('body-parser');

module.exports = function (app) {

   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({ extended: true }));

   //All products   :title
   app.get('/api/products/', async (req, res) => {
      try { 
         //title: req.params.title
         Products.find({}, function (err, Products) {
            if (err)
               throw err;
            res.status(200).json({ Count: Products.length, Result: Products });  //all product show in <Result>
         });
      } catch (e) {
         res.status(500).send(err);
      }
   });

   //find by one id 
   app.get('/api/product/:id', async (req, res) => {
      try {
         console.log("find id", req.body);
         if (req.body._id) {
            let products = await Products.findById(req.body._id);
            // console.log('todos :>> ', todos);
            // console.log("Find data !");
            res.status(200).json({ id: products._id, data: products });
         }
      }
      catch (err) {
         res.status(500).send(err);
      }
   });

   // create 
   app.post('/api/products/items', async (req, res) => {
      try {
         const newProducts = Products({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: req.body.image
         });
         newProducts.save(function (err) {
            if (err)
               throw err;
            res.status(200).json({ Result: 'Hey Data is Added !', _id: newProducts._id });
         });
      } catch (err) {
         res.status(500).send(err);
      }
   });
// Update 
app.put('/api/products/update/:id', async(req, res)=>{
   Products.findByIdAndUpdate(req.params.id,
      {
          $set: {
               title: req.body.title,
               description: req.body.description,
               price: req.body.price,
               category: req.body.category,
               image: req.body.image
            }
      },
      {
          new: true
      },
      function(err, updateProducts){
          if(err){
          res.send("Error updating product");
      }else{
          res.status(200).json({ Result: 'Successfully Updated !', id: updateProducts._id });
      }
  });
});

   // delete 
   app.delete('/api/products/delete', async (req, res) => {
      try {
         console.log("find id", req.body);
         if (req.body._id) {
            let products = await Products.findById(req.body._id);
            console.log('products :>> ', products);
            console.log("Find data !");
         }
         let products = await Products.findByIdAndRemove(req.body._id);
         console.log('products:>>', products);
         console.log('data is deleted !');
      }
      catch (err) {
         res.status(500).send(err);
      }
      res.status(200).json({ deleted_data: 'Data has been Deleted Successfully Done !', id:Products._id});
   });


   // app.put('/api/products/up/:id', async (req, res) => {
   //    try {
   //       console.log("find id", req.params);
   //       if (req.body._id) {
   //          let products = await Products.findById(req.params._id);
   //          console.log('products :>> ', products);
   //          console.log("Find data !");
   //       }
   //       let products = await Products.findByIdAndUpdate(req.body._id,{
   //          $set: {
   //             title: req.body.title,
   //             description: req.body.description,
   //             price: req.body.price,
   //             category: req.body.category,
   //             image: req.body.image
   //             }
   //       });
   //       // console.log('products:>>', products);
   //       // console.log('data is update !');
   //       res.status(200).json({id: products._id})
   //    }
   //    catch (err) {
   //       res.status(500).send(err);
   //    }
   //    res.status(200).json({ dataUpdate: 'Successfully Done !'});
   // });
}
