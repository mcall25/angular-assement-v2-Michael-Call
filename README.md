Michael's Movie store

Below are the steps I took to make this simple angular app.

``1``
 Create a basic angular app that includes a mainCtrl, mainService, app.js and routes.js. The index.html file is included in this repo so you don't need to add one.

``2``
 Setup your router, states, and ui-view so that the home.html loads first. Also set up the routes for the about.html, blog.html and movies.html.

``3``
 Connect the navigation links that are located in the index.html to point to the corresponding page.

``4``
 After you have your routing setup you can start working on getting the data you'll need.


 ``5``
 movie needs to be a directive.  The template is provided for you in movie-tmpl.html.
 It needs to have an isolate scope and take in the movie and show the bio details.
 Clicking on the title will navigate to movie bio.
 Clicking on the image will collapse the image and show a link that says "show image" instead.  Click on "show image" will hide the "show image" link and show the actual image.
 All the styles are completed for you already so you'll just need to display the data in the right spot. LOOK FOR COMMENTS.

 ``6``
 Show all the movies on the movies.html page using your movie directive.

 ``7``
 After your data is displaying correctly you'll need to get the movie-bio view configured.
 In your routes file add a route called bio. This route is going to have an id being passed in. The url will look like this bio/:id.
 Now that the route is setup you can finish the links in the movies.html file.

 The link that points to the movie bio will need to pass along the id of the item being clicked using an ui-sref.

``8``
movie-bio.html will be the hardest view to get working. You'll need to check the state params for the id being passed along in the route.
After you have that id you'll need to make an api call to http://practiceapi.devmounta.in/movies/ + the id being passed in the route.
This will return the specific item based off the id you passed.
Put that item on $scope and display in the view.

``9``
Host your solution on github pages.
* Open the terminal to where this assessment is
* Add and commit all of your completed code.
* Type git checkout -b gh-pages
* Type git push -u origin gh-pages
* Find your account name on github and insert it into this url http://YourGithubAccountName.github.io/angular-assessment
Open that url to make sure it works, then send that url to your assigned mentor!

# Congratulations! you have finished the assessment
