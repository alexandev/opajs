    // replace sale description x website description
    let fullDescription = document.querySelector('#product_full_description')
    // let fullDescription = document.querySelector('.product-body')
    let saleDescription = document.querySelector('.te_prod_desc')
    

    if(fullDescription){
        if(saleDescription){
            saleDescription.innerHTML = ''
            saleDescription.appendChild(fullDescription)
            saleDescription.classList.add('mw-100')
        }
        else{
            console.log('no hay saledescription')
            let $divMainProduct = document.querySelector('.js_product.js_main_product').appendChild(fullDescription)
        }
    }


    const $boton_editar=document.querySelector('#edit-page-menu')
    console.log('test')
    if($boton_editar){
        $boton_editar.addEventListener('click', agregar_clase_editable)
    }

    function agregar_clase_editable(){
        let fullDescription = document.querySelector('#product_full_description')
        fullDescription.classList.add('oe_structure')
        fullDescription.classList.add('o_editable')
    }


    //oculta product tabs
    let $product_tabs= document.querySelector('.product_tabs_ept.s_tabs')
    if($product_tabs){
        $product_tabs.classList.add('d-none')
    }