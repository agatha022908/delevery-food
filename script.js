const products = {
    plainBurger: {
        name: 'GAMBURGER',
        price: 10000,
        kcall: 250,
        amount: 0,
        get Summ() {
            return this.price * this.amount;
        },
        get Allkcall() {
            return this.kcall * this.amount;
        }
    },
    freshBurger: {
        name: 'GAMBURGER FRESH',
        price: 20500,
        kcall: 350,
        amount: 0,
        get Summ() {
            return this.price * this.amount;
        },
        get Allkcall() {
            return this.kcall * this.amount;
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        kcall: 650,
        amount: 0,
        get Summ() {
            return this.price * this.amount;
        },
        get Allkcall() {
            return this.kcall * this.amount;
        }
    },

}

const btnPlurOrMinus = document.querySelectorAll('.main__product-btn'),
    addCart = document.querySelector('.addCart'),
    receipt = document.querySelector('.receipt'),
    receiptWindow = document.querySelector('.receipt__window'),
    receiptWindowOut = document.querySelector('.receipt__window-out'),
    body = document.querySelector('body'),
    headerTitle = document.querySelector('.header__title')
    receiptWindowBtn = document.querySelector('.receipt__window-btn');
btnPlurOrMinus.forEach(function (el) {
    el.addEventListener('click', function (params) {
        plusOrMinus(this)
    })
})

function plusOrMinus(element) {
    const parent = element.closest('.main__product'),
        parentId = parent.getAttribute('id'),
        out = parent.querySelector('.main__product-num'),
        price = parent.querySelector('.main__product-price span'),
        kcall = parent.querySelector('.main__product-kcall span'),
        elementAttr = element.getAttribute('data-symbol')
    if (elementAttr == '+' && products[parentId].amount < 10) {
        products[parentId].amount++
    } else if (elementAttr == '-' && products[parentId].amount > 0) {
        products[parentId].amount--
    }
    out.innerHTML = products[parentId].amount
    price.innerHTML = products[parentId].Summ
    kcall.innerHTML = products[parentId].Allkcall
}

let arrayProduct = [],
    totalName = '',
    totalPrice = 0,
    totalKcall = 0;


addCart.addEventListener('click', function (e) {
    e.preventDefault()
    for (const key in products) { /* product objectini qarab chiqamiz */
        const po = products[key] /*  po - (product objecti) qulaylik uchun o'zgaruvchini ichiga solingan*/
        if (po.amount > 0) { /*  faqatgina amount kaliti 0 dan katta bo'lgan miqdorli objectlarni o'tkazamiz*/
            arrayProduct.push(po) /* massivga  kaliti 0 dan katta bo'lgan objectlarni qo'shamiz */
        }
        po.price = po.Summ  /* narxni o'zgartiramiz */
        po.kcall = po.Allkcall  /* kilakoriyani o'zgartiramiz */
    }
    arrayProduct.forEach(el => {
        totalPrice += el.price /* narxni summirovat qilamiz */
        totalKcall += el.kcall/* kaloriyani summirovat qilamiz */
        totalName += `${el.name} \n` /* barcha nomlarini birlashtiramiz */
    });
    receiptWindowOut.innerHTML = `Buyurtmangiz: \n${totalName}\nUmumiy kaloriyasi: ${totalKcall}\nUmumiy Narxi: ${totalPrice}`
    receipt.style.display = 'flex'
    setTimeout(() => {
        receipt.style.opacity = '1'
    }, 100);
    setTimeout(() => {
        receiptWindow.style.top = '30%'
    }, 100);
    body.style.overflow = 'hidden'
    const outNum = document.querySelectorAll('.main__product-num')
    outNum.forEach(element => {
        element.innerHTML = 0
    });
    const outPrice = document.querySelectorAll('.main__product-price span')
    outPrice.forEach(element => {
        element.innerHTML = 0
    });

})

receiptWindowBtn.addEventListener('click', () => {
    location.reload()
})



const headerTimerExtra = document.querySelector('.header__timer-extra');
function level() {
    if (headerTimerExtra.innerHTML < 30) {
        headerTimerExtra.innerHTML++
        setTimeout(level, 90)
    } else if (headerTimerExtra.innerHTML < 50) {
        headerTimerExtra.innerHTML++
        setTimeout(level, 150)
    } else if (headerTimerExtra.innerHTML < 70) {
        headerTimerExtra.innerHTML++
        setTimeout(level, 200)
    } else if (headerTimerExtra.innerHTML >= 70 && headerTimerExtra.innerHTML < 100) {
        headerTimerExtra.innerHTML++
        setTimeout(level, 300)
    }
}
level()




const view = document.querySelector('.view'),
     viewImg = document.querySelector('.view img'),
    viewbtn = document.querySelector('.view__close'),
    productInfo = document.querySelectorAll('.main__product-info');

productInfo.forEach(item => {
    item.addEventListener('dblclick', function (el) {
        let img = this.querySelector('.main__product-img');
        let imgAttr = img.getAttribute('src')
        viewImg.setAttribute('src', imgAttr)
        view.classList.add('active')
    })

});


viewbtn.onclick = () => {
    view.classList.remove('active')
}

let h1Text = headerTitle.innerHTML
headerTitle.innerHTML = ''

i = 0 

function text() {
       if (i  < h1Text.length) {
        headerTitle.innerHTML += h1Text[i]
        i++ 
        setTimeout(() => {
            text()
        }, 100);
       }
    
 
}

text()