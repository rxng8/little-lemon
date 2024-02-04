import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './HomePage.css'
import heroImage from '../../Assets/greek salad.jpg'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <>
      <Header/>
      <main>
        <div id="Main">
          <div className="Hero">
            <div className="HeroLeft">
              <h1 className="HeroLeftContent">Little Lemon</h1>
              <h2 className="HeroLeftContent">Chicago</h2>
              <p className="HeroLeftContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis aliquam libero at interdum. Nunc felis ex, suscipit ac ligula ac, laoreet dapibus tellus.</p>
              <Link className='Link' to={'/booking'}><button>Reserve a table</button></Link>
            </div>
            <div className="HeroRight">
              <img src={heroImage}/>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default HomePage;


