import BagFootwear from "./data/Bags&Footwear.js"
import BeautyHealth from "./data/BeautyHealth.js"
import Electronics from "./data/Electronics.js"
import HomeKitchen from "./data/Home&Kitchen.js"
import JewelleryAccessories from "./data/Jwellery&Accessories.js"
import Kids from "./data/Kids.js"
import Men from "./data/Men.js"
import WomenEthnic from "./data/WomenEthnic.js"
import WomenWestern from "./data/WomenWestern.js"




let inputSearchEl = document.querySelector(".inputSearch");
let recentInput = [];
let formInputEl = document.getElementById("inputForm");
const listOfRecentEl = document.querySelector(".listOfRecent");

console.log(inputSearchEl);

inputSearchEl.addEventListener("keydown", () => {
    console.log(inputSearchEl);
    if (inputSearchEl.value) {
        document.getElementById("closeSearch").style.display = "block"
    }
    else {
        document.getElementById("closeSearch").style.display = "none"
    }
})

formInputEl.addEventListener("submit", (e) => {
    e.preventDefault()
    let listOfRecentHTMLEl = ""

    recentInput.unshift(inputSearchEl.value);
    console.log(recentInput)

    if (recentInput.length > 0) {
        for (let i = 0; i < recentInput.length; i++) {
            listOfRecentHTMLEl += `
             <div class="recentItem">
                        <div class="recentIcon">
                            <i class="fa regular fa-clock-rotate-left"></i>
                        </div>
                        <p>${recentInput[i]}</p>
             </div>
            `
        }
        listOfRecentEl.innerHTML = listOfRecentHTMLEl;
    }

})

// women Ethnic

let womenEthnic = document.getElementById("womenEthnic")
function womenEthnicFunc() {
    return WomenEthnic.map(el => {
        let list = "";
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
        <div class="column">
            <h4>${el.heading}</h4>
            ${list}
        </div>
        `
    }).join("")
}

womenEthnic.innerHTML = womenEthnicFunc();

//women Western

let womenWestern = document.getElementById("womenWestern")
function womenWesternFunc() {
    return WomenWestern.map(el => {
        let list = "";
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
        <div class="column">
            <h4>${el.heading}</h4>
            ${list}
        </div>
        `
    }).join("")
}

womenWestern.innerHTML = womenWesternFunc();

//men

let men = document.getElementById("men")
function menFunc() {
    return Men.map(el => {
        let list = "";
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
        <div class="column">
            <h4>${el.heading}</h4>
            ${list}
        </div>
        `
    }).join("")
}

men.innerHTML = menFunc();

//kids

let kids = document.getElementById("kids")
function kidsFunc() {
    return Kids.map(el => {
        let list = "";
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
        <div class="column">
            <h4>${el.heading}</h4>
            ${list}
        </div>
        `
    }).join("")
}

kids.innerHTML = kidsFunc();

//home & kitchen

let homeKitchen = document.getElementById("homeKitchen")
function homeKitchenFunc() {
    return HomeKitchen.map(el => {
        let list = "";
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
        <div class="column">
            <h4>${el.heading}</h4>
            ${list}
        </div>
        `
    }).join("")
}

homeKitchen.innerHTML = homeKitchenFunc();


//Beauty & Health


let beautyHealth = document.getElementById("beautyHealth")
function beautyHealthFunc() {
    return BeautyHealth.map(el => {
        let list = "";
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
        <div class="column">
            <h4>${el.heading}</h4>
            ${list}
        </div>
        `
    }).join("")
}

beautyHealth.innerHTML = beautyHealthFunc();

//jwelley 


let jwellery = document.getElementById("jwellery")
function jwelleryFunc() {
    return JewelleryAccessories.map(el => {
        let list = "";
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
        <div class="column">
            <h4>${el.heading}</h4>
            ${list}
        </div>
        `
    }).join("")
}

jwellery.innerHTML = jwelleryFunc();


//bag footwear


let bagFootwear = document.getElementById("bagFootwear")
function bagFootwearFunc() {
    return BagFootwear.map(el => {
        let list = "";
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
        <div class="column">
            <h4>${el.heading}</h4>
            ${list}
        </div>
        `
    }).join("")
}

bagFootwear.innerHTML = bagFootwearFunc();

//electronics


