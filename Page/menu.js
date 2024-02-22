const ham = document.getElementById('Ham');
const itemContainer = document.querySelector('.ItemContainer');
let timer;

ham.addEventListener('mouseover', function () {
    clearTimeout(timer);
    itemContainer.classList.add('visible');
});

ham.addEventListener('mouseout', function () {
    timer = setTimeout(function () {
        itemContainer.classList.remove('visible');
    }, 300);
});

itemContainer.addEventListener('mouseover', function () {
    clearTimeout(timer);
});

itemContainer.addEventListener('mouseout', function () {
    timer = setTimeout(function () {
        itemContainer.classList.remove('visible');
    }, 300);
});