# # Static React Contact Manager
This is basically your typical contact manager app that I built to learn how to use react. For state management, I used the Context API as well as Redux. The Context API is being used for the static site demo that you can checkout [here](https://michaelfrieze.github.io/react-contact-manager/#/). If you want to see how Redux was used instead of the Context API then you can checkout the `redux` branch.

The reason for choosing to build a contact manager app is because it covers all 4 aspects of CRUD; Create, Read, Update, and Delete. As boring as it might sound, it is a great way to learn. 

---

After downloading this repo, to run this from the command line using bash (make sure you have NodeJS installed):
```bash
npm install
npm start
```

After that, make sure everything is up to date:
```bash
npm outdated
# if anything needs udpated, then
npm update
```

---

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
* View this app by clicking [HERE](https://michaelfrieze.github.io/react-contact-manager)

---

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

---

### Also, here are some other ways to fix problems. 

If you are having problems with `npm start` then you might need to kill a process. First, use `lsof` on port `3000` to see if anything is running:
```bash
lsof -i tcp:3000

# then, if you see something running on the port then you can kill it
kill -9 "port number"

# for example
kill -9 7372
```


Finally, you can always just reset the git repo and start fresh:
```bash
git fetch
git reset --hard
git clean -x -d -f
```