let electronics = document.getElementById("electronics")
function electronicsFunc() {
    return Electronics.map(el => {
        let list = "";
        list = el.data.map(element => `<p>${element}</p>`).join(" ")
        return `
        <div class="column">
            <h4>${el.heading}</h4>
            ${list}
        </div>
        `
    }).join("")
}

electronics.innerHTML = electronicsFunc();

/********product section******/
import ProductData from "./data.js"

const category = [...new Set(ProductData.map(el => el.category))]
console.log(category)


let filterData = []
document.addEventListener("click", (e) => {

    const KurtisEl = document.getElementById("kurtis").checked
    const shirtEl = document.getElementById("shirt").checked
    const BlancketEl = document.getElementById("blancket").checked
    const CoverEl = document.getElementById("cover").checked
    const BagsEl = document.getElementById("bag").checked
    const BlouseEl = document.getElementById("blouse").checked
    const SleeperEl = document.getElementById("sleeper").checked
    const SareesEl = document.getElementById("saree").checked
    const BraEl = document.getElementById("bra").checked
    const ProductEl = document.getElementById("product").checked
    const WatchesEl = document.getElementById("watch").checked
    const FrockEl = document.getElementById("frock").checked
    const DupattaEl = document.getElementById("dupatta").checked
    const GlapsEl = document.getElementById("glaps").checked
    const HealthEl = document.getElementById("health").checked
    const ShoesEl = document.getElementById("shoes").checked
    const LowerEl = document.getElementById("lower").checked
    const MushroomEl = document.getElementById("mushroom").checked
    const ShortsEl = document.getElementById("shorts").checked
    const NoteEl = document.getElementById("note").checked
    const OilsEl = document.getElementById("oil").checked
    const PillowEl = document.getElementById("pillow").checked
    const PlazoEl = document.getElementById("plazo").checked
    const LedEl = document.getElementById("led").checked
    const NecklessEl = document.getElementById("neckless").checked

    console.log(KurtisEl)

    filterData = ProductData.filter(el => (
        KurtisEl && el.category == "Women Kurtis" ||
        shirtEl && el.category == "T-Shirt" ||
        BlancketEl && el.category == "Baby Blancket" ||
        CoverEl && el.category == "Cover" ||
        BagsEl && el.category == "Latest Bags" ||
        BlouseEl && el.category == "blouse" ||
        SleeperEl && el.category == "Sleeper" ||
        SareesEl && el.category == "Women Sarees" ||
        BraEl && el.category == "Women Bra" ||
        ProductEl && el.category == "Product" ||
        WatchesEl && el.category == "Watches" ||
        FrockEl && el.category == "Frock" ||
        DupattaEl && el.category == "Women Dupattas" ||
        GlapsEl && el.category == "Hand Glaps" ||
        HealthEl && el.category == "Health Care" ||
        ShoesEl && el.category == "Shoes" ||
        LowerEl && el.category == "Lower" ||
        MushroomEl && el.category == "Mushroom" ||
        ShortsEl && el.category == "Women Shorts" ||
        NoteEl && el.category == "Notebook" ||
        OilsEl && el.category == "Oils" ||
        PillowEl && el.category == "Pillows" ||
        PlazoEl && el.category == "Women Plazo Set" ||
        LedEl && el.category == "Digital LED" ||
        NecklessEl && el.category == "Women Neckless"
    ));


    renderProductData();

});

function renderProductData() {
    let filterDataHTML = "";

    if (filterData[0]) {
        filterData.forEach(el => {
            filterDataHTML += `
             <div class="productCard">
                <div class="product_image">
                        <img src="./productimage/${el.img}">
                </div>
                <h3 class="productName">${el.name}</h3>
                <p class="product_price">
                    <span>₹</span>
                    <span>${el.price}</span>
            
                </p>
    
             </div>
                `
        })

    } else {
        ProductData.forEach(el => {
            filterDataHTML += `
             <div class="productCard">
                <div class="product_image">
                        <img src="./productimage/${el.img}">
                </div>
                <h3 class="productName">${el.name}</h3>
                <p class="product_price">
                    <span>₹</span>
                    <span>${el.price}</span>
                </p>
             </div>
                `
        })

    }

    document.getElementById("product_category_display_item").innerHTML = filterDataHTML;

}
renderProductData();

