import "./topbar.css";
// import {Button} from " @material-ui/icons/";  
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
// import DeleteIcon from '@mui/icons-material/Delete';
// import SearchIcon from '@mui/icons-material/Search';
import { FaSearch, GoPerson, BsFillPersonFill, BsFillChatSquareTextFill, FaRocketchat } from "react-icons/fa";
import { AiFillNotification } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
               <span className="logo">BrisstoneSocial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    {/* <Button/> */}
                    <FaSearch />
                    <input className="searchInput" placeholder ="search for friend, post or video"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Timeline</span>
                </div>
            </div>
            <div className="topbarIcons">
                <div className="topbarIcon">
                    <GoPerson/> 
                </div>
                <div className="topbarIconBadge">1</div>
                <div className="topbarIcon">
                    <AiFillNotification/>
                </div>
                <div className="topbarIconBadge">2</div>
                <div className="topbarIcon">
                    <FaRocketchat/>
                </div>
                <div className="topbarIconBadge">2</div>

                
            </div>
        </div>
    )
}
