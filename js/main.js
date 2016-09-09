$(document).ready(function(){
var skills = {
  html5: "Got to love the fundamentals. I strive to structure my HTML with clarity and would like to work on ensuring accessibility in my code. ",
  css3: "I love the simplicity and power of css. I've also used SASS in my projects.",
  js: "My programming world revolves around JavaScript. :) I'm striving to become a JavaScript Jedi Master!",
  jquery: "I find jQuery very useful and utilize it often for animations and AJAX handling. ",
  bootstrap: "For mobile-optimized websites, Bootstrap is my go-to framework. I'm very familiar with both the grid system and components.",
  ruby: "I think Ruby is a beautiful and thoughtful programming language. I've used Ruby with Sinatra and Rails.",
  rails: "I have a good understanding of Rails and have used it to build about 5 applications. I appreciate the organization and convention of the framework.",
  github: "Thank god for Github! Git is my primary VCS and I don't know where I'd be without it. Git blame is my favorite feature.",
  google: "I've had a great time playing around with Google's Developer Tools. Specifically, I've incorporated Google's Maps API and Chrome Extension in my applications. I want to dive deeper into Material design and additional APIs. ",
  backbone: "Backbone was a great introduction to front-end frameworks. Although it's a bit dated compared to today's hot frameworks, it's a great starting point to learning newer frameworks like React.",
  postgresql: "I often use PostgreSQL because of its strong open-source technology and compatability with Heroku.",
  python: "I just scratched the surface with Python and utilized it with my iot project. I'd love a deeper dive into Python.",
  arduino: "The Arduino was a great introduction to playing around with hardware. I found the Arduino documentation and community extremely helpful. I'm excited for my next Arduino project! Let me know if you'd like to collaborate!"

};

$("img").mouseover( function() {
  var skill = $(this).attr("id");
  $('#skillContent').html(skills[skill]).slideDown();
});
$("img").mouseleave( function() {
  var skill = $(this).attr("id");
  $('#skillContent').slideUp(function() {
    $('#skillContent').stop();
  });
});
});
