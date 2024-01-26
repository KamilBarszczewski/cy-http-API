/// <reference types="cypress" />

describe('POST httpbin with body', () => {
    const bodyData = {
        bodyKey: "bodyValue"
    };

    const request = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        failOnStatusCode: false
    };

    it('complex POST test', () => {
        cy.request(request).then(response => {
            assert.equal(200, response.status);
            assert.notStrictEqual(bodyData, response.body.data);
        });
    });
});

describe('POST - httpbin with Body', () => {
    const bodyRequest = {
        userName: "Test"
    }

    const request = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        body: bodyRequest,
        failOnStatusCode: false
    }

    it('resposne and body should be correct', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            const responseData = JSON.parse(response.body.data)

            assert.equal(expectedStatus, currentStatus);
            assert.equal(bodyRequest.userName, responseData.userName)
            assert.notStrictEqual(bodyRequest, response.body.data)
        });
    });
});