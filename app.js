const navbarLiShop = document.querySelectorAll("#navbarLiShop")[0];
const shopLi = document.querySelectorAll(".shop-cntnr .shop-li");
document.querySelectorAll(".active .shop-li-dropdown")[0].style.visibility = "hidden";
navbarLiShop.onmouseenter = () => {
    document.querySelectorAll(".active .shop-li-dropdown")[0].style.visibility = "visible";
    shopLi.forEach(current => {
        current.onmouseenter = () => {
            current.classList.add("active");
            current.lastElementChild.style.visibility = "visible";
            shopLi.forEach(y => {
                if (y != current) {
                    y.classList.remove("active");
                    y.lastElementChild.style.visibility = "hidden";
                }
            });
        }
    });
}

navbarLiShop.onmouseleave = () => {
    document.querySelectorAll(".active .shop-li-dropdown")[0].style.visibility = "hidden";
}

let _var_maxWidth= 1402;
_var_maxWidth = "calc(-"+_var_maxWidth.toString()+"px"+" + 100vw)";
const downbarElements= document.querySelectorAll(".downbar:not(#downbarHome,#downbarShop)").forEach(x =>{
    x.style.left = _var_maxWidth;
});
console.log(_var_maxWidth);