# W03D02 CRUD with Express

### To Do
- [x] Review ExpressJS
- [x] Discuss REST (and RESTful routes)
- [x] Implement CRUD/BREAD over HTTP with Express
- [x] Use forms to submit HTTP requests
- [x] Practice debugging Express

### Express

A framework that lets us create routes and write/include middleware.

### CRUD / BREAD

**CRUD** = **C**reate **R**ead **U**pdate **D**elete

**BREAD** = **B**rowse **R**ead **E**dit **A**dd **D**elete

### Routes

A route is made up of a **VERB** and a **PATH**.

Verbs: **GET**, **POST**, **PUT**, **PATCH**, **DELETE**

Path: `example.com`**/resource**, `example.com`**/resource/:id**

### REST - REpresentational State Transfer

REST means that the path that we are going to should represent the data being transferred.

An API that uses the REST convention is said to be RESTful.

RESTful routes look like:

* Browse: GET  /resource
* Read:   GET  /resource/:id
* Edit:   POST /resource/:id
* Add:    POST /resource
* Delete: POST /resource/:id/delete

### Useful Links
* [REST](https://en.wikipedia.org/wiki/Representational_state_transfer)
* [BREAD/CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
* [Express](https://github.com/expressjs/express)
* [Embedded JavaScript (EJS)](https://github.com/mde/ejs)
* [Morgan](https://github.com/expressjs/morgan)
* [Body-Parser](https://github.com/expressjs/body-parser)
* [Delete Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)
* [HTTP Forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data)
