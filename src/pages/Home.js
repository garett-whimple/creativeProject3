import video from '../media/Ernest Windows - Window Washing Promo 2018.mp4'

const Home = () => {
  return (<div>
  <header>
    <div class="main-video-container container">
              <div class="main-video-text-container vertical-container">
                <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
                <source src={video} type="video/mp4"></source>
                </video>
                <div class="w-100 text-white  container">
                  <h1 class="display-3 video-text">Discover just how stellar your windows can be</h1>
                </div>
                <div class="video-button-container container">
                    <button class="video-button" type="button">Book Now</button>
                </div>
              </div>
            </div>
            </header>
        <div class="services-container vertical-container">
            <div class="container-title container">
                <p>Services</p>
            </div>
            <div class="service-menu-container horizontal-container">
                <div class="service-item container">
                    <p>Serivice Name</p>
                </div>
                <div class="service-item container">
                    <p>Serivice Name</p>
                </div>
                <div class="service-item container">
                    <p>Serivice Name</p>
                </div>
                <div class="service-item container">
                    <p>Serivice Name</p>
                </div>
                <div class="service-item container">
                    <p>Serivice Name</p>
                </div>
            </div>
            <div class="service-collage">
                
            </div>
        </div>
        <div class="booking-container vertical-container" id="booking">
            <div class="container-title black container">
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
        </div>
    );
};

export default Home;