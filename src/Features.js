import Feature from "./Feature";

function Features() {
    return (
      <div class="section_two">
         <div class="large_heading">
            Make 6 figures this year as a fitness and wellness professional.
        </div>

        <p class='para'>Side hustle or full time gig? One client or one hundred? You’re in the right place. From seamless booking to partnerships that grow your exposure to clients, we have all the tools you need to take your business to the next level.</p>
      
        <div class="figures">
            <div class="left_figures">
                <Feature src="images/website.svg" alt="" title="A site that will look better than your website" para="but can also power your website if you prefer" width="25px;"/>
                <Feature src="images/play-button-arrowhead.svg" alt="" title="On-semand, Group Classes + Private Sessions" para="teach in-person or virtually" width="20px;"/>
                <Feature src="images/income.svg" alt="" title="Customizable Offerings" para="packages, unlimited passes, programs and challanges" width="25px;"/>
            </div>

            <div class="left_figures">
                <Feature src="images/price.svg" alt="" title="Flexible pricing" para="options to maximize your revenue and make passive income" width="25px;"/>
                <Feature src="images/black-star-silhouette.svg" alt="" title="A superior client experience" para="that puts them in charge" width="20px;"/>
                <Feature src="images/lightbulb.svg" alt="" title="Automations and integrations powerd by tech" para="so you can do the things only human can do" width="25px;"/>
            </div>
        </div>

        <div class="main_btn" style={{marginTop: '50px'}}>
            ALL FEATURES
        </div>
      </div>
    
    );
  }
  
  export default Features;
  