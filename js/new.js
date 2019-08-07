/**
 * 全局变量
 */
var g_userid;
var b_userid = false;
var g_pwd;
var b_pwd = false;
var g_username;
var b_username = false;
var g_level, g_reserved;
var b_level = false;

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


$(document).ready(function () {
    var uid = GetQueryString("adminid");
    document.getElementById("id-span-login").innerText += uid;
});

function on_new_submit() {
    var u_new_user = {};
    u_new_user.id = foreach_id();
    u_new_user.userid = g_userid;
    u_new_user.pwd = g_pwd;
    u_new_user.pwdmd5 = $.md5(g_pwd);
    u_new_user.name = g_username;
    u_new_user.level = g_level;
    u_new_user.reserved = g_reserved;
    localStorage.setItem(u_new_user.id, JSON.stringify(u_new_user));
    window.location.href = "admin.html";
}

 

function on_userid_blur(thisId) {
    var v_userid = document.getElementById(thisId).value;
    if (v_userid != " ") {
        g_userid = v_userid;
        b_userid = true;
    } else {
        document.getElementById("id-span-userid").innerText = "please enter user id";
    }
    validate_all_info();
}

function on_pwd_blur(thisId) {
    var v_pwd = document.getElementById(thisId).value;
    if (v_pwd != "") {
        g_pwd = v_pwd;
        b_pwd = true;
    } else {
        document.getElementById("id-span-pwd").innerText = "please enter user password.";
    }
    validate_all_info();
}

function on_repwd_blur(thisId, idpwd) {
    var v_pwd = document.getElementById(idpwd).value;
    var v_repwd = document.getElementById(thisId).value;
    if (v_pwd == v_repwd) {
        document.getElementById("id-span-repwd").innerText = "re-enter password crrect.";
        g_pwd = v_repwd;
        b_pwd = true;
    } else {
        document.getElementById(idpwd).value = "";
        document.getElementById(thisId).value = "";
        document.getElementById("id-span-pwd").innerText = "please re-enter your password";
        document.getElementById("id-span-repwd").innerText = "please re-enter password not match";
    }
    validate_all_info();
}

function on_username_blur(thisId) {
    var v_username = document.getElementById(thisId).value;
    if (v_username != "") {
        g_username = v_username;
        b_username = true;
    } else {
        document.getElementById("id-span-username").innerText = "please enter user name.";
    }
    validate_all_info();
}

function on_level_change(thisId) {
    var id = document.getElementById(thisId);
    var v_value = id.options[id.options.selectedIndex].value;
    console.log("level is changed to " + v_value);
    switch (v_value) {
        case "1":
            g_level = "admin";
            g_reserved = v_value;
            b_level = true;
            break;
        case "2":
            g_level = "admin";
            g_reserved = v_value;
            b_level = true;
            break;
        case "3":
            g_level = "admin";
            g_reserved = v_value;
            b_level = true;
            break;
        default:
            g_level = "";
            g_reserved = v_value;
            b_level = false;
            document.getElementById("id_span_level").innerText = "please select user level.";
            break;
    }
    validate_all_info();
}

function validate_all_info() {
    var b_vail = false;
    if (b_userid && b_pwd && b_username && b_level) {
        b_vail = true;
        document.getElementById("id-span-submit").innerText = "all info correct.";
        document.getElementById("id-submit").removeAttribute("disabled");
    } else {
        document.getElementById("id-span-submit").innerText = "please check your info.";
        document.getElementById("id-submit").setAttribute("disable", "disabled");
    }
    return b_vail;
}