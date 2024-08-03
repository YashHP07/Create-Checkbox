$(document).ready(function() {
    // Show or hide checkbox container based on dropdown value
    $('#dropdown').change(function() {
        if ($(this).val() === 'subsubgh') {
            $('.checkbox-container').show();
        } else {
            $('.checkbox-container').hide();
        }
    });

    // i am handling parent changes here 
    $('.parent').change(function() {
            let parentId = $(this).attr('id');
            let isChecked = $(this).is(':checked');  // here we are checking parent checkbox is working or not
            $('.child.' + parentId).prop('checked', isChecked);  // Set the checked state of the child checkboxes

    });
    
     // i am handlling child checkbox changes here
     $('.child').change(function() {

        // i am extracting the parent id from the class
        let parentId = $(this).attr('class').split(' ')[1];

        // selecting all checkboxes with the same parent id
        let allChildren = $('.child.' + parentId);

        // simply checking all child checkboxes are checked
        let allChecked = allChildren.length === allChildren.filter(':checked').length;

        // if any checkbox is checked
        let anyChecked = allChildren.filter(':checked').length > 0;
         
        // in the last we are updating parent checkbox based on the all given conditions
        $('#' + parentId).prop('checked', allChecked || anyChecked);
    });
   
});
