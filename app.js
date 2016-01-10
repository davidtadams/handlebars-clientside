//http://www.adamwadeharris.com/how-to-precompile-handlebars-templates/
//http://handlebarsjs.com/precompilation.html

$(document).ready(function() {
  $.get("http://localhost:3000/api/profile", function( data ) {
    // Grab the template script
    // var theTemplateScript = $("#profile-template").html();

    // var theTemplateScript = `<ul>
    //   <li>First Name: {{first_name}}</li>
    //   <li>Last Name: {{last_name}}</li>
    //   <li>Age: {{age}}</li>
    //   <li>City: {{city}}</li>
    //   <li>State: {{state}}</li>
    //   <li><img src="{{profile_image}}"></li>
    // </ul>`;

    // Compile the template
    // var theTemplate = Handlebars.compile(theTemplateScript);

    var theTemplate = Handlebars.templates.person;

    // Pass our data to the template
    var theCompiledHtml = theTemplate(data);

    // Add the compiled html to the page
    $('.content-placeholder').html(theCompiledHtml);
  });
});
