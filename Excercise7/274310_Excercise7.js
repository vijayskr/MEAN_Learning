function chg_p() {
  document.getElementById("tstP").style.backgroundColor = "lightblue";
  document.getElementById("tstP").style.fontFamily = "Arial";
  document.getElementById("tstP").style.fontSize = "5em";
  document.getElementById("tstP").style.color = "red";
}

function chg_p_Bg() {
  document.getElementById("bgPara").style.backgroundColor = "lightblue";
}

function getName() {
  var firstName = document.getElementById("firstName");
  var lastName = document.getElementById("lastName");

  if (firstName.value != "" && lastName.value != "") {
    alert(
      "The Name in the text box is:: " + firstName.value + " " + lastName.value
    );
  } else {
    alert("Text Box is empty");
  }
}

function getAttributes() {
  var u = document.getElementById("linkattr").href;
  alert("The value of the href attribute of the link is : " + u);
  var v = document.getElementById("linkattr").hreflang;
  alert("The value of the hreflang attribute of the link is : " + v);
  var w = document.getElementById("linkattr").rel;
  alert("The value of the rel attribute of the link is : " + w);
  var x = document.getElementById("linkattr").target;
  alert("The value of the taget attribute of the link is : " + x);
  var y = document.getElementById("linkattr").type;
  alert("The value of the type attribute of the link is : " + y);
}

function addTableRow() {
  var table = document.getElementById("tbl1");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
}

function removeOption() {
  var x = document.getElementById("mySelect");
  x.remove(x.selectedIndex);
}

function changeContent(id, row, cell, content) {
  var x = document.getElementById(id).rows[row].cells;
  x[cell].innerHTML = content;
}

function createTable() {
  var r = document.getElementById("rowTxt");
  var c = document.getElementById("colTxt");
  var body = document.body,
    tbl = document.createElement("table");
  tbl.style.width = "100px";
  tbl.style.border = "1px solid black";
  if (r.value != "" && c.value != "") {
    for (var i = 0; i < r.value; i++) {
      var tr = tbl.insertRow();
      for (var j = 0; j < c.value; j++) {
        if (i == r.value  && j == c.value) {
          break;
        } else {
          var td = tr.insertCell();
          td.appendChild(document.createTextNode("Cell"));
          td.style.border = "1px solid black";
          if (i == 1 && j == 1) {
            td.setAttribute("rowSpan", "2");
          }
        }
      }
    }
    body.appendChild(tbl);
  }
  else
  {
      alert("Input Values not given");
  }

}
