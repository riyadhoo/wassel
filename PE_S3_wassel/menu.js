let login=document.getElementById("login").addEventListener("click",function () {
    document.querySelector(".popup").style.display="flex";
  
  })
  let close=document.getElementById("form-close").addEventListener("click",function () {
    document.querySelector(".popup").style.display="none";
  
  })
  let signup=document.getElementById("signup").addEventListener("click",function () {
    document.querySelector(".popup2").style.display="flex";
  
  })
  let close2=document.getElementById("form-close2").addEventListener("click",function () {
    document.querySelector(".popup2").style.display="none";
  
  })
  let already=document.getElementById("already").addEventListener("click",function () {
    document.querySelector(".popup2").style.display="none";
    document.querySelector(".popup").style.display="flex";
  
  })
  let orderClick=document.getElementById("order").addEventListener("click",function () {
    if (document.getElementById("order-confirming").style.display="none") {
      document.getElementById("order-confirming").style.display="block";
    }
  
  })
  let orderClose=document.getElementById("order-close").addEventListener("click",function () {
    if (document.getElementById("order-confirming").style.display="block") {
      document.getElementById("order-confirming").style.display="none";
    }
  
  })
  let orderClick1=document.getElementById("order1").addEventListener("click",function () {
    if (document.getElementById("order-confirming1").style.display="none") {
      document.getElementById("order-confirming1").style.display="block";
    }
  
  })
  let orderClose1=document.getElementById("order-close1").addEventListener("click",function () {
    if (document.getElementById("order-confirming1").style.display="block") {
      document.getElementById("order-confirming1").style.display="none";
    }
  
  })
  
  let totalPrice=document.getElementById("order-total").textContent;

  let quantityplus=document.getElementById("qplus").addEventListener("click",function () {
    var quantity=parseInt(document.getElementById("quantity").textContent);
    document.getElementById("quantity").textContent=quantity+1;
    quantity=document.getElementById("quantity").textContent;
    var total=parseInt(document.getElementById("mealprice").textContent);
    document.getElementById("order-total").textContent=total*quantity+250+ " DA";
    totalPrice=document.getElementById("order-total").textContent;
    document.getElementById("cart-total").textContent=totalPrice;
    document.getElementById("in-cart-quantity").textContent="x"+quantity


  })

  let quantityminus=document.getElementById("qminus").addEventListener("click",function () {
    var quantity=parseInt(document.getElementById("quantity").textContent);
      document.getElementById("quantity").textContent=quantity-1;
    quantity=document.getElementById("quantity").textContent;
    var total=parseInt(document.getElementById("mealprice").textContent);
    document.getElementById("order-total").textContent=total*quantity+ " DA";
    totalPrice=getElementById("order-total").textContent;
    document.getElementById("cart-total").textContent=totalPrice;
    document.getElementById("in-cart-quantity").textContent="x"+quantity

  })


let addtocart=document.getElementById("addtcrt").addEventListener("click",function () {
  document.getElementById("cart").style.display="block"
  let newOrder=document.createElement("button");
  newOrder=document.getElementById("order1");
  document.getElementById("ordercart").style.display="flex"

})
let addtocart2=document.getElementById("addtcrt2").addEventListener("click",function () {
  document.getElementById("ordercart1").style.display="flex";

})


let quantityplus2=document.getElementById("qplus2").addEventListener("click",function () {
    var quantity=parseInt(document.getElementById("quantity2").textContent);
    document.getElementById("quantity2").textContent=quantity+1;
    quantity=document.getElementById("quantity2").textContent;
    var total=parseInt(document.getElementById("mealprice2").textContent);
    document.getElementById("order-total2").textContent=total*quantity+250+ " DA";
    totalPrice=document.getElementById("order-total2").textContent;
    document.getElementById("in-cart-quantity2").textContent="x"+quantity;
  

  })

  let quantityminus2=document.getElementById("qminus2").addEventListener("click",function () {
    var quantity=parseInt(document.getElementById("quantity2").textContent);
    
      document.getElementById("quantity2").textContent=quantity-1;
    
    quantity=document.getElementById("quantity2").textContent;
    var total=parseInt(document.getElementById("mealprice2").textContent);
    document.getElementById("order-total2").textContent=total*quantity+250+ " DA";
    totalPrice=getElementById("order-total2").textContent;
    document.getElementById("in-cart-quantity2").textContent="x"+quantity;
  })