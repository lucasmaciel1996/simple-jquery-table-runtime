var citys = [];
function removeitem(id) {
  const index = citys.findIndex((item) => item.id == id);
  if (index == -1) {
    alert("Não encontrado");
    return;
  }
  citys.slice(index, 1);
  $("#" + id).remove();
}

function editItem(id) {
  const index = citys.findIndex((item) => item.id == id);
  if (index == -1) {
    alert("Não encontrado");
    return;
  }

  const city = citys[index];

  $("#id").val(city.id);
  $("#uf").val(city.uf);
  $("#city").val(city.city);
}
function save(obj) {
  row_table = "<td>" + obj.id + "</td>";
  row_table += "<td>" + obj.uf + "</td>";
  row_table += "<td>" + obj.city + "</td>";

  row_table +=
    "<td><button onclick='editItem(" + obj.id + ")'>ED</button></td>";
  row_table +=
    "<td><button onclick='removeitem(" + obj.id + ")'>EX</button></td>";

  $("table tbody").append("<tr id=" + obj.id + ">" + row_table + "</tr>");
  citys.push(obj);
  clearInputs();
}
function update(obj) {
  const index = citys.findIndex((item) => item.id == obj.id);
  if (index == -1) {
    alert("Não encontrado");
    return;
  }

  citys[index].uf = obj.uf;
  citys[index].city = obj.city;
  var varAux = citys;
  citys = [];

  $("table > tbody").html("");

  varAux.map((obj) => save(obj));
}

function clearInputs() {
  $("#id").val("");
  $("#uf").val("");
  $("#city").val("");
}

$("#save").on("click", function (event) {
  event.preventDefault();

  if ($("#id").val() == "") {
    var obj = {
      id: citys.length,
      uf: $("#uf").val() == "" ? "UF" : $("#uf").val(),
      city: $("#city").val() == "" ? "CITY" : $("#city").val(),
    };

    save(obj);
    return;
  }
  var obj = {
    id: $("#id").val(),
    uf: $("#uf").val() == "" ? "UF" : $("#uf").val(),
    city: $("#city").val() == "" ? "CITY" : $("#city").val(),
  };
  update(obj);
});
