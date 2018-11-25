# Static React Contact Manager

After downloading this repo, to run this from the command line using bash (make sure you have NodeJS installed):
```bash
npm start
```

This is basically your typical contact manager app that I built to learn how to use react. I will create more advanced versions of this in another repo, but this is just going to get pushed to GitHub pages as a static site. I am using Context API to manage state. Next, I will use Redux, but not here. 

The reason for choosing to build a contact manager app is because it covers all 4 aspects of CRUD; Create, Read, Update, and Delete. As boring as it might sound, it is a great way to learn. 

Some other things to mention:
* For styling, I used bootstrap. 
* Check out the documentation branch to see all my notes as I built this app.
	* If you notice there is no comments in the code, that is because it is all in the documentation
* JSONPlaceholder was used quite heavily in this app. I highly recommend it: [JSONPlaceholder - Fake online REST API for developers](https://jsonplaceholder.typicode.com/)
	* All of our contact data came from JSONPlaceholder.
	* All of it can be deleted from the contact menu as well as edited
	* You can add your own contacts as well, however you cannot edit your own contacts
	* Since JSONPlaceholder isn’t a real back-end then the manually added contacts are not editable
	* This also caused issues with adding new contacts, but I just created a try/catch to deal with it. 
	* So, the contact just gets added to the DOM, but it is still successfully making the post request to the fake REST API.
* View this app by clicking HERE


If you are having any problems, then go to the `App.js` file and change `HashRouter` to `BrowserRouter`.
Like this: `App.js`
```js
import React, { Component } from 'react';
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// Insted, use this:
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';
```