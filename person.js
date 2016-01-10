(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['person'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul>\n  <li>First Name: "
    + alias4(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first_name","hash":{},"data":data}) : helper)))
    + "</li>\n  <li>Last Name: "
    + alias4(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"last_name","hash":{},"data":data}) : helper)))
    + "</li>\n  <li>Age: "
    + alias4(((helper = (helper = helpers.age || (depth0 != null ? depth0.age : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"age","hash":{},"data":data}) : helper)))
    + "</li>\n  <li>City: "
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + "</li>\n  <li>State: "
    + alias4(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"state","hash":{},"data":data}) : helper)))
    + "</li>\n  <li><img src=\""
    + alias4(((helper = (helper = helpers.profile_image || (depth0 != null ? depth0.profile_image : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"profile_image","hash":{},"data":data}) : helper)))
    + "\"></li>\n</ul>\n";
},"useData":true});
})();
