## How I worked on this project

My goal was to simulate a professional work environment.

- I built this site based on a Envato Elements Figma design: <a href="https://elements.envato.com/pet-shop-landing-page-KMSMGFY">Design File</a>
- I worked with tasks on a Notion project management board: <a href="https://www.notion.so/Pet-Adoption-WebApp-5860b93ea2754603918fa4e251d7f09a">Tasks Board</a>
- I used GitHub desktop to for version control.

## How to navigate this project

 - useContext stateful logic: <a href="https://github.com/leodeleonkc/PetFinder/blob/51008e6fff2170b550ca9ee18aaab1bdcb3cc80d/my-app/src/Fetch.js">Sample Code</a>
 - Responsive CSS: <a href="https://github.com/leodeleonkc/PetFinder/blob/51008e6fff2170b550ca9ee18aaab1bdcb3cc80d/my-app/src/hero.css">Sample Code</a>
 - The web app fetches data from the PetFinder API: Examples for <a href="https://github.com/leodeleonkc/PetFinder/blob/51008e6fff2170b550ca9ee18aaab1bdcb3cc80d/my-app/src/Fetch.js">the request</a> and <a href="https://github.com/leodeleonkc/PetFinder/blob/51008e6fff2170b550ca9ee18aaab1bdcb3cc80d/my-app/src/Components/PetDisplay.js">data transformation</a>.
  - I utilized separete CSS files for each component, and I also added other design features, such as animation of certain elements depending on scroll position: <a href="https://github.com/leodeleonkc/PetFinder/blob/51008e6fff2170b550ca9ee18aaab1bdcb3cc80d/my-app/src/Components/Hero.js">Sample Code</a>
 
 ## Why I built the project this way
 
 - I wanted to demonstrate a case for the useContext hook in which data is passed to and from components, namely the PetDisplay and Pet components which utilize the data to display search results and then individual pets.
 
 - I also wanted to demonstrate useState for displaying sections conditionally without the need for Route.
 
 
 ## If I had more time I would change this
 
 - Add an option to "favorite" pets.
 - Add more testimonials and integrate a slider at the footer of the web app.
 - Refactor a lot more, especially parts like <a ref="https://github.com/leodeleonkc/PetFinder/blob/51008e6fff2170b550ca9ee18aaab1bdcb3cc80d/my-app/src/pet.css">this.</a>
