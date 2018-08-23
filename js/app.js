var BusMallImage = function(fileName) {
  this.fileName = fileName;
  this.totalVotes = 0;
}

var images = [];
images.push(new BusMallImage('bag.jpg'));
images.push(new BusMallImage('banana.jpg'));
images.push(new BusMallImage('boots.jpg'));
images.push(new BusMallImage('chair.jpg'));
images.push(new BusMallImage('cthulhu.jpg'));
images.push(new BusMallImage('dragon.jpg'));
images.push(new BusMallImage('pen.jpg'));
images.push(new BusMallImage('scissors.jpg'));
images.push(new BusMallImage('shark.jpg'));
images.push(new BusMallImage('sweep.jpg'));
images.push(new BusMallImage('unicorn.jpg'));
images.push(new BusMallImage('usb.jpg'));
images.push(new BusMallImage('water_can.jpg'));
images.push(new BusMallImage('wine_glass.jpg'));

//var arrayUnique = function (images) {
//	return arr.filter(function(item, images){
//		return arr.indexOf(item) >= index;
//	});
//};
//removes duplicates in an array---but there are no duplicates, just duplicate instances when clicking


//function shuffle(array) {
  //var copy = [], n = array.length, i;

  // While there remain elements to shuffle…
//  while (n) {

    // Pick a remaining element…
  //  i = Math.floor(Math.random() * n--);

    // And move it to the new array.
  //  copy.push(array.splice(i, 1)[0]);
//  }

  //return copy;
//};

function addImages() {
  var container = document.getElementById('image-container');
  shuffleImages(images);
  container.innerText = '';
  var image = document.createElement('img');
  var index = generateRandom(0, images.length);
  console.log(index);
  image.setAttribute('src', 'img/'+images[0].fileName);
  console.log(image);
  image.addEventListener('click', recordImageClick);
  container.appendChild(image);
  image = document.createElement('img');
  index = generateRandom(0, images.length);
  image.setAttribute('src', 'img/'+images[1].fileName);
  image.addEventListener('click', recordImageClick);
  container.appendChild(image);
  image = document.createElement('img');
  index = generateRandom(0, images.length);
  image.setAttribute('src', 'img/'+images[2].fileName);
  image.addEventListener('click', recordImageClick);
  container.appendChild(image);
}

function generateRandom(min,max) {
  return Math.floor((Math.random() * (max - min)) + min);
}

function shuffleImages(images) {
  for (var index = 0; index < images.length - 1; index++) {
    var randomIndex = generateRandom(index + 1, images.length);
    var bucket = images[index];
    images[index] = images[randomIndex];
    images[randomIndex] = bucket;
  }
  return images;
}


function recordImageClick(event) {
  console.log(event.target.src);
  addImages();
}

window.addEventListener('load', addImages);
