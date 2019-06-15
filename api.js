// Массив поставщиков
const suppliersSource = [
  {
    id: '92d33f83-5177-477a-bf7d-d8c7afe3e0c3',
    first_name: 'Sharla',
    last_name: 'Neilson',
    email: 'sneilson0@opensource.org',
    username: 'sneilson0'
  },
  {
    id: 'f8ec36d1-1f04-4bd9-91d6-435448246ef5',
    first_name: 'Bernarr',
    last_name: 'Lanaway',
    email: 'blanaway1@ustream.tv',
    username: 'blanaway1'
  },
  {
    id: '19ade27e-becf-42c1-bf16-32500d135e0a',
    first_name: 'Dale',
    last_name: 'Shernock',
    email: 'dshernock2@tuttocitta.it',
    username: 'dshernock2'
  },
  {
    id: 'c4fa3c23-5f0d-46d6-a36f-fcd744b6c37b',
    first_name: 'Burlie',
    last_name: 'Fenning',
    email: 'bfenning3@topsy.com',
    username: 'bfenning3'
  },
  {
    id: '2027a222-1545-4f69-ab95-784dd6cb1901',
    first_name: 'Fallon',
    last_name: 'Scneider',
    email: 'fscneider4@mediafire.com',
    username: 'fscneider4'
  },
  {
    id: '5b7ba755-e408-42cf-8d49-fc5e38e2108e',
    first_name: 'Constanta',
    last_name: 'Dumper',
    email: 'cdumper5@tamu.edu',
    username: 'cdumper5'
  },
  {
    id: '78e00d1f-4a67-4ec9-82c3-c65a76715680',
    first_name: 'Fiorenze',
    last_name: 'Densumbe',
    email: 'fdensumbe6@jimdo.com',
    username: 'fdensumbe6'
  },
  {
    id: '9985a2cc-007b-4f36-8ab1-4b68825d8df9',
    first_name: 'Sheppard',
    last_name: 'Kilduff',
    email: 'skilduff7@i2i.jp',
    username: 'skilduff7'
  },
  {
    id: '35536963-3b46-48ca-bbe8-ccbfb84936e7',
    first_name: 'Bertram',
    last_name: 'Tryme',
    email: 'btryme8@csmonitor.com',
    username: 'btryme8'
  },
  {
    id: '2f38b0ce-d56d-4509-83ac-1b9c9dd30a8b',
    first_name: 'Barthel',
    last_name: 'Nunn',
    email: 'bnunn9@uol.com.br',
    username: 'bnunn9'
  }
];

