const UIController = (function(){

    const Selectors = {
        productList: "#item-list",
        addButton : "#addBTN",
        updateButton : "#updateBTN",
        deleteButton : "#deleteBTN",
        cancelButton : "#cancelBTN",
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
                            <i class="far fa-edit edit-product"></i>
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
                        <i class="far fa-edit edit-product"></i>
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
        },
        addProductToForm : function(){
            const selectedProduct = ProductController.getCurrentProduct();
            document.querySelector(Selectors.productName).value = selectedProduct.name;
            document.querySelector(Selectors.productPrice).value = selectedProduct.price;
        },
        addingState : function(){
            UIController.clearInputs();
            document.querySelector(Selectors.addButton).style.display= 'inline';
            document.querySelector(Selectors.updateButton).style.display= 'none';
            document.querySelector(Selectors.deleteButton).style.display= 'none';
            document.querySelector(Selectors.cancelButton).style.display= 'none';

        },
        editState:function(tr){
            const parent = tr.parentNode;

            for(let i= 0; i<parent.children.length;i++){
                parent.children[i].classList.remove('bg-warning');
            }

            tr.classList.add('bg-warning');
            document.querySelector(Selectors.addButton).style.display= 'none';
            document.querySelector(Selectors.updateButton).style.display= 'inline';
            document.querySelector(Selectors.deleteButton).style.display= 'inline';
            document.querySelector(Selectors.cancelButton).style.display= 'inline';
        }
    }
})();