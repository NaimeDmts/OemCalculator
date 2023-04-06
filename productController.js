const ProductController = (function(){
    const Product = function(id, name,price){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    const data = {
        products : [],
        selectedProduct:null,
        totalPrice:0
    }

    return {
        getProducts: function(){
            return data.products;
        },
        getData: function(){
            return data;
        },
        addProduct: function(name,price){
            let id;

            if(data.products.length > 0){
                id = data.products[data.products.length-1].id+1;
            }else{
                id = 0;
            }

            const newProduct = new Product(id, name, parseFloat(price));
            data.products.push(newProduct);
            return newProduct;
        }
    }
})();