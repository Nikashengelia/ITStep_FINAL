

  function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  var Users = [
    {name:"Nikolz", email:"Nikoloz@gmail.com", password:"password12", phone:"1234567890"},
    {name:"Luck", email:"LUCK@gmail.com", password:"password25", phone:"9876543210"},
    {name:"Morgan", email:"Morgan@gmail.com", password:"password67", phone:"5678901234"},
    {name:"Steve", email:"Steve@gmail.com", password:"password20", phone:"4321098765"},
    {name:"Rick", email:"Rickr@gmail.com", password:"password15", phone:"7890123456"}
 ];
 
 console.log(Users);
 function Hotel(name, location, country, city, stars, img, role, rooms, roomPhoto, price, activity, description) {
    this.name = name;
    this.location = location;
    this.country = country;
    this.city = city;
    this.stars = stars;
    this.img = img;
    this.role = role;
    this.rooms = rooms;
    this.roomPhoto = roomPhoto;
    this.price = price;
    this.activity = activity;
    this.description = description;
}

var Hotels_Restaurants = [
    new Hotel(
        "Monastero Santa Rosa Hotel & Spa",
        "Salerno, Italy",
        "Italy",
        "Salerno",
        "hotel",
        4,
        "$2875",
        "Diving",
        `<p>Set in a restored 17th-century monastery, this elegant clifftop hotel overlooking the sea is 1 km from the beach and 8 km from the gardens of the Villa Rufolo.</p>
        <p>The plush, upscale rooms come with Wi-Fi, flat-screen TVs and sea views; some have terraces. Most suites add separate living rooms, dining rooms and/or antique-style furnishings.</p>
        <p>Breakfast is available. There is also a refined restaurant with a sea view terrace, as well as a cozy bar. Other amenities include an outdoor pool and landscaped gardens, plus a gym and a spa. There is also diving activity. Kids age 16 and older are welcome.</p>`
    ),
    new Hotel(
        "Grand Hotel Tremezzo",
        "Lake Como, Italy",
        "Italy",
        "Como",
        "hotel",
        6,
        "$1517",
        "Rafting",
        `<p>Overlooking Lake Como, this palatial art nouveau hotel is 250 m from the Villa Carlotta museum and botanical garden.</p>
        <p>Formal rooms offer Wi-Fi, flat-screen TVs, minibars and park or lake views; some have balconies or sitting areas. Suites include whirlpool tubs, and some have private gardens. Rooftop suites add butlers, and terraces with hot tubs. Room service is available</p>
        <p>Breakfast is served in an elegant restaurant which has a terrace; there's also a casual trattoria, a posh bar, a beachfront bistro, and a poolside pizzeria. There is rafting activity, 3 pools, a private beach, and a marina, plus a spa, a fitness room, and a tennis court.</p>`
    ),
    new Hotel(
        "The Oberoi Udaivilas Hotel",
        "Udaipur, India",
        "India",
        "Udaipur",
        "hotel",
        3,
        "Wingsuit surfing",
        `<p>Set amid gardens and overlooking Lake Pichola, this luxury hotel is 2 km from both Jagdish Temple and the City Palace Museum.</p>
        <p>Bright, elegant rooms and suites feature flat-screen TVs, free Wi-Fi, DVD players, and sitting areas, plus minibars and iPod docks. Suites add dining rooms, living rooms, and coffeemakers, as well as private pools and furnished courtyards with lake views. A 24-hour butler service is available.</p>
        <p>Amenities include 2 upscale restaurants and a bar with lake views; private outdoor lakeside dining is available. There is also a gym, a spa, and an outdoor pool, plus a business center, meeting rooms, and wingsuit surfing activity event.</p>`
    ),
    new Hotel(
        "AKA Beverly Hills Hotel",
        "Los Angeles, USA",
        "USA",
        "Los Angeles",
        "hotel",
        5,
        "Mountain biking",
        `<p>This upscale, extended-stay hotel in the prestigious Golden Triangle area is 8 minutes on foot from the glitzy shops on Rodeo Drive and 6 miles from Santa Monica Airport.</p>`
    ),
    new Hotel(
        "Majestic Elegance",
        "Dominican Republic",
        "Dominican Republic",
        "hotel",
        4,
        "skiing"

    ),
    new Hotel(
        "Dreams Watervilla",
        "Meeru Island, Maldives",
        "Maldives",
        "hotel",
        5,
        "Water Sports"
    ),
    new Hotel(
        "Waldorf Astoria",
        "Rome, Italy",
        "Italy",
        "hotel",
        3,
        "golf"
    ),
    new Hotel(
        "Gilli Air",
        "Indonesia",
        "Indonesia",
        "hotel",
        4,
        "golf"
    ),
    new Hotel(
        "Gilli Air",
        "Indonesia",
        "Indonesia",
        "hotel",
        4,
        "Yoga and Wellness"

    ),
    new Hotel(
        "The Savoy",
        "London,Uk",
        "UK",
        "hotel",
        4,
        "biking"
    ),
    new Hotel(
        "Aman",
        "Tokyo,Japan",
        "Japan",
        "hotel",
        4,
        "sailing"
    ),
    new Hotel(
        "Burj Al Arab Jumeirah",
        "United Arab Emirates",
        "United Arab Emirates",
        "hotel",
        5,
        "surfing" 
    ),
    new Hotel(
        "The Plaza Hotel",
        "New York,Usa",
        "USA",
        "hotel",
        5,
        "skateboarding" 
    ),
];

console.log(Hotels_Restaurants);



var Activities = [];

function Activity(title, img) {
  this.title = title;
  this.img = img;
}

function addActivity(title, img) {
  var activity = new Activity(title, img);
  Activities.push(activity);
}

addActivity("Sailing", "images/sailing.png");
addActivity("Climbing", "images/climbing.png");
addActivity("Skiing", "images/skiing.png");
addActivity("Hiking", "images/Hiking.png");
addActivity("running", "images/runn.png");
addActivity("ioga", "images/ioga.png");
addActivity("surfing", "images/surf.png");
addActivity("biking", "images/biking2.png");
addActivity("skateboarding", "images/skateboarding.png");
addActivity("hunting", "images/hunting.png");
addActivity("fishing", "images/fishing.png");
addActivity("Dancing", "images/dancing.png");

console.log(Activities);

