## Covid 19 APP / Project 2

This app is my second project in the software engineer Program at Per Scholas. 

## App Functions and building process

This is a coronavirus application built in ReactJs, styled with TailwindCSS and deployed to Github Pages.
 
The application uses the Coronavirus COVID19 API which is available at [https://corona.lmao.ninja/].

The main link we will use to fetch our JSON data is [https://corona.lmao.ninja/v2/countries] and we will fetch our data using Axios which is an npm package that you can use in place of the default fetch API in the browser.
##
Inspired by the homework we did in class "STARWARS" where we fetch our API and display it like cards on our browser I built this app using VS CODE.

I started by using create-react-app in my project by running "npx create-react-app", deleted some of the files we are not intending on using and added new components for our projects.

We used useState and useEffect to store our fetched data from API into variables. 
We are using TailwindCSS for this application which was extremely useful in this case but also was the most challenging part of our project. Because the syntax is different from what i'm used to i had to pin the documentation from TailwindCSS website in one screen for quick access since i was using it every 5 minutes literally.

To use TailwindCSS we've imported the stylesheet link [https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css] into our index.html file. Another way of importing the stylesheet would be to type in your terminal: "npm install -D tailwindcss" and "npx tailwindcss init". 






