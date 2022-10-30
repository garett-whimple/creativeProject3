const Contact = () => {
  return (<div class="vertical-container">
        <div class="container-title black">
            <p>We are excited to come meet you and give you a quote!</p>
        </div>
    <div class="booking-container vertical-container" id="booking">
        <div class="container-title black booking-title-container">
            <p>Book Now</p>
        </div>
        <div class="container-description container">
            <p>Prices are not final</p>
        </div>
        <div class="booking-form-container container">
            <form class="form-container vertical-container" action="/action_page.php" method="get">
                <div>
                    <input class="form-input" type="text" id="fname" name="fname" placeholder="First Name"></input>
                    <input class="form-input" type="text" id="lname" name="lname" placeholder="Last Name"></input>
                </div>
                <div>
                    <input class="form-input" type="email" id="email" name="email" placeholder="Email"></input>
                    <input class="form-input" type="tel" id="tel" name="tel" placeholder="Phone Number"></input>
                </div>
                <div>
                    <input class="form-input" type="text" id="city" name="city" placeholder="City"></input>
                    <input class="form-input" type="text" id="state" name="state" placeholder="State"></input>
                </div>
                <div>
                    <select class="form-select" name="service" id="service">
                        <option value="serivice-name">Service Name</option>
                        <option value="serivice-name">Service Name</option>
                        <option value="serivice-name">Service Name</option>
                        <option value="serivice-name">Service Name</option>
                        <option value="serivice-name">Service Name</option>
                    </select>
                    <select class="form-select" name="frequency" id="frequency">
                        <option value="one-time">One Time</option>
                        <option value="seasonal">Seasonal (3 times a year)</option>
                        <option value="year-round">Year-Round (4 times a year)</option>
                    </select>
                </div>
                <input class="submit-button" type="submit" value="Submit"></input>
            </form>
        </div>
    </div>
    <footer>
        <p>Garett Whimple and Connor Ellis pair programmed this project</p>
        <a href='https://github.com/garett-whimple/creativeProject3'>Git Hub Repo</a>
    </footer>
</div>);
};

export default Contact;