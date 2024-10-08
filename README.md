## Black stars Football Club
Black stars FC a dedicated platform for Black stars fc fans  to stay updated with the latest news, player signings, and view the team's gallery. This project is built using modern web development technologies and practices, with Firebase for real-time data management and Docker for containerization.



## Features


* Latest News: Stay informed with up-to-date news about the club.
* Player Signings: Track new signings, transfers, and squad updates.
* Photo Gallery: Browse through the gallery to view images from matches, training sessions, and fan events. Photos are stored and managed through Firebase.

## Tech stack
**Frontend:**

React - A JavaScript library for building user interfaces.
Tailwind CSS - A utility-first CSS framework for custom styling.

**Backend:**

Firebase - Provides authentication and real-time database services.

## Containerization:

Docker: The application is containerized using Docker to ensure consistency across development, testing, and production environments.

## Setup

1. Clone this Repository: <br/>
`git clone:https://github.com/alexander784/Footing.git`

2. Install Dependencies: Ensure you have Node.js installed, then run: <br/>
`npm install`

3. Configure Firebase:

     <p>Create a Firebase project in the Firebase Console.</p>
     <p>Obtain your Firebase configuration details and create a .env file in the root directory with the following variables:</p>

    `REACT_APP_API_KEY=your_api_key`<br/>
    `REACT_APP_AUTH_DOMAIN=your_auth_domain`<br/>
    `REACT_APP_PROJECT_ID=your_project_id`<br/>
    `REACT_APP_STORAGE_BUCKET=your_storage_bucket`<br/>
    `REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id`<br/>
    `REACT_APP_APP_ID=your_app_id`
4. Run the app locally.
     `npm start`


5. Running with Docker:
 * Ensure Docker is running.
 * Build Docker image:
   `docker build -t football-club-website .`
   * Run Docker container:
   `docker run -p 3000:3000 football-club-website`
The site should be accessible at `http://localhost:3000`

## Usage
Once the app is up and running, users can navigate through different sections of the website:</br>

* `News:` View the latest updates about your favorite club.
* `Gallery:` Access the gallery to view the latest images, stored in Firebase.
* `Signings:` Keep track of the team's latest signings and squad changes.

## Contributing
<p>Contributions are welcome! Please feel free to submit a pull request or open an issue for discussion.</p>


## License 
This project is licensed under the MIT License.



