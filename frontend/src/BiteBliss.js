const productsArray = [
  {
  _id: {
    $oid: "653edccf9fc75f5876bc080e"
  },
  TYPE: "NORTH INDIAN",
  PLACE_NAME: "PAHALWANS",
  FOOD_AVAILABLE: "Atta Bread White Bread Masala Bread Fruit Bread Garlic Bread Oats Bread Multigrain Bread Sugar Free Butter Toast  Grams Suji Rusk  Gms Butter Toast   Gms  Atta Cookies  Grams Butter Cake Rusk  Grams Almond Sugar Free Cookies  Grams\nBlack Forest Pastry Fruit Cream   Gms  Cupcake Donut Mountain Dew Can  Ml Pepsi Can  Ml Lassi  Ml Khajoor  Kg Amartigrams Paneer Jalebikg Gujiakg Kaju Rollgrams Milk Chocolategrams Dhanedar Barfikg Dhoda Burfikg Badam Pinnikg Shahi Pinnigrams Motichoor Ladookg Kaju Barfigrams Chana Rice Chana Bhatura\nSpring Roll Spinach Cheese Corn Sandwich Paneer Roll Paneer Patty Veg Patty Aloo Tokri Samosa Chana  Pieces Onion Uttapam Paneer Uttapam Mix Uttapam Onion Dosa Sugar Free Channa Burfigrams Sugar Free Amaratigrams Sugar Free Burfigrams Sugar Free Ladoograms Gulab Katli  Grams Dry Fruit Ladoo  Grams",
  PRICE: 400
},
{
  _id: {
    "$oid": "653edccf9fc75f5876bc080f"
  },
  TYPE: "NORTH INDIAN",
  PLACE_NAME: "KWALITY FOOD POINT",
  FOOD_AVAILABLE: "Fried Papad Veg Salad Mixed Veg Raita Plain Curd Garlic Bread Raj Kachori Papdi Chaat Dahi Bhalla Kalari Kulcha Chana Bhatura Chana Puri Chana Samosa Stuffed Kulcha Laccha Parantha Churi Naan Plain Naan Butter Roti Plain Roti Kwality Special Sandwich Chilli Cheese Sandwich Cheese Grilled Sandwich Grilled Sandwich Veg Sandwich Kwality Burger Paneer Burger Cheese Burger Veg Burger Chilli Paneer Dry American Chopsuey Veg Chopsuey Veg Singapore Noodles Veg Mushroom Fried Rice\nDry Fruit Rabri Faluda Dry Fruit Rabri Matka Kulfi Rasgulla  Pieces Fresh Lime Soda Salt Fresh Lime Soda Sweet Badaam Milk Chocolate Shake Cold Coffee Banana Shake Strawberry Shake Vanilla Shake Mango Shake Paneer Kulcha Gobi Kulcha Aloo Kulcha Amritsari Kulcha Special Rajma Fry Paneer Bhurji Mutter Paneer Navratan Korma Paneer Pasanda Malai Kofta Momos & ChampPrice Achari Momos Malai Momos Veg Fried Momos Veg Steamed Momos Achari Champ Malai Champ Veg White Pasta Veg Red Pasta Veg Pulao Jeera Rice Plain Rice Veg Biryani Pav Bhaji  Pieces Of Pav Veg Manchow Soup Veg Noodle Soup Garlic Mushroom Soup Veg Hot And Sour Soup Veg Sweet Corn Soup Mushroom Duplex Paneer Tikka Mushroom Tikka Chinese Thali Deluxe Thali Veg Thali",
  PRICE: 300
},
{
  _id: {
    $oid: "653edccf9fc75f5876bc0810"
  },
  TYPE: "NORTH INDIAN",
  PLACE_NAME: "KC PVR",
  PRICE: 600
},
{
  _id: {
    $oid: "653edccf9fc75f5876bc0811"
  },
  TYPE: "NORTH INDIAN",
  PLACE_NAME: "THE GRANDSTAND RESTAURANT & SPORTS BAR",
  PRICE: 1200
},
// {
//   "_id": {
//     "$oid": "653edccf9fc75f5876bc0812"
//   },
//   "TYPE": "NORTH INDIAN",
//   "PLACE NAME": "KHAANA KHAZANA",
//   "PRICE LEVEL FOR SINGLE PERSON": 400
// },
// {
//   "_id": {
//     "$oid": "653edccf9fc75f5876bc0813"
//   },
//   "TYPE": "NORTH INDIAN",
//   "PLACE NAME": "KC RESIDENCY",
//   "PRICE LEVEL FOR SINGLE PERSON": 1200
// },
// {
//   "_id": {
//     "$oid": "653edccf9fc75f5876bc0814"
//   },
//   "TYPE": "NORTH INDIAN",
//   "PLACE NAME": "ZAMINDARA DHABA",
//   "PRICE LEVEL FOR SINGLE PERSON": 400
// },
// {
//   "_id": {
//     "$oid": "653edccf9fc75f5876bc0815"
//   },
//   "TYPE": "NORTH INDIAN",
//   "PLACE NAME": "NIHARIKA",
//   "PRICE LEVEL FOR SINGLE PERSON": 300
// },
// {
//   "_id": {
//     "$oid": "653edccf9fc75f5876bc0816"
//   },
//   "TYPE": "MIX CUSINE",
//   "PLACE NAME": "PIRATES OF GRILL",
//   "PRICE LEVEL FOR SINGLE PERSON": 900
// },
// {
//   "_id": {
//     "$oid": "653edccf9fc75f5876bc0817"
//   },
//   "TYPE": "NORTH INDIAN",
//   "PLACE NAME": "SATTVIK PURE VEG RESTAURANT",
//   "PRICE LEVEL FOR SINGLE PERSON": 400
// },
// {
//   "_id": {
//     "$oid": "653edccf9fc75f5876bc0818"
//   },
//   "TYPE": "MIX CUSINE",
//   "PLACE NAME": "BARBEQUE NATION - JAMMU",
//   "PRICE LEVEL FOR SINGLE PERSON": 800
// },
// {
//   "_id": {
//     "$oid": "653edccf9fc75f5876bc0819"
//   },
//   "TYPE": "NORTH INDIAN",
//   "PLACE NAME": "EARTHEN OVEN RESTAURANT",
//   "PRICE LEVEL FOR SINGLE PERSON": 400
// },
// {
//   "_id": {
//     "$oid": "653edccf9fc75f5876bc081a"
//   },
//   "TYPE": "NORTH INDIAN",
//   "PLACE NAME": "FLAVOURS OF KASHMIR",
//   "PRICE LEVEL FOR SINGLE PERSON": 400
// },
// {
//   "_id": {
//     "$oid": "653edccf9fc75f5876bc081b"
//   },
//   "TYPE": "NORTH INDIAN",
//   "PLACE NAME": "PUNJABI BROTHERS",
//   "PRICE LEVEL FOR SINGLE PERSON": 400
// },
// {
//   "_id": {
//     "$oid": "653edccf9fc75f5876bc081c"
//   },
//   "TYPE": "NORTH INDIAN",
//   "PLACE NAME": "BLUE CORIANDER THE RESTAURANT",
//   "PRICE LEVEL FOR SINGLE PERSON": 800
// },
// {
//   "_id": {
//     "$oid": "653edccf9fc75f5876bc081d"
//   },
//   "TYPE": "NORTH INDIAN",
//   "PLACE NAME": "THE TERRACE SKY LOUNGE",
//   "PRICE LEVEL FOR SINGLE PERSON": 900
// },
// {
//   "_id": {
//     "$oid": "653edccf9fc75f5876bc081e"
//   },
//   "TYPE": "NORTH INDIAN",
//   "PLACE NAME": "MOTI MAHAL DELUX",
//   "PRICE LEVEL FOR SINGLE PERSON": 400
// },
// {
//   "_id": {
//     "$oid": "653edccf9fc75f5876bc081f"
//   },
//   "TYPE": "NORTH INDIAN",
//   "PLACE NAME": "AROMA MULTI CUSINE FAMILY RESTAURANT JANIPUR",
//   "PRICE LEVEL FOR SINGLE PERSON": 500
// },
// {
//   "_id": {
//     "$oid": "653edccf9fc75f5876bc0820"
//   },
//   "TYPE": "INDO-CHINESE",
//   "PLACE NAME": "MOMOTAILS",
//   "PRICE LEVEL FOR SINGLE PERSON": 500
// },
// {
//   "_id": {
//     "$oid": "653edccf9fc75f5876bc0821"
//   },
//   "TYPE": "NORTH INDIAN",
//   "PLACE NAME": "CLAYKILOS JAMMU",
//   "PRICE LEVEL FOR SINGLE PERSON": 400
// },
// {
//   "_id": {
//     "$oid": "653edccf9fc75f5876bc0822"
//   },
//   "TYPE": "NORTH INDIAN",
//   "PLACE NAME": "JAMMU DARBAR",
//   "PRICE LEVEL FOR SINGLE PERSON": 400
// },
// {
//   "_id": {
//     "$oid": "653edccf9fc75f5876bc0823"
//   },
//   "TYPE": "NORTH INDIAN",
//   "PLACE NAME": "AHDOOS HOTEL",
//   "PRICE LEVEL FOR SINGLE PERSON": 400
// }
]


const getProductData = (id) => {
  let productData = productsArray.find(product=>product.id===id);

  if(productData===undefined){
      console.log("produc not exist"+id);
      return undefined
  }
return  productData;
}

export {productsArray,getProductData}