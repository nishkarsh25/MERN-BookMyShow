# MERN Stack BookMyShow Project

Welcome to the MERN (MongoDB, Express.js, React.js, Node.js) stack project! This comprehensive guide will walk you through every aspect of this project, including its structure, setup instructions, usage, API endpoints, backend, frontend, contributing guidelines, license information, and how to get in touch for support or inquiries.

## Introduction

This project is a Movie Ticket Booking System implemented using React.js for the frontend and Node.js with Express.js for the backend. It allows users to browse available movies, select time slots, choose seats, and book movie tickets.

**Features:**

1. **Select Movie:** Users can browse through a list of available movies and select the one they want to watch.

2. **Select Time Slot:** Users can choose from various time slots available for the selected movie.

3. **Select Seats:** Users can choose their preferred seats for the selected movie and time slot.

4. **Book Tickets:** Once all selections are made, users can proceed to book their tickets. The system validates the user's selections and confirms the booking.

5. **View Last Booking Details:** Users can view details of their last booking, including the selected seats, movie, and time slot.

6. **Error Handling:** The system provides error messages for invalid selections or failed booking attempts.

## Live Demo

You can try out the live demo of the app [here](https://mern-bookmyshow-2.onrender.com).

## Folder Structure

```
movie-ticket-booking-system/
│
├── backend/                 # Backend server
│   ├── models/              # MongoDB models
│   ├── routes/              # Express.js routes
│   ├── node_modules/
│   ├── package.json         # Backend dependencies and scripts
│   └── server.js            # Backend server configuration
│
├── frontend/                # Frontend React application
│   ├── public/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── context/         # Context API for state management
│   │   ├── pages/           # React pages/screens
│   │   ├── App.js           # Main App component
│   │   ├── index.js         # Entry point for React app
│   │   └── ...
│   ├── node_modules/
│   ├── package.json         # Frontend dependencies and scripts
│   └── data.jsx                    # Data file containing movie list, slots, and seats
│               
├── LICENSE                  # License file
├── README.md                # Project README file
└── ...



```


## Screenshots

<!-- Include screenshots or GIFs of your app here to give users a visual representation of what your app looks like. -->
<img src="https://github.com/nishkarsh25/MERN-BookMyShow/blob/main/Screenshots/ss1.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/MERN-BookMyShow/blob/main/Screenshots/ss2.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/MERN-BookMyShow/blob/main/Screenshots/ss3.png" alt="Screenshot 1" width="1000"> 

<img src="https://github.com/nishkarsh25/MERN-BookMyShow/blob/main/Screenshots/ss4.png" alt="Screenshot 1" width="1000"> 


## Technologies Used

The project leverages the power of modern web technologies to create a seamless user experience:

- **Frontend:**
  - React.js: A popular JavaScript library for building user interfaces.
  - React Router: Used for routing within the React application.
  - Axios: A promise-based HTTP client for making requests to the backend.
  - Tailwind CSS: A utility-first CSS framework for quickly building custom designs.

- **Backend:**
  - Node.js: A JavaScript runtime environment for building server-side applications.
  - Express.js: A minimalist web application framework for Node.js.
  - MongoDB: A NoSQL database for storing application data.
  - Mongoose: An elegant MongoDB object modeling tool for Node.js.
  - Cors: Middleware for enabling Cross-Origin Resource Sharing (CORS) in the Express application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nishkarsh25/MERN-LoginAndRegistration.git
   ```
2. Navigate to the project branch:

   ```bash
   git checkout <branch-name>
   ```
   Replace `<branch-name>` with the name of the branch you want to checkout.
   
3. Start the Backend Server: Launch the backend Node.js server.

   ```bash
   cd backend
   node server.js
   ```
4. Start the Frontend Development Server: Run the React development server for the frontend application.

   ```bash
   cd frontend
   npm run dev
   ```

## Usage

1. **Run the development server**:

   ```bash
   npm run dev
   ```
2. **Open your browser** and navigate to http://localhost:5173 to view the app.

## How to Use

1. **Select Movie:**
   - Navigate to the homepage of the application.
   - Browse through the list of available movies.
   - Click on the desired movie to select it.

2. **Select Time Slot:**
   - After selecting a movie, available time slots for that movie will be displayed.
   - Click on the preferred time slot to select it.

3. **Select Seats:**
   - Once the movie and time slot are selected, a seating plan will be displayed.
   - Click on the seats you want to book. The selected seats will be highlighted.
   - Enter the number of tickets for each selected seat.

4. **Book Tickets:**
   - After selecting seats, click on the "Book Now" button.
   - If any required selection is missing or invalid (e.g., no movie selected, no seats chosen, negative number of seats), an error message will be displayed.
   - If all selections are valid, the booking will be confirmed, and a success message will be displayed.

5. **View Last Booking Details:**
   - Users can view details of their last booking by navigating to the "Last Booking Details" section.
   - The selected seats, movie, and time slot of the last booking will be displayed.

## API Endpoints

The backend server exposes the following API endpoints:

1. **POST /api/booking**
   - **Description:** Creates a new booking and adds it to the database.
   - **Request Body:**
     - `movie`: String - The selected movie.
     - `slot`: String - The selected time slot.
     - `seats`: Object - The selected seats and their respective quantities.
   - **Response:**
     - Status Code: 200
     - Body:
       ```json
       {
         "data": {
           "movie": "Justice League",
           "slot": "10:00 AM",
           "seats": {
             "A1": 2,
             "A2": 1,
             "D1": 3
           }
         },
         "message": "Booking successful!"
       }
       ```
   - **Error Response:**
     - Status Code: 500
     - Body:
       ```json
       {
         "data": null,
         "message": "Something went wrong! Please try again."
       }
       ```

2. **GET /api/booking**
   - **Description:** Retrieves the last booking details from the database and sends it to the frontend.
   - **Response:**
     - Status Code: 200
     - Body:
       ```json
       {
         "data": {
           "_id": "609d2feaf95c7b55c72a61d2",
           "movie": "Justice League",
           "slot": "10:00 AM",
           "seats": {
             "A1": 2,
             "A2": 1,
             "D1": 3
           },
           "__v": 0
         }
       }
       ```
   - **Error Response:**
     - Status Code: 500
     - Body:
       ```json
       {
         "data": null,
         "message": "Something went wrong! Please try again."
       }
       ```

These endpoints are implemented on the backend server using Express.js and are responsible for handling the booking functionality and retrieving the last booking details.


## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Contributing

Contributions to this project are highly appreciated! Whether you discover bugs, have feature requests, or wish to contribute improvements, your input is valuable. Here's how you can contribute:

- **Report Issues:** If you encounter any bugs or issues while using MyCalculatorApp, please open an issue on the GitHub repository. Be sure to provide detailed information about the problem and steps to reproduce it.

- **Submit Pull Requests:** If you have enhancements or fixes to propose, feel free to submit a pull request. Contributions that improve the functionality, usability, or performance of this app are welcomed and encouraged.

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature/your-feature-name`).
3. **Make Your Changes**.
4. **Commit Your Changes** (`git commit -am 'Add some feature'`).
5. **Push to the Branch** (`git push origin feature/your-feature-name`).
6. **Create a New Pull Request**.

