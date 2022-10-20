The Pet Finder project is a web app that allows users to search for adoptable pets nationwide. It provides categories for 4 different types of pets, and an option to enter a specific city/state, or zip code.


How did I build it?

This web app was built using HTML/CSS and React JS via the build-react-app npm. The search results are fetched from the petfinder.com API which pulls data from 11,500 shelters across the nation in real time. These are real pets up for adoption.


What problem did I set out to fix?

The purpose of the project is to introduce people to local adoptable pets in a quick and simple manner. If the user is interested in a specific pet, they simply click/tap on the pet in question and a modal with all the available details provided by the API becomes available.

The user can then visit the unique pet page at the PetFinder website in which they can apply to adopt the pet.


What were some of the design decisions?

The user interface has a retro style and gives the app a fun look while being extremely functional. I downloaded a Figma template from Envato Elements and modified it to suit my needs in order to create the final design of the app.

The colors are bright and vibrant, and I stuck to the rule of using no more than 3 colors and 2 fonts for the entire app.


What packages and dependencies did I use?

I utilized the useContext, useRef, useState, and useEffect hooks in order to make this app functional with an appealing and engaging user interface.

I also utilized the ErrorBoundary package to manage errors in the app, which keeps the app from crashing if the user enters an invalid location.


What did I learn?

The main lessons I took away from this build are as follows:

1. React doesn't handle errors like vanilla JS, namely the ".catch" method.

It won't catch errors like that so you have to find a work around. What React does is it throws the error on the console (the annoying red highlighted text), but the page goes blank, so the end user doesn't know what to do and the only solution is to reload the page.

For example... if the user enters an invalid location, that’s an error that I cannot predict and it's bound to happen. The solution could be using a class component, and implementing the componentDidCatch() or static getDerivedStateFromError() methods.

However, I did not want to use a class component mainly because we're trying to veer away from class components altogether. Instead, I used a package called ErrorBoundary which was easy to implement. Not only does it catch the error, but it lets you take corrective action when the error occurs, and it doesn't stop the page from rendering.

2. Context is an incredible tool to pass data to and from components, which makes things much easier to build without the limitations of props.

3. If you have multiple pages or components that need to be conditionally rendered, ReactRouter is a very powerful tool. However, it's not always needed and if you just have one component that needs to switch back and forth, you can always utilize the useState hook.


What will I do different next time?

One thing that I plan to do in future projects is to refactor as I go. It’s kinda like when you cook a big meal and you let the pots and utensils build up in the sink. You have a big mess at the end of the meal and if you just take a few minutes every now and then to clean as you go, the mess is a lot more manageable.

Refactoring as I go is something I will always do from this point forward.

If you think I’m a good fit for your company, please be sure to reach out via the contact form on my website, where you can also download my resume or find me on LinkedIn.
