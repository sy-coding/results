var templet = {
    success : '<div class="mToast typeSuccess">\n' + '<span class="icon"><i class="icon-round ico-check"></i></span>���λ릺�덉뒿�덈떎.\n' + '</div>',
    warning : '<div class="mToast typeWarning">\n' + '<span class="icon"><i class="icon-round ico-delete"></i></span>�ㅽ뙣�섏��듬땲��.\n' + '</div>',
    info : '<div class="mToast typeInfo">\n' + '<span class="icon"><i class="icon-round ico-info"></i></span>�덈궡臾몄엯�덈떎.\n' + '</div>'
};

//component ui interactions
function toastShow(type) {
    var toastWrap = document.querySelector('.toastWrap');
    var toastList = toastWrap.querySelector('.toastList');
    var newColumn = document.createElement('div');
        newColumn.classList.add('column');
        toastList.appendChild(newColumn);

    if (!toastWrap.classList.contains('active')) {
        toastWrap.classList.add('active');
    }

    if (type === 'success') {
        newColumn.insertAdjacentHTML('beforeend', templet.success);
    } else if ( type === 'warning') {
        newColumn.insertAdjacentHTML('beforeend', templet.warning);
    } else if ( type === 'info') {
        newColumn.insertAdjacentHTML('beforeend', templet.info);
    }

    var newToast = newColumn.querySelector('.mToast');
    var count = 0;
    var showToast = setInterval(function() {
        count++;
        if(count === 1 ) {
            newToast.classList.add('show');
        } else if (count === 8) {
            newToast.classList.remove('show');
        } else if(count === 10) {
            if(!newToast.classList.contains('show')) {
                newToast.parentElement.remove();
                clearInterval(showToast);
                if (toastList.childNodes.length === 0) {
                    toastWrap.classList.remove('active');
                }
            }
        }
    }, 500);
}

/* drop down */
var bodyWrap = document.querySelector('body');
var takeOut = document.querySelectorAll('.eTakeout');
var cardElem = document.querySelectorAll('.mCard');
var dim = document.querySelector('.layerDim');
var layerClose = document.querySelectorAll('.layerClose');
var layerCancle = document.querySelectorAll('.layerFooter .btnNormal');

for (var i = 0; i < takeOut.length; i++) {
    takeOut[i].addEventListener('click', function() {
        var dropElem = this.parentNode;
        if (dropElem.classList.contains('mDropDown')) {
            dropElem.classList.toggle('active');
        }
        var optionGroup = dropElem.querySelector('.option button');
        optionGroup.addEventListener('click', function(e) {
            if (e.target.tagName === 'BUTTON') {
                e.target.parentElement.classList.add('select');
                e.target.parentElement.parentElement.parentElement.classList.remove('active')
            }
        });
    }, false);
}
bodyWrap.addEventListener('click',function() {
//�쒕∼�ㅼ슫 UI �� �곸뿭 �대┃ �덉쓣 寃쎌슦.
    if (!event.target.classList.contains('eTakeout')) {
        var activeUi = document.querySelector('.mDropDown.active');
        if(activeUi) {
            activeUi.classList.remove('active');
        }
    }
});
/* openLayer */
for (var i = 0; i < cardElem.length; i++) {
    cardElem[i].addEventListener('click', function(e) {
        if (e.target.tagName === 'A') e.preventDefault();
        if (e.target.dataset.target ) {
            var layerElem = document.querySelector(e.target.dataset.target);
            console.log(layerElem);
            dim.classList.add('show');
            layerElem.style.display = 'block';
        }
    });
}

/*close layer*/
for (var i = 0; i < layerClose.length; i++) {
    layerClose[i].addEventListener('click', function () {
        var layerArea = this.parentNode;
        dim.classList.remove('show');
        layerArea.style.display = 'none';
    }, false);
}
/*close layer*/
for (var i = 0; i < layerCancle.length; i++) {
    layerCancle[i].addEventListener('click', function () {
        var layerArea1 = this.parentElement.parentElement;
        dim.classList.remove('show');
        layerArea1.style.display = 'none';
    }, false);
}

// scrollbar contents style controller

var scrollbarWidth = null;
/**
 * �꾩옱 �ㅽ겕濡ㅻ컮�� �ш린瑜� 議고쉶�⑸땲��.
 * (釉뚮씪�곗� 留덈떎 �ㅽ겕濡ㅻ컮�ш린 �곸씠)
 * @return { Number } scrollbarWidth;
 * */
function getScrollbarWidth() {
    var div1, div2;
    div1 = document.createElement('div');
    div2 = document.createElement('div');
    div1.id = 'div1';
    div2.id = 'div2';
    div1.style.width = div2.style.width = div1.style.height = div2.style.height = '100px';
    div1.style.overflow = 'scroll';
    div2.style.overflow = 'hidden';
    document.body.appendChild(div1);
    document.body.appendChild(div2);
    scrollbarWidth = Math.abs(div1.scrollHeight - div2.scrollHeight);
    return scrollbarWidth;
}

/**
 * #content�붿냼�� �ㅽ겕濡� �ш린瑜� �쒖쇅�� �볦씠濡� style �� �곸슜�⑸땲��.
 * @param { Document } selector;
 * */
function scrollElemnetStylesHandler(selector) {
    var getScrollbarSize = getScrollbarWidth();
    if ( !getScrollbarSize || getScrollbarSize === 0 ) return false;
    selector.style.paddingRight = 'calc(10.417% - '+ getScrollbarSize +'px)';
}

(function () {
    var contentElement = document.querySelector('#content');
    scrollElemnetStylesHandler(contentElement);
})();