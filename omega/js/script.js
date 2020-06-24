'use strict';

// Slick
$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false
});

// jQuery Mask
$('#telefone').mask('(00) 0000-0000');
$('#celular').mask('(00) 00000-0000');

// Script contador de caracteres

// Selecionando os elementos que serão usados
const spanMaximo = $("#maximo");
const bCaracteres = $("#caracteres");
const textMensagem = $("#mensagem");

// Determinando a quantidade máxima de caracteres
let quantidade = 200;

// Ouvinte de evento para a digitação no campo
textMensagem.on("input", function(){

    // Capturando o que for digitado
    let conteudo = textMensagem.val();

    // Criando uma contagem regressiva
    let contagem = quantidade - conteudo.length;

    // Exibindo a contagem no HTML
    bCaracteres.text(contagem);

    if(contagem == 0){
        spanMaximo.css("color", "red");
    } else {
        spanMaximo.css("color", "black");
    }
});


// Formspree
window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    var button = document.getElementById("my-form-button");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      button.style = "display: none ";
      status.innerHTML = "Obrigado! Sua mensagem foi enviada com sucesso!";
    }

    function error() {
      status.innerHTML = "Oops! Houve algum erro, tente novamente mais tarde.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }