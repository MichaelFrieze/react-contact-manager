# Static React Contact Manager
This is a typical contact manager app that I built to learn how to use react. For state management I used the Context API. You can checkout the live demo [here](https://michaelfrieze.github.io/react-contact-manager/#/). 

The reason for choosing to build a contact manager app is because it covers all 4 aspects of CRUD.

---

To run this application:
```bash
## from project root directory
npm ci
npm start
```

---

Some other things to mention:
* For styling, I used bootstrap. 
* Check out the documentation branch to see all my notes as I built this app.
* If you notice there is no comments in the code, that is because it is all in the documentation
* JSONPlaceholder was used as a REST API: [JSONPlaceholder - Fake online REST API for developers](https://jsonplaceholder.typicode.com/)
* All of our contact data came from JSONPlaceholder.
* All of it can be deleted from the contact menu as well as edited
* You can add your own contacts as well, however you cannot edit your own contacts
* Since JSONPlaceholder isn’t a real back-end then the manually added contacts are not editable
* This also caused issues with adding new contacts, but I just created a try/catch to deal with it. 
* So, the contact just gets added to the DOM, but it is still successfully making the post request to the fake REST API.
* View this app by clicking [HERE](https://michaelfrieze.github.io/react-contact-manager)

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

Sometimes, it is best to just reset the git repo and start fresh:
```bash
git fetch
git reset --hard
git clean -x -d -f
```