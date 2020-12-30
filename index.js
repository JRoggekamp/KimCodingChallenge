let searchButton = document.getElementById('submit')

searchButton.addEventListener("click", evt => {
  let locationDiv = document.getElementById('container')
  let locationInput = document.getElementById('searchInput').value
  locationDiv.innerHTML="";

  fetch('https://acceptatie.monuta.nl/cms-services/api/plaatsen/'+ locationInput + '/vestigingen')
    .then(res => res.json())
    .then(locations => {
      //defining the header that will be atop of the search results
    let listTitle = document.createElement('H2');
    listTitle.textContent = "Ik heb de volgende vestiging(en) gevonden:";
    locationDiv.appendChild(listTitle);
    // iterating through the search results and mapping them to corresponding elements
      for (const location of locations.vestigingen) {
        let locationContainer = document.createElement('div');
        locationContainer.id = "location";
        let listName = document.createElement('H4');
        let nameContainer = document.createElement('div');
        nameContainer.id = 'locationName';
        let listAnchor = document.createElement('ul');
        let listAddress = document.createElement('li');
        let listPostalcode = document.createElement('li');
        let listUrl = document.createElement('li');
        let listLocation = document.createElement('li');
        listName.appendChild(
          document.createElement('strong')
        ).textContent = location.naam;
        listAddress.textContent = `${location.adres}`;
        listPostalcode.textContent = `${location.postcode}`
        listLocation.appendChild(
          document.createElement('strong')
        ).textContent = `${location.plaats}`;
        listUrl.appendChild(
          urlLink = document.createElement('a'),
          urlLink.setAttribute('href', `${location.locatieURL}`),
          urlLink.innerHTML = "Bezoek locatiepagina"
        )
        //appending all the components to the appropriate div
        locationDiv.appendChild(locationContainer);
        nameContainer.appendChild(listName);
        locationContainer.appendChild(nameContainer);
        locationContainer.appendChild(listAnchor);
        locationContainer.appendChild(listAddress);
        locationContainer.appendChild(listPostalcode);
        locationContainer.appendChild(listLocation);
        locationContainer.appendChild(listUrl);

      }
    })
    .catch(console.error);
})

function parseDiv(){
  return
}
