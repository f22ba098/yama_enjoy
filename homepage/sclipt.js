function LoginPage() {

    let txt = document.getElementById("mail").value;
    let txt2 = document.getElementById("pass").value;

    if (txt == "f22ba098@chuo.ac.jp" && txt2 == "890ab22F!dic") {
        location.href = "top.html";
    } else {
        alert("メールアドレスまたはパスワードが違います。");
    }

}