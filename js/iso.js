var modal = document.getElementById('bigDiv')
var img1 = document.getElementById('small1')
var img2 = document.getElementById('small2')
var img3 = document.getElementById('small3')
var img4 = document.getElementById('small4')
var modalImg = document.getElementById('big1')
img1.onclick = function() {
    modal.style.display = 'block'
    modalImg.src = this.src
}
img2.onclick = function() {
    modal.style.display = 'block'
    modalImg.src = this.src
}
img3.onclick = function() {
    modal.style.display = 'block'
    modalImg.src = this.src
}
img4.onclick = function() {
    modal.style.display = 'block'
    modalImg.src = this.src
}