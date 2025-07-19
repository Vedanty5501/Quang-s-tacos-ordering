# Quang's Tacos Ordering System

## Project Overview

Quang's Tacos is a full-stack web application for managing restaurant orders, table bookings, and user accounts. The system consists of a Vue.js frontend and a Node.js/Express backend connected to a relational database. It allows customers to browse food items, place orders, book tables, and view their bill status, while administrators can manage menu items and track orders.

### Features

- **User Management:** Register and authenticate users.
- **Food Menu:** Browse, add, update, and delete food items.
- **Cart & Ordering:** Add items to cart and place orders.
- **Table Booking:** Reserve tables at the restaurant.
- **Bill Details & Status:** View bill details and track payment status.
- **Admin Panel:** Manage menu, bookings, and orders.

## Project Structure

```
README.md
backend/
  index.js
  package.json
  config/
    database.js
  controllers/
    billdetails.js
    billstatus.js
    booktable.js
    cart.js
    food.js
    user.js
  models/
    BillDetailsModel.js
    BillStatusModel.js
    BookTableModel.js
    CartModel.js
    FoodModel.js
    UserModel.js
  routes/
    routes.js
frontend/
  package.json
  public/
    index.html
    taco.png
  src/
    App.vue
    axios.js
    main.js
    admin/
    assets/
```

## How to Run

### Frontend

```sh
npm install
npm run serve
npm run build
npm run lint
```

### Backend

```sh
npm install
npm start
```

## Technologies Used

- **Frontend:** Vue.js, Bootstrap, FontAwesome
- **Backend:** Node.js, Express.js, MySQL
- **Database:** MySQL

## Usage

1. Start the backend server.
2. Start the frontend development server.
3. Access the application in your browser to browse menu, book tables, and place orders.

---

For more details, see the source files in [backend/](backend) and [frontend/](frontend).
