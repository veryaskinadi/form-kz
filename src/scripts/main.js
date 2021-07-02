const inputBlocks = document.getElementsByClassName('personal-information__blockInput');

for (let i = 0; i < inputBlocks.length; i++) {
    inputBlocks[i].addEventListener('click', function(event) {
        const input = inputBlocks[i].getElementsByClassName('personal-information__input')[0]
        input.focus();
    });
    const input = inputBlocks[i].getElementsByClassName('personal-information__input')[0]
    input.addEventListener('blur', blurHandler)
    input.addEventListener('focus', focusHandler)
}

function focusHandler(event){
    const inputBlock = event.target.closest('.personal-information__blockInput')
    const placeholders = inputBlock.getElementsByClassName('personal-information__titleInput')
    inputBlock.classList.add("personal-information__blockInput_active")
    placeholders[0].classList.add('personal-information__titleInput_label')
    placeholders[0].classList.remove('personal-information__titleInput_placeholder')
}

function blurHandler(event){
    const inputBlock = event.target.closest('.personal-information__blockInput')
    changePlaceholder(inputBlock)
}

function changePlaceholder(inputBlock){
    const placeholders = inputBlock.getElementsByClassName('personal-information__titleInput')
    inputBlock.classList.remove("personal-information__blockInput_active")
    const inputValue = inputBlock.getElementsByClassName('personal-information__input')[0].value
    if (inputValue.length === 0) {
        inputBlock.classList.remove("personal-information__blockInput_active");
        placeholders[0].classList.remove('personal-information__titleInput_label');
        placeholders[0].classList.add('personal-information__titleInput_placeholder')
    }
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

document.addEventListener('click', closeYearList)

function closeYearList(event) {
    if (event.target.closest('.personal-information__select') == null) {
        select.classList.remove('personal-information__select_active')
        yearList.classList.remove('personal-information__yearList_active')
    }
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

document.addEventListener('scroll', function(event){
    const menuPersonalInformation = document.getElementById('menuPersonal-information')
    const menuExperience = document.getElementById('menuExperience')
    const menuJs = document.getElementById('menuJs')
    const menuStory = document.getElementById('menuStory')
    const personalInformation = document.getElementById('personal-information')
    const experience = document.getElementById('experience')
    const sectionJs = document.getElementById('sectionJs')
    const story = document.getElementById('story')

    menuPersonalInformation.onclick = function() {
        menuExperience.classList.remove('header__itemMenu_active')
        menuJs.classList.remove('header__itemMenu_active')
        menuStory.classList.remove('header__itemMenu_active')
        menuPersonalInformation.classList.add('header__itemMenu_active')
    }
    menuExperience.onclick = function() {
        menuExperience.classList.add('header__itemMenu_active')
        menuPersonalInformation.classList.remove('header__itemMenu_active')
        menuJs.classList.remove('header__itemMenu_active')
        menuStory.classList.remove('header__itemMenu_active')
    }
    menuJs.onclick = function() {
        menuJs.classList.add('header__itemMenu_active')
        menuPersonalInformation.classList.remove('header__itemMenu_active')
        menuExperience.classList.remove('header__itemMenu_active')
        menuStory.classList.remove('header__itemMenu_active')
    }
    menuStory.onclick = function() {
        menuStory.classList.add('header__itemMenu_active')
        menuPersonalInformation.classList.remove('header__itemMenu_active')
        menuExperience.classList.remove('header__itemMenu_active')
        menuJs.classList.remove('header__itemMenu_active')
    }

    let topPersonalInformation = personalInformation.getBoundingClientRect().top
    let topExperience = experience.getBoundingClientRect().top
    let topSectionJs = sectionJs.getBoundingClientRect().top
    let topStory = story.getBoundingClientRect().top
    let bottomPersonalInformation = personalInformation.getBoundingClientRect().bottom
    let bottomExperience = experience.getBoundingClientRect().bottom
    let bottomSectionJs = sectionJs.getBoundingClientRect().bottom
    let bottomStory = story.getBoundingClientRect().bottom
    let center = window.height / 2

    if (topPersonalInformation > -20 && topPersonalInformation < 20 ) {
        console.log(topPersonalInformation, topExperience, topSectionJs, topStory)
        menuExperience.classList.remove('header__itemMenu_active')
        menuJs.classList.remove('header__itemMenu_active')
        menuStory.classList.remove('header__itemMenu_active')
        menuPersonalInformation.classList.add('header__itemMenu_active')
    } else if (topExperience > -20 && topExperience < 20) {
        console.log(topPersonalInformation, topExperience, topSectionJs, topStory)
        menuPersonalInformation.classList.remove('header__itemMenu_active')
        menuJs.classList.remove('header__itemMenu_active')
        menuStory.classList.remove('header__itemMenu_active')
        menuExperience.classList.add('header__itemMenu_active')
    } else if (topSectionJs > -20 && topSectionJs < 20) {
        console.log(topPersonalInformation, topExperience, topSectionJs, topStory)
        menuPersonalInformation.classList.remove('header__itemMenu_active')
        menuExperience.classList.remove('header__itemMenu_active')
        menuStory.classList.remove('header__itemMenu_active')
        menuJs.classList.add('header__itemMenu_active')
    } else if (topStory > -20 && topStory < 20) {
        console.log(topPersonalInformation, topExperience, topSectionJs, topStory)
        menuPersonalInformation.classList.remove('header__itemMenu_active')
        menuExperience.classList.remove('header__itemMenu_active')
        menuJs.classList.remove('header__itemMenu_active')
        menuStory.classList.add('header__itemMenu_active')
    }
});
