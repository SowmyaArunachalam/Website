let products = {
    data: [
      {
        variety:"Chicken Variety",
        productName: "Biriyani",
        category: "chicken",
        price: "RS.150",
        image: "chicken/biriyani.jpg",
      },
      {
        variety:"Chicken Variety",
        productName: "Chicken Chilli",
        category: "chicken",
        price: "RS.180",
        image: "chicken/chilli.jpg",
      },
      {
        variety:"Chicken Variety",
        productName: "Chicken Grill",
        category: "chicken",
        price: "RS.540",
        image: "chicken/grill.jpg",
      },
      {
        variety:"Chicken Variety",
        productName: "Fried Chicken",
        category: "chicken",
        price: "RS.450",
        image: "chicken/kfc.jpg",
      },
      {
        variety:"Sea Food",
        productName: "Crab Roast",
        category: "sea-food",
        price: "RS.250",
        image: "crab/crabroast.jpg",
      },
      
      {
        variety:"Sea Food",
        productName: "Crab Fry",
        category: "sea-food",
        price: "RS.280",
        image: "crab/fry.jpg",
      },
      
      {
        variety:"Sea Food",
        productName: "Prawn Chilli",
        category: "sea-food",
        price: "RS.140",
        image: "crab/prawnchill1.jpg",
      },
      {
        variety:"Sea Food",
        productName: "Prawn Soup",
        category: "sea-food",
        price: "RS.150",
        image: "crab/prawnsoup.jpg",
      },
      {
        variety:"Fish Variety",
        productName: "Fish Biriyani",
        category: "fish",
        price: "RS.400",
        image: "fish/fishbiriyani2.jpg",
      },
      {
        variety:"Fish Variety",
        productName: "Spicy Fish Fry",
        category: "fish",
        price: "RS.200",
        image: "fish/fishfry.jpg",
      },
      
      {
        variety:"Fish Variety",
        productName: "Fish Gravy",
        category: "fish",
        price: "RS.250",
        image: "fish/fishgravy.jpg",
      },
      {
        variety:"Fish Variety",
        productName: "Fish Grill",
        category: "fish",
        price: "RS.350",
        image: "fish/fishgrill.jpg",
      },
      {
        variety:"Mutton Variety",
        productName: "Mutton Biriyani",
        category: "mutton",
        price: "RS.250",
        image: "mutton/biriyani.jpg",
      },
      {
        variety:"Mutton Variety",
        productName: "Mutton Chukka",
        category: "mutton",
        price: "RS.180",
        image: "mutton/chukka.jpg",
      },
      {
        variety:"Mutton Variety",
        productName: "Mutton Gravy",
        category: "mutton",
        price: "RS.240",
        image: "mutton/jose.jpg",
      },
      {
        variety:"Mutton Variety",
        productName: "Mutton Kebab",
        category: "mutton",
        price: "RS.250",
        image: "mutton/kebab.jpg",
      },
      {
        variety:"Desserts",
        productName: "Redvelvet Cake",
        category: "sweet",
        price: "RS.150",
        image: "sweets/red.jpg",
      },
      {
        variety:"Desserts",
        productName: "Rasamalai cake",
        category: "sweet",
        price: "RS.100",
        image: "sweets/r1.jpg",
      },
      {
        variety:"Desserts",
        productName: "Gulab Jamun",
        category: "sweet",
        price: "RS.70",
        image: "sweets/jamun.jpg",
      },
      {
        variety:"Desserts",
        productName: "Chocolate Cake",
        category: "sweet",
        price: "RS.350",
        image: "sweets/choco.jpg",
      },
      
    ],
  };
function loading(){
for(let i of products.data){
    

    let card=document.createElement("div");
    card.classList.add("card","fish-sub");

    let image1=document.createElement("img");
    image1.setAttribute("src",i.image);
    card.appendChild(image1);

    let name=document.createElement("h3");
    name.textContent=i.productName;
    card.appendChild(name);

    let rate=document.createElement("h5");
    rate.textContent=i.price;
    card.appendChild(rate);

    let button = document.createElement('button');
    button.className="button-70";
    button.setAttribute("role","button");
    button.textContent="BuyNow";
    card.appendChild(button);

    document.getElementById(i.category).appendChild(card);
}
  
}

// let l=h1, div.card.fish-sub, div.card.fish-sub, div.card.fish-sub, div.card.fish-sub;



function searchbar(){
  document.getElementById("chicken").innerHTML = ''
  document.getElementById("sea-food").innerHTML = ''
  document.getElementById("fish").innerHTML = ''
  document.getElementById("mutton").innerHTML = ''
  document.getElementById("sweet").innerHTML = ''



  let srch=document.querySelector(".search-inp").value.toLowerCase();
  if (!srch)
    return
  for(let i of products.data){
    if(i.productName.toLowerCase().match(srch)){
      let card=document.createElement("div");
      card.classList.add("card","fish-sub");
  
      let image1=document.createElement("img");
      image1.setAttribute("src",i.image);
      card.appendChild(image1);
  
      let name=document.createElement("h3");
      name.textContent=i.productName;
      card.appendChild(name);
  
      let rate=document.createElement("h5");
      rate.textContent=i.price;
      card.appendChild(rate);
  
      let button = document.createElement('button');
      button.className="button-70";
      button.setAttribute("role","button");
      button.textContent="BuyNow";
      card.appendChild(button);
  
      document.getElementById(i.category).appendChild(card);
    }
    
  }}