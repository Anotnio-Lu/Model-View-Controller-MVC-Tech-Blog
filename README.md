# Tech Blog - CMS-Style Blog Site

This project involves building a CMS-style blog site where developers can publish their blog posts and interact with other developers' posts through comments. The application follows the Model-View-Controller (MVC) paradigm and utilizes technologies such as Handlebars.js for templating, Sequelize as the ORM, and the express-session npm package for authentication. The deployed site will be hosted on Heroku.

## User Story
- AS a developer who writes about tech
- I WANT a CMS-style blog site
- SO THAT I can publish articles, blog posts, and my thoughts and opinions



## Acceptance Criteria
- GIVEN a CMS-style blog site
- WHEN I visit the site for the first time
- THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
- WHEN I click on the homepage option
- THEN I am taken to the homepage
- WHEN I click on any other links in the navigation
- THEN I am prompted to either sign up or sign in
- WHEN I choose to sign up
- THEN I am prompted to create a username and password
- WHEN I click on the sign-up button
- THEN my user credentials are saved and I am logged into the site
- WHEN I revisit the site at a later time and choose to sign in
- THEN I am prompted to enter my username and password
- WHEN I am signed in to the site
- THEN I see navigation links for the homepage, the dashboard, and the option to log out
- WHEN I click on the homepage option in the navigation
- THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
- WHEN I click on an existing blog post
- THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
- WHEN I enter a comment and click on the submit button while signed in
- THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
- WHEN I click on the dashboard option in the navigation
- THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
- WHEN I click on the button to add a new blog post
- THEN I am prompted to enter both a title and contents for my blog post
- WHEN I click on the button to create a new blog post
- THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
- WHEN I click on one of my existing posts in the dashboard
- THEN I am able to delete or update my post and taken back to an updated dashboard
- WHEN I click on the logout option in the navigation
- THEN I am signed out of the site
- WHEN I am idle on the site for more than a set time
- THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts



## Approach
To build the Tech Blog, we followed the Model-View-Controller (MVC) architectural pattern. We started by setting up the necessary directory structure and installing the required dependencies.

Next, we created the models using Sequelize and defined the relationships between them. This allowed us to structure the data for blog posts, users, and comments.

We implemented user authentication and session management using the express-session npm package. This ensured that users could sign up, log in, and log out securely.

For the views, we utilized Handlebars.js as the templating engine to render dynamic HTML content. We created templates for the homepage, login/signup forms, blog posts, and the dashboard.

The controllers were responsible for handling the routes and interacting with the models and views. We implemented the necessary routes for displaying blog posts, creating new posts, adding comments, updating posts, and deleting posts

## Completed tasks
Set up project structure and directories
Configured necessary dependencies (Handlebars.js, Sequelize, express-session)
Designed and implemented database models using Sequelize
Created routes and controllers for user authentication and blog post management
Developed routes and controllers for displaying blog posts, comments, and adding new comments
Implemented user authentication and session management
Utilized Handlebars.js for rendering dynamic content and templates
Thoroughly tested the application for functionality and interactions
Deployed the application to Heroku

## Conclusion
In conclusion, this project successfully builds a CMS-style blog site catering to developers who want to publish their articles and share their thoughts. Following the MVC architectural pattern, the application employs Handlebars.js as the templating engine, Sequelize as the ORM for database interaction, and express-session for authentication. By adhering to the acceptance criteria, users can create accounts, log in, create and manage blog posts, view and comment on posts, and enjoy a seamless user experience. The deployment to Heroku ensures accessibility of the blog site from anywhere. This project empowers developers to engage with the community by sharing their knowledge and opinions through an intuitive and user-friendly interface.

## Link

The below is a link to the deployed application: 

https://intense-caverns-81356.herokuapp.com/

## Authors

- [Anotnio Lu](https://github.com/Anotnio-Lu)


## License

This project is licensed under MIT License.
