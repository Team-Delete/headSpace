# Software Requirements

## Vision

Minimum Length: 3-5 sentences
### What is the vision of this product?
This vision of this product is that it enables users to better understand their moods as well as others around them, as well as offer suggestions that may help to improve one’s mood
 
### What pain point does this project solve?
People these days have a lot of feels. And it can be hard to read a room for some. - A waiting room, common area of a workplace, in line for something. Maybe it is good to share how you are feeling - you may find that others feel the same.
 
### Why should we care about your product?
Expressing how you feel is hard. This aims to make it a little bit easier. 

## Scope (In/Out)
### IN - What will your product do
Describe the individual features that your product will do.
Scannable QR reference code
Collect your mood,
Return a joke and activities
Shared screen will have 
Quote
Local weather 
Median mood
High overview of each. Only need to list 4-5
The user will enter the area and scan the QR code.
The QR code will open up a web app for you to login with AUTH0
Upon successful login you will be questioned on your mood.
The app will collect your mood and will return jokes and Food suggestions
The television screen will have the static location weather data
A motivational quote of some sort (random)
And the median mood of the users in the room..

### OUT - What will your product not do.
Make toast or eat carbs.
Never sell your info.
Do evil.
Minimum Viable Product vs
What will your MVP functionality be?
Able to display a mood with weather data
Create a Profile and Authenticate a User and attach a Mood history 
Take input on a selected Mood and Return a Themed Response
Based on Mood and Location RX Joke and Activity suggestion 
What are your stretch goals?

## Stretch

### What stretch goals are you going to aim for?
	The Themed Response will offer a suggested food/beverage
The Themed Response will offer a choice of joke type
Functional Requirements
### List the functionality of your product. This will consist of tasks such as the following:

### An admin
Can create and delete user accounts

### A user
Can update their profile information
Can update location.
Input a single mood per visit.
Delete a recorded mood (Forget a bad day)
RX Suggestions based upon Mood input
Can search for activities
Data Flow

## Describe the flow of data in your application. Write out what happens from the time the user begins using the app to the time the user is done with the app. Think about the “Happy Path” of the application. Describe through visuals and text what requests are made, and what data is processed, in addition to any other details about how the user moves through the site.
	
  User clicks login > Opens an AUTH0 login screen > User is authenticated > User profile is opened/created > User is prompted to input mood > currentMood attaches to currentUser > currentMood is saved to userProfile and moodInRoom > User clicks Suggestions Button > currentMood feeds suggestActive, currentJoke pulls from Joke API. 
User clicks LogOut > currentUser is logged out. App returns to RoomDisplay.   
## Non-Functional Requirements (301 & 401 only) Non-functional requirements are requirements that are not directly related to the functionality of the application but still important to the app.

Security
Usability
Scalability

## Pick 2 non-functional requirements and describe their functionality in your application.

Security - People generally won’t use an app they don’t trust. We establish the user sense of security by requiring AUTH0 authentication of a user. 

Usability - We want to build usability and remove barriers for folks using our app from the ground up. So we will consider accessibility in all aspects of design and function, such as no placeholder text.
