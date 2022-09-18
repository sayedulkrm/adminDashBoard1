import "./featured.scss";
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Featured = () => {
    return (
        <div className='featured'>
            <div className="top">
                <h1 className="title">Total Revenue</h1>
                <WidgetsOutlinedIcon fontSize="small" style={{color:"#F16645"}}/>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={70} text={"70%"} strokeWidth = {5} />
                </div>
                <p className="title">Total sales made today</p>
                <p className="amount">$450</p>
                <p className="disc">Previous transaction processing. Last payment may not be included</p>
                <div className="summary">
                    <div  className="item">
                        <div className="itemTitle">Target</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="resultAmount">$12.4K</div>
                        </div>
                    </div>
                    <div  className="item">
                        <div className="itemTitle">Last Week</div>
                        <div className="itemResult negative">
                            <KeyboardArrowDownOutlinedIcon fontSize="small" />
                            <div className="resultAmount">$12.4K</div>
                        </div>
                    </div>
                    <div  className="item">
                        <div className="itemTitle">Last Month</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="resultAmount">$12.4K</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Featured