$(document).ready(function () {
    /*
        init user info
     */
    var no = 0;
    document.getElementById("id-user-info").innerHTML =
        "<tr>" +
        "<th>" + "No." + "</th>" +
        "<th>" + "id" + "</th>" +
        "<th>" + "userid" + "</th>" +
        "<th>" + "pwd" + "</th>" +
        "<th>" + "name" + "</th>" +
        "<th>" + "level" + "</th>" +
        "<th>" + "manual" + "</th>" +
        "</tr>";
    for (var i = 0; i < localStorage.length; i++) {
        var data = JSON.parse(localStorage.getItem(localStorage.key(i)));
        no += 1;
        document.getElementById("id-user-info").innerHTML +=
            "<tr>" +
            "<td>" + no + "</td>" +
            "<td>" + data.id + "</td>" +
            "<td>" + data.userid + "</td>" +
            "<td>" + data.pwd + "</td>" +
            "<td>" + data.name + "</td>" +
            "<td>" + data.level + "</td>" +
            "<td>" + "" + "</td>" +
            "</tr>";
    }
});