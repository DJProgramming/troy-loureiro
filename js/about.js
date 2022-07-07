var aboutInformation = {
  name: 'Troy Loureiro',
  profession: 'Bartender',
  hometown: 'Pleasant Hill, CA',
  instagram: {
    name: 'troy_loureiro',
    url: 'https://www.instagram.com/troy_loureiro?igshid=YmMyMTA2M2Y='
  },
  contact: 'troy_loureiro@gmail.com'
}

var createAboutPage = function() {
  changeTitle('About');
  var $aboutContainer = $('<div class="col-12 col-m-12 about-container">').appendTo($('.main-container'));
  var $aboutImageContainer = $('<div class="col-6 col-m-6 about-image-container" id="about-image-container">').appendTo($aboutContainer);
  var $aboutPhoto = $(`<img class="photo" id="about-photo" src="./images/profile.jpg">`).appendTo($aboutImageContainer);
  var $aboutInfoContainer = $('<div class="col-6 col-m-6 about-info-container" id="about-info-container">').appendTo($aboutContainer);
  var $aboutInfoParagraph = $(`<p id="personal-info">
  Name: ${aboutInformation.name}<br><br>
  Profession: ${aboutInformation.profession}<br><br>
  Hometown: ${aboutInformation.hometown}<br><br>
  Instagram: <a href="${aboutInformation.instagram.url}">${aboutInformation.instagram.name}</a><br><br>
  Contact: ${aboutInformation.contact}<br></p>`).appendTo($aboutContainer);
}
