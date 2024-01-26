/// <reference types="cypress" />

describe('GET - API Accept-Languages', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/headers',
        headers: {
            "Accept-Language": "My-test-user-language"
        },
        failOnStatusCode: false
    }

    it('resposne and Accept-Language should be correct', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            const currentLangValue = response.requestHeaders['Accept-Language']

            assert.equal(expectedStatus, currentStatus);
            assert.equal('My-test-user-language', currentLangValue);

            cy.log(currentLangValue);
            cy.log(JSON.stringify(response.requestHeaders));
        });
    });
});

describe('GET - API Host', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/headers',
        headers: {
            "Host": "My-test-host"
        },
        failOnStatusCode: false
    }

    it('resposne and Host should be correct', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            const currentHostValue = response.requestHeaders['Host']

            assert.equal(expectedStatus, currentStatus);
            assert.equal('My-test-host', currentHostValue);

            cy.log(currentHostValue);
            cy.log(JSON.stringify(response.requestHeaders));
        });
    });
});

describe('GET - custom header', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/headers',
        headers: {
            "customHeader": "customValue"
        },
        failOnStatusCode: false
    }

    it('resposne and custom header should be correct', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            const currentHeaderValue = response.requestHeaders.customHeader

            assert.equal(expectedStatus, currentStatus);
            assert.equal('customValue', currentHeaderValue);

            cy.log(response.requestHeaders);
            cy.log(JSON.stringify(response.requestHeaders.customHeader));
        });
    });
});

describe('GET - API User Agent', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/headers',
        headers: {
            "User-Agent": "My-test-user-agent"
        },
        failOnStatusCode: false
    }

    it('resposne and user agent should be correct', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            const currentUserAgentValue = response.requestHeaders['User-Agent']

            assert.equal('My-test-user-agent', currentUserAgentValue);
            assert.equal(expectedStatus, currentStatus);

            cy.log(JSON.stringify(response.requestHeaders));
        });
    });
});