export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 }, {
        field: "user", headerName: "User", width: 230, renderCell: (params) => {
            return(
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email", headerName:"Email", width: 230,
    },
    {
        field: "age", headerName:"Age", width: 100,
    },
    {
        field: "status", headerName:"Status", width: 160, renderCell: (params)=> {
            return(
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            );
        },
    },

];


// Temp data
export const userRow = [
    {
        id: 1,
        username: "Bruce Wayne",
        img: "https://sites.rutgers.edu/acal51/wp-content/uploads/sites/291/2017/12/3859882-6269102771-Bruce.jpg",
        status: "Active",
        email: "wayne@gmail.com",
        age: 44,
    },
    {
        id: 2,
        username: "Kal L",
        img: "https://i.pinimg.com/originals/36/1e/ba/361ebaba0ec74ea5418ab76e8f0f523e.jpg",
        status: "Pending",
        email: "kal@gmail.com",
        age: 33,
    },
    {
        id: 3,
        username: "C. Nolan",
        img: "https://i.pinimg.com/736x/b7/aa/1f/b7aa1fc93257973966d8281cd4d034cd--christopher-nolan-movie-costumes.jpg",
        status: "Passive",
        email: "nolan@gmail.com",
        age: 32,
    },
    {
        id: 4,
        username: "Sayedul Karim",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Zack_Snyder_by_Gage_Skidmore_2.jpg/1200px-Zack_Snyder_by_Gage_Skidmore_2.jpg",
        status: "Active",
        email: "karim@gmail.com",
        age: 53,
    },
    {
        id: 5,
        username: "Sherlocked",
        img: "https://flxt.tmsimg.com/assets/p8204516_n279079_cc_v9_aa.jpg",
        status: "Pending",
        email: "sherlocked@gmail.com",
        age: 24,
    },
    {
        id: 6,
        username: "Berry Alan",
        img: "https://i.pinimg.com/originals/56/61/81/566181057e964ec49a069783a71ca507.jpg",
        status: "Passive",
        email: "Berry@gmail.com",
        age: 32,
    },
    {
        id: 7,
        username: "Shazam",
        img: "https://static.wikia.nocookie.net/marvel_dc/images/6/61/Shazam%21_Vol_3_1_Textless_Variant.jpg/revision/latest?cb=20181205234924",
        status: "Active",
        email: "Shazam@gmail.com",
        age: 62,
    },
    {
        id: 8,
        username: "Mr. Bin",
        img: "https://navbharattimes.indiatimes.com/photo/msid-87869001,imgsize-113650/pic.jpg",
        status: "Passive",
        email: "Bin@gmail.com",
        age: 54,
    },
    {
        id: 9,
        username: "Jerry",
        img: "https://static.wikia.nocookie.net/tomandjerry/images/7/74/Jerry_from_T%26J_Chase.png/revision/latest?cb=20210225014719",
        status: "Active",
        email: "Jerry@gmail.com",
        age: 44 ,
    },
    {
        id: 10,
        username: "Mr. Rabbit",
        img: "https://i.pinimg.com/originals/a0/fe/17/a0fe1724f9ca327390652cd8e6289456.jpg",
        status: "Pending",
        email: "rabbit@gmail.com",
        age: 54,
    },
    {
        id: 11,
        username: "Lois Len",
        img: "https://i0.wp.com/www.supermanhomepage.com/clickandbuilds/SupermanHomepage/wp-content/uploads/2021/02/1353E7D8-807B-4B5A-842B-4DB40C2868CF.jpeg?resize=819%2C1024&ssl=1",
        status: "Passive",
        email: "lois@gmail.com",
        age: 32,
    },
];