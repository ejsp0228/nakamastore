// init Isotope
var $grid = $('.collection-list').isotope({
    // options
});
// filter items on button click
$('.filter-button-group').on('click', 'button', function (event) {
    event.preventDefault(); // Prevent the default behavior of the button click
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns();
    $(this).addClass('active-filter-btn');
    $grid.isotope({ filter: filterValue });
});


var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns() {
    filterBtns.each(function () {
        $(this).removeClass('active-filter-btn');
    })
}
