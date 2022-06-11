# React-Native Coding Challenge - J&J

A take-home React-Native coding challenge for the Johnson & Johnson Health-Tech Team.

Candidate: Douglas Sheridan

Started on: Jun 9, 2022 @ 8:27 pm PST

Finished on: Jun 11, 2022 @ 2:20 pm PST

# Description

Using any of the publicly-available APIs here:

- https://rapidapi.com/collection/list-of-free-apis
- https://github.com/public-apis/public-apis
- https://developer.marvel.com/

Please create a React Native app consisting of an infinite scrolling list of items. Tapping on any of the items in the feed should open a full screen detail page showing all the available info and any associated media.

## Must-have features

- Infinite scrolling
- Pull to refresh
- Show item detail view when tapping on any item in the list

## Nice-to-have features

- Cache/Persist data locally across app launches
- Responsive UI wrt different device sizes

## Other notes

As much as reasonable, you ought to treat this project as if it’s a production app. Modularize your code, test when appropriate, comment where necessary and most importantly make sure your app performs well.

Also feel free to pull in 3rd party libraries as you see fit.

We will use your project to build and run locally on a simulator in XCode and emulator in Android Studio.

### Timeline

You have until 11:59pm PDT on Mon Jun 13 to complete this challenge. When you are ready, send a link to your github repo, or if you prefer, zip up the entire project directory and send it back. Thanks in advance for your hard work, and good luck!

### Progress Tracker

- ✅ Infinite scrolling list
- ✅ Pull list to refresh data
- ✅ Show item detail view when tapping on any item in the list
- ✅ Show any media associated with the item
- **Stretch goals:**
  - ✅ Cache/Persist data locally across app launches
  - ✅ Responsive UI wrt different device sizes

### Key Libraries Used

- AsyncStorage
- React Context API
- Axios
- react-native-device-utils
- react-navigation

### Features

This is a Marvel superhero finder app that lists all of the Marvel superheros alphabetically using an infinite scrolling list. Data is pulled from the Marvel Developer API: https://developer.marvel.com/.

#### Characters List

When the app first loads, it will fetch the first page of the characters list and present it to the user.

<img width="1402" alt="Screen Shot 2022-06-11 at 2 19 33 PM" src="https://user-images.githubusercontent.com/5413432/173205350-d05fb700-df1d-49ae-836e-cca13549e45c.png">

#### Character Page

Tapping on a character will take you to the character's detail page where you can view a list of all the comics that the character appears in, with a button to share, and a button to learn more about the hero.

<img width="1281" alt="Screen Shot 2022-06-11 at 2 26 51 PM" src="https://user-images.githubusercontent.com/5413432/173205415-e644d9af-e530-44b8-999d-59c01dd15eb4.png">

### Share Hero

Users can light up that share button in the top right corner to share the super hero with their friends!

<img width="1183" alt="Screen Shot 2022-06-11 at 2 27 36 PM" src="https://user-images.githubusercontent.com/5413432/173205531-d1ed43e7-8948-44d6-9d81-3dec9379b92e.png">

### 👊 Punch to Learn More!

Users can punch the button at the bottom to learn more info about the hero, online!

https://user-images.githubusercontent.com/5413432/173205562-25713612-09df-4e7a-9e99-8fcffb5428f3.mov

### Infinite Scrolling

The list will scroll infinitely until there are no more heros to snatch up!

https://user-images.githubusercontent.com/5413432/173205636-21576559-5932-47b5-af03-1a2c726cda6f.mov

### Pull-to-Refresh

If users feel like the list is not up to date and there might have been heros added to the Mavel Universe recently, they can pull down on the list to refresh it and get a new updated list!

https://user-images.githubusercontent.com/5413432/173205693-63d6efbc-6a89-44be-a39c-e64cac32b4da.mov

### Characters Stored Locally

After fetching the characters list at least one time, if the app is closed and re-opened, the list of characters will not need to be refetched because it is already stored locally. The app does not make any other network requests until there is a new page needed for infinite scrolling.

https://user-images.githubusercontent.com/5413432/173205776-4a350d88-2832-4b53-b3ec-73ec37e9a3d9.mov

### Responsive UI for Phones and Tablets

The UI that is presented will be slightly different depending on if you are using a phone or a tablet. The text and the images on the home screen will be slightly larger on tablets, and on the character details screen the avatar image will be resized for better tablet viewing and the detail text will be centered on the screen for a more pleasurable reading experience.

<img width="1222" alt="Screen Shot 2022-06-11 at 2 50 47 PM" src="https://user-images.githubusercontent.com/5413432/173206064-80c73b68-d9da-4d12-8f16-eecdb7319e22.png">

### Android Included

The app works on Android too with all the same features!

<img width="615" alt="Screen Shot 2022-06-11 at 3 05 08 PM" src="https://user-images.githubusercontent.com/5413432/173206365-bbf65b28-c47c-4229-b9ef-8345d8a8b1be.png">

---

Thank you for testing my app. The opportunity to work for Johnson & Johnson is so incredible, and I am very excited to hear back about how you liked my superhero app.

All the best,
Doug Sheridan
Mobile Application Architect (Native + Hybrid)
(480)278-2915
young1link@gmail.com
Palm Springs, CA
