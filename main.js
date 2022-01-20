
$(document).ready(function() {

    let newPassword = generatePassword();

    $('#txtPassword').html(newPassword);
    $('#btnGenerate').click(function() {
        newPassword = generatePassword();
        $('#txtPassword').html(newPassword);
    });
});

function getDTStamp() {
    const now = new Date();
    const offsetMs = now.getTimezoneOffset() * 60 * 1000;
    const dateLocal = new Date(now.getTime() - offsetMs);
    const str = dateLocal.toISOString().slice(0, 19).replace(/-/g, "/").replace("T", " ");
    return str;
}

function showStatus(msg) {
    $('#lblStatus').html(msg);
    $('#lblStatus').delay(5000).fadeOut('slow');
}

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
    showStatus('Copied');
}

function generatePassword(pLength) {
    var pLength = (pLength)?(pLength):(8);
    var keyListAlpha="abcdefghijklmnopqrstuvwxyz",
        keyListInt="123456789",
        keyListSpec="!@#_",
        password='';
    var len = Math.ceil(pLength/2);
    len = len - 1;
    var lenSpec = pLength-2*len;

    for (i=0;i<len;i++) {
        password+=keyListAlpha.charAt(Math.floor(Math.random()*keyListAlpha.length));
        password+=keyListInt.charAt(Math.floor(Math.random()*keyListInt.length));
    }

    for (i=0;i<lenSpec;i++)
        password += keyListSpec.charAt(Math.floor(Math.random()*keyListSpec.length));
    password = password.split('').sort(function(){return 0.5-Math.random()}).join('');

    //We return the password to the browser
    return password;
}