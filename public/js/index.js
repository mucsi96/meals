(function () {
    'use strict';



    var dataUrl = 'https://88d96d35de9b7958fe23da43fa65111357c01430.googledrive.com/host/0Bx5t5FqlqxZgdEhGenlZVVl2aU0/meals.yaml';

    $.ajax({
        url: dataUrl,
        type: 'GET',
        crossDomain: true,
        dataType: 'text',
    }).done(function (yaml) {
        console.log(jsyaml.load(yaml));
    }).fail(function () {
        console.log('error');
    })

})();
