# Movie-App
Basic Movie app prototype.
This application has been developed and incorporated with below mentioned tasks.

Import movie_db.json file to MongoDB. Do not alter DB contents. 
-   Create an API to list movie to fetch data
-   API should have authentication with Bearer token : FSMovies2023
-   Format data by Grouping Movies by Categories (Genres)
-   Return in below format
	[
		{
			"category":"Action",
			"movies":[
				{
				   "director": "Christopher Nolan",
		           "imdb_rating": 9.0,
		           "length": "2h 32min",
		           "poster": "https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg",
		           "title": "The Dark Knight"
		           "slug": "the-dark-knight"
				},
				{
					// Details of another movie.. 
				},
				// and so on
			]
		},
		{
			"category":"Crime",
			"movies":[
				{
				   "director": "Christopher Nolan",
		           "imdb_rating": 9.0,
		           "length": "2h 32min",
		           "poster": "https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg",
		           "title": "The Dark Knight"
		           "slug": "the-dark-knight"
				},
			],
			
		},
		{
			// Details of another category (Genres).. 
		},
		// and so on
	]

Execution Steps :
1. Clone this repository in local system.
2. add .env file
3. Add these 2 variables adn the value for the same 'MONGODB_URI= <MONGODB URL >, PORT = 3001' (Port should be same).
4. Navigate to 'web-app-movie\movie-api' and 'web-app-movie\movie-app' in command Prompt
5. run npm init for initialize.
6. run npm install to install required dependencies.
7. use 'npm start' on both the paths to run the Backend Server and Front end Server.
8. Open <MONGO URL> Either in MongoDB Atlas or Mongo DB Compass or other IDE's
9. Database : test and Collection : movies will be created automatically.
10. import the JSON file to the movies collection.
11. Application will be running on the link 'http://localhost:3000/api/movies/'.

