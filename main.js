
$(document).ready(function() {
    
    let newPassword = generatePassword();

    $('#txtPassword').html(newPassword);

    $('#btnGenerate').click(function() {
        newPassword = generatePassword();
        $('#txtPassword').html(newPassword);
    });

    $('#nCharacters').change(function(){
        $('#lblCharacters').html($(this).val());
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

function generatePassword() {

    const length = $('#nCharacters').val();
    const incNumbers = $('#sNumbers').is(":checked");
    const incSymbols = $('#sSymbols').is(":checked");

    const alpha = "abcdefghjkmnpqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ";
    const numbers = "123456789";
    const symbols = "!@#$%^&*_-+=";

    let characters = alpha;
    incNumbers ? (characters += numbers) : "";
    incSymbols ? (characters += symbols) : "";

    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return password;
}