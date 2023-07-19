# Newsletter Web App

## Overview

This repository presents you with a newsletter web app. The web app allows users to sign up for a newsletter by providing their first name, last name, and email address. The app stores subscribers' data on the Mailchimp platform using their API.

## Website URL

The web app is published and can be accessed at: [Newsletter Web App](https://newsletter007.onrender.com/)

## Technologies Used

- Node.js with Express framework for the backend
- HTML, CSS, and Bootstrap for the frontend
- Mailchimp API for storing subscriber data

## Getting Started

To run the web app locally or deploy it, follow these steps:

1. Clone this repository to your local machine.
2. Install Node.js and npm (Node Package Manager) if you haven't already.
3. Navigate to the project directory in the terminal or command prompt.
4. Install the required dependencies by running the following command:

```npm install```

5. Open the `app.js` file and replace `"your API Key"` in the `options` object with your actual Mailchimp API key.
6. Save the changes to the `app.js` file.

## Running the App Locally

1. Open the terminal or command prompt.
2. Navigate to the project directory.
3. Start the server by running the following command:

```node app.js```

4. The server should start running, and you should see the message "Server is running on port 3000."
5. Open your web browser and go to `http://localhost:3000/` to access the newsletter signup page.

## Usage

1. On the newsletter signup page, enter your first name, last name, and email address.
2. Click the "Sign Up!" button to submit your information.
3. The app will use the Mailchimp API to store your data in the designated mailing list.
4. If the submission is successful, you will be redirected to the success page. Otherwise, you will be redirected to the failure page.

## Folder Structure

- `public`: Contains static files such as images and CSS.
- `app.js`: The backend server code responsible for handling the form submission and interacting with the Mailchimp API.
- `signup.html`: The HTML template for the newsletter signup page.
- `success.html`: The HTML template for the success page shown after successful signup.
- `failure.html`: The HTML template for the failure page shown if there's an error during signup.
- `style.css`: The CSS file that provides custom styling to the HTML templates.

## Sample Images

![Image 1](public/Images/img1)

![Image 2](public/Images/img2)

![Image 3](public/Images/img3)

![Image 4](public/Images/img4)

![Image 5](public/Images/img5)

![Image 6](public/Images/img6)

## Author

This web app is created by [pantharshit007](https://github.com/pantharshit007). Feel free to contact me if you have any questions or suggestions!

## Disclaimer

Please note that this project uses a Mailchimp API key that has been revoked (the provided API key in the code). Make sure to replace it with your valid API key to enable successful signups and data storage.
