# 7 Wonders Randomizer

![image](https://github.com/srdjag/7-wonders-randomizer-pwa/assets/53865216/4ea33528-4e49-40c0-a19c-a5bd161ba71e)

For true 7 Wonders fans!

Progressiv web app that randomly chooses wonders for each player, based on parameters that you set.

Live demo [here](https://seven-wonders-randomizer-3443e309d89c.herokuapp.com/)

## Technologies Used
- React
- Google Sheet (stores wonders and their expansions for easy changes)

## Features

- Select wonder packs that you play with
- Choose number of players
- Let app also choose a wonder side for you
- Draft mode - every player gets 3 random wonders

## Screenshots
![image](https://github.com/srdjag/7-wonders-randomizer-pwa/assets/53865216/6da0f40f-e762-46ac-9d46-32872eb8d0d3)
![image](https://github.com/srdjag/7-wonders-randomizer-pwa/assets/53865216/7210949a-c0c4-4af4-8ff9-7ca09cbbd347)


## Setup
1. `npm install`
2. Create ".env" file in app root. Put `REACT_APP_API` and `REACT_APP_SHEET_ID` variables inside.

More on how to acquire Google Sheet API [here](https://blog.golayer.io/google-sheets/google-sheets-api#:~:text=READ%20MORE-,Enable%20the%20Google%20Sheets%20API,-To%20enable%20the)

### Requirements
- Node.js

## Usage
- `npm run start` for development
- `npm run build` for deployment

## Contact
Created by [Srdja]([https://www.flynerd.pl/](https://www.linkedin.com/in/srdjagunjic/))
