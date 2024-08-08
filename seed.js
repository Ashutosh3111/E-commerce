const Product = require('./models/productModel');

const products = [
    {
        name: 'Iphone 12 pro',
        price: '149990',
        img: 'https://m.media-amazon.com/images/I/71XXJC7V8tL._SL1500_.jpg',
        desc: "6.7-inch (17 cm diagonal) Super Retina XDR display Ceramic Shield, tougher than any smartphone glass A14 Bionic chip, the fastest chip ever in a smartphone Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording LiDAR Scanner for improved AR experiences, Night mode portraits 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording Industry-leading IP68 water resistance"
    },
    {
        name: 'Laptop',
        price: '49990',
        img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
        desc: "A laptop, laptop computer, or notebook computer is a small, portable personal computer (PC) with a screen and alphanumeric keyboard. These typically have a clamshell form factor, typically having the screen mounted on the inside of the upper lid and the keyboard on the inside of the lower lid, although 2-in-1 PCs with a detachable keyboard are often marketed as laptops or as having a laptop mode. Laptops are folded shut for transportation, and thus are suitable for mobile use."
    },
    {
        name: 'Ipad',
        price: '89990',
        img: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        desc: "iPad is a line of tablet computers designed, developed and marketed by Apple Inc., which run the iOS and iPadOS mobile operating systems. The first iPad was released on April 3, 2010; the most recent iPad models are the ninth-generation iPad, released on September 24, 2021; the sixth-generation iPad mini, released on September 24th, 2021; the fourth-generation iPad Air, released on October 23, 2020; and the third-generation 11-inch (280 mm) and fifth-generation 12.9-inch (330 mm) iPad Pro, released on May 21, 2021"
    },
    {
        name: 'DSLR',
        price: '109990',
        img: 'https://images.unsplash.com/photo-1617036083087-ce31fac66b23?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHNscnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc: "6.7-inch (17 cm diagonal) Super Retina XDR display Ceramic Shield, tougher than any smartphone glass A14 Bionic chip, the fastest chip ever in a smartphone Pro camera system with 12MP Ultra Wide, Wide and Telephoto cameras; 5x optical zoom range; Night mode, Deep Fusion, Smart HDR 3, Apple ProRAW, 4K Dolby Vision HDR recording LiDAR Scanner for improved AR experiences, Night mode portraits 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording Industry-leading IP68 water resistance"
    },
    {
        name: 'Watch',
        price: '29990',
        img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc: "A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities. A wristwatch is designed to be worn around the wrist, attached by a watch strap or other type of bracelet, including metal bands, leather straps or any other kind of bracelet. A pocket watch is designed for a person to carry in a pocket, often attached to a chain."
    },
    {
        name: 'Airpods',
        price: '22990',
        img: 'https://images.unsplash.com/photo-1563237602-b68d2dfb3f3b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWFycG9kc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc: "AirPods are wireless Bluetooth earbuds designed by Apple. They were first announced on September 7, 2016, with a second generation announced and released in March 2019. They are Apple's entry-level wireless headphones, sold alongside the AirPods Pro and AirPods Max. Within two years, they became Apple's most popular accessory"
    },
    {
        name: 'Sport Shoes',
        price: '1990',
        img: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc: "A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with form originally being tied to function. Though the human foot can adapt to varied terrains and climate conditions, it is still vulnerable to environmental hazards such as sharp rocks and temperature extremes, which shoes protect against. Some shoes are worn as safety equipment, such as steel-toe boots which are required footwear at industrial worksites"
    },
    {
        name: 'T-Shirt',
        price: '990',
        img: 'https://images.unsplash.com/photo-1618354691438-25bc04584c23?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRzaGlydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc: "A T-shirt, or tee shirt, is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally, it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean. The T-shirt evolved from undergarments used in the 19th century and, in the mid-20th century, transitioned from undergarment to general-use casual clothing"
    },
    {
        name: 'Jeans',
        price: '1590',
        img: 'https://images.unsplash.com/photo-1556301590-319c5b2ac83d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGplYW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        desc: "Jeans are a type of pants or trousers, typically made from denim or dungaree cloth. Often the term 'jeans' refers to a particular style of trousers, called 'blue jeans', which were invented by Jacob W. Davis in partnership with Levi Strauss & Co. in 1871[1] and patented by Jacob W. Davis and Levi Strauss on May 20, 1873. Prior to the Levi Strauss patented trousers, the term 'blue jeans' had been long in use for various garments (including trousers, overalls, and coats), constructed from blue-colored denim"
    },
]

const seedDB= async()=>{
 await Product.deleteMany({});
 await Product.insertMany(products);
 console.log('DB Seeded');
}

module.exports=seedDB;