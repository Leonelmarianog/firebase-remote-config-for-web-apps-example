# Firebase Remote Config for Web Apps

An example of how to implement Firebase Remote Config in web applications.

# Running Locally

1. Run `npm install` to install the project and its dependencies.

2. Fill `.env` file with your Firebase App credentials. For this you need to [Create a Firebase App](https://firebase.google.com/docs/web/setup).

3. Go to your Firebase App console, select "Remote Config" from the left side tab and create a "welcome_message" parameter and set a value for it.

4. Run `npm start` to run the app.

If everything went fine, you will see the parameter's value display in the webpage, otherwise, you will see a default value already set by me. Feel free to play with it!.
