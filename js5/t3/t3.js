'use strict'

async function requests() {
  const url = 'https://reqres.in/api/unknown/23';

  try {
      const getResponse = await fetch(url);
      if (!getResponse.ok) {
          throw new Error(`GET error: ${getResponse.status}`);
      }
      console.log('GET request successful');
  } catch (error) {
      console.log(error.message);
  }

  try {
      const postResponse = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({key: 'value'}),
          headers: {
              'Content-Type': 'application/json'
          }
      });
      if (!postResponse.ok) {
          throw new Error(`POST Error: ${postResponse.status}`);
      }
      console.log('POST request successful');
  } catch (error) {
      console.error(error.message);
  }

  try {
      const putResponse = await fetch(url, {
          method: 'PUT',
          body: JSON.stringify({key: 'value'}),
          headers: {
              'Content-Type': 'application/json'
          }
      });
      if (!putResponse.ok) {
          throw new Error(`PUT Error: ${putResponse.status}`);
      }
      console.log('PUT request successful');
  } catch (error) {
      console.error(error.message);
  }

  try {
      const deleteResponse = await fetch(url, {
          method: 'DELETE'
      });
      if (!deleteResponse.ok) {
          throw new Error(`DELETE Error: ${deleteResponse.status}`);
      }
      console.log('DELETE request successful');
  } catch (error) {
      console.error(error.message);
  }
}

requests();

