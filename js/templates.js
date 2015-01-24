function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (desserts, main_dishes, soups, undefined) {
buf.push("<h2>Főételek</h2>");
// iterate main_dishes
;(function(){
  var $$obj = main_dishes;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var meal = $$obj[$index];

buf.push("<h3>" + (jade.escape(null == (jade_interp = meal.title) ? "" : jade_interp)) + "</h3><img" + (jade.attr("src", meal.image, true, false)) + "/>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var meal = $$obj[$index];

buf.push("<h3>" + (jade.escape(null == (jade_interp = meal.title) ? "" : jade_interp)) + "</h3><img" + (jade.attr("src", meal.image, true, false)) + "/>");
    }

  }
}).call(this);

buf.push("<h2>Levesek</h2>");
// iterate soups
;(function(){
  var $$obj = soups;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var meal = $$obj[$index];

buf.push("<h3>" + (jade.escape(null == (jade_interp = meal.title) ? "" : jade_interp)) + "</h3><img" + (jade.attr("src", meal.image, true, false)) + "/>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var meal = $$obj[$index];

buf.push("<h3>" + (jade.escape(null == (jade_interp = meal.title) ? "" : jade_interp)) + "</h3><img" + (jade.attr("src", meal.image, true, false)) + "/>");
    }

  }
}).call(this);

buf.push("<h2>Desszertek</h2>");
// iterate desserts
;(function(){
  var $$obj = desserts;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var meal = $$obj[$index];

buf.push("<h3>" + (jade.escape(null == (jade_interp = meal.title) ? "" : jade_interp)) + "</h3><img" + (jade.attr("src", meal.image, true, false)) + "/>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var meal = $$obj[$index];

buf.push("<h3>" + (jade.escape(null == (jade_interp = meal.title) ? "" : jade_interp)) + "</h3><img" + (jade.attr("src", meal.image, true, false)) + "/>");
    }

  }
}).call(this);
}.call(this,"desserts" in locals_for_with?locals_for_with.desserts:typeof desserts!=="undefined"?desserts:undefined,"main_dishes" in locals_for_with?locals_for_with.main_dishes:typeof main_dishes!=="undefined"?main_dishes:undefined,"soups" in locals_for_with?locals_for_with.soups:typeof soups!=="undefined"?soups:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}