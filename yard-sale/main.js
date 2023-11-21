const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const iconMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const iconAside = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')

navbarEmail.addEventListener('click', toggleDesktopMenu)
iconMenu.addEventListener('click', toggleMobileMenu)
iconAside.addEventListener('click', toggleShoppingCartContainer)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function closeAll() {
    toClose = [desktopMenu, mobileMenu, shoppingCartContainer, productDetailContainer]
    for(container of toClose) {
        container.classList.add('inactive')
    }
}
function toggleDesktopMenu() {
    const closed = desktopMenu.classList.contains('inactive')
    closeAll()
    if(closed) {
        desktopMenu.classList.remove('inactive')
    }
}
function toggleMobileMenu() {
    const closed = mobileMenu.classList.contains('inactive')
    closeAll()
    if(closed) {
        mobileMenu.classList.remove('inactive')
    }
}
function toggleShoppingCartContainer() {
    const closed = shoppingCartContainer.classList.contains('inactive')
    closeAll()
    if(closed) {
        shoppingCartContainer.classList.remove('inactive')
    }
}
function openProductDetailAside() {
    closeAll()
    productDetailContainer.classList.remove("inactive")
}
function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive")
}

const productList = []

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Table',
    price: 200,
    image: 'https://images.pexels.com/photos/2451264/pexels-photo-2451264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Dish',
    price: 40,
    image: 'https://images.pexels.com/photos/842545/pexels-photo-842545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Chairs',
    price: 400,
    image: 'https://images.pexels.com/photos/279648/pexels-photo-279648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Fridge',
    price: 800,
    image: 'https://images.pexels.com/photos/6508357/pexels-photo-6508357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Plant',
    price: 90,
    image: 'https://images.pexels.com/photos/1445416/pexels-photo-1445416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Tree',
    price: 2000,
    image: 'https://images.pexels.com/photos/59321/pexels-photo-59321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Playground',
    price: 1200,
    image: 'https://images.pexels.com/photos/133458/pexels-photo-133458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
    name: 'Teddybear',
    price: 8,
    image: 'https://images.pexels.com/photos/12211/pexels-photo-12211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})


function renderProducts(productList) {
    for(product of productList) {
        const cardsContainer = document.querySelector('.cards-container')
    
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
        cardsContainer.appendChild(productCard)
    
        const img = document.createElement('img')
        img.setAttribute('src', product.image)
        img.style.cursor = 'pointer'
        img.addEventListener('click', openProductDetailAside)
        productCard.appendChild(img)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
        productCard.appendChild(productInfo)
        
        const productInfoDiv = document.createElement('div')
        productInfo.appendChild(productInfoDiv)
        
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
        productInfoDiv.appendChild(productPrice)
        
        const productName = document.createElement('p')
        productName.innerText = product.name
        productInfoDiv.appendChild(productName)
        
        const productInfoFigure = document.createElement('figure')
        productInfo.appendChild(productInfoFigure)
    
        const productFigureImg = document.createElement('img')
        productFigureImg.setAttribute('src', 'icons/bt_add_to_cart.svg')
        productInfoFigure.appendChild(productFigureImg)
    }
}

renderProducts(productList)