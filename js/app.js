const searchPhone = () => {
    const searchInput = document.getElementById('search-input');
    const searchText = searchInput.value;
    // console.log(searchText);

    // clear value
    searchInput.value = '';

    // load url
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneResult(data.data))

}
const displayPhoneResult = phones => {
    // console.log(phones);
    const phnSearchResult = document.getElementById('search-result');
    const firstTwenty = phones.slice(0, 20);
    phnSearchResult.innerHTML = '';
    for (const phone of firstTwenty) {
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
    <div class="card">
                <img width="250px" height="450px" src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">Brand: ${phone.brand}</p>
                    <a onclick="loadPhoneDetail('${phone.slug}')" href="#" class="btn btn-primary">Detail</a>
                </div>
            </div>
    `;
        phnSearchResult.appendChild(div);
    }
}

// single phone detail
const loadPhoneDetail = (phoneId) => {
    console.log(phoneId);
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}

    `;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetail(data.data))
}
const displayPhoneDetail = phone => {
    console.log(phone);
    const phoneDetail = document.getElementById('phone-details');
    phoneDetail.innerHTML = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's
                    content.</p>
            </div>
    `;
    phoneDetail.appendChild(div);
}