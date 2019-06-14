1.  Explain the differences between `client-side routing` and `server-side routing`.
-> Routing is the mechanism by which requests are connected to some code.
-> Client-side routing happens when the route is handled internally by the JavaScript that is loaded on the page
-> Server-side routing is routing that is handled by the server
--> The main difference between the two is that in server-side routing, when a user clicks on a link, a whole new document is served to the user.  Whereas in client-side routing, when a user clicks on a link, the whole page won't referesh, just some elements inside the application change.  So in server-side routing, the user receives an entirely refreshed page - whereas in client-side routing, the URL changes but the user just gets a change in the state of the application.

1.  What does HTTP stand for?
-> Hyper Text Transfer Protocol.  HTTP is network protocol that handles the transmission of data.

1.  What does CRUD stand for?
-> Create, Read, Update, Delete

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
-> Create (POST) -> sends data to a server
-> Read (GET) -> retrieves data from a server
-> Update (PUT) -> replaces or updates data on a server
-> Delete (DELETE) -> deletes data on a server

1.  Mention three tools we can use to make AJAX requests
-> Fetch:  Native to JS. Follows a request-response approach where Fetch makes a request and returns a promise that resolves to the Response object.
-> Axios:  Modern open source JS library that lets you make HTTP requests from the browser and server side.  It supports the Promise API.
-> jQuery:  One of the simplest methods to make an HTTP call.  Takes in two parameters and contains two callbacks to hanld the response received.