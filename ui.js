const UIController = (function(){

    const Selectors = {
        productList: "#item-list",
        addButton : "#addBTN",
        productName : "#productName",
        productPrice : "#productPrice",
        productCard : "#productCard",
        totalTL : "#total-tl",
        totalDolar : "#total-dolar"
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
        },
        addProduct : function(prd){
            document.querySelector(Selectors.productCard).style.display = 'block';
            
            var item = `
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
            `;

            document.querySelector(Selectors.productList).innerHTML += item;
        },
        clearInputs : function(){
            document.querySelector(Selectors.productName).value = '';
            document.querySelector(Selectors.productPrice).value = '';
        },
        hideCard : function(){
            document.querySelector(Selectors.productCard).style.display ='none';
        },
        showTotal : function(total){
            document.querySelector(Selectors.totalDolar).textContent = total;
            document.querySelector(Selectors.totalTL).textContent = total*20;


        }
    }
})();