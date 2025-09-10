E-Commerce Web Application

Project Overview:
This is a full-stack E-commerce web application where users can browse products, add items to their cart, place orders, and track their order history. Admins can manage products, users, and orders via a dedicated admin panel.

Features

User authentication (Sign Up / Login)

Browse products by category

Search products

Add to Cart / Remove from Cart

Checkout and view order history

Admin panel for managing products, users, and orders

Responsive UI built with Bootstrap

Tech Stack

Frontend: React.js

Backend: Node.js + Express

Database: MongoDB

Styling: Bootstrap

Authentication: JWT


Installation & Setup

Clone the repository:

git clone https://github.com/username/repo-name.git


Navigate to the project directory:

cd repo-name


Install dependencies:

npm install


Create a .env file and add the following:

PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret


Run the backend server:

node server.js


Run the frontend:

npm start


Open in browser:

http://localhost:3000

Folder Structure
/backend
   server.js
   db.js
   /models
   /routes
   seeder.js
/frontend
   /src
       App.js
       index.js
       /components
       /pages
       index.css

Usage

Sign up or login as a user

Browse and search products

Add products to the cart and proceed to checkout

Admin can manage products, users, and orders

License

MIT License
