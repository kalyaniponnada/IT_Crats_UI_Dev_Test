

### Prerequisites

You need git to clone the `angular-seed` repository. You can get git from [here][git].

We also use a number of Node.js tools to initialize and test. You must have Node.js
and its package manager (npm) installed.
### Clone `it_Crafts_UI_Dev_Test`

Clone the `it_Crafts_UI_Dev_Test` repository using git:

```


### Install Dependencies

We have two kinds of dependencies in this project: tools and AngularJS framework code.

* We get the tools we depend upon and the AngularJS code via `npm`, the [Node package manager][npm].


We have preconfigured `npm` to automatically copy the downloaded AngularJS files to `app/lib` so we
can simply do:

```
npm install
```

Behind the scenes this will also call `npm run copy-libs`, which copies the AngularJS files and
other front end dependencies. After that, you should find out that you have two new directories in
your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/lib` - contains the AngularJS framework files and other front end dependencies

*Note copying the AngularJS files from `node_modules` to `app/lib` makes it easier to serve the
files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].


