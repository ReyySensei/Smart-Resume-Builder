
// form repeater

$(document).ready(function(){
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show:function(){
            $(this).slideDown();
        },
        hide: function(deleteElement){
            $(this).slideUp(deleteElement);
            setTimeout(()=>{
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable: true
    })
})

$(document).ready(function () {
    $('#templateSelect').on('change', function () {
        const selectedTemplate = $(this).val();
        $('body').attr('data-template', selectedTemplate);
        updateTemplateImages(selectedTemplate);
        generateCV(); // refresh preview if needed
    });

    function updateTemplateImages(template) {
        if (template === 'culinary') {
            $('.navbar-brand-icon').attr('src', 'assets/images/chef-hat.png');
        } else if (template === 'tech') {
            $('.navbar-brand-icon').attr('src', 'assets/images/code-icon.png');
        } else if (template === 'education') {
            $('.navbar-brand-icon').attr('src', 'assets/images/book-icon.png');
        } else if (template === 'design') {
            $('.navbar-brand-icon').attr('src', 'assets/images/brush-icon.png');
        } else {
            $('.navbar-brand-icon').attr('src', 'assets/images/default-icon.png');
        }
    }
});
