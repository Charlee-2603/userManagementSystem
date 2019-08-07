/*
    定义全局变量
 */
var g_userid, g_pwd, g_reserved;
var v_validata_userid = false;
var v_validata_pwd = false;

/*
    遍历localStorage键值
 */
function foreach_userid(thisid) {
    var v_userid = document.getElementById(thisid).value;
    for (var i = 0; i < localStorage.length; i++) {
        var data = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (v_userid == data.userid) {
            g_userid = v_userid;
            v_validata_userid = true;
            break;
        } else {
            v_validata_userid = false;
        }
    }
    return v_validata_userid;
}

/*
    验证用户id
 */
function on_userid_blur(thisId) {
    var v_userid = document.getElementById(thisId).value;
    if (v_userid == "") {
        document.getElementById("id-span-userid").innerHTML = "please enter user id.";
    } else {
        if (foreach_userid(thisId)) {
            document.getElementById("id-span-userid").innerHTML = "your user id is right.";
        } else {
            document.getElementById(thisId).value = "";
            document.getElementById("id-span-userid").innerHTML = "please check your user id.";
        }
    }
}

/*
    遍历localStorage键值
 */
function foreach_pwd(pwd, userid) {
    var v_userid = document.getElementById(userid).value;
    var md5_password = $.md5(pwd);
    for (var i = 0; i < localStorage.length; i++) {
        var data = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if ((v_userid == data.userid) && (md5_password == data.pwdm5)) {
            g_userid = data.userid;
            g_pwd = data.pwdm5;
            g_reserved = data.reserved;
            v_validata_pwd = true;
            break;
        } else {
            v_validata_pwd = false;
        }
    }
    return v_validata_pwd;
}

/*
    验证用户密码
 */
function on_pwd_blur(thisId) {
    var v_password = document.getElementById(thisId).value;
    if (v_password == "") {
        document.getElementById('id-span-password').innerHTML = "please enter user password.";
    } else {
        if (foreach_pwd(v_password, "userid")) {
            document.getElementById('id-span-pwd').innerHTML = "your user password is right.";
            document.getElementById(thisId).value = g_pwd;
            document.getElementById("id-submit").removeAttribute("disabled");
        } else {
            document.getElementById(thisId).value = "";
            document.getElementById("id-span-pwd").innerHTML = "please check your user password."
            document.getElementById("id-submit").setAttribute("disabled", "disabled");
        }
    }
}

/*
   页面跳转
 */

function on_login_submit() {
    if (g_reserved == '1') {
        document.location.href = "admin.html?userid=" + g_userid + "&password=" + g_pwd;
    } else if (g_reserved == '2') {
        document.location.href = "manager.html?userid=" + g_userid + "&password=" + g_pwd;
    } else if (g_reserved == '3') {
        document.location.href = "guest.html?userid=" + g_userid + "&password=" + g_pwd;
    } else {
        document.location.href = "about.html";
    }
    return false;
}
