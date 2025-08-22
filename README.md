# 📚 Readify

**Readify** is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) based online bookstore prototype that allows users to explore books by category, view details, add to wishlist or cart, and register/login to save their interactions.

> ⚠️ The complete project is available in the **master** branch. Please switch to the **master** branch to view the code.
> ⚠️ This project is **not deployed** and currently runs locally.


---

## 🚀 Features

- 🔖 **Homepage** displaying 5 featured books
- 📂 **Categories** page with 9 genres:
  - Fiction
  - Non-Fiction
  - Science
  - Comics
  - Self-Help
  - Mystery
  - Adventure
  - Biography
  - Romance
- 📚 Each genre displays 12 books with:
  - Name
  - Author
  - Price
  - Cover Image
  - PDF link
  - **Buy Now** and **Add to Wishlist** buttons
- 🛒 **Cart Page** (not actual purchase):
  - Clicking "Buy Now" adds the book to the cart along with the timestamp
- ❤️ **Wishlist Page** to view saved books
- 🔐 **Login / Register**:
  - Authentication pages with MongoDB integration
  - User credentials are stored, but login validation middleware is yet to be implemented
- 📬 **Contact Us** page with form (no backend integration for feedback yet)

---

## 📦 Tech Stack

| Tech        | Description                     |
|-------------|---------------------------------|
| React.js    | Frontend                        |
| Express.js  | Backend Framework               |
| Node.js     | Runtime Environment             |
| MongoDB     | Database                        |
| Mongoose    | ODM for MongoDB                 |
| Vite        | React bundler                   |
| CSS         | Styling                         |

---

## 📝 Installation & Usage

1. **Clone the Repository**
   ```bash
   git clone https://github.com/shiropa-4/Readify.git
   cd Readify
2. **Backend Setup**
   cd backend
   npm install
   npm start
3. **Frontend Setup**
    cd frontend
    npm install
    npm run dev
4. Ensure MongoDB is running locally or update your MongoDB URI in the backend config.
   
5. ⚠️ Limitations
   
No actual payment gateway or transactions.

Contact form does not store or send data.

Wishlist and cart are session-based; not saved to user account.

Auth middleware is not implemented yet.

Project is not yet deployed.

6. 📌 License
This project is open-source and free to use for educational purposes.




