Concrete.event.bind('logo_slider.stack.stacks', function () {
    $(document).ready(function () {
        $('select[name="stack[]"]').select2_sortable();
    });
});