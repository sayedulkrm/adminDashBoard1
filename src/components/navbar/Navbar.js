import { useContext } from "react";
import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import TextsmsIcon from '@mui/icons-material/Textsms';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import { DarkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext);
return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="search">
                <input text="text" placeholder="Search..." />
                <SearchIcon />
            </div>
            <div className="items">
                <div className="item">
                    <LanguageOutlinedIcon className="icon" />
                    English
                </div>
                <div className="item">
                    <DarkModeOutlinedIcon className="icon" onClick={()=> dispatch({type: "TOGGLE"})} />
                    
                </div>
                <div className="item">
                    <FullscreenOutlinedIcon className="icon" />
                    
                </div>
                <div className="item">
                    <NotificationsActiveOutlinedIcon className="icon" />
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <TextsmsIcon className="icon" />
                    <div className="counter">2</div>
                </div>
                <div className="item">
                    <FactCheckIcon className="icon" />
                </div>
                <div className="item">
                    <img src="https://people.com/thmb/iBW8B8Z6apjkym-Gzygl74dM7s8=/1000x1000/smart/filters:no_upscale():focal(674x429:676x431)/christopher-nolan-dc23745902014fb6ae107bb65a10c384.jpg" alt="Dash Board nolan" className="avatar"/>
                </div>
            </div>
        </div>
    </div>
)
}

export default Navbar