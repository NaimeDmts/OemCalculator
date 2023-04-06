const App = (function(ProductCtrl, UICtrl) {
 
    return{
        init: function(){
            console.log('starting app...');
            const products = ProductCtrl.getProducts();
            
            UICtrl.createProductList(products);
        }
    }


})(ProductController, UIController);

App.init();
