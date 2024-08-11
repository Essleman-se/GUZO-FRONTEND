import './home.css';
import video from '../../assets/video.mp4';
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {SiTripadvisor} from 'react-icons/si'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'


export const Home = () => {

    return (
      <section className="home">          
         {/* <div className="overlay"></div>
         <video src={video} autoPlay loop muted type="video/mp4"></video> */}
        <div className="homeContent container">         
            <div>
                <h1>Here Home Page</h1>
            </div>
        </div>
      </section>
    )
}