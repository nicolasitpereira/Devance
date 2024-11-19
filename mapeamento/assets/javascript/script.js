document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

document.querySelector("#logout_btn").addEventListener("click", function() {
    window.location.href = "../LoginCadastro/login.html";
});