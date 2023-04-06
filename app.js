const App = (function(ProductCtrl, UICtrl) {

    const UISelectors = UIController.getSelectors();

    const loadEventListeners = function(){

        document.querySelector(UISelectors.addButton).addEventListener('click',productAddSubmit);
    }

    const productAddSubmit = function(e){

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if(productName!=='' && productPrice!==''){
           const newProduct = ProductCtrl.addProduct(productName,productPrice);
           
           UIController.addProduct(newProduct);

           const total = ProductCtrl.getTotal();
        
           UIController.showTotal(total);

           UIController.clearInputs();
        }

        console.log(productName, productPrice)
        e.preventDefault();
    }
 
    return{
        init: function(){
            console.log('starting app...');
            const products = ProductCtrl.getProducts();

            if(products.length==0){
                UICtrl.hideCard();
            }else{
                UICtrl.createProductList(products);
            }

            loadEventListeners(); 
        }
    }
})(ProductController, UIController);
App.init();
