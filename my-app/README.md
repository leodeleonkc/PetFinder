## How I worked on this project

My goal was to simulate a professional work environment.

- I built this site based on a Envato Elements Figma design: <a href="https://elements.envato.com/pet-shop-landing-page-KMSMGFY">Design File</a>
- I worked with tasks on a Notion project management board: <a href="https://www.notion.so/Pet-Adoption-WebApp-5860b93ea2754603918fa4e251d7f09a">Tasks Board</a>
- I used GitHub desktop to for version control.

## How to navigate this project

 - `useContext` stateful logic: <a href="https://github.com/leodeleonkc/PetFinder/blob/51008e6fff2170b550ca9ee18aaab1bdcb3cc80d/my-app/src/Fetch.js">Sample Code</a>
 - Responsive CSS: <a href="https://github.com/leodeleonkc/PetFinder/blob/51008e6fff2170b550ca9ee18aaab1bdcb3cc80d/my-app/src/hero.css">Sample Code</a>
 - The web app fetches data from the PetFinder API: Examples for <a href="https://github.com/leodeleonkc/PetFinder/blob/51008e6fff2170b550ca9ee18aaab1bdcb3cc80d/my-app/src/Fetch.js">the request</a> and <a href="https://github.com/leodeleonkc/PetFinder/blob/51008e6fff2170b550ca9ee18aaab1bdcb3cc80d/my-app/src/Components/PetDisplay.js">data transformation</a>.
  - I utilized separete CSS files for each component, and I also added other design features, such as animation of certain elements depending on scroll position: <a href="https://github.com/leodeleonkc/PetFinder/blob/51008e6fff2170b550ca9ee18aaab1bdcb3cc80d/my-app/src/Components/Hero.js">Sample Code</a>
 
 ## Why I built the project this way
 
 - I wanted to demonstrate a case for the `useContext` hook in which data is passed to and from components, namely the PetDisplay and Pet components which utilize the data to display search results and then individual pets.
 
 - I also wanted to demonstrate `useState` for displaying sections conditionally without the need for Route.
 
 
 ## If I had more time I would change this
 
 - Add an option to "favorite" pets.
 - Add more testimonials and integrate a slider at the footer of the web app.
 - Refactor a lot more, especially parts like <a ref="https://github.com/leodeleonkc/PetFinder/blob/51008e6fff2170b550ca9ee18aaab1bdcb3cc80d/my-app/src/pet.css">this.</a>
 
 ## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

 
