var createFormListTemplate = function (schema, crudName, deletable) {
    return '' +
    //each form list template gets its own delete confirmation template
    createDeleteConfirmationTemplate() +
    '<form>' +
        '<fieldset>' +
            '<legend>' + crudName + '</legend>' +
            '<span class="crud-status">{{status}}</span>' +
            reduceFormSchema(schema, crudName) +
            '<div class="crud-control-set">' +
                '<label>&nbsp;</label>' +
                '<div class="crud-input-group">' +
                    '<input type="submit" value="Save"/>' +
                    (deletable ? '<button class="crud-delete">Delete</button>' : '') +
                '</div>' +
                '<div class="success">' +
                    '{{successMessage}}' +
                '</div>' +
            '</div>' +
        '</fieldset>' +
    '</form>';
};
