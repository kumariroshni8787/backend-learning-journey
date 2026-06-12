const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    cp: 450, // Cost Price
    sp: 650, // Selling Price
    category: "Electronics",
    quantity: 25
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    cp: 1800,
    sp: 200,
    category: "Electronics",
    quantity: 12
  },
  {
    id: 3,
    name: "Notebook",
    cp: 40,
    sp: 60,
    category: "Stationery",
    quantity: 100
  },
  {
    id: 4,
    name: "Water Bottle",
    cp: 120,
    sp: 80,
    category: "Accessories",
    quantity: 50
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    cp: 900,
    sp: 1300,
    category: "Electronics",
    quantity: 18
  },
  {
    id: 6,
    name: "School Bag",
    cp: 700,
    sp: 950,
    category: "Bags",
    quantity: 20
  },
  {
    id: 7,
    name: "LED Bulb",
    cp: 80,
    sp: 100,
    category: "Home",
    quantity: 75
  },
  {
    id: 8,
    name: "Sports Shoes",
    cp: 1500,
    sp: 1200,
    category: "Footwear",
    quantity: 14
  },
  {
    id: 9,
    name: "Smart Watch",
    cp: 2500,
    sp: 3400,
    category: "Electronics",
    quantity: 8
  },
  {
    id: 10,
    name: "Coffee Mug",
    cp: 110,
    sp: 50,
    category: "Kitchen",
    quantity: 45
  }
];

// for(var i = 0; i<products.length;i++)
// {
    // console.log(`---------product :- ${i+1}--------`)
    // console.log(products[i])
    // console.log(`${i+1} ${products[i].name}`)
// }

// var totalProduct = 0;

// for(var i=0; i<products.length; i++)
// {
//     totalProduct =  totalProduct + products[i].quantity
// }

// console.log(`total number of product = ${totalProduct}`)


// var totalInvest = 0;
// var totalSell = 0;

// for(var i = 0; i<products.length; i++)
// {
//     totalInvest = totalInvest + (products[i].cp * products[i].quantity)
//     totalSell = totalSell + (products[i].sp * products[i].quantity)
// }

// console.log(`total investment :- ${totalInvest}`)
// console.log(`total Sell :- ${totalSell}`)

// if(totalSell>totalInvest)
// {
//     var profit = totalSell - totalInvest
//     var pf = (profit*100)/totalInvest
//     console.log(`total profit = ${profit}`)
//     console.log(`profit % = ${pf}`)
// }
// else
// {
//     var loss =  totalInvest - totalSell 
//     var lp = (loss*100)/totalInvest
//     console.log(`total loss = ${loss}`)
//     console.log(`loss % = ${lp}`)
// }


// for(var i = 0; i<products.length; i++)
// {
//     if(products[i].cp > products[i].sp)
//     {
//         console.log(products[i].name)
//     }
// }


const productQty = {
};

for(var i = 0; i<products.length; i++)
{
    if(productQty[products[i].category]) //check  kro ki current product ka category productQTY me available hai kya
    {
        productQty[products[i].category] = productQty[products[i].category] + products[i].quantity
    }
    else
    {
        productQty[products[i].category] = products[i].quantity
    }
}

console.log(productQty)