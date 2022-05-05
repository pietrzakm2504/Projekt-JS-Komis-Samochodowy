let searchButton = document.getElementById("searchButton");
let purchaseBtn = document.getElementById("purchaseBtn");
let backBtn = document.getElementById("backBtn");
let homeBtn = document.getElementById("homeBtn");
let mercedes = document.getElementById("mercedes");
let ferrari = document.getElementById("ferrari");
let lamborghini = document.getElementById("lamborghini");
let mclaren = document.getElementById("mclaren");
let porsche = document.getElementById("porsche");
let tire = document.getElementById("tire");
let gps = document.getElementById("gps");
let warranty = document.getElementById("warranty");

searchButton.addEventListener("click", searchFunction);
purchaseBtn.addEventListener("click", purchaseFunction);
backBtn.addEventListener("click", backFunction);
homeBtn.addEventListener("click", backFunction);

mercedes.addEventListener("click", () =>
  details("Mercedes", 20000, 2021, 2000, 20000)
);
ferrari.addEventListener("click", () =>
  details("Ferrari", 24000, 2022, 2500, 25000)
);
lamborghini.addEventListener("click", () =>
  details("lamborghini", 28000, 2020, 1800, 18000)
);
mclaren.addEventListener("click", () =>
  details("Mclaren", 19000, 2019, 1700, 28000)
);
porsche.addEventListener("click", () =>
  details("Porsche", 12000, 2018, 1500, 20000)
);

tire.addEventListener("change", () => checkFunction(1));
gps.addEventListener("change", () => checkFunction(2));
warranty.addEventListener("change", () => checkFunction(3));

function details(name, price, model, power, milage) {
  document.getElementById("name").innerHTML = name;
  document.getElementById("price").innerHTML = price;
  document.getElementById("model").innerHTML = model;
  document.getElementById("power").innerHTML = power;
  document.getElementById("milage").innerHTML = milage;
  document.getElementById("amount").innerHTML =
    document.getElementById("price").innerHTML;

  document.getElementById("oname").value = localStorage.getItem("Oname");

  if (localStorage.getItem("carFinType") == "lease") {
    document.getElementById("lease").checked = true;
  } else {
    document.getElementById("cash").checked = true;
  }
  let t = parseInt(document.getElementById("amount").innerHTML);
  if (localStorage.getItem("tire") == "true") {
    document.getElementById("wtires").style.display = "block";
    document.getElementById("tire").checked = true;
    t += 100;
  } else {
    document.getElementById("tire").checked = false;
  }

  if (localStorage.getItem("cdgps") == "true") {
    document.getElementById("cdgps").style.display = "block";
    document.getElementById("gps").checked = true;
    t += 150;
  } else {
    document.getElementById("gps").checked = false;
  }

  if (localStorage.getItem("cdwarranty") == "true") {
    document.getElementById("cdwarranty").style.display = "block";
    document.getElementById("warranty").checked = true;
    t += 200;
  } else {
    document.getElementById("warranty").checked = false;
  }

  document.getElementById("amount").innerHTML = t;
  let x = document.getElementById("carsList");
  let y = document.getElementById("carForm");
  let z = document.getElementById("searchDiv");

  x.style.display = "none";
  z.style.display = "none";
  y.style.display = "block";
}

// Function that will take you back to home page from details form
function backFunction() {
  let x = document.getElementById("carsList");
  let z = document.getElementById("searchDiv");
  let y = document.getElementById("carForm");
  let w = document.getElementById("thankyouForm");
  y.style.display = "none";
  w.style.display = "none";
  x.style.display = "block";
  z.style.display = "block";
}

