Concrete.event.bind('accordion_container.stack.stacks', function () {
    $(document).ready(function () {
        $('select[name="stack[]"]').select2_sortable();
    });
});