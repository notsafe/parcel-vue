Simple boilerplace with Vue (https://vuejs.org) and Parcel! (https://github.com/parcel-bundler/parcel)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:1234
npm start
```

## Structure
```
.
├── dist                   # Parcel compiled files
├── src                    # Project main source
    ├── assets             # Assets dependencies (images, sprites)
    ├── js                 # Javascript files folder (components, etc...)
        ├── components     # Vue components (reusable)
        ├── containers     # Vue page views (logic)
        ├── router         # Vue route page views into paths
        ├── store          # Vuex Store
            ├── api        # Store API Layer
            ├── modules    # Store modules with getters, actions and mutations
            ├ index.js     # Store main file
            ├ types.js     # Store constants
        ├ main.js          # Main Vue file
    ├── scss               # Project styling files
├ index.html               # Main file (where Parcel MUST find the main.js Vue file)
├ .postcssrc               # PostCSS config file

```
