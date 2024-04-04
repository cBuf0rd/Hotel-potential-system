var membershipObject = {
    "Diamond": {
        "Platnium": ["$50000.99", "$500000.99", "$5000000.99"],
        "Exec": ["$5000.99", "$50000.99", "$500000.99"],
        "General": ["$100.99", "$50000.99", "$50549.99"]
      },
      "Gold": {
        "Exec": ["$10", "$100", "$1000"],
        "General": ["$1", "10", "$100"]
      }
  }
  window.onload = function() {
    var membershipSel = document.getElementById("membership");
    var memLevSel = document.getElementById("memLevel");
    var priceSel = document.getElementById("price");
    for (var x in membershipObject) {
      membershipSel.options[membershipSel.options.length] = new Option(x, x);
    }
    membershipSel.onchange = function() {
      //empty Chapters- and Topics- dropdowns
      priceSel.length = 1;
      memLevSel.length = 1;
      //display correct values
      for (var y in membershipObject[this.value]) {
        memLevSel.options[memLevSel.options.length] = new Option(y, y);
      }
    }
    memLevSel.onchange = function() {
      //empty Chapters dropdown
      priceSel.length = 1;
      //display correct values
      var z = membershipObject[membershipSel.value][this.value];
      for (var i = 0; i < z.length; i++) {
        priceSel.options[priceSel.options.length] = new Option(z[i], z[i]);
      }
    }
  }
  $submit.onclick = function(){
    console.log("Thank you for your information! Welcome to the cult I mean club");
  };