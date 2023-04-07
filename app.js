const App = (function(ProductCtrl, UICtrl, StorageCtrl) {

    const UISelectors = UIController.getSelectors();

    const loadEventListeners = function(){

        document.querySelector(UISelectors.addButton).addEventListener('click', productAddSubmit);
        document.querySelector(UISelectors.productList).addEventListener('click', productEditClick);
        document.querySelector(UISelectors.updateButton).addEventListener('click', editProductSubmit);
        document.querySelector(UISelectors.cancelButton).addEventListener('click', cancelUpdate);
        document.querySelector(UISelectors.deleteButton).addEventListener('click', deleteProductSubmit);
    }

    const productAddSubmit = function(e){

        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if(productName!=='' && productPrice!==''){
           const newProduct = ProductCtrl.addProduct(productName,productPrice);
           
           UIController.addProduct(newProduct);

           StorageCtrl.storeProduct(newProduct);

           const total = ProductCtrl.getTotal();
        
           UIController.showTotal(total);

           UIController.clearInputs();
        }

        console.log(productName, productPrice)
        e.preventDefault();
    }
    const productEditClick = function(e){

        if(e.target.classList.contains('edit-product')){
            const id = 
            e.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
            const product = ProductCtrl.getProductById(id);
           
            ProductCtrl.setCurrentProduct(product);

            UICtrl.addProductToForm();


            UICtrl.editState(e.target.parentNode.parentNode);
        }

        e.preventDefault();
    }
    const editProductSubmit = function(e){
        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;

        if(productName !== '' && productPrice !== ''){
            
            const updatedProduct = ProductCtrl.updateProduct(productName, productPrice);

            let item = UICtrl.updateProduct(updatedProduct);
            
            const total = ProductCtrl.getTotal();
        
            UIController.showTotal(total);

            UICtrl.addingState();
        }
        e.preventDefault();
    }
    const cancelUpdate = function(e){

        UICtrl.addingState();
        UICtrl.clearWarnings();
        
        e.preventDefault();
    }
    const deleteProductSubmit = function(e){
        const selectedProduct = ProductCtrl.getCurrentProduct();
        ProductCtrl.deleteProduct(selectedProduct);

        UICtrl.deleteProduct();

        const total = ProductCtrl.getTotal();
        
        UIController.showTotal(total);

        UICtrl.addingState();

        if(total == 0){
            UICtrl.hideCard();
        }

        e.preventDefault();
    }
 
    return{
        init: function(){
            console.log('starting app...');

            UICtrl.addingState();
        
            const products = ProductCtrl.getProducts();

            if(products.length==0){
                UICtrl.hideCard();
            }else{
                UICtrl.createProductList(products);
            }

            loadEventListeners(); 
        }
    }
})(ProductController, UIController, StorageController);
App.init();
