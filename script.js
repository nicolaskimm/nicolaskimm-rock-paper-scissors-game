var addButton = document.getElementById('addElem');

addButton.addEventListener('click', function(){
    var list = document.getElementsByTagName('ul');
    var listLenght = list.list.children.length;

    var newElem = document.createElement('li');
    newElem.innerHTML = 'item ' + listLenght;
    list[0].appendChild(newElem);

});

