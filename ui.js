const UIController = (function(){

    const Selectors = {
        productList: "#item-list"
    }

    return {
        createProductList : function(products){
            let html = '';

            products.forEach(prd => {
                html +=`
                    <tr>
                        <td>${prd.id}</td>
                        <td>${prd.name}</td>
                        <td>${prd.price} $</td>
                        <td class="text-right">
                            <button type="submit" class="btn btn-warning btn-sm">
                                <i class="far fa-edit"></i>
                            </button>
                        </td>
                    </tr>
                `
            });


            document.querySelector(Selectors.productList).innerHTML = html
        },
        getSelectors : function(){
            return Selectors;
        }
    }
    
})();