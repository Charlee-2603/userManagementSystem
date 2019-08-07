/**
 * 全局变量
 */
var g_adminId;
$(document).ready(function () {
    g_adminId = GetQueryString("userid");
    document.getElementById("id-span-login").innerText += g_adminId;
    init_info_admin();
});

/**
 * GetQueryString
 * 用于获取页面url链接中各个字段的值
 */
function GetQueryString(name) {
    var reg = new RegExp("(^ | &)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return (r[2]);
    }
    return null;
};

function init_info_admin() {
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
        var uid = data.id;
        no += 1;
        document.getElementById("id-user-info").innerHTML +=
            "<tr>" +
            "<td>" + no + "</td>" +
            "<td>" + data.id + "</td>" +
            "<td>" + data.userid + "</td>" +
            "<td>" + data.pwd + "</td>" +
            "<td>" + data.name + "</td>" +
            "<td>" + data.level + "</td>" +
            "<td>" + "<a href='new.html?adminId =" + g_adminId + "'>New</a>" + "&nbsp;&nbsp;" +
            "<a href='edit.html?adminId =" + g_adminId + "&uid=" + uid + "'>Edit</a>" + "&nbsp;&nbsp;" +
            "<a href='del.html?adminId =" + g_adminId + "&uid=" + uid + "'>Del</a>" +
            "</td>" +
            "</tr>";
    }
}