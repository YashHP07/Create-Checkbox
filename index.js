$(document).ready(function() {
    $('.parent').change(function() {
        let parentClass = $(this).attr('id');
        $('.' + parentClass).prop('checked', $(this).prop('checked'));
    });
    
   
});


