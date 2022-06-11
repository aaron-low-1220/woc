var two = document.getElementById('two');
var sixty = document.getElementById('sixty');
var twoFifty = document.getElementById('twoFifty');
var thousand = document.getElementById('thousand');
var fourThousand = document.getElementById('fourThousand');
var modalImg = document.getElementById('mainimg');

two.onclick = function() {
    modalImg.src = '../img/ISO/100.jpg';
    console.log(modalImg)
}
sixty.onclick = function() {
    modalImg.src = '../img/ISO/400.jpg';
}
twoFifty.onclick = function() {
    modalImg.src = '../img/ISO/1600.jpg';
}
thousand.onclick = function() {
    modalImg.src = '../img/ISO/6400.jpg';
}
fourThousand.onclick = function() {
    modalImg.src = '../img/ISO/25600.jpg';
}