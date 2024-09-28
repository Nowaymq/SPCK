if (localStorage.getItem("idDetail")) {
  const product = findItemById();
  document.querySelector(".ctsp").innerHTML = `
    <div class="img">
           <img src="${product.img}" alt="">
       </div>
       <div class="word">
           <H2> ${product.name}</H2>  
           <p> Men's Road Racing Shoes</p>
           <P> 8,059,000₫
           </P>
           <Button>Buy</Button>
           <p> ${product.word}Fine-tuned for marathon speed, the Alphafly 3 helps push you beyond what you thought possible. Three
               innovative technologies power your run: engineered to the exact specifications of championship athletes,
               a double dose of Air Zoom units helps launch you into your next step; a full-length carbon-fibre plate
               helps propel you forwards with ease; and a heel-to-toe ZoomX foam midsole helps keep you fresh from
               start to 26.2. Time to leave your old personal records in the dust.</p>
       </div>    
`;
} else {
  alert("Mời bạn chọn sản phẩm trước khi tới đây");
  location.href = "index.html";
}

function findItemById() {
  let id = localStorage.getItem("idDetail");
  for (let i = 0; i < data.length; i++) {
    if (id == data[i].id) {
      return data[i];
    }
  }
}
