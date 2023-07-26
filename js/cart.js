let cart = localStorage.getItem("cart");let cartArray =  JSON.parse(cart) 
   
    
let draw = ``;
let s=0;
for (let i = 0; i < cartArray.length ; i++) { 
    let product = cartArray[i];  
    let Amount = (product.SalePrice * product.Quanlity);
    let PriceVND = ChuyenDonViTien(product.SalePrice,'it-IT', 'VND');
    let AmountVND = ChuyenDonViTien(Amount,'it-IT', 'VND');
    s =s + Amount

    draw += ` <tr>
    <th scope="row">${product.id}</th>
    <td><img style="height:50px " src="image/${product.image}"</td>
    <td>${product.Name}</td>
    <td>${PriceVND}</td>
    <td>${product.Quanlity}</td>
    <td>${AmountVND}</td>
    <td><button class="btn btn-primary" onclick=" xoasanpham(${product.id}) id="deleteBnt" )>xóa</button></td>
  </tr>`
  
}



let listcart =document.querySelector('#product-list')
listcart.innerHTML =draw;

let total = document.querySelector('#tong')
total.innerHTML = ChuyenDonViTien(s,'it-IT', 'VND');


function ChuyenDonViTien(price, donvi1, donvi2) {
    let money = price.toLocaleString(donvi1, {style : 'currency', currency : donvi2});
    return money
}  


