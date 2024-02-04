import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './BookingPage.css'
import heroImage from '../../Assets/greek salad.jpg'
import { useEffect, useState } from 'react'

import { fetchAPI, submitAPI } from '../../Utils/fake_api'

function BookingPage() {

  const [res_date, set_res_date] = useState(new Date());
  const [res_time, set_res_time] = useState("17:00");
  const [guests, set_guests] = useState();
  const [occasion, set_occasion] = useState("Birthday");

  const [available_times, set_available_times] = useState();
  const [submitted, set_submitted] = useState(false);

  const handleSubmit = (event) => {
    console.log("submitted");
    console.log(res_date);
    console.log(res_time);
    console.log(guests);
    console.log(occasion);
    event.preventDefault();
    if (res_date != undefined && res_time != undefined && guests != undefined && occasion != undefined) {
      set_submitted(true)
    }
  }

  const initializeTimes = () => {
    const data = fetchAPI(res_date)
    set_available_times(data)
  }

  // Usiung effect to initially fetch and do stuff outside of the react process
  useEffect(() => {
    initializeTimes();
  }, [])


  return (
    <>
      <Header/>
      <main>
        {
          submitted ?
          <div id="SubmittedBooking"><p>Form submitted</p></div> :
          <div id="BookingPage">
            <form onSubmit={handleSubmit}>
              <label htmlFor="res_date">Choose date</label><br/>
              <input
                type="date"
                id="res_date"
                onChange={event => set_res_date(event.target.value)}
              />
              <label htmlFor="res-time">Choose time</label><br/>
              <select id="res-time" onChange={event => set_res_time(event.target.value)}>
                  <option>17:00</option>
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                  <option>21:00</option>
                  <option>22:00</option>
              </select>
              <label htmlFor="guests">Number of guests</label><br/>
              <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={event => set_guests(event.target.value)}/>
              <label htmlFor="occasion">Occasion</label><br/>
              <select id="occasion" onChange={event => set_occasion(event.target.value)}>
                  <option>Birthday</option>
                  <option>Anniversary</option>
              </select>
              <input type="submit" value="Make Your reservation"></input>
            </form>
          </div>
        }
      </main>
      <Footer/>
    </>
  );
}

export default BookingPage;