## License

This project is licensed under the [The 3-Clause BSD License](LICENSE).Feel free to explore, modify, and contribute to this project as you see fit. Your feedback and contributions are greatly appreciated! 🚀✨


## Acknowledgments

This project is made possible by the contributions and support of various individuals and communities. Special thanks to:

- **Tailwind CSS Team:** For developing Tailwind CSS, a versatile CSS framework that simplifies web development and enhances user interfaces.
  
- **Open Source Community:** For fostering collaboration, innovation, and the sharing of knowledge, which enriches projects like My Form Validation and makes them accessible to all.

## Credits

This project wouldn't be possible without the contributions of the following:

- **React**: A JavaScript library for building user interfaces. Visit [React](https://reactjs.org/) for more information.

- **React Icons**: React Icons provides a comprehensive library of icons for React applications. Visit [React Icons](https://react-icons.github.io/react-icons/) for more information.
  
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs rapidly. Visit [Tailwind CSS](https://tailwindcss.com/) for more information.

- **FontAwesome**: A popular icon library providing a vast collection of icons for web development. Visit [FontAwesome](https://fontawesome.com/) for more information.

- **Netlify**: Netlify provides seamless deployment and hosting solutions, making it easy to deploy web applications and share them with the world. Visit [Netlify](https://www.netlify.com/) for more information.

- **Render**: Render offers a modern cloud platform for deploying and running web applications, databases, and other services. Visit [Render](https://render.com/) for more information.

- **MongoDB Atlas**: MongoDB Atlas is a fully managed cloud database service for modern applications. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for more information.



## Author

- **Nishkarsh Gupta**
  - GitHub: [nishkarsh25](https://github.com/nishkash25)
  - Email: bm21btech11016@gmail.com

