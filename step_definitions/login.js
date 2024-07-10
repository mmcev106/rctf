const { Given } = require('@badeball/cypress-cucumber-preprocessor')

/**
 * @module Login
 * @author Adam De Fouw <aldefouw@medicine.wisc.edu>
 * @example I (attempt to) (am still) (login) (logged in) to REDCap with the user {string}
 * @param {string} user - the user we are logging in as (e.g. 'Test_User1' or 'Test_Admin' as specified in the cypress.env.json file)
 * @description Logs in to REDCap using a seeded user type.
 */
Given("I {loginTypes} to REDCap with the user {string}", (login_type, user) => {
    if(login_type === 'am still logged in') {
        cy.set_user_type(user)
        cy.fetch_login()
    } else if(login_type === 'attempt to login' || login_type === 'successfully login'){
        cy.logout()
        cy.set_user_type(user)
        cy.fetch_login(false)
    } else {
        cy.logout()
        cy.set_user_type(user)
        cy.fetch_login()
    }
})

/**
 * @module Login
 * @author Adam De Fouw <aldefouw@medicine.wisc.edu>
 * @example I logout
 * @description Logs a given user out of REDCap
 */
Given("I logout", () => {
    cy.logout()
})