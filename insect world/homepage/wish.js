
document.addEventListener('DOMContentLoaded', function() {
  var wishes = JSON.parse(localStorage.getItem('wishes')) || [];
  var wishContainer = document.querySelector('.wish');

  wishes.forEach(function(wish) {
    var newWish = document.createElement('div');
    newWish.classList.add('list');
    
    var newDate = document.createElement('p');
    newDate.textContent = wish.date;
    newWish.appendChild(newDate);

    var newPic=document.createElement('div');
    newPic.classList.add('pic');
    newWish.appendChild(newPic);
    
    var newText = document.createElement('div');
    newText.classList.add('text');
    newText.textContent = wish.text;
    newWish.appendChild(newText);

    var newDone=document.createElement('button');
    newDone.classList.add('done');
    newDone.textContent='Done!'
    newWish.appendChild(newDone);

    if (wish.done) {
      newWish.classList.add('active'); 
  }

    wishContainer.appendChild(newWish);
  });
});

document.querySelector('.wish .add').addEventListener('click', function(){
  document.querySelector('.wish .plus').style.display='block';
  document.querySelector('.wish .upload textarea').value='';
  document.querySelector('.wish .upload input[type="file"]').value='';
});

document.querySelector('.wish .upload').addEventListener('submit', function(event){
  event.preventDefault();

  var text = document.querySelector('.wish .upload textarea').value;
  var file = document.querySelector('.wish .upload input[type="file"]').files[0];
  var currentTime=new Date();
  var year=currentTime.getFullYear();
  var month = currentTime.getMonth() + 1;
  var day = currentTime.getDate();
  var formattedDate = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);

  var wishes = JSON.parse(localStorage.getItem('wishes')) || [];
  wishes.push({ date: formattedDate, text: text,done: false});
  localStorage.setItem('wishes', JSON.stringify(wishes));

  var wishContainer = document.querySelector('.wish');
  var newWish = document.createElement('div');
  newWish.classList.add('list');

  var newDate = document.createElement('p');
  newDate.textContent = formattedDate;
  newWish.appendChild(newDate);
  
  var newPic = document.createElement('div');
  newPic.classList.add('pic');
  newPic.style.backgroundImage = 'url('+URL.createObjectURL(file) +')';
  newWish.appendChild(newPic);

  var newText = document.createElement('div');
  newText.classList.add('text');
  newText.textContent = text;
  newWish.appendChild(newText);

  var newDone=document.createElement('button');
  newDone.classList.add('done');
  newDone.textContent='Done!'
  newWish.appendChild(newDone);

  document.querySelector('.wish').appendChild(newWish);

  document.querySelector('.wish .plus').style.display = 'none';
  document.querySelector('.wish').style.opacity = '1';
});

document.querySelector('.wish').addEventListener('click', function(event) {
  if (event.target.classList.contains('done')) {
    var list = event.target.parentNode; 
    list.classList.add('active'); 
    var wishes = JSON.parse(localStorage.getItem('wishes')) || [];
    var index = Array.from(list.parentNode.children).indexOf(list); 

    wishes[index-2].done = true;
    localStorage.setItem('wishes', JSON.stringify(wishes));
  }
});

document.querySelector('.wish .exit').addEventListener('click',function(){
  document.querySelector('.wish .plus').style.display='none';
})