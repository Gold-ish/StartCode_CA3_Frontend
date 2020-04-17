# Frontend

## Backend
This is the backend that is supposed to be used with this Frontend.  
https://github.com/Gold-ish/StartCode_CA3_Backend

## Getitng started

- Download the zip-code from github to your computer
- Run `npm install` in the root of the folder
- Run `npm start` to start the project
- Run `code .` to open the project in Visual Studio Code

## Using the frontend

- In `settings.js` all of the links to the endpoints are found
- Change the URLs to the deployed backends endpoints
- If you want to use multiple fetching points, then add the url's in the `settings.js` file.
- Use `import URLS from "./Settings";` to use the URLs

## Deploy to surge

- In the root of the project type `npm run build` to build the frontend project
- If using surge for the first time type `install -g surge`
- Then type `surge --project ./build --domain A_DOMAIN_NAME.surge.sh`  
`A_DOMAIN_NAME` is a name that you define yourself.
- If surge is running for the first time, you have to crate an account. Add email and password, then hit enter.
- Your REACT Client is now hosted like `A_DOMAIN_NAME.surge.sh`

## The deployed frontend

- Published to `startcodeca3.surge.sh`
