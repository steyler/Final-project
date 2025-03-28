// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require turbolinks
//= require_tree .
//= require popper
//= require chartkick
//= require Chart.bundle


import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"


//import  "../layouts/application.css"


import JQuery from 'jquery';
window.$ = window.JQuery = JQuery;

// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel'

Rails.start()
Turbolinks.start()
ActiveStorage.start()

console.log('hella')

addEventListener('DOMContentLoaded',() =>{
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu){
        btn_menu.addEventListener('click',()=>{
            const menu_items = document.querySelector('.navbar_menu_items')
            menu_items.classList.toggle('show')
        })
    }
})
/* Bad smooth scrolling with turbolinks
$(document).on('turbolinks:load', function() {
    $(document).on('click', '.scroll-button', function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 160
          }, 1000);
          return false;
        }
      }
    });
  });*/

 window.onscroll = function (e)
    {
     $('.logo').hide();
     }

	/* ..............................................
	Loader 
    ................................................. */
	
	$(window).on('load', function() { 
		$('.preloader').fadeOut(); 
		$('#preloader').delay(550).fadeOut('slow'); 
		$('body').delay(450).css({'overflow':'visible'});
	});
