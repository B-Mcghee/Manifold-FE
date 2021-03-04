# Manifold Front End Project

## *Description*
```
This project is the MVP of creating a user interface displaying from an API. The dataset is NASA meteorite Earth landings and was to be displayed in a organized manner, along with saving data across browser sessions. I chose the current technology ecosystem based on familiarity with Vue JS and Axios. I chose Vuetify, Jest, Docker based upon only knowing them by name and never working with 
```
## *Future Deliverables*
```
Currently this FE is the MVP, and in the future would like implement google maps or and svg to show locations of longitude and latitude where the meteorites landed on the map. I would implement graphs with D3Js to display the visual representation of the data and  I would also include more unit test to try and cover the entire spectrum of the actual project.
```

## *Ecosystem*
```
- Vue Js Cli
- Vuetify
- Jest testing framework
- Docker for containers
- Axios for fetching the API
```
## Prerequisites

```
In order to run this container you'll need docker installed on your PC
```
## Getting Started

```
go to the dockerFile and next to *WORKDIR* enter the path/to/the/Dockerfile

```
## Project setup
```
npm install
docker build -t manifold-fe .
docker run -p 8000:80 -it --name nasa-dataset manifold-fe
your project will be running on port 8000
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test and npm run debug are how to run the testing framework. You will need Node version 8.4+ in order to run the  debugger.
If wanting to create more test, the setup file has to be in unit folder as well as the files need to have an extension of .spec.js/.js in order to be initiated.
```


### Lints and fixes files
```
npm run lint
```

### Customize configuration
- Vuejs [Configuration Reference](https://cli.vuejs.org/config/).
- Vuetify [Documentation](https://vuetifyjs.com/en/)
- Jest [Documentation](https://jestjs.io/docs/en/getting-started)
  
