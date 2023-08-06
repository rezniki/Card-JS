let elemMyCars = document.querySelector('.my__cars');
let elemCarStamp = document.querySelector('.car__stamp');
let elemCarSpeed = document.querySelector('.car__speed');
let elemCarRelease = document.querySelector('.car__release');
let elemCarCountry = document.querySelector('.car__country');
let elemCarWeight = document.querySelector('.car__weight');
let elemCarImage = document.querySelector('.car__image');
let elemButton = document.querySelector('.car__button');

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

let renderCards = function() {
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

elemButton.onclick = function() {
    let newElemCarStamp = elemCarStamp.value;
    let newElemCarSpeed = elemCarSpeed.value; 
    let newElemCarRelease = elemCarRelease.value;
    let newElemCarCountry = elemCarCountry.value;
    let newElemCarWeight = elemCarWeight.value;
    let newElemCarImage = elemCarImage.value;

    let newMyCar = 
        {
            stamp: newElemCarStamp,
            speed: +newElemCarSpeed,
            release: +newElemCarRelease,
            country: newElemCarCountry,
            weight: +newElemCarWeight,
            image: newElemCarImage
        };

    myCars.push(newMyCar);
    elemMyCars.innerHTML = "";
    renderCards();
    console.log(myCars);
}



