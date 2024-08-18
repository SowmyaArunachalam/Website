let products = {
    data: [
      {
        productName: "Chicken Biriyani",
        category: "chicken",
        price: "RS.150",
        image: "chicken/biriyani.jpg",
      },
      {
        productName: "Chicken Chilli",
        category: "chicken",
        price: "RS.180",
        image: "chicken/chilli.jpg",
      },
      {
        productName: "Chicken Grill",
        category: "chicken",
        price: "RS.540",
        image: "chicken/grill.jpg",
      },
      {
        productName: "Fried Chicken",
        category: "chicken",
        price: "RS.450",
        image: "chicken/kfc.jpg",
      },
      {
        productName: "Crab Roast",
        category: "sea-food",
        price: "RS.250",
        image: "crab/crabroast.jpg",
      },
      
      {
        productName: "Crab Fry",
        category: "sea-food",
        price: "RS.280",
        image: "crab/fry.jpg",
      },
      
      {
        productName: "Prawn Chilli",
        category: "sea-food",
        price: "RS.140",
        image: "crab/prawnchill1.jpg",
      },
      {
        productName: "Prawn Soup",
        category: "sea-food",
        price: "RS.150",
        image: "crab/prawnsoup.jpg",
      },
      {
        productName: "Fish Biriyani",
        category: "fish",
        price: "RS.400",
        image: "fish/fishbiriyani2.jpg",
      },
      {
        productName: "Fish Fry",
        category: "fish",
        price: "RS.200",
        image: "fish/fishfry.jpg",
      },
      
      {
        productName: "Fish Gravy",
        category: "fish",
        price: "RS.250",
        image: "fish/fishgravy.jpg",
      },
      {
        productName: "Fish Grill",
        category: "fish",
        price: "RS.350",
        image: "fish/fishgrill.jpg",
      },
      {
        productName: "Mutton Biriyani",
        category: "mutton",
        price: "RS.250",
        image: "mutton/biriyani.jpg",
      },
      {
        productName: "Mutton Chukka",
        category: "mutton",
        price: "RS.180",
        image: "mutton/chukka.jpg",
      },
      {
        productName: "Mutton Gravy",
        category: "mutton",
        price: "RS.240",
        image: "mutton/jose.jpg",
      },
      {
        productName: "Mutton Kebab",
        category: "mutton",
        price: "RS.250",
        image: "mutton/kebab.jpg",
      },
      {
        productName: "Redvelvet Cake",
        category: "sweet",
        price: "RS.150",
        image: "sweets/red.jpg",
      },
      {
        productName: "Rasamalai",
        category: "sweet",
        price: "RS.100",
        image: "sweets/r1.jpg",
      },
      {
        productName: "Gulab Jamun",
        category: "sweet",
        price: "RS.70",
        image: "sweets/jamun.jpg",
      },
      {
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