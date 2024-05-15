
import { Link } from 'react-router-dom';
import './Homepage.css'
//import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";

const Homepage = () => {
  return (
    
    
  <div>
    <div className = "hpmain">
      
     
        <div className='hcont'>
            <div className="heros">
                <div className="herostitle">
                    <h3 className='thisww'>THIS IS WORKWHIZ</h3>
                    <p className='gateww'>Your Gateway to <br/>Easy Side Jobs</p><br/>
                    <p1 className= 'blahh'>Workwhiz connects job seekers with employers for easy, part-time gigs, <br/>
                    offering accessible side income oppurtunities without professional skill requirements.</p1>
                    <br/>
                    <br/>
                    <div className="bbhome">
                      <button className='fbtn'><Link className='i' to={'/login'}>Login</Link></button>
                      <button className='hbtn'><Link className='i' to={'/register'}>Register</Link></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <HowItWorks/>
    </div>
    
     
    
  );
};

export default Homepage;
