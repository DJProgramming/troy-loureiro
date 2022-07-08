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
  ]
}

var createHomePage = function() {
  changeTitle('Home');
  var $mainContainer = $('#main-container');
  var $profileContainer = $('<div class="col-12 col-m-12 profile-container">').appendTo($mainContainer);

  // Table graphic
  var $tableContainer = $('<div class="col-12 col-m-12" id="table-container">').appendTo($($profileContainer));
  var $tableGlass = $('<div class="col-12 col-m-12" id="table-glass">').appendTo($($tableContainer));
  var $tableFrameTop = $('<div class="col-12 col-m-12" id="table-frame-top">').appendTo($($tableContainer));
  var $tableFrameFront = $('<div class="col-12 col-m-12" id="table-frame-front">').appendTo($($tableContainer));

  // Main photo
  var $profileImageContainer = $('<div class="col-12 col-m-12 profile-image-container" id="profile-image-container">').appendTo($profileContainer);
  var $profileImage = $('<img class="photo", id="profile-image" src="./images/bartender.jpg">').appendTo($profileImageContainer);
  var $profileImageShadow = $('<div class="col-12 col-m-12" id="profile-image-shadow">').appendTo($profileContainer);

  // Site description
  var $siteHeadingContainer = $('<div class="col-12 col-m-12" id="site-heading-container">').appendTo($profileContainer);
  var $siteHeading = $(`<h2 class="col-12 col-m-12" id="site-heading">${homeInformation.siteHeading}</h2>`).appendTo($siteHeadingContainer);
  var $headingInfo = $(`<div class="info" id="heading-info">${homeInformation.siteInformation}</div>`).appendTo($siteHeadingContainer);
  setCurrentPage('home');

  // Contact button
  var $contactButtonContainer = $('<div class="col-12 col-m-12" id="contact-button-container">').appendTo($profileContainer);
  var $contactButton = $(`<button class="col-12 col-m-12" class="button--full" id="contact-button">${homeInformation.buttonText}</button>`).appendTo($contactButtonContainer);

  // Events
  var $eventsContainer = $('<div class="col-12 col-m-12" id="events-container">').appendTo($mainContainer);
  var $eventsTitle = $('<h1 class="col-12 col-m-12" id="events-title">Events</h1>').appendTo($eventsContainer);

  // Events image
  var $eventsImageContainer = $('<div class="col-12 col-m-12" id="events-image-container">').appendTo($eventsContainer);
  var $profileImage = $('<img class="photo", id="events-image" src="./images/outdoor_event.jpg">').appendTo($eventsImageContainer);

  // Event types
  var $eventTypesContainer = $('<div class="col-12 col-m-12" id="event-types-container">').appendTo($eventsContainer);
  for(var i in homeInformation.eventTypes) {
    $(`<h2 class="col-12 col-m-12 event" id="event-${i}">${homeInformation.eventTypes[i]}</h2>`).appendTo($eventTypesContainer);
  }
}
