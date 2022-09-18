import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

    const rows = [
        {
            id: 1242135,
            product: "Sony Play Station 5",
            img: "https://www.cnet.com/a/img/resize/f3653ea2f9828cd65c4aa687d3d80d81b158a8fa/hub/2021/03/08/17e4fce6-2c5a-4749-af10-330a9c35a72a/ps5-playstation-5-sony-hoyle-promo-4.jpg?auto=webp&fit=crop&height=1200&width=1200",
            customer: "Lois Lean",
            date: "1 March",
            amount: 400,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 845673,
            product: "Console 2 in 1",
            img: "https://cdn.thewirecutter.com/wp-content/media/2020/10/gameconsoles-2048px-1011084-3x2-1.jpg?auto=webp&quality=60&crop=1.91:1&width=1200",
            customer: "Bruce Wayne",
            date: "1 March",
            amount: 100,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: 463562,
            product: "Mac Book Pro 2022",
            img: "https://cdn.mos.cms.futurecdn.net/msmrJnQxeYt2JdgLvE8vrY.jpg",
            customer: "Clark K.",
            date: "1 March",
            amount: 1500,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 342547863,
            product: "iPhone 14",
            img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1660754254057",
            customer: "Zack S.",
            date: "1 March",
            amount: 1200,
            method: "Online Payment",
            status: "Approved",
        },
        {
            id: 267336,
            product: "GTA V CD for PS5",
            img: "https://m.media-amazon.com/images/I/71rmY66nqoL._SL1361_.jpg",
            customer: "Doomsday",
            date: "1 March",
            amount: 20,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: 73421446,
            product: "NIKE New Shoes",
            img: "https://cdn.thetealmango.com/wp-content/uploads/2022/06/Nike-Mag-Self-Lacing-Pair-of-Training-Shoes.webp",
            customer: "Leo Messi",
            date: "1 March",
            amount: 600,
            method: "Online Payment",
            status: "Approved",
        },
        {
            id: 5637648,
            product: "Rolax Watch",
            img: "https://content.rolex.com/dam/new-watches-2020/homepage/roller/all-watches/watches_0004_m126711chnr-0002-gmt-master-ii_portrait.jpg?imwidth=420",
            customer: "Alferd Jr.",
            date: "1 March",
            amount: 1200,
            method: "Cash on Delivery",
            status: "Pending",
        },
        {
            id: 54335764,
            product: "Cowboy Hat",
            img: "https://media.istockphoto.com/photos/rodeo-horse-rider-wild-west-culture-americana-and-american-country-picture-id1184522745?k=20&m=1184522745&s=612x612&w=0&h=XdqC0eWlEQuz-QtgmqIfi4OdDhfhLQqnyvDd6JwLkZE=",
            customer: "Robin Hood",
            date: "1 March",
            amount: 260,
            method: "Online Payment",
            status: "Approved",
        },


    ];

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell className="tableCell">Tracking ID</TableCell>
                    <TableCell className="tableCell">Product</TableCell>
                    <TableCell className="tableCell">Customer</TableCell>
                    <TableCell className="tableCell">Date</TableCell>
                    <TableCell className="tableCell">Amount</TableCell>
                    <TableCell className="tableCell">Payment Method</TableCell>
                    <TableCell className="tableCell">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                    <TableRow key={row.id} >
                        <TableCell className="tableCell" >{row.id}</TableCell>
                        <TableCell className="tableCell">
                            <div className="cellWrapper" >
                                <img src={row.img} alt={row.product} className="image" />
                                {row.product}
                            </div>
                        </TableCell>
                        <TableCell className="tableCell">{row.customer}</TableCell>
                        <TableCell className="tableCell">{row.date}</TableCell>
                        <TableCell className="tableCell">{row.amount}</TableCell>
                        <TableCell className="tableCell">{row.method}</TableCell>
                        <TableCell className="tableCell"> <span className={`status ${row.status}`}>{row.status}</span> </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default List;