
let currentActiveElement;
const menuElements = ['div.mains', 'div.lunch', 'div.drinks', 'div.dinner'];

function hideAllExcept(elements, elementToShow) {
    let currentHeight;
    // $('#menu_images').height(function(index, height) {
    //     currentHeight = height;
    //     return (height + 10);
    // })
    elements.forEach((element) => {
        if (element !== elementToShow) {
            $(element).hide(500);
        } 
    })
    // $('#menu_images').height(function(index, height) {
    //     return (height - 50);
    // })
    $(elementToShow).show(500);
}

function trackActiveElement(newActiveElement) {
    currentActiveElement.removeClass('active');
    $(newActiveElement).parent().addClass('active');
    currentActiveElement = $(newActiveElement).parent();
}

function dinner_menu() {
    hideAllExcept(menuElements,'div.dinner');
    trackActiveElement('#dinner_btn');
}

function main_menu() {
    hideAllExcept(menuElements,'div.mains');
    trackActiveElement('#mains_btn');
}

function lunch_menu() {    
    hideAllExcept(menuElements,'div.lunch');
    trackActiveElement('#lunch_btn');
}

function drinks_menu() {
    hideAllExcept(menuElements,'div.drinks');
    trackActiveElement('#drinks_btn');
}



$('document').ready(function() {
    currentActiveElement = $('li.active:first');
    $('a.menu_btn').click(function(ev) {
        var menuId = $(this).attr("id");
        switch (menuId) {
            case "dinner_btn":
                dinner_menu();
                break;
            case "mains_btn":
                main_menu();
                break;
            case "lunch_btn":
                lunch_menu();
                break;
            case "drinks_btn":
                drinks_menu();
                break;
            default:
                return;

        }
    })
    
})