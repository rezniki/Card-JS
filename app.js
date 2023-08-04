let myCars = [
    {
        stamp: 'Volkswagen Golf 8',
        speed: 216,
        release: 2019,
        country: 'Germany',
        weight: 1333,
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/2020_Volkswagen_Golf_Style_1.5_Front.jpg'
    },

    {
        stamp: 'Tesla Model S Plaid',
        speed: 322,
        release: 2022,
        country: 'USA',
        weight: 2237,
        image: 'https://images.drive.ru/i/0/5f6c5369ec05c4fe2700000f.jpg'
    },

    {
        stamp: 'Dodge Challenger Demon 170',
        speed: 346,
        release: 2023,
        country: 'USA',
        weight: 1553,
        image: 'https://www.topgear.com/sites/default/files/cars-car/image/2019/01/dg019_004clan2kt8c8qmtrmpcl3p72agsepl.jpg'
    },
];

let elemMyCars = document.querySelector('.my__cars');

function renderCards() {
    const funcMyCars = function(myCar) {
        let elemData = document.createElement('div');
        let elemImg = document.createElement('img');
        let elemStamp = document.createElement('p');
        let elemSpeed = document.createElement('p');
        let elemRelease = document.createElement('p');
        let elemCountry = document.createElement('p');
        let elemWeight = document.createElement('p');
    
        elemData.className = 'main__data';
        elemImg.className = 'main__img'
        elemStamp.className = 'main__stamp';
        elemSpeed.className = 'main__speed';
        elemRelease.className = 'main__release';
        elemCountry.className = 'main__country';
        elemWeight.className = 'main__weight';
    
        elemImg.src = myCar.image;
        elemStamp.textContent = myCar.stamp;
        elemSpeed.textContent = `Speed: ${myCar.speed}`;
        elemRelease.textContent = `Release: ${myCar.release}`;
        elemCountry.textContent = `Country: ${myCar.country}`;
        elemWeight.textContent = `Weight: ${myCar.weight}`;
    
        elemData.append(elemImg);
        elemData.append(elemStamp);
        elemData.append(elemSpeed);
        elemData.append(elemRelease);
        elemData.append(elemCountry);
        elemData.append(elemWeight);
        elemMyCars.append(elemData);
    }
    
    myCars.forEach(funcMyCars);
}

renderCards();

let elemCharacter = document.querySelector('.main__character');
let elemCharacterNumber = document.querySelector('.main__character__number');
let elemButton = document.querySelector('.main__button');

elemButton.onclick = function() {
    let newElemCharacter = elemCharacter.value;
    let newElemCharacterNumber = elemCharacterNumber.value; 
    let newMyCar = 
        {
            stamp: newElemCharacter,
            speed: newElemCharacterNumber,
            release: newElemCharacterNumber,
            country: newElemCharacter,
            weight: newElemCharacterNumber,
            image: newElemCharacter
        };

    myCars.push(newMyCar);
    console.log(myCars);

}



