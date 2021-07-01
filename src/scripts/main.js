const inputBlocks = document.getElementsByClassName('personal-information__blockInput');

for (let i = 0; i < inputBlocks.length; i++) {
    inputBlocks[i].addEventListener('click', function(event) {
        const inputBlock = event.target.closest('.personal-information__blockInput')
        const placeholders = inputBlock.getElementsByClassName('personal-information__titleInput')
        inputBlock.classList.add("personal-information__blockInput_active");
        placeholders[0].classList.add('personal-information__titleInput_label');
        placeholders[0].classList.remove('personal-information__titleInput_placeholder')
        const input = inputBlock.getElementsByClassName('personal-information__input')[0]
        input.focus();
    });
    const input = inputBlocks[i].getElementsByClassName('personal-information__input')[0]
    input.addEventListener('blur', function(event){
        const inputBlock = event.target.closest('.personal-information__blockInput')
        const placeholders = inputBlock.getElementsByClassName('personal-information__titleInput')
        if (event.target.value.length === 0) {
            inputBlock.classList.remove("personal-information__blockInput_active");
            placeholders[0].classList.remove('personal-information__titleInput_label');
            placeholders[0].classList.add('personal-information__titleInput_placeholder')
        }
    })
}

const select = document.getElementById('select');
const selected = document.getElementById('selected');
const yearList = document.getElementById('yearList');
const options = document.getElementsByClassName('personal-information__option');
const inputHidden = document.getElementById('inputHidden')

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', function(event) {
        const value = event.target.innerHTML
        selected.classList.add('personal-information__selected_filled')
        selected.innerHTML = value
        inputHidden.value = value
    })
}

function openYearList() {
    select.classList.toggle('personal-information__select_active')
    yearList.classList.toggle('personal-information__yearList_active')
}

select.onclick = function() {
    openYearList()
};

(function($) {
    $(window).on('load', function() {
        $('.mycustom-scroll').mCustomScrollbar({
            axis: 'y',              // вертикальный скролл
            theme: 'dark-2',  // тема
            scrollInertia: '330',   // продолжительность прокрутки, значение в миллисекундах
            mouseWheel: {
                deltaFactor: 300    // кол-во пикселей на одну прокрутку колёсика мыши
            }
        });
    });
})(jQuery);

function showLevel(level) {
    const coloredLine = document.querySelector('.js__coloredLineContainer')
    coloredLine.classList.add('js__showLevel' + level)
}
function hideLevel() {
    const coloredLine = document.querySelector('.js__coloredLineContainer')
    coloredLine.classList.remove('js__showLevel1')
    coloredLine.classList.remove('js__showLevel2')
    coloredLine.classList.remove('js__showLevel3')
    coloredLine.classList.remove('js__showLevel4')
}
function setLevel(level) {
    const coloredLine = document.querySelector('.js__coloredLineContainer')
    coloredLine.classList.remove('js__coloredLevel1')
    coloredLine.classList.remove('js__coloredLevel2')
    coloredLine.classList.remove('js__coloredLevel3')
    coloredLine.classList.remove('js__coloredLevel4')
    coloredLine.classList.add('js__coloredLevel' + level)
    const slider = document.querySelector('.js__sliderImg')
    slider.classList.remove('js__sliderImg1')
    slider.classList.remove('js__sliderImg2')
    slider.classList.remove('js__sliderImg3')
    slider.classList.remove('js__sliderImg4')
    slider.classList.add('js__sliderImg' + level)
    const inputHiddenSlider = document.getElementById('inputHiddenSlider')
    inputHiddenSlider.value = level
}

function onSwitchAreaMouseOver(event) {
    const switchBlock = event.target
    const level = Number(switchBlock.dataset.level)
    showLevel(level)
}

function onSwitchAreaMouseOut(event) {
    hideLevel()
}

function onSwitchAreaClick(event) {
    const switchBlock = event.target
    const level = Number(switchBlock.dataset.level)
    setLevel(level)
}

const switchAreas = document.getElementsByClassName('js__switchArea')
for (let i = 0; i < switchAreas.length; i++) {
    switchAreas[i].addEventListener('mouseover', onSwitchAreaMouseOver)
    switchAreas[i].addEventListener('mouseout', onSwitchAreaMouseOut)
    switchAreas[i].addEventListener('click', onSwitchAreaClick)
}

const humburger = document.getElementById('humburger')
const menu = document.querySelector('.header__menu')

humburger.onclick = function() {
    menu.classList.toggle ('header__menu_visible')
};