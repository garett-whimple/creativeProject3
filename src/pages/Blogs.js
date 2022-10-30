import img1 from '../media/greenbelt.jpg'
import img3 from '../media/newSmyrna.jpg'

const Blogs = () => {
  return (<div class="container mt-5 mb-lg-5 pb-5 locations-container">
        <h1 class="text-center text-lg-left h2">Locations</h1>
        <div class="mt-4 location_listings">
          <div class="row py-3 bg-light-gray-even">
            <div class="col-lg-2 col-md-6 text-center mx-auto image">
              <img src={img3} alt="Kennedy Space Center" class="img-fluid"></img>
            </div>
            <div class="col-lg-8 mt-4 mt-lg-0">
              <h2 class="h5">New Smyrna location</h2>
              <div class="d-md-flex">
                <p class="mb-1 pr-md-2 border-black border-md-right">New Smyrna Beach</p>
                <p class="mb-1 px-md-2 border-black border-md-right">Florida, 32899</p>
                <a href="tel:(321) 867-5000" class="mb-1 px-md-2 text-black"><strong>(321) 867-5000</strong></a>
              </div>
              <ul class="pl-3">
                <li class="mb-0">Mon-Fri 9am-6pm</li>
                <li class="mb-0">Sat 9am-6pm</li>
                <li class="mb-0">Sun 11am-4pm</li>
              </ul>
            </div>
            <div class="col-lg-2 align-self-center text-center p-0">
              <a href="#" class="btn btn-outline-dark px-5 py-2 rounded-0">Select</a>
            </div>
          </div>
      
          <div class="row py-3 bg-light-gray-even">
            <div class="col-lg-2 col-md-6 text-center mx-auto image">
              <img src={img1} alt="Goddard Space Flight Center" class="img-fluid"></img>
            </div>
            <div class="col-lg-8 mt-4 mt-lg-0">
              <h2 class="h5">Greenbelt Location</h2>
              <div class="d-md-flex">
                <p class="mb-1 pr-md-2 border-black border-md-right">8800 Greenbelt Rd</p>
                <p class="mb-1 px-md-2 border-black border-md-right">Greenbelt, MD 20771</p>
                <a href="tel:(301) 286-2000" class="mb-1 px-md-2 text-black"><strong>(301) 286-2000</strong></a>
              </div>
              <ul class="pl-3">
                <li class="mb-0">Mon-Fri 9am-7pm</li>
                <li class="mb-0">Sat 9am-6pm</li>
                <li class="mb-0">Sun 11am-4pm</li>
              </ul>
            </div>
            <div class="col-lg-2 align-self-center text-center p-0">
              <a href="#" class="btn btn-outline-dark px-5 py-2 rounded-0">Select</a>
            </div>
          </div>
        </div>
    </div>);
};

export default Blogs;