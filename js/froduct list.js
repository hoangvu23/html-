let product1 = {
    id : 1,
    image:"product1.jpg",
    Name:'Áo Phông Acmé De La Vie',
    salestatus: true ,
    Price:700000,
    SalePrice:590000,
    Quanlity:1000,
}
let product2 = {
    id : 2,
    image:"product2.jpg",
    Name:'Áo Thun Nam Nike Flowers',
    salestatus: false ,
    Price:1000000,
    SalePrice:950000,
    Quanlity:1000,
}
let product3 = {
    id : 3,
    image:"product3.jpg",
    Name:'Áo Phông LifeWork ',
    salestatus: false ,
    Price:1000000,
    SalePrice:980000,
    Quanlity:1000,
}
let product4 = {
    id : 4,
    image:"product4.jpg",
    Name:'Set Nước Hoa Nam YSL',
    salestatus: true ,
    Price:3000000,
    SalePrice:2700000,
    Quanlity:1000,
}
let product5 = {
    id : 5,
    image:"product5.jpg",
    Name:'Giày Boot Nam Supreme x Timberland ',
    salestatus: false ,
    Price:12000000,
    SalePrice:11734000,
    Quanlity:1000,
}

let product6 = {
    id : 6,
    image:"product6.jpg",
    Name:'Mũ Gucci Strawberry Supreme ',
    salestatus: true ,
    Price:11000000,
    SalePrice:10600000,
    Quanlity:1000,
}
let product7 = {
    id : 7,
    image:"product7.jpg",
    Name:'Khăn Nữ LouisVuitton',
    salestatus: true ,
    Price:14000000,
    SalePrice:12900000,
    Quanlity:1000,
}
let product8 = {
    id : 8,
    image:"product8.jpg",
    Name:'Đồng Hồ Gucci x Supreme',
    salestatus: false ,
    Price:20000000,
    SalePrice:19600000,
    Quanlity:1000,
}
let product9 = {
    id : 9,
    image:"product9.jpg",
    Name:'Đồng Hồ Nam Tsar Bomba',
    salestatus: false ,
    Price:18000000,
    SalePrice:17472000,
    Quanlity:1000,
}
let product10 = {
    id : 10,
    image:"product10.jpg",
    Name:'Kính Mát Nam Tommy',
    salestatus: true,
    Price:2500000,
    SalePrice:2020000,
    Quanlity:1000,
}
let product11 = {
    id :11,
    image:"product11.jpg",
    Name:'Dây Chuyền Swarovski',
    salestatus: false ,
    Price:3500000,
    SalePrice:2950000,
    Quanlity:1000,
}
let product12 = {
    id : 12,
    image:"product12.jpg",
    Name:'Balo MLB Monogram ',
    salestatus: true ,
    Price:2500000,
    SalePrice:2090000,
    Quanlity:1000,
}
let products=[product1,product2,product3,product4,product5,product6,product7,product8,product9,product10,product11,product12];
let draw=``;
let s=0;
for( let i = 0;i < products.length; i++){
  let  product = products[i];
  let priceVND = ChuyenDonViTien(product.Price,'it-IT', 'VND')
  let SalePriceVND = ChuyenDonViTien(product.SalePrice,'it-IT', 'VND')
  

  draw +=` <div class="col mb-5 " >
         <div class="card h-100"> 
         <!-- Sale badge-->
         <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">sale</div>
         <!-- Product image-->
         <img class="card-img-top" src="image/${product.image}" alt="..." /> 
         <!-- Product details-->
         <div class="card-body p-4">
         <div class="text-center">
          <!-- Product name-->
          <h5 class="fw-bolder">${product.Name}</h5> 
          <!-- Product price-->
           <span class="text-muted text-decoration-line-through">${priceVND}</span>
          ${SalePriceVND}
         </div>
         </div>
         <!-- Product actions-->
         <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
         <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">Mua Ngay</a></div> 
         </div>
         </div>
         </div> `             
 }
let html = document.querySelector('#product-list')
html.innerHTML= draw;


   function ChuyenDonViTien(price, donvi1, donvi2) {
    let money = price.toLocaleString(donvi1, {style : 'currency', currency : donvi2});
    return money
}  

     

                     /*cart*/
