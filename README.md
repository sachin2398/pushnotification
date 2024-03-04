# pushnotification
# Push Notification App

This repository contains a React-based web application for implementing push notifications using Firebase Cloud Messaging (FCM). The application utilizes React hooks and Firebase SDK to enable push notifications on web browsers.

# Step:1
![Screenshot 2024-03-03 010645](https://github.com/sachin2398/pushnotification/assets/113828281/5e860249-2340-4656-94e7-1dea73631b89)

# BackGround Notification On DESKTOP
![Screenshot (2967)](https://github.com/sachin2398/pushnotification/assets/113828281/0d7992d0-c2e3-4d4d-ad3f-65ec61bb88cf)

# BackGround Notification On MOBILE
![coffe2](https://github.com/sachin2398/pushnotification/assets/113828281/3e5a52ca-0420-4cca-934f-1ebdf7659c6f)

## Features

1. **Firebase Integration**: The application is integrated with Firebase for push notification services. Firebase provides a robust platform for sending notifications across various platforms, including web browsers.

2. **Token Generation**: Upon user permission, the application generates a unique token using Firebase Messaging, allowing the server to send push notifications to the client.

3. **Real-time Notifications**: The application uses `react-hot-toast` to display real-time notifications to the user whenever a push notification is received. Notifications are triggered both when the app is in the foreground and background.

4. **Service Worker Integration**: A service worker is registered within the application to handle background notifications. This ensures that notifications are delivered even when the application is not actively running in the foreground.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install dependencies using npm or yarn:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. Configure Firebase:

   - Create a Firebase project on the Firebase Console (https://console.firebase.google.com/).
   - Obtain your Firebase configuration details, including the API key, messaging sender ID, and project ID.
   - Replace the Firebase configuration details in `src/App.js` and `public/firebase-messaging-sw.js` with your own configuration.

5. Run the application:

   ```bash
   npm start
   ```

   This command will start the development server and launch the application in your default web browser.

## Usage

1. Upon launching the application, users will be prompted to grant permission for receiving push notifications.

2. Once permission is granted, a unique token is generated for the user, allowing the server to send notifications to the client.

3. Notifications will be displayed in real-time using `react-hot-toast` whenever a push notification is received.

4. The service worker registered in the background ensures that notifications are delivered even when the application is not actively running in the foreground.


# [Demo](https://drive.google.com/file/d/1MdH1mzxLr67eGrnzW1sRnY97WqGwP6c1/view?usp=sharing)




## Credits

- This project utilizes the following libraries and frameworks:
  - React (https://reactjs.org/)
  - Firebase (https://firebase.google.com/)
  - react-hot-toast (https://react-hot-toast.com/)

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

## Author

sachin2398

Feel free to contribute, report issues, or suggest improvements by creating pull requests or raising issues in the repository.
