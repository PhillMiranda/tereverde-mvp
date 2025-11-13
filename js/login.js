// Carrega o modal do login
var modal = document.getElementById('id_login');

// Quando o usuário clica em qualquer lugar fora do modal, este será fechado
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}