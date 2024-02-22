# BookNotes 📖

## An app that digitalizes your home library 💻📚

Do you own a lot of books at home? Ever wonder if you already have a particular book when you're at the book shop? Well fear no longer, BookNotes is here to solve your issue! This app allows you to search books by author or title. When a match is found you can add the book to your library. Of course a pretty thumbnail picture will aid in displaying your collection in the Library section of the app. Great news right? Now you will stop doubling up on books... which means your stocking stuffer inventory will be depleted, but you can always fall back on the classic sock option.

## Watch my demo video!

*Lights camera aaaand ACTION!*
![Youtube demo](https://github.com/rachelspencer/book-notes-app/assets/111473039/a428588a-1aaa-4d6b-9c2c-c3bf50f30f65)

## How it works

1. Register or login

    Fill the fields in, you know the drill.

![Signin](https://github.com/rachelspencer/book-notes-app/assets/111473039/174258ff-9d75-4650-ad2d-05e50647eace)

2. Select the "Add New Book" tab
   
    Begin the process of digitalizing your collection of books. 

![Add new book](https://github.com/rachelspencer/book-notes-app/assets/111473039/b73cc3ed-5b5c-4372-9ba7-9e4848643a23)

3. Searching and Adding
   
    Enter a book title or authors name into the search bar and click search. Warning, you may get a similar rush to when you run your fingers over the        spins of books on a shelf at your local book shop. It would be rude of me not to disclose this.
![Search Book Title](https://github.com/rachelspencer/book-notes-app/assets/111473039/f9a4d5e6-9e5e-4ba4-9d89-f78c360580b3)

 4. Select that book!

    Wowza! There it is! Go ahead an click it, it'll get added to your library. I know, this is cool right. You're brother will thank me later when
    he realizes how close he came to having Gone with the Wind in his Christmas stocking. You'll never accidently buy this book twice becuase now
    you can just check your app when you're out book shopping.
![Select to add to librbary](https://github.com/rachelspencer/book-notes-app/assets/111473039/2cbbb4d5-7549-4e31-b437-3a4368ed995e)

5. View your library

   If you head over to the "Your Library" tab and click it, you'll be able to see all of your books.
![Example of many books ](https://github.com/rachelspencer/book-notes-app/assets/111473039/afa0a2f2-c746-4ad4-9178-73e9e9a7eaac)

## Set up the project

### Installation Instructions

`npm` is distributed with Node.js, which means that when you download Node.js, you automatically get `npm` installed on your computer. You can install Node by [downloading it from the Node.js website](https://nodejs.org/en/) or using a Node version manager like [nvm](https://github.com/nvm-sh/nvm) on a macOS or Linux device or [nvm-windows](https://github.com/coreybutler/nvm-windows) on a Windows device.

You can check if you have Node.js already installed by running `node -v` in your terminal. You will need it for this project to run, so don't skip this!

You will also need to make sure you have Visual Studios installed, check by running `code --version`. If you don't have it [download it from VS Code](https://code.visualstudio.com/download). If you use another development 
environment, you will need to alter setp 7. to open the cloned repo. 

### Clone the project locally

1. Click on the "Code" tab on this repo's "Code" page.
2. Click the green "Code" button to reveal a "Clone" popup.
3. The "HTTPS" tab should be automatically selected. If not, click "HTTPS."
4. Click the copy button to copy the url of this repository to your clipboard.
   
![Cloning repo](https://github.com/rachelspencer/book-notes-app/assets/111473039/c880ae3d-2426-4dde-85b1-c6330734177a)

5. Open your terminal and `cd` to the directory where you want this project to live.
   
![mkdirTerminalDemo](https://github.com/rachelspencer/book-notes-app/assets/111473039/b8c9ac95-09a8-4971-8cdd-79194fa85f20)

6. Once you have successfully navigated to the directory, run `git clone` and paste the the web URL right after (copied to your clipboard in step four).
   
![CloneRepo](https://github.com/rachelspencer/book-notes-app/assets/111473039/e9da32d2-e7e7-469f-8ad2-22d847538d73)

7. In the terminal, run `ls` to determine you can see all the files associated with this directory. Once you are ready to open the project run `code .`.

![OpenInVSCode](https://github.com/rachelspencer/book-notes-app/assets/111473039/cc473c67-2fcc-47c1-93f1-a4ebf0bbe1bd)

## Usage Guidelines

In the root of the directory you will need to run `npm i` in the terminal to install the projects dependencies. In the root you can also run `npm start` to run the server locally. Navigate to the server directory, the run `nodemon index.js` to start the backend. You can then open the project locally. 

### Database

There are models in the backend of this project that use sequelize. To avoid refactoring code look for any relational database like Oracle, PostgreSQL, MySQL or SQLite. You will have to set up a database with one of these providers and connect it to the app by adding environmental variables to a `.env' file. 

### Environmental variables 

You will need to create a .env file in the root of the Directory and update some environment variables. 

1. `PORT=yourport` variable processed in the index.js file in the server directory.

2. `SECRET=somesecretstring` go to any website that generates a secret and paste a value in. This will be used in the auth.js file to assist in generating tokens when registration / login functions are called.
   
4. `DATABASE_URL` import a PostgreSQL connection URL usually formatted like postgresql://localhost/yourport/yourdatabasename
   
![env variables](https://github.com/rachelspencer/book-notes-app/assets/111473039/c44ae741-9c52-4841-8894-686d991043b5)

