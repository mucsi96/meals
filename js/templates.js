function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (desserts, main_dishes, soups, undefined) {
buf.push("<section><header><h2>Főételek</h2></header><div class=\"meals\">");
// iterate main_dishes
;(function(){
  var $$obj = main_dishes;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var meal = $$obj[$index];

buf.push("<article class=\"meal\"><header class=\"meal-title\">" + (jade.escape(null == (jade_interp = meal.title) ? "" : jade_interp)) + "</header><div" + (jade.attr("style", 'background-image: url(' + (meal.image) + ');', true, false)) + " class=\"bg-image bg-center-center\"></div></article>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var meal = $$obj[$index];

buf.push("<article class=\"meal\"><header class=\"meal-title\">" + (jade.escape(null == (jade_interp = meal.title) ? "" : jade_interp)) + "</header><div" + (jade.attr("style", 'background-image: url(' + (meal.image) + ');', true, false)) + " class=\"bg-image bg-center-center\"></div></article>");
    }

  }
}).call(this);

buf.push("</div></section><section><header><h2>Levesek</h2></header><div class=\"meals\">");
// iterate soups
;(function(){
  var $$obj = soups;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var meal = $$obj[$index];

buf.push("<article class=\"meal\"><header class=\"meal-title\">" + (jade.escape(null == (jade_interp = meal.title) ? "" : jade_interp)) + "</header><div" + (jade.attr("style", 'background-image: url(' + (meal.image) + ');', true, false)) + " class=\"bg-image bg-center-center\"></div></article>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var meal = $$obj[$index];

buf.push("<article class=\"meal\"><header class=\"meal-title\">" + (jade.escape(null == (jade_interp = meal.title) ? "" : jade_interp)) + "</header><div" + (jade.attr("style", 'background-image: url(' + (meal.image) + ');', true, false)) + " class=\"bg-image bg-center-center\"></div></article>");
    }

  }
}).call(this);

buf.push("</div></section><section><header><h2>Desszertek</h2></header><div class=\"meals\">");
// iterate desserts
;(function(){
  var $$obj = desserts;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var meal = $$obj[$index];

buf.push("<article class=\"meal\"><header class=\"meal-title\">" + (jade.escape(null == (jade_interp = meal.title) ? "" : jade_interp)) + "</header><div" + (jade.attr("style", 'background-image: url(' + (meal.image) + ');', true, false)) + " class=\"bg-image bg-center-center\"></div></article>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var meal = $$obj[$index];

buf.push("<article class=\"meal\"><header class=\"meal-title\">" + (jade.escape(null == (jade_interp = meal.title) ? "" : jade_interp)) + "</header><div" + (jade.attr("style", 'background-image: url(' + (meal.image) + ');', true, false)) + " class=\"bg-image bg-center-center\"></div></article>");
    }

  }
}).call(this);

buf.push("</div></section>");}.call(this,"desserts" in locals_for_with?locals_for_with.desserts:typeof desserts!=="undefined"?desserts:undefined,"main_dishes" in locals_for_with?locals_for_with.main_dishes:typeof main_dishes!=="undefined"?main_dishes:undefined,"soups" in locals_for_with?locals_for_with.soups:typeof soups!=="undefined"?soups:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
}