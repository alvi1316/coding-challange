# Coding-Challange

This project is done with the help of React and PHP. `master branch` only holdes boilerplate code All the developed code is inside `development branch`.

## My Approach And Steps

1) I started the project by creating a default project using the command `npx create-react-app task` and for the backend I created a folder named `backend` with a php file inside it named `index.php`. 

2) Then I cleaned the default codes and kept the files that are needed for my project and uploaded the boilerplate code to `github default branch`. 

3) Than I created another branch named `development` and started to work on the frontend files on the `devolopment` branch mainly on `App.css`, `App.js`. And for some minor tweaks I edited `Index.js` and `Index.css`. This work was mainly on the UI and Styling.

4) For `POST` request I used the package `Axios`. My react app is hosted on `http://localhost:3000`. After that I needed to figuire out the backend so I used `XAMPP` for the Apache server to host php file. So my php server was `http://localhost:80/backend/`. So I edited the index.php accoding to my needs.

## How to run the app

## Front end

Clone the repository and from the `development branch` run the following command

### `cd task`

changes the directory to task folder where the react app is located

### `npm start`

Runs the app in the development mode on [http://localhost:3000](http://localhost:3000)

## Backend

Place the `backend` folder inside `xampp/htdocs/` and start the Apache server. If you use any other servername or port than u need to change the baseUrl which is inside `App.js Line 9`

Change From This:
```
const api = axios.create({
  baseURL: `http://localhost:80/backend/`
})
```

To This:
```
const api = axios.create({
  baseURL: `http://YourCustomHost:YourPort/backend/`
})
```
