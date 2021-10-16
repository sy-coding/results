/* chartBoard demo interections
* ui �뺤씤�� script / �ㅼ꽌踰� 諛섏쁺 湲덉�.
* */
(function(){
    var btnDemo = document.querySelector('.demoBtns');
    var demoBoard = document.getElementById('demoChart');
    var chartListArea = demoBoard.querySelector('.chartList');
    var getItemList = chartListArea.querySelectorAll('.itemList');
    var lastElem;
    var newCount = 0;

    function setMoveDirection (selecter, index) {
        var position = 34 * index;
        selecter.classList.add('move');
        selecter.setAttribute('style','top:'+ position +'px;');
    }

    function setMoveDom(element,lastIndex, target) {
        var currentIndex =  getIndex(element);
        setTimeout(function () {
            element.classList.remove('move');
            if (currentIndex >= lastIndex) {
                element.parentElement.insertBefore(element, target);
            } else {
                element.parentElement.appendChild(element);
            }
        },350);
    }

    function getIndex(targetElem) {
        getItemList = chartListArea.querySelectorAll('.itemList');
        var index = Array.from(getItemList).indexOf(targetElem);
        return index;
    }

    function createItem (callback) {
        var div = document.createElement('div');
        var span = document.createElement('span');
        var itemList = div.cloneNode();
        var figure = div.cloneNode();
        var bar = span.cloneNode();
        var text = span.cloneNode();
        var value = span.cloneNode();
        newCount = newCount + 1;

        itemList.classList.add('itemList', 'gAlign', 'between');
        figure.classList.add('figure');
        bar.classList.add('bar');
        bar.style.width = 20 + '%';
        text.classList.add('text');
        text.innerText = 'New data '+ newCount;
        value.classList.add('value');
        value.innerText = 20;
        figure.append(bar,text);
        itemList.append(figure, value);

        chartListArea.appendChild(itemList);
        callback(itemList);
    }

    function addItem() {
        createItem(function (newItem) {
            var position = getIndex(newItem)*34;

            newItem.style.top = position + 'px';
            newItem.classList.add('add');
            setTimeout(function () {
                newItem.classList.remove('add');
            },350);
        });
    }

    function moveItem() {
        chartListArea = demoBoard.querySelector('.chartList');
        lastElem = chartListArea.lastElementChild;
        getItemList = chartListArea.querySelectorAll('.itemList');
        var lastIndex = getIndex(lastElem);
        var index;

        for (var i = 0; i < getItemList.length; i++) {
            if (i === lastIndex) {
                index = 0;
            } else {
                index = i + 1;
            }
            setMoveDirection(getItemList[i], index);
            setMoveDom(getItemList[i],lastIndex, getItemList[index]);
        }
    }

    function removeItem() {
        chartListArea = demoBoard.querySelector('.chartList');
        var removeElem = chartListArea.firstElementChild;
        removeElem.classList.add('remove');
        setTimeout(function() {
            removeElem.parentElement.removeChild(removeElem);
        },350);
    }

    btnDemo.addEventListener('click', function(e) {
        if (e.target.classList.contains('demoAdd')) {
            if ( chartListArea.childElementCount < 10) {
                addItem();
            }  else {
                alert('�� �댁긽 異붽��� �� �놁뒿�덈떎.');
            }
        }else if (e.target.classList.contains('demoMove')) {
            moveItem();
        }else if (e.target.classList.contains('demoRemove')) {
            if (chartListArea.childElementCount > 0) {
                removeItem();
            } else {
                alert('��젣�� �곗씠�곌� �놁뒿�덈떎.');
            }
        }
    });

    getItemList.forEach(function(value) {
        var position =  getIndex(value)*34;
        value.style.top = position + 'px';
    });

})();