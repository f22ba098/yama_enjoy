function LoginPage() {

    let txt = document.getElementById("mail").value;
    let txt2 = document.getElementById("pass").value;

    if (txt == "f22ba098@gmail.com" && txt2 == "yakiniku") {
        location.href = "top.html";
    } else {
        alert("メールアドレスまたはパスワードが違います。");
    }

}
