var homeInformation = {
  profileInformation: 'Specialty Event Bartending Services'
}

var createHomePage = function() {
  changeTitle('Home');
  var $profileContainer = $('<div class="col-12 col-m-12 profile-container">').appendTo($('.main-container'));
  var $profileImageContainer = $('<div class="col-12 col-m-12 profile-image-container" id="profile-image-container">').appendTo($profileContainer);
  var $profileImage = $('<img class="photo", id="profile-image" src="./images/profile.jpg">').appendTo($profileImageContainer);
  var $profileInfoContainer = $('<div class="col-12 col-m-12" id="profile-info-container">').appendTo($profileContainer);
  var $profileInfo = $(`<div class="info" id="about-info"><i>${homeInformation.profileInformation}</i></div>`).appendTo($profileInfoContainer);
  setCurrentPage('home');
}
