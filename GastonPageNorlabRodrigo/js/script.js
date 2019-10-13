$(document).ready(function(){

    $('#btnSend').click(function(){
        
        var errores = '';

        //validar nombre
        if( $('#name').val() == ''){
            errores += '<a><i class="icon ion-md-close-circle colorDark"></i> Escribe un nombre.</a><br>';
        }

        //validar email
        if( $('#email').val() == ''){
            errores += '<a><i class="icon ion-md-close-circle colorDark"></i> Escribe un mail.</a><br>';
        }

        //validar consulta
        if( $('#textEmail').val() == ''){
            errores += '<a><i class="icon ion-md-close-circle colorDark"></i> Escribe un texto de consulta.</a><br>';
        }

        //ENVIANDO MENSAJE
        if( errores == '' == false){
            var mensajeModal = '<div class="modal_wrap" style="z-index: 10000">' +
                                    '<div class="mensaje_modal">' +
                                        '<h3>Error</h3>'+
                                        errores +
                                        '<span id="btnClose">Cerrar</span>' +
                                    '</div>' +
                                '</div>'

            $('body').append(mensajeModal);
        }

        //CERRANDO MODAL

        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });


    });

});