
# Cinemawatch

Cinemawatch is a movie database App that uses the TMBDI (The movie database) API in order to allow users to navigate and filter through over 500,000+ movies. Additionally, users have the ability pick any movie that they like in order to view the details of the movie such as the runtime, cast, and a brief overview of the movie. 









## Tech Stack

**Tech Stack:** Next.js, Node.js, Bootstrap, Vercel











## Demo


## Lessons Learned

For me using Next.js was a certainly a challenge, especially running the app for the first time, there were many issues such as when the app ran, it wasn't displaying any movies at all. My train of throught went to that the API_key had expired so I went to the TMDB website and regenerated a new API_key. Then it still wasn't working and it turns out that in 
Next.js, you don't have to load environment variables from a .env file using the dotenv.config() function since Next.js already has a built-in support for loading environment variables from .env files. 


Another issue that I ran was in relation to search bar that was used in order to search for movies. in `HomePage.js`, I had used a form tag in order to collect the user input using the input tag. However, I had an issue with the onChange handler for the search input in which I forgot to update the state with `setQuery(e.target.value)`. 



## API Reference

#### Get all items

```http
  GET /movie/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. Id of item to fetch the movie details |

#### Get item

```http
  GET /movie/${id}/credits
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch the movie cast |




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`TMDBI_API_KEY =` API_key that you can get from [TMDB](https://developer.themoviedb.org/docs/getting-started)


