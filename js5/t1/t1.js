'use strict'

async function fetchData() {
  try {
      const response = await fetch('https://reqres.in/api/users/1');

      if (!response.ok) {
        console.log(response);
        throw new Error(`Error in request: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
  } catch (error) {
      console.error('Error:', error);
  }
}

fetchData();
