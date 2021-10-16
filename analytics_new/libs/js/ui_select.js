(function() {
    function createSelect() {
        var select = document.getElementsByTagName( "select" );
        var contentArea = document.getElementById('content');
        var optionElem;
        var btnOption;
        var btnChoice;
        var optionGroup;
        var optionValue;
        var optionText;
        var dropDownElem;
        var selectChoice;


        for ( var index = 0; index < select.length; index++) {
            var currentSelect = select[index];
            var getSelect = document.getElementById(currentSelect.id);
            if (!getSelect) return false;
            wrapElement(getSelect);

            for ( var i = 0; i < currentSelect.options.length; i++) {
                optionElem = document.createElement('li');
                btnOption = document.createElement('button');
                optionValue = currentSelect.options[i].value;
                optionText = document.createTextNode(select[index].options[i].text);
                optionElem.classList.add('option');
                btnOption.setAttribute('data-value', optionValue);
                btnOption.setAttribute('type', 'button');
                btnOption.appendChild(optionText);
                optionElem.appendChild(btnOption);
                optionGroup.appendChild(optionElem);
            }
            currentSelect.style.display = 'none';
        }

        function wrapElement(selectBox) {
            var selectWrap = selectBox.parentElement;
            var optionText = document.createTextNode(selectBox.options[selectBox.selectedIndex].textContent);
            btnChoice = document.createElement('button');

            if (selectWrap.classList.contains('fSelect')) {
                optionGroup = document.createElement('ul');
                optionGroup.classList.add('optionGroup');
                btnChoice.setAttribute('type', 'button');
                btnChoice.classList.add('choice');
                btnChoice.setAttribute('data-value', "");
                selectWrap.appendChild(btnChoice);
                btnChoice.appendChild(optionText);
                selectWrap.appendChild(optionGroup);
            }
        }

        //select box click event handler
        function displayUI(event) {
            //���됲듃 諛뺤뒪 �대┃��
            if (event.target.classList.contains('choice')) {
                dropDownElem = event.target.parentElement;
                var contentScrollTop = contentArea.scrollTop;

                if (!dropDownElem.classList.contains('disabled')) {
                    dropDownElem.classList.toggle('active');

                    var dropElem = event.target.nextSibling;
                    var selectHeight = event.target.offsetHeight + dropElem.offsetHeight + 4;
                    var selectElemY = dropDownElem.offsetTop + selectHeight;
                    var areaMax = contentScrollTop + contentArea.offsetHeight;

                    if (dropElem.classList.contains('top')) dropElem.classList.remove('top');
                    //select box �� �듭뀡諛뺤뒪�곸뿭�� �붾㈃ �곸뿭�� �섏뼱�� �꾩튂 �� 寃쎌슦 .top �대옒�� 異붽�
                    if (selectElemY >= areaMax ) {
                        dropElem.classList.add('top');
                    }
                }
            //���됲듃 諛뺤뒪�� �듭뀡 �좏깮��
            } else if ( event.target.parentElement.parentElement.parentElement.classList.contains('fSelect') && event.target.parentElement.classList.contains('option')) {
                var existSelect = event.target.parentElement.parentElement.querySelector('.option.selected');
                if (existSelect) {
                    existSelect.classList.remove('selected');
                }
                selectElement(event.target, event.target.getAttribute('data-value'));
                selectChoice = event.target.parentElement.parentElement.parentElement.querySelector('.choice');
                event.target.parentElement.classList.add('selected');
                event.target.parentElement.parentElement.parentElement.classList.toggle( "active" );
                selectChoice.textContent = event.target.textContent;
                selectChoice.setAttribute('data-value', event.target.getAttribute('data-value'));
            }
            //���됲듃 諛뺤뒪 �� �곸뿭 �대┃ �덉쓣 寃쎌슦.
            if (!event.target.classList.contains('choice')) {
                var activeSelect = document.querySelector('.fSelect.active');
                if(activeSelect) {
                    activeSelect.classList.remove('active');
                }
            }
        }

        var bodyWrap = document.querySelector('body');
        bodyWrap.addEventListener('click', displayUI);

        function selectElement(btnSelect, selectValue) {
            var  optionElem = btnSelect.parentElement.parentElement.parentElement.querySelector('select');
            optionElem.value = selectValue;
            optionElem.options[optionElem.selectedIndex].setAttribute( "selected", "selected" );
        }
    }
    if ( document.querySelector( 'select' )) {
        createSelect();
    }
})();