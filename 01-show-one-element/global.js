window.addEventListener("load", function(){

  // Here is some pseudo-code to help you get started:

  // 1. Get the DOM element which will be clicked.

  // 2. Add a listener for the 'click' event onto that element.

  // 3. The block for the listener should get the DOM
  //    element containing the text to reveal.

  // 4. Modify that DOM element's style to change it's 'display'
  //    from a hidden value to a shown value.

  // 5. Also modify the DOM to hide the "More info..." link.
  <div class="text-container">
    <h1>DOM automic 01</h1>
    <h2>DOM automic 01</h2>
    <div class="content hideContent">
    The modern mammal metropolis of Zootopia is a city like no other. Comprised of habitat neighborhoods like ritzy Sahara Square and frigid Tundratown, it's a melting pot where animals from every environment live together-a place where no matter what you are, from the biggest elephant to the smallest shrew, you can be anything. But when rookie Officer Judy Hopps (voice of Ginnifer Goodwin) arrives, she discovers that being the first bunny on a police force of big, tough animals isn't so easy. Determined to prove herself, she jumps at the opportunity to crack a case, even if it means partnering with a fast-talking, scam-artist fox, Nick Wilde (voice of Jason Bateman), to solve the mystery.
        <p>Some more text</p>
        <ul>
            <li> Walt Disney Animation Studios' "Zootopia," a comedy-adventure directed by Byron Howard ("Tangled," "Bolt") and Rich Moore ("Wreck-It Ralph," "The Simpsons") and co-directed by Jared Bush ("Penn Zero: Part-Time Hero"), opens in theaters on March 4, 2016. Officer Judy Hopps (voice of Ginnifer Goodwin), the very first bunny on Zootopia's police force, jumps at the opportunity to crack her first case-even if it means partnering with fast-talking, scam-artist fox Nick Wilde (voice of Jason Bateman) to solve the mystery.</li>
        </ul>
    </div>
    <div class="show-more">
        <a href="#">Show more</a>
    </div>
</div>
 
 $(".show-more a").on("click", function() {
    var $this = $(this); 
    var $content = $this.parent().prev("div.content");
    var linkText = $this.text().toUpperCase();    

    if(linkText === "SHOW MORE"){
        linkText = "Show less";
        $content.switchClass("hideContent", "showContent", 400);
    } else {
        linkText = "Show more";
        $content.switchClass("showContent", "hideContent", 400);
    };

    $this.text(linkText);
});​

});