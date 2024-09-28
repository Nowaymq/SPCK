

function renderHomePage() {
  let html = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i]) {
      html += `
         <div class="Trending">
                <img src="${data[i].img}" alt="">
                <button onclick="moveToPageDetail(${data[i].id})">${data[i].name}</button>
        </div>       
`;
    }
  }
  document.querySelector(".TT").innerHTML = html;
}
renderHomePage();

function moveToPageDetail(id) {
  localStorage.setItem("idDetail", id);
  location.href = "Page.html";
}
function addCart(id) {
  const product = findProductById(id);
  if (localStorage.getItem("cart")) {
    let cartLocal = JSON.parse(localStorage.getItem("cart"));
    for (let i = 0; i < cartLocal.length; i++) {
      if (cartLocal[i].id == id) {
        alert(" Bạn đã chọn trùng sản phẩm ");
        return;
      }
    }
    cartLocal.push(product);
    localStorage.setItem("cart", JSON.stringify(cartLocal));
  } else {
    let cart = [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  updateQuantityCart();
}

function findProductById(id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i];
    }
  }
}

function updateQuantityCart() {
  if (localStorage.getItem("cart")) {
    let cartLocal = JSON.parse(localStorage.getItem("cart"));
    document.querySelector(".wrapper-cart span").innerText = cartLocal.length;
  } else {
    document.querySelector(".wrapper-cart span").innerText = 0;
  }
}
// updateQuantityCart();
// checkLogin();
// function checkLogin() {
//   if (localStorage.getItem("user")) {
//     document.querySelector(".account").innerHTML = `
//         <div class="wrapperAccount">
//         <i class="fa-solid fa-user"></i>
//         ${localStorage.getItem("user")}
//         <ul>
//           <li>Thông tin cá nhân</li>
//           <li onclick="logout()">Đăng xuất</li>
//         </ul>
//       </div>
//     `;
//   } else {
//     document.querySelector(".account").innerHTML = `
//         <a href="dangky.html" style="color: white; text-decoration: none"
//         >Đăng ký</a
//       >
//       <a href="dangnhap.html" style="color: white; text-decoration: none"
//         >Đăng nhập</a
//       >
//     `;
//   }
// }

// function logout() {
//   localStorage.removeItem("user");
//   alert("Đăng xuất thành công");
//   checkLogin();
// }
