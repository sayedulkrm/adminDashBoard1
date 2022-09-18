import "./widget.scss";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({ type }) => {
    let data;

// temporary amount and percentage
const amount = 100;
const diff = 20;




    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonIcon className="icon" style={{color: "#F16645", backgroundColor: "rgba(241, 102, 69, 0.2)"}} />
            }
            break;
            case "order":
                data = {
                    title: "ORDERS",
                    isMoney: false,
                    link: "View all orders",
                    icon: <ShoppingCartOutlinedIcon className="icon" style={{color: "#A67C00", backgroundColor: "rgba(255, 232, 120, 0.5)"}}/>
                }
                break;
                case "earning":
                    data = {
                        title: "EARNINGS",
                        isMoney: true,
                        link: "View net earnings",
                        icon: <MonetizationOnOutlinedIcon className="icon" style={{color: "#008E76", backgroundColor: "rgba(83, 204, 157, 0.2)"}}/>
                    }
                    break;
                    case "balance":
                        data = {
                            title: "BALANCE",
                            isMoney: true,
                            link: "See details",
                            icon: <AccountBalanceWalletIcon className="icon" style={{color: "#825751", backgroundColor: "rgba(230, 177, 144, 0.2)"}}/>
                        }
                        break;
    
        default:
            break;
    }







return (
    <div className="widget">
        <div className="left">
            <span className="title">{ data.title }</span>
            <span className="counter">{ data.isMoney && "$" } {amount} </span>
            <span className="link">{ data.link }</span>

        </div>
        <div className="right">
            <div className="percentage positive">
                <ArrowDropUpIcon />
                {diff} %
                </div>
                {data.icon}
        </div>
    </div>
)
}

export default Widget;