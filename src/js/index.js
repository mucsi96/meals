(function () {
    'use strict';

    var dataUrl = 'https://drive.google.com/file/d/0Bx5t5FqlqxZgc2YxNjdmekF2Rlk/view?alt=json-in-script&callback=ok';

    var doc = jsyaml.load('greeting: hello\nname: world');
    console.log(doc);

    $.get(dataUrl)
        .done(function (yaml) {
            console.log(jsyaml.load(yaml));
        })

})();
