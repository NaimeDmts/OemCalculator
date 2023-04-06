const App = (function(ProductCtrl, UICtrl) {

    const UISelectors = UIController.getSelectors();

    const loadEventListeners = function(){

        document.querySelector(UISelectors.addButton).addEventListener('click', productAddSubmit);
        document.querySelector(UISelectors.productList).addEventListener('click', productEditSubmit);
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
    const productEditSubmit = function(e){

        if(e.target.classList.contains('edit-product')){
            const id = 
            e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
            const product = ProductCtrl.getProductById(id);
           
            ProductCtrl.setCurrentProduct(product);

            UICtrl.addProductToForm();
        }

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
