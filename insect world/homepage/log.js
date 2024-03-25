document.addEventListener('DOMContentLoaded', function() {
  var logs = JSON.parse(localStorage.getItem('logs')) || [];
  var logContainer = document.querySelector('.log');

  logs.forEach(function(log) {
    var newLog = document.createElement('div');
    newLog.classList.add('list');
    
    var newDate = document.createElement('p');
    newDate.textContent = log.date;
    newLog.appendChild(newDate);

    var newPic=document.createElement('div');
    newPic.classList.add('pic');
    newLog.appendChild(newPic);
    
    var newText = document.createElement('div');
    newText.classList.add('text');
    newText.textContent = log.text;
    newLog.appendChild(newText);

    logContainer.appendChild(newLog);
  });
});

document.querySelector('.log .add').addEventListener('click', function(){
  document.querySelector('.log .plus').style.display='block';
  document.querySelector('.log .upload textarea').value='';
  document.querySelector('.log .upload input[type="file"]').value='';
});

document.querySelector('.log .upload').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var text = document.querySelector('.log .upload textarea').value;
  var file = document.querySelector('.log .upload input[type="file"]').files[0];
  var currentTime = new Date();
  var year = currentTime.getFullYear();
  var month = currentTime.getMonth() + 1;
  var day = currentTime.getDate();
  var formattedDate = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);

  var logs = JSON.parse(localStorage.getItem('logs')) || [];
  logs.push({ date: formattedDate, text: text });
  localStorage.setItem('logs', JSON.stringify(logs));

  var logContainer = document.querySelector('.log');
  var newLog = document.createElement('div');
  newLog.classList.add('list');
  
  var newDate = document.createElement('p');
  newDate.textContent = formattedDate;
  newLog.appendChild(newDate);

  var newPic = document.createElement('div');
  newPic.classList.add('pic');
  newPic.style.backgroundImage = 'url('+URL.createObjectURL(file) +')';
  newLog.appendChild(newPic);

  var newText = document.createElement('div');
  newText.classList.add('text');
  newText.textContent = text;
  newLog.appendChild(newText);

  logContainer.appendChild(newLog);

  document.querySelector('.log .plus').style.display = 'none';
  document.querySelector('.log').style.opacity = '1';
});

document.querySelector('.log .exit').addEventListener('click',function(){
  document.querySelector('.log .plus').style.display='none';
})