// Function to show Purchase order details
function purchaseFunction() {
  if (
    document.getElementById("oname").value == "" ||
    document.getElementById("oname").value == null
  ) {
    document.getElementById("error").innerHTML =
      "Error: Uzupełnij imię i nazwisko";
    document.getElementById("error").style.display = "block";
    return;
  } else {
    document.getElementById("error").style.display = "none";
  }

  let tname = document.getElementById("oname").value.indexOf(" ");
  if (tname < 1 || tname == document.getElementById("oname").value.length - 1) {
    document.getElementById("error").innerHTML =
      "Error: Uzupełnij imię i nazwisko";
    document.getElementById("error").style.display = "block";
    return;
  } else {
    document.getElementById("error").style.display = "none";
  }

  document.getElementById("namePur").innerHTML =
    document.getElementById("name").innerHTML;
  document.getElementById("pricePur").innerHTML =
    document.getElementById("price").innerHTML;
  document.getElementById("modelPur").innerHTML =
    document.getElementById("model").innerHTML;
  document.getElementById("powerPur").innerHTML =
    document.getElementById("power").innerHTML;
  document.getElementById("milagePur").innerHTML =
    document.getElementById("milage").innerHTML;
  // document.getElementById("amountPur").innerHTML = document.getElementById("amount").innerHTML ;

  if (document.getElementById("lease").checked) {
    document.getElementById("finance").innerHTML = "Lease";
  } else {
    document.getElementById("finance").innerHTML = "Cash";
  }
  document.getElementById("ownerName").innerHTML =
    document.getElementById("oname").text;
  document.getElementById("deliveryDate").innerHTML =
    document.getElementById("date").text;
  document.getElementById("ownerName").innerHTML =
    document.getElementById("oname").value;
  document.getElementById("tamount").innerHTML =
    document.getElementById("amount").innerHTML;
  let x = document.getElementById("thankyouForm");
  let y = document.getElementById("carForm");
  x.style.display = "block";
  y.style.display = "none";

  localStorage.setItem("Oname", "");
  localStorage.setItem("carFinType", "");
  localStorage.setItem("tire", "");
  localStorage.setItem("CDgps", "");
  localStorage.setItem("CDwarranty", "");
  localStorage.setItem("amount", 0);

  carName = document.getElementById("namePur").innerHTML;
  img = document.getElementById("carImagePur");
  if (carName == "Mercedes") {
    img.src = "Mercedes.jpg";
  } else if (carName == "Ferrari") {
    img.src = "Ferrari.jpg";
  } else if (carName == "lamborghini") {
    img.src = "lamborghini.jpg";
  } else if (carName == "Mclaren") {
    img.src = "mclaren-p1.jpg";
  } else if (carName == "Porsche") {
    img.src = "Porsche.jpg";
  }
}

//  Function to validate form
function checkFunction(i) {
  total = parseInt(document.getElementById("amount").innerHTML);

  if (i == 1) {
    if (document.getElementById("tire").checked) {
      total += 100;
      document.getElementById("wtires").style.display = "block";
      localStorage.setItem("tire", true);
    } else {
      total -= 100;
      document.getElementById("wtires").style.display = "none";
      localStorage.setItem("tire", false);
    }
  } else if (i == 2) {
    if (document.getElementById("gps").checked) {
      total += 150;
      document.getElementById("cdgps").style.display = "block";
      localStorage.setItem("cdgps", true);
    } else {
      total -= 150;
      document.getElementById("cdgps").style.display = "none";
      localStorage.setItem("cdgps", false);
    }
  } else if (i == 3) {
    if (document.getElementById("warranty").checked) {
      total += 200;
      document.getElementById("cdwarranty").style.display = "block";
      localStorage.setItem("cdwarranty", true);
    } else {
      total -= 200;
      document.getElementById("cdwarranty").style.display = "none";
      localStorage.setItem("cdwarranty", false);
    }
  }
  document.getElementById("amount").innerHTML = total;
  localStorage.setItem("amount", total);
}

// Function for searching car on home page
function searchFunction() {
  let year = document.getElementById("searchBox").value;
  let arr = ["2018", "2019", "2020", "2021", "2022"];

  for (i = 0; i < 5; i++) {
    if (year == "") {
      document.getElementsByName(arr[i])[0].style.display = "block";
    } else if (arr[i] == year) {
      document.getElementsByName(arr[i])[0].style.display = "block";
    } else {
      document.getElementsByName(arr[i])[0].style.display = "none";
    }
  }
}

// Function to store data on local storage
function storeFunction(op) {
  if (op == "Oname") {
    localStorage.setItem("Oname", document.getElementById("oname").value);
  } else if (op == "carFinType") {
    if (document.getElementById("lease").checked) {
      localStorage.setItem("carFinType", "lease");
    } else {
      localStorage.setItem("carFinType", "cash");
    }
  }
}

//Date +14 days
let date = document.getElementById("date");
let d = new Date();
d.setDate(d.getDate() + 14);
let text = d.toLocaleDateString();
date.text = text;
