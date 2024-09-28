# Route Planner Application

## Overview

The Route Planner Application is a full-stack web application that allows users to plan routes on a map, get information about accommodation, transportation costs, weather details, and share their planned route as an image or link. The project is built using ReactJS for the frontend, NodeJS (Express) for the backend, and several third-party APIs for features like map rendering, geocoding, transportation, and weather information.

## Features

- **Interactive Map:** Users can visualize their routes on a map using Leaflet and OpenStreetMap.
- **Location Search:** Users can search and add locations to plan their routes.
- **Route Customization:** Users can add multiple stops, select start and end points, and choose to return to the starting point.
- **Date Selector:** Allows users to specify travel dates or stay durations.
- **Travel Cost Estimates:** Users get estimates of transportation and accommodation costs.
- **Weather Information:** Users get average weather data for the selected locations and dates.
- **Route Sharing:** Users can export their planned routes as an image or share them as a link.

## Project Structure

### Backend (`/backend`)

The backend is built using NodeJS and Express. It handles API requests from the frontend and interacts with external services for geocoding, accommodation, transportation, and weather information.

**Key Components:**

- **`config/keys.js`:** Stores API keys and other sensitive configuration settings.
- **`controllers/`:** Contains logic for handling requests:
  - `locationController.js`: Handles location search using geocoding APIs.
  - `transportationController.js`: Handles transportation cost calculations.
  - `accommodationController.js`: Fetches accommodation cost data.
  - `weatherController.js`: Retrieves weather data for specific locations.
- **`routes/`:** Defines API endpoints for each controller:
  - `locationRoutes.js`, `transportationRoutes.js`, `accommodationRoutes.js`, `weatherRoutes.js`
- **`app.js`:** The main entry point for the backend, sets up routes and server configurations.

**Dependencies Used:**

- `express`: Web framework for NodeJS.
- `dotenv`: Loads environment variables from a `.env` file.
- `axios`: Makes HTTP requests to external APIs.
- `cors`: Enables Cross-Origin Resource Sharing.
- `nodemon`: Development utility to restart the server automatically.

### Frontend (`/frontend`)

The frontend is built using ReactJS, providing an interactive interface for users to plan their routes and visualize the details.

**Key Components:**

- **`/src/components/`**:
  - `MapComponent.js`: Displays the map and markers for added locations.
  - `RoutePlanner.js`: Allows users to search and add locations to their trip.
  - `SearchBox.js`: A reusable search box component.
  - `DateSelector.js`: Allows users to select trip start and end dates.
  - `TransportationCosts.js`: Displays transportation cost estimates.
  - `Summary.js`: Provides a summary of the trip, including accommodation, transportation, and weather information.

- **`/src/pages/`**:
  - `HomePage.js`: The main page of the application that integrates all components and allows users to interact with the route planner.

- **`/src/api/`**:
  - `accommodationApi.js`, `geocodingApi.js`, `weatherApi.js`, `transportationApi.js`: Handle API requests to the backend for fetching accommodation, geocoding, weather, and transportation data.

- **`/src/setupProxy.js`**:
  - Configures a proxy to forward `/api` requests to the backend server to handle CORS issues.

**Dependencies Used:**

- `react`, `react-dom`: Core React libraries.
- `react-leaflet`: To render maps using Leaflet.
- `axios`: To make HTTP requests to the backend API.
- `react-router-dom`: For handling navigation between pages.
- `leaflet`: JavaScript library for rendering maps.

### Public Folder (`/frontend/public`)

- **`index.html`**: The HTML file into which the React application is rendered.
- **`favicon.ico`**: The icon that represents the app in the browser tab.
- **`manifest.json`**: Metadata about the web application, used for PWA capabilities.
- **`robots.txt`**: Instructions for search engine crawlers.

## Running the Project Locally

### Prerequisites

- **NodeJS** and **npm**: Make sure NodeJS (which includes npm) is installed on your system.

### Step-by-Step Guide

1. **Clone the Repository**:

   ```
   git clone https://github.com/yourusername/route-planner-app.git
   cd route-planner-app
   ```

2. **Set Up the Backend**:

   - Navigate to the backend folder:

     ```
     cd backend
     ```

   - Install the required dependencies:

     ```
     npm install
     ```

   - Create a `.env` file in the `backend` directory and add the following:

     ```
     PORT=5000
     MAPBOX_API_KEY=YOUR_MAPBOX_API_KEY
     OPEN_WEATHER_MAP_API_KEY=YOUR_OPEN_WEATHER_MAP_API_KEY
     NUMBEO_API_KEY=YOUR_NUMBEO_API_KEY
     ```

   - Start the backend server:

     ```
     npm run dev
     ```

   - The backend will start on `http://localhost:5000`.

3. **Set Up the Frontend**:

   - Navigate to the frontend folder:

     ```
     cd ../frontend
     ```

   - Install the required dependencies:

     ```
     npm install
     ```

   - Start the React development server:

     ```
     npm start
     ```

   - The frontend will be available at `http://localhost:3000`.

4. **Access the Application**:

   - Open `http://localhost:3000` in your browser to start using the Route Planner application.

## API Keys

The application uses several third-party APIs to provide functionalities like geocoding, weather data, and cost estimates. You need to sign up for these services and get API keys:

1. **Mapbox**: For geocoding and map services.
2. **OpenWeatherMap**: For weather data.
3. **Numbeo**: For cost-of-living and accommodation data.

Replace `YOUR_MAPBOX_API_KEY`, `YOUR_OPEN_WEATHER_MAP_API_KEY`, and `YOUR_NUMBEO_API_KEY` in the `.env` file with the actual keys you get from the services.

## Project Workflow

1. **Backend Setup**:
   - We started by building the backend using NodeJS and Express.
   - Set up various routes and controllers for location search, transportation, accommodation, and weather.
   - Configured the backend to handle API requests from the frontend.

2. **Frontend Setup**:
   - Built a React application to provide an interactive user interface.
   - Added core components such as `MapComponent`, `RoutePlanner`, and `Summary` to allow users to interact with the planner.
   - Integrated backend APIs to fetch data dynamically based on user input.

3. **Map Integration**:
   - Used Leaflet (via React Leaflet) to visualize maps and route markers.
   - Added the functionality for users to see different locations on the map.

4. **Deployment Considerations**:
   - This project can be deployed by hosting the backend (NodeJS) on a service like Heroku or AWS, and the frontend (React) on services like Netlify or Vercel.
   - Ensure environment variables are configured correctly for production.

## Future Improvements

- **User Authentication**: Add user login/signup functionality to allow users to save their routes.
- **Database Integration**: Store planned routes, user preferences, and historical data for personalized experiences.
- **Export as PDF/Image**: Allow users to export their planned routes and trip details.
- **Optimized Cost Calculation**: Integrate more detailed APIs for better cost estimation and real-time transport schedules.

## Contributions

Contributions are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is open-source and available under the MIT License.

## Contact

If you have any questions or suggestions, feel free to create an issue or contact me via email at hasan@can.biz.tr.

Thank you for using the Route Planner Application! 🚀