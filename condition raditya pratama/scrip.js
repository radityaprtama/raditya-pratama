document.getElementById('Orderbutton').onclick = function () {
    let foodPrice = parseInt(document.getElementById('food').value);
    let drinkPrice = parseInt(document.getElementById('drink').value);

    let totalprice = foodPrice + drinkPrice

    let discount = 0

    if (totalprice > 30){
        alert(('ok'))
    }
}