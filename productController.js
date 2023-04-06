const ProductController = (function(){
    const Product = function(id, name,price){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    const data = {
        products : [
            {id:0, name: 'Monitör', price:100},
            {id:1, name: 'Ram', price:30},
            {id:2, name: 'Klavye', price:10},
            {id:3, name: 'Mouse', price:5}

        ],
        selectedProduct:null,
        totalPrice:0
    }

    return {
        getProducts: function(){
            return data.products;
        },
        getData: function(){
            return data;
        }
    }
})();