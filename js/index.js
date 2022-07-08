var webpageControl = {
  pages: ['home', 'media', 'about'],
  currentPage: ''
}

function changeTitle(title) {
  $('head title').text(`${title} | Troy Loureiro`);
}

function createMenuButton(locationToAppend) {
  var $hamburger = $('<div class="hamburger">').appendTo($(`.${locationToAppend}`));
  for(let i = 1; i <= 3; i++) {
    var $bar = $(`<div id="bar${i}">`).appendTo($hamburger);
  }
}

var createNavigationBar = function() {
  var $header = $('<header>').appendTo('body');
  var $topBanner = $('<div class="top-banner">').appendTo($header);
  var $navBar = $('<nav class="row">').appendTo($header);
  var $menuBar = $('<div class="col-12 menu-bar">').appendTo($navBar);
  var $logoContainer = $('<div class="logo-container">').appendTo($menuBar);
  var $logo = $('<img src="./images/logo.png" class="logo">').appendTo($logoContainer);
  createMenuButton('menu-bar');
  var $navigationButtons = $('<ul class="navigation-buttons" id="navigation">').appendTo($menuBar);
  for(let i of webpageControl.pages) {
    $(`<li id="${i}"><b><a class="navigation-button" href="#">${i[0].toUpperCase() + i.substring(1)}</a></b></li>`).appendTo($navigationButtons);
    $(`#${i}`).on('click', () => { changeContnet(i)})
  }
  $('.hamburger').on('click', function() {
    this.classList.toggle("change");
    // $('#navigation').fadeToggle('300');
  })
}

var createMainContainer = function() {
  var $fullContainer = $('<div id="full-container">').appendTo('body');
  // $('<div class="row" id="main-container">').appendTo('body');
  $('<div class="row" id="main-container">').appendTo($fullContainer);
}

var emptyMainContainer = function() {
  $('#main-container').empty();
}

var setCurrentPage = function(page) {
  for(let i of webpageControl.pages) {
    webpageControl.currentPage = i === page ? page : webpageControl.currentPage;
  }
}

var createLayout = function() {
  createNavigationBar();
  createMainContainer();
  createHomePage();
}

var changeContnet = function(page) {
  // if different page is selected
  if(webpageControl.currentPage !== page) {
    // empty contents of current page
    emptyMainContainer();
    
    // run corresponding create page function
    eval(`create${page[0].toUpperCase() + page.substring(1)}Page()`);

    // set new current page
    webpageControl.currentPage = page;
  }
}

function resize() {
  mediaResize();
}

var run = function() {
  createLayout();

  $(window).on('resize', resize);
}

$(function() {
  console.log('main.js loaded');

  run();
})
