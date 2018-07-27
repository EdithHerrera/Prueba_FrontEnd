$(document).ready(function(){

    $("#comparaForm").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            marca_del_auto: {
                required: true,
                min: 1
            },
            ano_auto: {
                required: true,
                min: 1
            },
            modelo_del_auto: {
                required: true,
                min: 1
            },
        },
        messages: {
            email: "Campo requerido",
            marca_del_auto: "Campo requerido",
            ano_auto: "Campo requerido",
            modelo_del_auto:  "Campo requerido"
        },
        error: function(){
        },
        submitHandler: function(form) {
            // some other code
            // maybe disabling submit button
            // then:
            $(form).submit();
        }
    });
});
