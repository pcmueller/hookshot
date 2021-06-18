# <-- H   O   O   K   S   H   O   T -->
*a digital field guide for Hyrulian exploration*
* [Deployed Page](https://hookshot-app.herokuapp.com)
* [Project Specifications](https://frontend.turing.edu/projects/module-3/niche-audience.html)

![](https://media.giphy.com/media/FKmMmOrqljFxf0GlpQ/giphy.gif)

## Table of Contents
* [Description](#description)
* [Features](#features)
* [Installation](#installation)
* [Demonstration](#demonstration)
* [Developer](#developer)
* [Technologies](#technologies)

## Description

HOOKSHOT is a web app for the aspirant Zelda player - for those who yearn to disappear into the vast world of *Hyrule* but don't quite have the time to do so.  By allowing a user to choose a specific "goal" in Nintendo's *Breath of the Wild* game, this interactive data rendering tool provides even the busiest would-be gamer with the specific information needed to dabble and explore as efficiently as possible.    

## Features

### User Flow
* A catered, "location-specific" experience: immediately on page launch, a user can select any location from the _BOTW_ game map.
* "_Choose Your Adventure_": once a location has been selected, a user can then click any of six different "goal" buttons, each representing a different category of game data: **creatures**, **equipment**, **treasure**, **monsters**, **materials**, and a "*Roll the Dice*" option to randomly select one of the five.
* Custom results: once a "goal" has been selected, the user is presented with all data that matches both the selected location and selected goal. These matches are used to build and display individual "item cards", each with it own unique stats.
* All bases covered: if no matches are found, the user is presented with alternative results using the same "goal" preference but from different locations around the map!

### Development & Design
* RESTful API fetching from the [_Hyrule Compendium API_](https://gadhagod.github.io/Hyrule-Compendium-API/#/)
* Retro 8-bit UI design using the [NES.css](https://nostalgic-css.github.io/NES.css/) CSS framework.
* User accessibility: displayed in the browser, this project scores **100** on the Chrome _Lighthouse_ test
* Responsive design: application can be viewed proportionately on devices of various sizes, ranging from mobile screen to desktop monitor.
* Test-Driven Development: utilizes Cypress testing for various UI flows.
* Developer-friendly file structure: project repository was built using an intuitive, modular React architecture.

## Installation

1. Clone this repo using:
  * `git clone`  `https://github.com/pcmueller/Hookshot.git`
2. `cd` into your cloned directory
3. Run `npm install`
4. Run `npm start`

#### Learn More

You can learn more about creating apps using `React` and `JSX` here: [Create React App Documentation](https://create-react-app.dev/docs/getting-started/)

#### Cypress Testing

1. Once the app is set up locally, from the root directory, install `Cypress`
  * Run `npm install cypress --save-dev`
2. To open and run the tests
  * Run `npx cypress open`

## Walkthrough

1. On initial page load, the user is display presented with the option to select a location from a dropdown menu, which is required to proceed via button submission.

2. After submitting a location choice, the user is then taken to the main navigation page, where they are welcomed to the selected location and presented with six "goal" buttons to choose from. 

3. Once any of these buttons has been clicked, the user is rerouted to a results page, which displays all matching items/creatures for that location and category.  Each of these items is presented in the form of a custom "card" that includes the item name, image (when available), "common locations" in which the item can be found, and a brief description, as well as any proprietary data specific to that category.  

4. If at any time a user wants to return to the home page to change their selected location, all they have to do is click the "welcome message" on any of the page displays!

#### Demonstration

![](https://media.giphy.com/media/saXyE2XxvF8MHUOZCN/giphy.gif)

## Project Goals & Requirements

As the final assignment of the module, this project required that we use many of the technologies and methodologies we’ve been working with over the previous six weeks, in order to demonstrate mastery of the following:
- React
- Router
- Asynchronous JavaScript
- End-to-end testing using Cypress
- Create personas and user stories to describe your target audience.

## Future Iterations
* _Item/Creature Searching_: My initial wireframe for this project included a search bar on the "Navigation Page" view (above the "Choose Your Adventure" container), and in the initial build I completed the basic JSX and CSS for this.  I didn't have time to add the actual data fetching/filtering functionality, but this feature should be coming in the near future!
* _Theme-Consistent UI_: While I'm very happy with the layout and design of this project, I'd like to further dig into the specific _Breath of the Wild_ "identity" by adding more icons, background images, and other design elements that tie-in directly to this Zelda-centric theme.

## Technologies

<table>
    <tr>
        <td>JavaScript</td>
        <td>HTML5</td>
        <td>Sass</td>
        <td>NES.css</td>
        <td>React</td>
        <td>Hooks</td>
        <td>Router</td>
        <td>NPM</td>
        <td>Cypress</td>
    </tr>
    <tr>
        <td><img src="https://github.com/tkswann2/tech-logos/blob/master/jslogo.png" alt="javascript" width="50" height="auto" /></td>
        <td><img src="https://github.com/tkswann2/tech-logos/blob/master/html5.png" alt="HTML" width="50" height="auto" /></td>
        <td><img src="https://github.com/tkswann2/tech-logos/blob/master/sass.png" alt="Sass" width="50" height="auto" /></td>
        <td><img src="./src/assets/images/nes-css-logo.png" alt="NES.css" width="50" height="auto" /></td>
        <td><img src="https://github.com/tkswann2/tech-logos/blob/master/react.png" alt="react" width="50" height="auto" /></td>
        <td><img src="https://raw.githubusercontent.com/alDuncanson/react-hooks-snippets/master/icon.png" alt="Hooks" width="50" height="auto" /></td>
        <td><img src="https://user-images.githubusercontent.com/73092355/119361186-9d808b80-bc68-11eb-97ee-05bde2700716.png" alt="router" width="50" height="auto" /></td>
        <td><img src="https://github.com/tkswann2/tech-logos/blob/master/npm.png" alt="NPM" width="50" height="auto" /></td>
        <td><img src="https://user-images.githubusercontent.com/73092355/119361263-b5f0a600-bc68-11eb-9f41-8e10aa013e7a.png" alt="Cypress" width="50" height="auto" /></td>
    </tr>
</table>


## Developer

<table>
    <tr>
        <td> Peter Muellerleile <a href="https://github.com/pcmueller">GH</td>
    </tr>
    </tr>
        <td><img src="https://avatars.githubusercontent.com/u/51062974?v=4" alt="P. Muellerleile" width="125" height="auto" /></td>
    </tr>
</table>

Contact me!
* 🖇 &nbsp; [LinkedIn](http://www.linkedin.com/in/pcmueller)
* 📫 &nbsp; pmuellerleile@gmail.com
