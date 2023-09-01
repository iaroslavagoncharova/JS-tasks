'use strict'

/*POST Method. Practice making a POST request using the Fetch API with async/await and handling the response.

Make a POST request to the URL https://reqres.in/api/users with a JSON payload containing user information ( e.g., name and job).
Log the response data to the console. */

async function postData() {
  const url = 'https://reqres.in/api/users';
  const user = {
      name: 'John Doe',
      job: 'Developer'
  };

  try {
      const response = await fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
      });

      if (!response.ok) {
        console.log(response)
          throw new Error(`Error in request: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
  } catch (error) {
      console.error('Error:', error);
  }
}

postData();
