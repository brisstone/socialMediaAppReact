import "./topbar.css";
// import {Button} from " @material-ui/icons/";  
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SearchIcon from '@mui/icons-material/Search';
import { FaSearch, GoPerson, BsFillPersonFill, BsFillChatSquareTextFill, FaRocketchat } from "react-icons/fa";
import { AiFillNotification } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { MdPerson } from "react-icons/md";


export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
               <span className="logo">BrisstoneSocial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    {/* <Button/> */}
                    <FaSearch  className="searchIcon" />
                    <input className="searchInput" placeholder ="search for friend, post or video"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Timeline</span>
                </div>
            
                <div className="topbarIcons">
                    <div className="topbarIcon">
                        <MdPerson/> 
                        <span className="topbarIconBadge">1</span>
                    </div>
                
                    <div className="topbarIcon">
                        <AiFillNotification/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                
                    <div className="topbarIcon">
                        <FaRocketchat/>
                        <span className="topbarIconBadge">3</span>
                    </div>
                
                    <img src="/assets/person/3.jpg"  className="topbarImg" alt="person1"/>
                    
                </div>
            </div>
     </div>
    )
}
