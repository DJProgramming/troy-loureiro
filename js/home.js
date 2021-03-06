var homeInformation = {
  siteHeading: 'Private Bartending Services',
  siteInformation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  buttonText: 'Contact Me',
  eventTypes: [
    'Weddings',
    'Birthdays',
    'Anniversaries',
    'BBQs',
    'Business Events',
    'Private Events'
  ],
  aboutInfo: 'Based out of Pleasant Hill, California, we have been working in the industry for _____ years. Our passion for the craft of bartending led us to offer our services and a special touch to your private events.',
  contactInfo: {
    phoneNumber: '(925) 872-9770',
    email: 'troyloureiro@gmail.com',
    instagram: '@troy_loureiro',
    instagramLink: 'https://instagram.com/troy_loureiro?igshid=YmMyMTA2M2Y=',
  },
  copyrightInfo: "Copyright Diego Jimenez | All Rights Reserved",
}

var cocktailsInformation = [
  {
    name: 'Vodka',
    image: 'lemon_drop.jpg',
    drinks: [
      'Lemon Drops',
      'Martinis'
    ]
  },
  {
    name: 'Tequilla',
    image: 'margarita.jpg',
    drinks: [
      'Margaritas',
      'Palomas'
    ]
  },
  {
    name: 'Gin',
    image: 'martini.jpg',
    drinks: [
      'French 75s',
      'Martinis'
    ]
  },
  {
    name: 'Whiskey',
    image: 'old_fashioned.jpg',
    drinks: [
      'Old Fashioned',
      'Manhattans'
    ]
  },
];

