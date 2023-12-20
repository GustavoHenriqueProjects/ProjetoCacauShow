"use strict"

document.getElementById("criar_conta").addEventListener("click", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    document.getElementById("loginForm").style.display = "none"; // Oculta o formulário de login
    document.getElementById("cadastroForm").style.display = "block"; // Exibe o formulário de cadastro
});

document.getElementById("form_login").addEventListener("click", function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    document.getElementById("loginForm").style.display = "flex"; // Oculta o formulário de login
    document.getElementById("cadastroForm").style.display = "none"; // Exibe o formulário de cadastro
});



console.log("click");