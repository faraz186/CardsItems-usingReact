import './App.css';
import { useState } from 'react';
import Card from './card'

function App() {

  const [arr,setArr] = useState([
    {
      id : 452,
      title : "Shirt",
      image : "https://imagex.kraftly.com/w_500/h_650/m_box/https://s3-eu-west-1.amazonaws.com/krios-uploads/uploads/1511200246461image.png",
      Description : "A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments",
      Quantity : 10,
      Size : "Medium-Large",
      price : "2500/="
    },
    
  ])

  const [arr2,setArr2] = useState([
    {
      id : 162,
      title2 : "Belt",
      image2 : "https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHd7c18d5a3254424cb238ac3b26e9538cd.jpg_480x480.jpg",
      Description2: "Imported 100% Full Grain Leather 100% Cow Leather Belt Export Quality Fashionable Semi-Formal Pure Leather 100% Satisfaction Guaranteed Very cost effective, available in really cheap price as compare to the market in pakistan.",
      Quantity2 : 3,
      Category2: "Men's Belt",
      price2 : "850/="
    },
  ])

  const [arr3,setArr3] = useState([
    {
      id : 988,
      title3 : "Coat",
      image3 : "https://4.imimg.com/data4/YQ/CA/MY-1775539/men-summer-coat-250x250.jpg",
      Description3 : "Classic stand collar short coat to give the silhouette a leaner, tall and straight look. Supersoft lining for warmth and softness in winter. Nice stitching and shoulder seam, durable to wear. Front zipper pockets for convenient storage.",
      Size3: "Large",
      Quantity3: 6,
      Category3 : "Ladies and Men's Small or Large",
      price3 : "3600/="
    },
  ])

  const [arr4,setArr4] =useState([
    {
      id : 110,
      title4 : "Shoes",
      image4 : "http://cdn.shopify.com/s/files/1/0523/9875/1922/collections/GS7030-1_160x_5115ca53-1833-43a4-b941-91141738c845_1200x1200.jpg?v=1649313107",
      Description4: "comfortable to wear soft and casua durable for men On net material trendy",
      Category4: "Men's Shoes",
      Quantity4 : 5,
      Size4 : "Medium Small",
      price4 : "1200/="
    },
  ])

  const [arr5,setArr5] = useState([
    {
      id : 755,
      title5 : "Pant",
      image5 : "https://static.fibre2fashion.com/MemberResources/LeadResources/1/2019/2/Buyer/19159358/Images/19159358_0_men-s-casual-pants.jpg",
      Category5: "Men's Category",
      Quantity5: 9,
      Size5: "Large",
      Description5: "Stylish Pant For Men Premium quality Durable Fine Stitching ​​​​​​​​Comfortable soft fabric and Easily Handle it.",
      price5 : "720/="
    },
  ])

  const [arr6,setArr6] = useState([
    {
      id : 265,
      title6 : "Tie",
      image6 : "https://images.bewakoof.com/uploads/grid/app/types-of-ties-for-men-bewakoof-blog-1-1613365459.jpg",
      Category6: "Men's Category",
      Quantity6: 9,
      Size6: "Normal",
      Description6: "Stylish View and Premium quality Durable Fine Stitching ​​​​​​​​Comfortable soft fabric and Easily Handle it.",
      price6 : "250/="
    },
  ])

  const addToCart=()=>{
    alert(`ITEM 1
    title: Shirt
    Description: A shirt is a cloth garment for the upper body (from the neck to the waist). Originally an undergarment worn exclusively by men, it has become, in American English, a catch-all term for a broad variety of upper-body garments and undergarments",
    Quantity: 10
    Size: Medium-Large
    price: 2500/=
    `)
    
  }
  const addToCart2=()=>{
    alert(`ITEM 2
    title: Belt
    Description: Imported 100% Full Grain Leather 100% Cow Leather Belt Export Quality Fashionable Semi-Formal Pure Leather 100% Satisfaction Guaranteed Very cost effective, available in really cheap price as compare to the market in pakistan.
    Quantity: 3
    Category: Men's Belt
    price: 850/=
    `)
  }
  const addToCart3=()=>{
    alert(`ITEM 3
    title: Coat
    Description: Classic stand collar short coat to give the silhouette a leaner, tall and straight look. Supersoft lining for warmth and softness in winter. Nice stitching and shoulder seam, durable to wear. Front zipper pockets for convenient storage.
    Size: Large
    Quantity: 6
    Category: Ladies and Men's Small or Large.
    price: 3600/=
    `)
    
  }
  const addToCart4=()=>{
    alert(`ITEM 4
    title : Shoes
    Description: comfortable to wear soft and casua durable for men On net material trendy.
    Category: Men's Shoes
    Quantity : 5
    Size : Medium Small
    price : 1200/=
    `)
  }
  const addToCart5=()=>{
    alert(`ITEM 5
    title : Pant
    Category: Men's Category
    Quantity: 9
    Size: Large
    Description: Stylish Pant For Men Premium quality Durable Fine Stitching ​​​​​​​​Comfortable soft fabric and Easily Handle it.
    price5: 720/=
    `)
  }
  const addToCart6=()=>{
    alert(`ITEM 6
    title : Tie
    Category: Men's Category
    Quantity: 9
    Size: Normal
    Description: Stylish View and Premium quality Durable Fine Stitching ​​​​​​​​Comfortable soft fabric and Easily Handle it.
    price : 250/=
    `)
  }
  return (
    <div className="App">
      {
        arr.map((e)=><Card title={e.title} price={e.price}
        action={addToCart} image={e.image}/>)
      }
      {
        arr2.map((e)=><Card title={e.title2} price={e.price2}
        action={addToCart2} image={e.image2}/>)
      }
      {
        arr3.map((e)=><Card title={e.title3} price={e.price3}
        action={addToCart3} image={e.image3}/>)
      }
      {
        arr4.map((e)=><Card title={e.title4} price={e.price4}
        action={addToCart4} image={e.image4}/>)
      }
      {
        arr5.map((e)=><Card title={e.title5} price={e.price5}
        action={addToCart5} image={e.image5}/>)
      }
      {
        arr6.map((e)=><Card title={e.title6} price={e.price6}
        action={addToCart6} image={e.image6}/>)
      }
    
    </div>
  );
}

export default App;
