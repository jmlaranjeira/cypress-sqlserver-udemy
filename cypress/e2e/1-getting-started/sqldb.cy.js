/// <reference types="cypress" />

context('SQL DB test', ()=> {

    it('Database Interaction', () => {

        cy.sqlServer('Select * from Persons').then((result) => {
            console.log(result)
        })

    })
})