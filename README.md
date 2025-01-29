# Express.js Unexpected Empty req.body in GET Request

This repository demonstrates a common error in Express.js applications where developers mistakenly attempt to access the `req.body` object in a GET request.  GET requests do not typically send data in the request body.  This example shows the problem and its solution.

## Bug

The `bug.js` file contains code that attempts to access `req.body` within a GET request handler.  This will always result in an empty object being logged, which might not be what the developer intended.

## Solution

The `bugSolution.js` file demonstrates the correct way to handle data in GET requests, typically using query parameters accessible via `req.query`.