var BusMallImage = function(fileName) {
  this.fileName = fileName;
  this.label = fileName.substring(0, fileName.length - 4);
  this.y = 0;
}

var counter = 0;

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

function addImages() {
  var container = document.getElementById('image-container');
  shuffleImages(images);
  container.innerText = '';
  var image = document.createElement('img');
  // var index = generateRandom(0, images.length);
  image.setAttribute('src', 'img/'+images[0].fileName);
  image.addEventListener('click', recordImageClick);
  container.appendChild(image);
  image = document.createElement('img');
  // index = generateRandom(0, images.length);
  image.setAttribute('src', 'img/'+images[1].fileName);
  image.addEventListener('click', recordImageClick);
  container.appendChild(image);
  image = document.createElement('img');
  // index = generateRandom(0, images.length);
  image.setAttribute('src', 'img/'+images[2].fileName);
  image.addEventListener('click', recordImageClick);
  container.appendChild(image);
}

function addResults() {
  var container = document.getElementById('results-container');
  var oldContainer = document.getElementById('image-container');
  oldContainer.innerText = '';
  var resultsList = document.createElement('ul');
  for (var index = 0; index < images.length; index++) {
    var listItem = document.createElement('li');
    listItem.setAttribute('class', 'listItem');
    listItem.innerText = images[index].label + '     ' + images[index].y;
    resultsList.appendChild(listItem);
  }
    var buttonContainer = document.getElementById('button-container');
    var button = document.createElement('button');
    button.setAttribute('onclick', 'location.reload()');
    buttonContainer.appendChild(button);
  ///create element input html
  ///set two attributes type and value (words)
  //appended button to div or whatever
  //
  // container.appendChild(resultsList);
  // var btn = document.createElement('button');
  // var text = document.createTextNode('Reset Game');
  // btn.appendChild(text);
  // document.body.appendChild(btn);
  // location.reload();
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
  counter++;
  document.getElementById('progress-bar').style.width = Math.round(counter / 15 * 100) + '%';
  console.log(counter);
 for (var index = 0; index < images.length; index++) {
   if (event.target.attributes[0].value == 'img/'+ images[index].fileName) {
    images[index].y++;
   }
  }
  if (counter == 15) {
    console.log(counter);
    addResults();
    buildChart();
    localStorage.setItem('JSONImagesArray', JSON.stringify(images));
  }
    var imagesToHide = document.getElementById('image-container').getElementsByTagName('img');
  for(var index = 0; index < imagesToHide.length; index++){
    imagesToHide.item(index).style.animation = '0.5s imageByeBye';
    }
    setTimeout(addImages(), 500);
    // addImages();
  }

//  addImages();



window.addEventListener('load', addImages)
