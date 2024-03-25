 var map=document.getElementsByClassName('map');
 for(var i = 0; i < map.length; i++){
  map[i].addEventListener('click', function(event) {
  var icon = document.createElement('i');
  icon.className = 'icon iconfont';
  icon.style.left = (event.clientX - this.offsetLeft) + 'px';
  icon.style.top = (event.clientY - this.offsetTop) + 'px';
  icon.classList.add('icon-daohangdizhi')
  this.appendChild(icon);

  var iconData = {
    className: 'icon iconfont',
    left: icon.style.left,
    top: icon.style.top,
    classList: ['icon-daohangdizhi']
  };
  localStorage.setItem('mapIcon' + Date.now(), JSON.stringify(iconData));
  });
 }

for(var key in localStorage){
  if(key.startsWith('mapIcon')){
    var iconData=JSON.parse(localStorage.getItem(key));
    var icon=document.createElement('i');
    icon.className=iconData.className;
    icon.style.left=iconData.left;
    icon.style.top=iconData.top;
    iconData.classList.forEach(function(cls){
      icon.classList.add(cls);
    });
    map[0].appendChild(icon);
  }
}