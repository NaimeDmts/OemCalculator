const StorageController = (function(){
    return{
        storeProduct : function(product){
            let products;
            if(localStorage.getItem('products') === null){
                products = [];
                products.push(product);
                
            }else {
                products = JSON.parse(localStorage.getItem('products'));
                products.push(product);
            }
            localStorage.setItem('products', JSON.stringify(products));

        },
        getProducts : function(){
            if(localStorage.getItem('products')==null){
                products = [];
            }else{
                products = JSON.parse(localStorage.getItem('products'));
            }
            return products;
        }
    }


})();