// Массив домов
const housesSurce = [
  { city: 'Shabqadar', address: '3 Petterle Street', supplierId: '5b7ba755-e408-42cf-8d49-fc5e38e2108e', floors: 22, year: 2019 },
  { city: 'Changxingbao', address: '61509 Mariners Cove Hill', supplierId: '35536963-3b46-48ca-bbe8-ccbfb84936e7', floors: 24, year: 2017 },
  { city: 'Lengkongsari', address: '57295 Melby Terrace', supplierId: 'c4fa3c23-5f0d-46d6-a36f-fcd744b6c37b', floors: 23, year: 2011 },
  { city: 'Padina', address: '5 Ramsey Street', supplierId: '78e00d1f-4a67-4ec9-82c3-c65a76715680', floors: 24, year: 2018 },
  { city: 'Le Mans', address: '01066 Shasta Way', supplierId: '35536963-3b46-48ca-bbe8-ccbfb84936e7', floors: 21, year: 2016 },
  { city: 'Bugarama', address: '60256 Evergreen Pass', supplierId: '2027a222-1545-4f69-ab95-784dd6cb1901', floors: 17, year: 2017 },
  { city: 'Emar', address: '3746 Red Cloud Drive', supplierId: 'c4fa3c23-5f0d-46d6-a36f-fcd744b6c37b', floors: 20, year: 2017 },
  { city: 'Iguape', address: '68 Cascade Alley', supplierId: 'f8ec36d1-1f04-4bd9-91d6-435448246ef5', floors: 29, year: 2017 },
  { city: 'Konin', address: '342 Oak Valley Parkway', supplierId: '35536963-3b46-48ca-bbe8-ccbfb84936e7', floors: 17, year: 2017 },
  { city: 'Volosovo', address: '463 Manley Street', supplierId: '78e00d1f-4a67-4ec9-82c3-c65a76715680', floors: 23, year: 2014 },
  { city: 'Khadzhalmakhi', address: '76 Northfield Circle', supplierId: '19ade27e-becf-42c1-bf16-32500d135e0a', floors: 28, year: 2015 },
  { city: 'Punta Hermosa', address: '02583 Anhalt Plaza', supplierId: '92d33f83-5177-477a-bf7d-d8c7afe3e0c3', floors: 22, year: 2014 },
  { city: 'Mandala', address: '00 Morning Street', supplierId: '92d33f83-5177-477a-bf7d-d8c7afe3e0c3', floors: 15, year: 2010 },
  { city: 'Yeniköy', address: '49829 Elgar Place', supplierId: '2027a222-1545-4f69-ab95-784dd6cb1901', floors: 16, year: 2019 },
  { city: 'Bahay Pare', address: '53 Pearson Avenue', supplierId: '78e00d1f-4a67-4ec9-82c3-c65a76715680', floors: 16, year: 2016 },
  { city: 'Vetrino', address: '1588 Graceland Way', supplierId: 'f8ec36d1-1f04-4bd9-91d6-435448246ef5', floors: 20, year: 2014 },
  { city: 'Nueva Ocotepeque', address: '1468 Park Meadow Lane', supplierId: '5b7ba755-e408-42cf-8d49-fc5e38e2108e', floors: 26, year: 2017 },
  { city: 'Saguing', address: '66964 Forest Run Trail', supplierId: '9985a2cc-007b-4f36-8ab1-4b68825d8df9', floors: 17, year: 2011 },
  { city: 'Żarów', address: '795 Saint Paul Lane', supplierId: '35536963-3b46-48ca-bbe8-ccbfb84936e7', floors: 23, year: 2018 },
  { city: 'Hongguang', address: '2528 Crowley Place', supplierId: '92d33f83-5177-477a-bf7d-d8c7afe3e0c3', floors: 26, year: 2011 },
  { city: 'Jinhe', address: '85 Kinsman Alley', supplierId: '5b7ba755-e408-42cf-8d49-fc5e38e2108e', floors: 22, year: 2013 },
  { city: 'Charleston', address: '659 Wayridge Drive', supplierId: '35536963-3b46-48ca-bbe8-ccbfb84936e7', floors: 25, year: 2016 },
  { city: 'Pļaviņas', address: '11 Charing Cross Point', supplierId: '19ade27e-becf-42c1-bf16-32500d135e0a', floors: 25, year: 2010 },
  { city: 'Jhang Sadr', address: '052 Dawn Street', supplierId: 'c4fa3c23-5f0d-46d6-a36f-fcd744b6c37b', floors: 15, year: 2013 },
  { city: 'Kazanlŭk', address: '587 Sauthoff Hill', supplierId: '92d33f83-5177-477a-bf7d-d8c7afe3e0c3', floors: 26, year: 2012 },
  { city: 'Az Zubaydāt', address: '60278 Warner Plaza', supplierId: '9985a2cc-007b-4f36-8ab1-4b68825d8df9', floors: 29, year: 2019 },
  { city: 'Dalakovo', address: '45680 Mayfield Court', supplierId: '92d33f83-5177-477a-bf7d-d8c7afe3e0c3', floors: 28, year: 2017 },
  { city: 'Wujing', address: '3493 Northport Terrace', supplierId: '2f38b0ce-d56d-4509-83ac-1b9c9dd30a8b', floors: 15, year: 2010 },
  { city: 'Tangkolo', address: '8 Ludington Crossing', supplierId: '92d33f83-5177-477a-bf7d-d8c7afe3e0c3', floors: 20, year: 2012 },
  { city: 'Amadora', address: '69518 Red Cloud Court', supplierId: '78e00d1f-4a67-4ec9-82c3-c65a76715680', floors: 27, year: 2017 },
  { city: 'Newark', address: '9 Lyons Court', supplierId: '9985a2cc-007b-4f36-8ab1-4b68825d8df9', floors: 28, year: 2012 },
  { city: 'Lianghekou', address: '5 Main Pass', supplierId: 'f8ec36d1-1f04-4bd9-91d6-435448246ef5', floors: 15, year: 2011 },
  { city: 'Bohumín', address: '09891 Pawling Drive', supplierId: '2f38b0ce-d56d-4509-83ac-1b9c9dd30a8b', floors: 17, year: 2016 },
  { city: 'Sukomulyo', address: '6573 Pennsylvania Trail', supplierId: '92d33f83-5177-477a-bf7d-d8c7afe3e0c3', floors: 19, year: 2010 },
  { city: 'Lahān', address: '7 Onsgard Way', supplierId: '78e00d1f-4a67-4ec9-82c3-c65a76715680', floors: 26, year: 2017 },
  { city: 'Ode', address: '0 Village Green Center', supplierId: '19ade27e-becf-42c1-bf16-32500d135e0a', floors: 26, year: 2019 },
  { city: 'Moss', address: '66 Hazelcrest Way', supplierId: 'f8ec36d1-1f04-4bd9-91d6-435448246ef5', floors: 23, year: 2017 },
  { city: 'Drosiá', address: '8357 Ryan Hill', supplierId: '19ade27e-becf-42c1-bf16-32500d135e0a', floors: 25, year: 2014 },
  { city: 'Longquan', address: '04 Pankratz Alley', supplierId: 'c4fa3c23-5f0d-46d6-a36f-fcd744b6c37b', floors: 29, year: 2011 },
  { city: 'Valky', address: '3 Troy Junction', supplierId: '9985a2cc-007b-4f36-8ab1-4b68825d8df9', floors: 17, year: 2018 },
  { city: 'Prómachoi', address: '49767 4th Road', supplierId: '2f38b0ce-d56d-4509-83ac-1b9c9dd30a8b', floors: 25, year: 2017 },
  { city: 'Pavlohrad', address: '613 North Hill', supplierId: '2027a222-1545-4f69-ab95-784dd6cb1901', floors: 26, year: 2010 },
  { city: 'Linpu', address: '194 Manley Court', supplierId: '5b7ba755-e408-42cf-8d49-fc5e38e2108e', floors: 16, year: 2013 },
  { city: 'Barlinek', address: '6 Kingsford Point', supplierId: '19ade27e-becf-42c1-bf16-32500d135e0a', floors: 29, year: 2015 },
  { city: 'Torbeck', address: '7 Blue Bill Park Parkway', supplierId: '9985a2cc-007b-4f36-8ab1-4b68825d8df9', floors: 16, year: 2011 },
  { city: 'Insua', address: '2029 Coleman Center', supplierId: '19ade27e-becf-42c1-bf16-32500d135e0a', floors: 26, year: 2011 },
  { city: 'Grigoropolisskaya', address: '27 Manitowish Circle', supplierId: '2f38b0ce-d56d-4509-83ac-1b9c9dd30a8b', floors: 27, year: 2019 },
  { city: 'Tiaodeng', address: '0818 Vermont Place', supplierId: 'f8ec36d1-1f04-4bd9-91d6-435448246ef5', floors: 24, year: 2018 },
  { city: 'Béreldange', address: '861 Northland Lane', supplierId: '19ade27e-becf-42c1-bf16-32500d135e0a', floors: 26, year: 2010 },
  { city: 'Nūr', address: '50693 Homewood Terrace', supplierId: '35536963-3b46-48ca-bbe8-ccbfb84936e7', floors: 16, year: 2011 }
];

// Передаёт массив поставщиков с сервера
function requestSuppliersFromServer() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(suppliersSource), 500);
  });
}
// Передает массив домов с сервера
function requestHousesFromServer() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(housesSurce), 500);
  });
}


// Передает массив поставщиков на сервер
function suppliersToServer(formdata){
  return new Promise((resolve) =>{
setTimeout(()=> resolve(suppliersSource.push({ id: uuidv4(), ...formdata })), 500)
  });  
}

// Передает массив домов на сервер
function housesToServer(formdata){
  return new Promise((resolve) =>{
setTimeout(()=> resolve(housesSurce.push({ id: uuidv4(), ...formdata })), 500)
  });  
}

// Создает масив домов фильтруя по поставщикам
function requestHousesForSupplierFromServer(supplierId) {
  return new Promise((resolve) => {
    const houses = housesSurce.filter((house) => house.supplierId == supplierId);

    setTimeout(() => resolve(houses), 500);
  });
}

// Генератор уида
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}