var createHomePage = function() {
  changeTitle('Home');
  setCurrentPage('home');
  var $mainContainer = $('#main-container');
  var $fullContainer = $('#full-container');

  // Table graphic
  // var $rotationContainer = $('<div class="col-12 col-m-12" id="rotation-container">').appendTo($($mainContainer));
  // var $rotationContainer = $('<div class="col-12 col-m-12" id="rotation-container">').prependTo($('body'));
  var $rotationContainer = $('<div class="col-12 col-m-12" id="rotation-container">').prependTo($($fullContainer));
  // var $tableContainer = $('<div class="col-12 col-m-12" id="table-container">').appendTo($($profileContainer));
  var $tableContainer = $('<div class="col-12 col-m-12" id="table-container">').appendTo($($rotationContainer));
  var $tableGlass = $('<div class="col-12 col-m-12" id="table-glass">').appendTo($($tableContainer));
  var $tableFrameTop = $('<div class="col-12 col-m-12" id="table-frame-top">').appendTo($($tableContainer));
  var $tableFrameFront = $('<div class="col-12 col-m-12" id="table-frame-front">').appendTo($($tableContainer));

  // Main photo
  var $profileContainer = $('<div class="col-12 col-m-12 profile-container">').appendTo($mainContainer);
  var $profileImageContainer = $('<div class="col-12 col-m-12 padded-photo-container" id="profile-image-container">').appendTo($profileContainer);
  var $profileImage = $('<img class="photo", id="profile-image" src="./images/bartender.jpg">').appendTo($profileImageContainer);
  var $profileImageShadow = $('<div class="col-12 col-m-12" id="profile-image-shadow">').appendTo($profileContainer);

  // Site description
  var $siteHeadingContainer = $('<div class="col-12 col-m-12" id="site-heading-container">').appendTo($profileContainer);
  var $siteHeading = $(`<h1 class="col-12 col-m-12" id="site-heading">${homeInformation.siteHeading}</h1>`).appendTo($siteHeadingContainer);
  var $headingInfo = $(`<div class="info" id="heading-info">${homeInformation.siteInformation}</div>`).appendTo($siteHeadingContainer);

  // Contact button
  var $contactButtonContainer = $('<div class="col-12 col-m-12" id="contact-button-container">').appendTo($profileContainer);
  var $contactButton = $(`<button class="col-12 col-m-12" class="button--full" id="contact-button">${homeInformation.buttonText}</button>`).appendTo($contactButtonContainer);

  // Events
  var $eventsContainer = $('<div class="col-12 col-m-12" id="events-container">').appendTo($mainContainer);
  var $eventsTitle = $('<h1 class="col-12 col-m-12" id="events-title">Events</h1>').appendTo($eventsContainer);

  // Events image
  var $eventsImageContainer = $('<div class="col-12 col-m-12 padded-photo-container" id="events-image-container">').appendTo($eventsContainer);
  var $eventsImage = $('<img class="photo", id="events-image" src="./images/outdoor_event.jpg">').appendTo($eventsImageContainer);

  // Event types
  var $eventTypesContainer = $('<div class="col-12 col-m-12" id="event-types-container">').appendTo($eventsContainer);
  for(var i in homeInformation.eventTypes) {
    $(`<h2 class="col-12 col-m-12 event" id="event-${i}">${homeInformation.eventTypes[i]}</h2>`).appendTo($eventTypesContainer);
  }

  // Cocktails
  var $cocktailsContainer = $('<div class="col-12 col-m-12" id="cocktails-container">').appendTo($mainContainer);
  var $cocktailsTitle = $('<h1 class="col-12 col-m-12" id="cocktails-title">Cocktails</h1>').appendTo($cocktailsContainer);

  for(var i in cocktailsInformation) {
    var $cocktailContainer = $(`<div class="col-12 col-m-12 cocktail-container" id="cocktail-container-${i}">`).appendTo($cocktailsContainer);
    var $cocktailTitle;

    if(i%2 === 0) {
      $cocktailTitle = $(`<h2 class="cocktail-title" id="cocktail-title-${i}">${cocktailsInformation[i].name}</h2>`).appendTo($cocktailContainer);
    } else {
      $cocktailTitle = $(`<h2 class="cocktail-title-right" id="cocktail-title-${i}">${cocktailsInformation[i].name}</h2>`).appendTo($cocktailContainer);
    }

    var $imageAndListWrapper = $(`<div class="col-12 col-m-12 image-list-wrapper">`).appendTo($cocktailContainer);

    if(i%2 === 0) {
      var $cocktailImageContainer = $(`<div class="col-6 col-m-6">`).appendTo($imageAndListWrapper);
      var $cocktailImage = $(`<img class="photo", id="cocktail-image" src="./images/drinks/${cocktailsInformation[i].image}">`).appendTo($cocktailImageContainer);
      var $cocktailListContainer = $(`<div class="col-6 col-m-6 cocktails-list">`).appendTo($imageAndListWrapper);

      for(var x in cocktailsInformation[i].drinks) {
        $(`<h2 class="cocktail-title" id="cocktail-title-${i}">${cocktailsInformation[i].drinks[x]}</h2>`).appendTo($cocktailListContainer);
      }
    } else {
      var $cocktailListContainer = $(`<div class="col-6 col-m-6 cocktails-list-right">`).appendTo($imageAndListWrapper);

      for(var x in cocktailsInformation[i].drinks) {
        $(`<h2 class="cocktail-title" id="cocktail-title-${i}">${cocktailsInformation[i].drinks[x]}</h2>`).appendTo($cocktailListContainer);
      }

      var $cocktailImageContainer = $(`<div class="col-6 col-m-6">`).appendTo($imageAndListWrapper);
      var $cocktailImage = $(`<img class="photo", id="cocktail-image" src="./images/drinks/${cocktailsInformation[i].image}">`).appendTo($cocktailImageContainer);
    }

    // var $cocktailImageContainer = $(`<div class="col-6 col-m-6">`).appendTo($imageAndListWrapper);
    // var $cocktailImage = $(`<img class="photo", id="cocktail-image" src="./images/drinks/${cocktailsInformation[i].image}">`).appendTo($cocktailImageContainer);
    // var $cocktailListContainer = $(`<div class="col-6 col-m-6 cocktails-list">`).appendTo($imageAndListWrapper);

    // for(var x in cocktailsInformation[i].drinks) {
    //   $(`<h2 class="cocktail-title" id="cocktail-title-${i}">${cocktailsInformation[i].drinks[x]}</h2>`).appendTo($cocktailListContainer);
    // }
  }

  // About
  var $aboutContainer = $('<div class="col-12 col-m-12" id="about-container">').appendTo($mainContainer);
  var $aboutTitle = $('<h1 class="col-12 col-m-12" id="about-title">About Me</h1>').appendTo($aboutContainer);

  // About image
  var $aboutImageContainer = $('<div class="col-12 col-m-12 padded-photo-container" id="about-image-container">').appendTo($aboutContainer);
  var $aboutImage = $('<img class="photo", id="about-image" src="./images/bartenders.jpg">').appendTo($aboutImageContainer);

  // About info
  var $aboutInfoContainer = $('<div class="col-12 col-m-12" id="about-info-container">').appendTo($aboutContainer);
  var $aboutInfo = $(`<div class="info" id="about-info">${homeInformation.aboutInfo}</div>`).appendTo($aboutContainer);

  // Footer
  // var $footer = $('<footer class="col-12 col-m-12" id="footer-container">').appendTo($mainContainer);
  var $footer = $('<footer class="col-12 col-m-12" id="footer-container">').appendTo('body');

  // Contact
  var $contactContainer = $('<div class="col-12 col-m-12" id="contact-container">').appendTo($footer);
  // var $contactImageContainer = $('<div class="col-12 col-m-12" id="contact-image-container">').appendTo($footer);
  // var $contactImage = $('<img class="content" id="contact-image" src="./images/bar.jpg">').appendTo($contactImageContainer);
  var $contactTitle = $('<h1 class="col-12 col-m-12" id="contact-title">Contact Info</h1>').appendTo($contactContainer);

  // Contact info
  var $contactInfoContainer = $('<ul class="col-12 col-m-12" id="contact-info-container">').appendTo($contactContainer);
  $(`<li class="info contact-info">Phone: ${homeInformation.contactInfo.phoneNumber}</li>`).appendTo($contactInfoContainer);
  $(`<li class="info contact-info">Email: ${homeInformation.contactInfo.email}</li>`).appendTo($contactInfoContainer);
  $(`<li class="info contact-info">Instagram: <a href="${homeInformation.contactInfo.instagramLink}" target="_blank">${homeInformation.contactInfo.instagram}</a></li>`).appendTo($contactInfoContainer);

  // Copyright info
  var $copyrightContainer = $('<div class="col-12 col-m-12" id="copyright-container">').appendTo($contactContainer);
  var $copyrightInfo = $(`<div class="info" id="copyright-info">${homeInformation.copyrightInfo}</div>`).appendTo($copyrightContainer);
}
