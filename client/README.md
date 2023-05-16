# Infinity-Inspiration--ReactJS
This is a repository for a project defense to Software University ReactJS course.


### About "Infinity Inspiration" web app
 
 
"Infinity Inspiration" is a web application for sharing curious information. Visitors can learn from the great thinkers, explore the world’s biggest questions, find ideas, which can inspire or challenges, which can change the way of their think. Also if they sign up in application, can post information, that they think can be interesting for other users and like or comment other's posts.

         -----------
 
The client side is a single page app, built with ReactJS, following the React development concepts. The application have responsive design, аll components use CSS modules.
Client-side routing, error handling and data validation are implemented.
The main files in the application are index.js and App.js

	   -----------
 
Back4App, one of the popular BaaS (Back-end as a Service) providers is used for backend purposes and storage. More information about Back4App could be found here -(https://www.back4app.com/).  

         -----------
 
 The application consist of public information accessible for all users like catalog and details.
 
 Any activities like create (edit, delete) post, like or comment require authentication.
 
 
### Functionality

User Register (on Register page)
 
   - Register a new user by providing username, email and password.
 
User Login (on Login page)
 
   - Login in with email and password.
 
User Logout (in navigation under showed username)
 
   - Logout from the application. 
 
Home page

   - In second section shown first five persons from Persons page.
   - In the last section before footer showed the last six posts.

Persons page

   - Show all persons and can open details page for every one.
   - Also in search field on the top of the page can find person by provide full name.
 
Catalog page 
 
   - Show all posts, can open details for each one and (if login in) can create post.
 
Details pages
 
   - Show person details. (on Persons page)
   - Show post details and (if login in) can like (dislike) it. Also owners can edit and delete their posts. (on Catalog page)
 
Create page
 
   - Create a new post entry and save it to the database (only for authenticated user).
 
Edit page
 
   - Edit existing post entry and save it to the database (only for owner user).
 
Delete post
 
   - Remove existing post entry from the database (only for owner user).
 
 
 ### Getting started
 
 1. Install all dependencies - npm i
 
 2. Start the application with  'npm start' in the client directory.