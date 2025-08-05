import React from "react"
import '../styles/home.css'

const latestBooks = [
  {
    title: 'The Silent Patient',
    image: 'https://gyaanstore.com/cdn/shop/files/76_19c5d4ad-4724-4c92-bd98-57cf88dc7b19.png?v=1701858047&width=1946',
    author: "Novel by Alex Michaelides",
    price: '₹499',
    pdfLink: 'https://whsmith.com.au/wp-content/uploads/2019/02/The-Silent-Patient-first-chaper.pdf'
  },
  {
    title: 'Atomic Habits',
    image: 'https://www.bookishadda.com/cdn/shop/files/230_f298f5c0-c116-4280-bef6-5d00db25b743.png?v=1701690525&width=1445',
    author: "Book by James Clear",
    price: '₹399',
    pdfLink: 'https://archive.org/download/atomic-habits-pdfdrive/Atomic%20habits%20%28%20PDFDrive%20%29.pdf'
  },
  {
    title: 'Ikigai',
    image: 'https://ikkadukka.com/cdn/shop/products/ikigai-the-japanese-secret-to-a-long-and-happy-life-book-books-house-home-lifestyle-newarrivals-product-type-ikkadukka-store-ikka-dukka-eclectic-online_580.jpg?v=1584737493',
    author:"Book by Francesc Miralles and Hector Garcia",
    price: '₹299',
    pdfLink: 'https://dn790007.ca.archive.org/0/items/ikigai-the-japanese-secret-to-a-long-and-happy-life-pdfdrive.com/Ikigai%20_%20the%20Japanese%20secret%20to%20a%20long%20and%20happy%20life%20%28%20PDFDrive.com%20%29.pdf'
  },
  {
    title: "Things Fall Apart",
    image: "https://online.anyflip.com/npuvy/umtx/files/mobile/1.jpg?1631504324",
    author: "Chinua Achebe",
    price: "₹299",
    category: "fiction",
    pdfLink: "https://marul.ffst.hr/~bwillems/fymob/things.pdf",
  },
  {

    name: "It Ends with Us",
    image: "https://variety.com/wp-content/uploads/2024/08/it-ends-with-us-collectors-copy.jpg?w=578",
    author: "Colleen Hoover",
    price: "₹499",
    category: "romance",
    pdfLink: "https://icrrd.com/public/media/15-05-2021-052358It-Ends-with-Us.pdf",
},
];


 


const Home=()=> {
  return (
    <div className="home-container">
      {/* Welcome Message */}
      <div className="message">
        <h1>Welcome to Books Heaven!</h1>
        <p>Discover your next favorite read from genres you love!</p>
      </div>

      {/* Horizontal Book Bar */}
      <div className="latest-books-bar">
        {latestBooks.map((book, index) => (
          <div className="book-card" key={index}>
            <img src={book.image} alt={book.title} />
            <div className="book-info">
              <h4>{book.title}</h4>
              <p>{book.price}</p>
              <p>{book.author}</p>
              <a href={book.pdfLink} target="_blank" className="pdf-link">Read PDF</a>
            </div>
          </div>
        ))}
      </div>

      {/* Login/Register Links */}
      <div className="auth-links">
        <a href="/Login" className="login-btn">Login</a>
        <a href="/Register" className="register-btn">Register</a>
      </div>
    </div>
  );
}

export default Home;


