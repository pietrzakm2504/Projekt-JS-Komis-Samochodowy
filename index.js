function Details(name, price, model, power, milage) {
  document.getElementById("name").innerHTML = name;
  document.getElementById("price").innerHTML = price;
  document.getElementById("model").innerHTML = model;
  document.getElementById("power").innerHTML = power;
  document.getElementById("milage").innerHTML = milage;
  document.getElementById("amount").innerHTML =
    document.getElementById("price").innerHTML;

  document.getElementById("Oname").value = localStorage.getItem("Oname");

  if (localStorage.getItem("carFinType") == "lease") {
    document.getElementById("lease").checked = true;
  } else {
    document.getElementById("cash").checked = true;
  }
  let t = parseInt(document.getElementById("amount").innerHTML);
  if (localStorage.getItem("tire") == "true") {
    document.getElementById("Wtires").style.display = "block";
    document.getElementById("tire").checked = true;
    t += 100;
  } else {
    document.getElementById("tire").checked = false;
  }

  if (localStorage.getItem("CDgps") == "true") {
    document.getElementById("CDgps").style.display = "block";
    document.getElementById("gps").checked = true;
    t += 150;
  } else {
    document.getElementById("gps").checked = false;
  }

  if (localStorage.getItem("CDwarranty") == "true") {
    document.getElementById("CDwarranty").style.display = "block";
    document.getElementById("warranty").checked = true;
    t += 200;
  } else {
    document.getElementById("warranty").checked = false;
  }

  document.getElementById("amount").innerHTML = t;
  let x = document.getElementById("CarsList");
  let y = document.getElementById("CarForm");
  let z = document.getElementById("searchDiv");

  x.style.display = "none";
  z.style.display = "none";
  y.style.display = "block";
}

// Function that will take you back to home page from details form
function BackFunction() {
  let x = document.getElementById("CarsList");
  let z = document.getElementById("searchDiv");
  let y = document.getElementById("CarForm");
  let w = document.getElementById("ThankyouForm");
  y.style.display = "none";
  w.style.display = "none";
  x.style.display = "block";
  z.style.display = "block";
}

// Function to show Purchase order details
function PurchaseFunction() {
  if (
    document.getElementById("Oname").value == "" ||
    document.getElementById("Oname").value == null
  ) {
    document.getElementById("error").innerHTML =
      "Error: Uzupełnij imię i nazwisko";
    document.getElementById("error").style.display = "block";
    return;
  } else {
    document.getElementById("error").style.display = "none";
  }

  let tname = document.getElementById("Oname").value.indexOf(" ");
  if (tname < 1 || tname == document.getElementById("Oname").value.length - 1) {
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
    document.getElementById("Oname").text;
  document.getElementById("deliveryDate").innerHTML =
    document.getElementById("date").text;
  document.getElementById("ownerName").innerHTML =
    document.getElementById("Oname").value;
  document.getElementById("TAmount").innerHTML =
    document.getElementById("amount").innerHTML;
  let x = document.getElementById("ThankyouForm");
  let y = document.getElementById("CarForm");
  x.style.display = "block";
  y.style.display = "none";

  localStorage.setItem("Oname", "");
  localStorage.setItem("carFinType", "");
  localStorage.setItem("tire", "");
  localStorage.setItem("CDgps", "");
  localStorage.setItem("CDwarranty", "");
  localStorage.setItem("amount", 0);

  carName = document.getElementById("namePur").innerHTML;
  img = document.getElementById("CarImagePur");
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
function CheckFunction(i) {
  total = parseInt(document.getElementById("amount").innerHTML);

  if (i == 1) {
    if (document.getElementById("tire").checked) {
      total += 100;
      document.getElementById("Wtires").style.display = "block";
      localStorage.setItem("tire", true);
    } else {
      total -= 100;
      document.getElementById("Wtires").style.display = "none";
      localStorage.setItem("tire", false);
    }
  } else if (i == 2) {
    if (document.getElementById("gps").checked) {
      total += 150;
      document.getElementById("CDgps").style.display = "block";
      localStorage.setItem("CDgps", true);
    } else {
      total -= 150;
      document.getElementById("CDgps").style.display = "none";
      localStorage.setItem("CDgps", false);
    }
  } else if (i == 3) {
    if (document.getElementById("warranty").checked) {
      total += 200;
      document.getElementById("CDwarranty").style.display = "block";
      localStorage.setItem("CDwarranty", true);
    } else {
      total -= 200;
      document.getElementById("CDwarranty").style.display = "none";
      localStorage.setItem("CDwarranty", false);
    }
  }
  document.getElementById("amount").innerHTML = total;
  localStorage.setItem("amount", total);
}

// Function for searching car on home page
function searchFunction() {
  year = document.getElementById("searchBox").value;
  arr = ["2018", "2019", "2020", "2021", "2022"];

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
    localStorage.setItem("Oname", document.getElementById("Oname").value);
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
