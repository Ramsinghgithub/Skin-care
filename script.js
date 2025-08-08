let addBtn=document.getElementsByClassName("add_btn")
let cart=[]
for(let i=0;i<addBtn.length;i++){
    addBtn[i].addEventListener("click",()=>{
        let img=addBtn[i].getAttribute("product-img")
        let name=addBtn[i].getAttribute("product-name")
        let price=addBtn[i].getAttribute("product-price")
        let product={
            p_img:img,
            p_name:name,
            p_price:price
        }
        cart.push(product)
        console.log(cart)
    })
}