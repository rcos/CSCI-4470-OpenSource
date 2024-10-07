# Web Development Lab

## Checkpoint 0: Complete Demo

Complete the demo from the lecture. Follow the steps in the lecture and get to the point where the demo reflects your website

## Checkpoint 1: Add Edit and Delete functionality

For the first checkpoint, we will be adding the ability to edit and delete notes.

### 1.1) Backend Setup

Add API endpoints for editing and deleting. Refer to lecture slide 41 for setting up endpoints.
The Edit endpoint should take a title and a description in the body similar to the add note endpoint("/new"). It should also take a noteid as a parameter.

Parameter ex: 

```
Route path: /user/:userId
Request URL: http://localhost:3000/user/42
req.params: {"userId": "42"}
``` 

You can then get a note `User.findById(req.params.noteId)`. 

The Delete endpoint should just have a noteid as a parameter. For additional help with Mongoose models see: https://mongoosejs.com/docs/api/model.html

### 1.2) Frontend Setup

Get icons from: https://iconscout.com/unicons/free-line-icons. I recommend using the edit icon for the edit function and trash-alt for the delete function but it is ultimately your choice. It should resemble the functionality. 

Place both icons on each rendered note and on click of the icon they should call the respective API endpoint. Refer to slide 48 for sending requests from the front end. 

## Checkpoint 2: Create Login/Signup Page

For this checkpoint, you will be creating a Login and Signup page along with its backend functionalities.  

### 2.1) Backend Setup

1. Install necessary dependencies

- `npm i passport passport-local`
- `npm i passport-local-mongoose`
- `npm i express express-session`

2. Update Imports

- `const passport = require('passport');`
- `const localStrategy = require('passport-local');`
- `const passportLocalMongoose = require('passport-local-mongoose');`

3. Setup Middleware and Auth Middleware

- `app.use(require("express-session")({ secret: "web development", resave: false, saveUninitialized: false }));`
- `app.use(passport.initialize());`
- `app.use(passport.session());`

4. Setup Users Schema (See Notes schema for reference)

5. Define Users Model (See Notes model for reference)

6. Initalize passport using the user model 

- `passport.use(new localStrategy(User.authenticate()));`
- `passport.serializeUser(User.serializeUser());`
- `passport.deserializeUser(User.deserializeUser());`

7. Create endpoints for registering and logging in (Use the same convention as used for adding a note)

8. Test Endpoints using Postman or any other API testing platform (See Lecture slide 42)

### 2.2) Frontend Setup

*See github for lab css

1. Install Dependencies 

- `npm i react-router-dom`

2. Rename App.js to Notes.js

3. Create Signin.js

The sign-in screen should be able to sign in and switch to the signup page. See the link for help on how to use react-router: https://www.geeksforgeeks.org/reactjs-usenavigate-hook/. 

4. Create Signup.js

The sign-up screen should be able to create an account and switch to the sign in page. 

5. Update index.js as follows

``` 
    export default function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignIn />}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/notes" element={<Notes />} />
        </Routes>
        </BrowserRouter>
    );
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <App/>
    );
```

## Checkpoint 3: Customize your website

Add your own "flare" to your webpage using any resources you may find on the web. Your changes should be more in-depth than simply changing colors and fonts. 