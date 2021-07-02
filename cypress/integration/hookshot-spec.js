describe('Hookshot - Entry Page', () => {

  const baseUrl = 'http://localhost:3000';

  before(() => {
    cy.visit(baseUrl)
  })

  it('Should load the entry page', () => {
    cy.get('.entry-page').should('be.visible')
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('.app').should('have.css', 'background-image', 'url("http://localhost:3000/static/media/pixel-forest.74c9af66.jpeg")')
  });
  
  it('Should display app banner with all expected elements', () => {
    cy.get('.banner').should('be.visible')
    cy.get('.app-title').should('contain', 'HOOKSHOT')
    cy.get('.app-subtitle').should('contain', 'FIELD GUIDE')
  });

  it('Should allow the user to click app title to refresh the page', () => {
    cy.get('.banner').find('a').click()
      .url().should('eq', 'http://localhost:3000/')
  });

  it('Should render the location drop down component', () => {
    cy.get('.dropdown-section').should('contain', 'Select your location...')
  });

  it('Should display dropdown menu options on click', () => {
    cy.get('.select').click()
    cy.get('option').should('have.length', 33)
  });

  it('Should render Press Start button component', () => {
    cy.get('.enter-btn-section').should('contain', 'PRESS START')
  });

  it('Should prevent button click from triggering page change without a location selected', () => {
    cy.get('.enter-btn').should('be.disabled')
  });

  it('Should allow the user to click the button after selecting location', () => {
    cy.get('select').select('Death Mountain')
      .get('.enter-btn').click()
      .url().should('eq', 'http://localhost:3000/home/Death+Mountain')
  });

});

describe('Hookshot - Main Page', () => {

  const baseUrl = 'http://localhost:3000';

  beforeEach(() => {
    cy.visit(baseUrl)
      .get('select').select('Death Mountain')
      .get('.enter-btn').click()
  })
  
  it('Should load the main page with the selected location as the path', () => {
   
    cy.get('.main-page').should('be.visible')
      .url().should('eq', 'http://localhost:3000/home/Death+Mountain')
      .get('.app').should('have.css', 'background-image', 'url("http://localhost:3000/static/media/pixel-forest.74c9af66.jpeg")')
  });
  
  it('Should display welcome banner with all expected elements', () => {
    cy.get('.banner').should('be.visible')
    cy.get('.welcome-message').should('contain', 'WELCOME TO HYRULE')
    cy.get('.welcome-location').get('h2').should('contain', 'current location')
    cy.get('.welcome-location').get('h3').should('contain', 'Death Mountain')
  });

  it('Should allow the user to click app title to return to the entry page', () => {
    cy.get('.banner').find('a').click()
      .url().should('eq', 'http://localhost:3000/')
  });

  it('Should display \'goal buttons\' container with expected elements', () => {
    cy.get('.goal-container').should('be.visible')
    cy.get('.goal-btn-container').should('be.visible')
      .find('span').should('contain', 'choose your adventure!')
    cy.get('.goal-btn').should('have.length', 6)
  });
})

describe('Hookshot - Results Page', () => {

  const baseUrl = 'http://localhost:3000';

//   beforeEach(() => {
//     cy.fixture('mock-category-data.json')
//       .then(mockData => {
//         cy.intercept('GET', 'https://botw-compendium.herokuapp.com/api/v2/category/equipment', {
//           statusCode: 200,
//           delay: 100,
//           body: mockData
//         })
//       })
    
//     cy.visit(baseUrl)
//       .get('select').select('Death Mountain')
//       .get('.enter-btn').click()
//       .get('.goal-btn').eq(2).click()
//   })

//   it('Should be able to click a button to load the results page with the selected category and location as the path', () => {
//     cy.get('.results-page').should('be.visible')
//     cy.url().should('eq', 'http://localhost:3000/location/Death+Mountain/category/equipment')
//     cy.get('.app').should('have.css', 'background-image', 'url("http://localhost:3000/static/media/pixel-forest.74c9af66.jpeg")')
//   });

//   it('Should display welcome banner with all expected elements', () => {
//     cy.get('.banner').should('be.visible')
//     cy.get('.welcome-message').should('contain', 'WELCOME TO HYRULE')
//     cy.get('.welcome-location').get('h2').should('contain', 'current location')
//     cy.get('.welcome-location').get('h3').should('contain', 'Death Mountain')
//   });

//   it('Should allow the user to click app title to return to the entry page', () => {
//     cy.get('.banner').find('a').click()
//       .url().should('eq', 'http://localhost:3000/')
//   });

//   it('Should display an \'item cards\' section with all matches for that location and category', () => {
//     cy.get('.results-grid').get('.item-list')
//       .get('.item-card').should('have.length', 1)
//   });

//   it('Should display all expected elements within each \'item card\'', () => {
//     cy.get('.item-card').get('.image-container').get('img')
//       .should('have.attr', 'src', 'https://botw-compendium.herokuapp.com/api/v2/entry/royal_guard\'s_spear/image')
//     cy.get('.item-card').get('.item-info')
//       .get('.item-name').should('contain', 'royal guard\'s spear')
//     cy.get('.item-variables').find('h3').eq(0).should('contain', 'Common Locations')
//     cy.get('.item-variables').find('h3').eq(1).should('contain', 'Attack')
//     cy.get('.item-variables').find('h3').eq(2).should('contain', 'Defense')
//     cy.get('.item-variables').find('p').eq(0).should('contain', 'unknown')
//     cy.get('.item-variables').find('p').eq(1).should('contain', 32)
//     cy.get('.item-variables').find('p').eq(2).should('contain', 0)
//   });

//   it('Should display a message for the user while the item image is loading', () => {
//     cy.get('.loading').should('be.visible')
//   });

//   it('Should allow the user to click app title to return to the entry page', () => {
//     cy.get('.banner').find('a').click()
//       .url().should('eq', 'http://localhost:3000/')
//   });


})

