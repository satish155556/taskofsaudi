import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <nav>
          <h1><span>R</span>iya</h1>
          <h6>the travel exper!</h6>
          <img className='name' src='https://pbs.twimg.com/profile_images/1442100523876765699/qr-tQG7S_400x400.jpg'></img>
          <Link to='/'><img className='home' src='https://www.creativefabrica.com/wp-content/uploads/2019/05/Home-icon-by-ahlangraphic.jpg'></img></Link>
          <Link to='PlanTrip'>PLAN YOUR TRIP</Link>
          <Link to='TravelEssential'>TRAVEL ESSENTIALS</Link>
          <Link to='SaudiCalender'>SAUDI CALENDAR</Link>
          <Link to='Experience'>EXPERIENCE</Link>
          <Link to='ContactUs'>CONTACT</Link>
        </nav>

      </BrowserRouter>
      <img className='img' src='https://www.visitsaudi.com/content/dam/saudi-tourism/media/new-hero-destinations-winter/ad_diriyah_break_free_landing_page_winter_campaign_1920x1080_5.jpg'></img>
      <h5 className='five'>Saudi Summer Program</h5>
      <h3 className='hthree'>Summer & Vibes</h3>
      <div>
        <img className='firstimg' src='https://uploads-ssl.webflow.com/6266ce13f1b1c4b16d5c8eaa/62bd5f0d30ce3f6bb4aa008c_shutterstock_2065316684.jpeg'></img>
      </div>
      <div>
        <img className='secondimg' src='https://images.wsj.net/im-615138/8sr'></img>
      </div>
      <div>
        <img className='thirdimg' src='https://i.pinimg.com/736x/11/36/6d/11366db190300daffe792d2b983da9d6--camels-travel-destinations.jpg'></img>
      </div>

      <div>
        <p className='pera2'>More About Saudi Arabia</p>
      </div>
      <p className='pera1'> SAUDI ADVENTURES YOU DO</p> <p className='pera1'>NOT WANT TO MISS!</p>
      <p className='pera'>Discover the essence of Saudi, where you’ll find
        a mixture of global diversity that has emerged
        from this cradle of many human civilizations.
        Today, Saudi is a proud home of several heritage
        sites registered in the UNESCO World Heritage
        List. Get ready to be part of the largest international
        events in the most prominent cities of Saudi.</p>
      <div>
        <img className='img3' src='https://www.visitsaudi.com/content/dam/no-dynamic-media-folder/arabian-winter/winter-products/winter-activities/parks-1_hiking-in-saudi-national-parks/_activity_park_hiking_climbing_national_parks_activity_park_hiking_climbing_national_parks_hero.jpg'></img>
      </div>
      <div>
        <h4>POPULAR TOURS</h4>
      </div>
      <div className='main'>
        <img className='img4' src='https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2018/11/29/1384986-471332067.jpg?itok=cVnIj5E1'></img>
        <img className='img4' src='https://en.vogue.me/wp-content/uploads/2019/09/Qiddiyah-City-Center-Saudi-Arabia-Lead.jpg'></img>
        <img className='img4' src='https://www.arabianbusiness.com/cloud/2021/10/29/0UZhVeo5-Saudi-tourism.jpg'></img>
        <img className='img4' src='https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/2020/08/08/2221951-1423641180.jpg?itok=k0cR4ODP'></img>
        <img className='img4' src='https://vid.alarabiya.net/images/2021/05/17/1e4a557f-9d12-471c-b573-cf3d63fd0cdc/1e4a557f-9d12-471c-b573-cf3d63fd0cdc_16x9_1200x676.JPG'></img>
        <img className='img4' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZRBOnh_6B8b8OPCIdZZlHI4ki6l9GCSXNUw&usqp=CAU'></img>
        <img className='img4' src='https://cdn.getyourguide.com/img/tour/624ec668bd299.jpeg/97.jpg'></img>
        <img className='img4' src='https://www.esquireme.com/cloud/2021/09/08/saudi-1.jpg'></img>
        <img className='img4' src='https://cdn.theculturetrip.com/wp-content/uploads/2017/08/shutterstock_251998588.jpg'></img>
        <img className='img4' src='https://www.verdict.co.uk/wp-content/uploads/2018/03/Saudi.jpg'></img>
        <img className='img4' src='http://ttgasia.2017.ttgasia.com/wp-content/uploads/sites/2/2021/08/Al-Ula-Saudi-Arabia.jpg'></img>
        <img className='img4' src='https://www.abouther.com/sites/default/files/2021/03/16/tourism_shapers.jpg'></img>
      </div>
      <div>
        <p>Top Things To Do</p>
        <img className='img5' src='https://www.marketplace.org/wp-content/uploads/2022/02/GettyImages-1232792559-e1644357555255.jpg?fit=1024%2C576'></img>
      </div>
      <p className='pera4'>ABHA FESTIVAL</p>
      <p className='pera5'>Soar Through the Festival above the mountains! Come
        explore the magical Village hidden in the mists of Abha’s
        Summer Festival, a destination designed to meet your
        every whim, where culture meets connection.Packed with a variety of activities from carnival games to
        concerts and everything in between! Awaken your taste
        buds to the fusion of exotic and familiar tastes of dishes.</p>
        <div>
          <img className='img6' src='https://www.abouther.com/sites/default/files/2020/02/04/brand-page-hero-041.jpg'></img>
        </div>
        <div>
          <p className='pera7'>POPULAR DESTINATIONS</p>
        <img className='img10' src='https://www.abouther.com/sites/default/files/2020/06/25/summer_saudi_campaign_tanafas.jpg'></img>
        <img className='img11' src='https://www.traveltrendstoday.in/media/k2/items/cache/21dd3146cffde81bb369b9ad66eb2589_L.jpg'></img>
        <img className='img12' src='https://c.myholidays.com/blog/blog/content/images/2021/02/The-Kaaba.jpg'></img>
        </div>
       
        <form>
        
        <div>
          <div>
                <label for='card'>SELECT FOT TOUR</label>
                </div>
                <select id='card'>
                    <option>Select</option>
                    <option>HOTELS</option>
                    <option>Riyadh</option>
                    <option>Jeddah</option>
                    <option>Mecca</option>
                    <option>Dammam</option>
                </select>
            </div>

            <div>
              <label> NAME </label>
             </div>
             <div>
              <input type='text' placeholder='name'></input>
            </div>
            <div>
              <label>MOBILE NUMBER</label>
             </div>
             <div>
              <input type='number' placeholder='name'></input>
            </div>
            <div>
              <label>EMAIL ID</label>
             </div>
             <div>
              <input type='email' placeholder='email'></input>
            </div>
            <div>
              <label>MESSAGE</label>
             </div>
             <div>
              <textarea placeholder='messege'></textarea>
            </div>
            <div>
              <button>REQUEST A CALL BACK</button>
            </div>
            </form>
            <div>
              <img className='img13' src='https://www.blueabaya.com/wp-content/uploads/2012/01/06-150-post/Camels-at-Maraya-AlUla-Saudi-Arabia-768x1024.jpg'></img>
            </div>
            
            
    </div>
    
  );
}

export default App;
