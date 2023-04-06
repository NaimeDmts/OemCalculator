const App = (function(ProductCtrl, UICtrl) {
 
    return{
        init: function(){
            console.log('starting app...');
            const products = ProductCtrl.getProducts();
            
            UICtrl.creatProductList(products);
        }
    }


})(ProductController, UIController);

App.init();
