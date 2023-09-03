async function fetchData(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
      console.log(response);
      throw new Error(`Error in request: ${response.status}`);
  }
  const json = await response.json();
  return json;
}

(async function() {
  try {
  const url = 'https://sodexo-webscrape-r73sdlmfxa-lz.a.run.app/api/v1/restaurants';
  const options = {
     method: 'GET',
     headers: {
        'Content-Type': 'application/json'
     },
  }
  const data = await fetchData(url, options);
  console.log(data);
  const table = document.querySelector('table');

  for (const restaurant of data) {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.innerText = restaurant.name;

    const td2 = document.createElement('td');
    td2.innerText = `${restaurant.address}, ${restaurant.postalCode}, ${restaurant.city}`;

    tr.append(td1);
    tr.append(td2);
    table.append(tr);

    tr.addEventListener('click', function() {
      const all = document.querySelectorAll('tr');
        for (let i = 0; i < all.length; i++) {
            all[i].classList.remove('highlight');
        }

        tr.classList.add('highlight');

        showDetails(restaurant);
    });
  }


  function showDetails(restaurant) {

    const dialog = document.querySelector('dialog');
      dialog.innerHTML = '';

      const name = document.createElement('p');
      name.innerHTML = `Name: ${restaurant.name}`;

      const address = document.createElement('p');
      address.innerHTML = `Address: ${restaurant.address}`;

      const postalCode = document.createElement('p');
      postalCode.innerHTML = `Postal Code: ${restaurant.postalCode}`;

      const city = document.createElement('p');
      city.innerHTML = `City: ${restaurant.city}`;

      const phoneNumber = document.createElement('p');
      phoneNumber.innerHTML = `Phone Number: ${restaurant.phone}`;

      const company = document.createElement('p');
      company.innerHTML = `Company: ${restaurant.company}`;

      dialog.appendChild(name);
      dialog.appendChild(address);
      dialog.appendChild(postalCode);
      dialog.appendChild(city);
      dialog.appendChild(phoneNumber);
      dialog.appendChild(company);

      dialog.showModal();
  }
} catch (error) {
  alert(error.message);
}
})()
