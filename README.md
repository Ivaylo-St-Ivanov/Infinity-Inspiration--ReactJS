# Infinity-Inspiration--ReactJS
This is a repository for a project defense to Software University ReactJS course.


### About "Infinity Inspiration" web app
 
 
"Infinity Inspiration" is a web application for sharing of exciting informations. Visitors can learn from various great thinkers and explore the world’s biggest questions. They also can find here ideas, which can inspire or challenge them and possibly change the way of their thoughts. If they sign up within the application, they can post informations, that they think it can be interesting for other users. Here they can like or comment posts of other users.

         -----------
 
The client side of the app is a single page app, built with ReactJS and it is following the React development concepts. The application have responsive design and аll components use CSS modules.
Client-side routing, error handling and data validation are implemented.
The main files in the application are index.js and App.js

	   -----------
 
Back4App is one of the popular BaaS (Back-end as a Service) providers, which is used here for the backend purposes and for the storage. More informations about Back4App can be found here: (https://www.back4app.com/).  

         -----------
 
 The application contains public information, which is accessible for all of the users, for example catalog and details.
 
 Any activities require authentication, for example: creating a post (edit, delete), or giving a like or comment.
 
 
### Functionality

User Registration (on Registering page)
 
   - Registering a new user is possible by providing username, email and password.
 
User Login (on the Login page)
 
   - Login is possible with email and password.
 
User Logout (in the navigation under the shown username)
 
   - Logout from the application.
 
Home page

   - In the second section, showing the first five persons from the persons page.
   - In the last section, before the footer, showing the last six posts.

Persons page

   - It’s showing all persons and it can open the details page for everyone.
   - Through the search field on the top of the page persons can be find by providing the full name.
 
Catalog page 
 
   - It’s showing all posts with their details, which can be opened separately and (if logged) a post can be created.
 
Details pages
 
   - It’s showing person details. (on the Persons page)
   - It’s showing post details and (if logged) a like (or a dislike) can be done. Also the owners of posts can edit and delete their own posts. (on the Catalog page)
 
Create page
 
   - A new post entry can be created and saved into the database (only for authenticated users).
 
Edit page
 
   - Existing posts can be edited and saved into the database (only for owner users).
 
Delete post
 
   - Removing an existing post entry from the database (only for owner users).
 
 
### Getting started
 
 1. Install all dependencies – 'npm i'
 
 2. Start the application with  'npm start' in the client directory.

### Author’s note

All code, such as HTML and CSS, is created completely (self developed) by the author.

### Copyright and Author

Ivaylo Ivanov