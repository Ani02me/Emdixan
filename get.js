//Emdixan6

// //1tapsrma

const eShop = {
  name: "Elmura",
  phoneNumber: "+7 700 202 0327",
  products: [
    {
      productName: "Ноутбук",
      category: "Электроника",
      price: 150000,
      stock: 25
    },
    {
      productName: "Смартфон",
      category: "Электроника",
      price: 90000,
      stock: 50
    },
    {
      productName: "Спорт аяқ киім",
      category: "Киім",
      price: 20000,
      stock: 15
    },
    {
      productName: "Табиғи шөп шайы",
      category: "Азық-түлік",
      price: 5000,
      stock: 100
    },
    {
      productName: "Шоколад",
      category: "Азық-түлік",
      price: 3000,
      stock: 200
    },
    function changeShopName() {
  const newShopName = prompt("Max palay");
  if (newShopName) {
      eShop.name = newShopName;
  } else {
      alert("Elmura");
  }
},
function changePhoneNumber() {
     const newPhoneNumber = prompt("+7 747 034 2331");
     if (newPhoneNumber) {
         eShop.phoneNumber = newPhoneNumber;
    } else {
        alert("+7 700 202 0327");
     }
  },


]
};

console.log(eShop);









































// function changePhoneNumber() {
//   const newPhoneNumber = prompt("Жаңа телефон нөмірін енгізіңіз:");
//   if (newPhoneNumber) {
//       eShop.phoneNumber = newPhoneNumber;
//   } else {
//       alert("");
//   }
// }
