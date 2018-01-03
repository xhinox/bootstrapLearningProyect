const $form = $('#suscribeForm');
const $formGroup = $form.find('.form-group');
const $formControl = $formGroup.find('.form-control');

$form.submit(function (ev){
    ev.preventDefault();

    const err = Math.random() > 0.5;
    $formGroup.removeClass().addClass('form-group');
    $formControl.removeClass().addClass('form-control');
    $formGroup.addClass(err ? 'has-danger' : 'has-success');
    $formControl.addClass(err ? 'form-control-danger' : 'form-control-success');
    $formGroup.find('.form-control-feedback').remove();

    var el;

    if (err) {
        el = $('<div>', {html:'Ha ocurrido un error'});
    }
    else {
        el = $('<div>', {html:'Te enviaremos todas las novedades'});
    }
    el.addClass('form-control-feedback');
    $formGroup.append(el);
});
