const pages = {
    "/index.html": "index.html",
    "/forcast.html": "forcast.html",
    "/dummie.html": "dummie.html",
    "/dummie-more.html": "dummie-more.html",
    "/test.html": "test.html",
    "/test-testing.html": "test-testing.html",
    "/test-history.html": "test-history.html",
    "/result.html": "result.html",
    "/admin-test.html": "admin-test.html",
    "/admin-member.html": "admin-member.html",
    "/admin-activity.html": "admin-activity.html",
    "/verifypage.html": "verifypage.html"
}

const titles = {
    "index.html": "職得期待",
    "forcast.html": "景氣預測",
    "dummie.html": "資訊懶人包",
    "dummie-more.html": "懶人包-更多",
    "test.html": "職涯測驗",
    "test-testing.html": "職涯測驗",
    "test-history.html": "歷史紀錄",
    "result.html": "測驗結果",
    "admin-test.html": "測驗管理",
    "admin-member.html": "會員管理",
    "admin-activity.html": "會員活動紀錄",
    "verifypage.html": "信箱驗證成功"
}

const cssFiles = {
    "index.html": ["css/layout.css", "css/layout-rwd.css", "css/index.css", "css/index-rwd.css"],
    "forcast.html": ["css/layout.css", "css/layout-rwd.css", "css/forcast.css", "css/forcast-rwd.css"],
    "dummie.html": ["css/layout.css", "css/layout-rwd.css", "css/dummie.css", "css/dummie-rwd.css"],
    "dummie-more.html": ["css/layout.css", "css/layout-rwd.css", "css/dummie-more.css", "css/dummie-more-rwd.css"],
    "test.html": ["css/layout.css", "css/layout-rwd.css", "css/test.css", "css/test-rwd.css"],
    "test-testing.html": ["css/layout.css", "css/layout-rwd.css", "css/test.css", "css/test-rwd.css"],
    "test-history.html": ["css/layout.css", "css/layout-rwd.css", "css/test-history.css", "css/test-history-rwd.css"],
    "result.html": ["css/layout.css", "css/layout-rwd.css", "css/result.css", "css/result-rwd.css"],
    "admin-test.html": ["css/layout.css", "css/layout-rwd.css", "css/admin-test.css", "css/admin-test-rwd.css"],
    "admin-member.html": ["css/layout.css", "css/layout-rwd.css", "css/admin-member.css", "css/admin-member-rwd.css"],
    "admin-activity.html": ["css/layout.css", "css/layout-rwd.css", "css/admin-activity.css", "css/admin-activity-rwd.css"],
    "verifypage.html": ["css/layout.css", "css/layout-rwd.css", "css/verifypage.css"]
}

const jsFiles = {
    "index.html": ["javascript/carousel.js"],
    "test-testing.html": ["javascript/dropable.js"],
    "test-history.html": ["javascript/sorttable.js"],
    "admin-test.html": ["javascript/sorttable.js", "javascript/addquestion.js", "javascript/editquestion.js", "javascript/addoption.js"],
    "admin-member.html": ["javascript/adduser.js", "javascript/edituser.js"]
}

function layout(page) {
    fetch("layout.html")
    .then((response) => response.text())
    .then((html) => {
        document.body.innerHTML = html;
        return fetch(page);
    })
    .then((response) => response.text())
    .then((pageHtml) => {
        const main = document.querySelector("main");
        main.innerHTML = pageHtml;
        const title = titles[page];
        const cssFile = cssFiles[page];
        const jsFile = jsFiles[page];
        login();
        userinfo();

        const iconlink = document.createElement("link");
        iconlink.rel = "icon";
        iconlink.href = "images/logo.png";
        document.head.appendChild(iconlink);

        if (title) {
            document.title = title;
        }
        
        if (cssFile) {
            cssFile.forEach((cssfile) => {
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = cssfile;
                document.head.appendChild(link);
            });
        }

        if (jsFile) {
            jsFile.forEach((jsfile) => {
                const script = document.createElement("script");
                script.src = jsfile;
                script.async = false;
                document.body.appendChild(script);
            });
        }
    })
    .catch((error) => {
        console.error("加載指定頁面失敗：", error);
    });
}

window.addEventListener("DOMContentLoaded", function () {
    const pathname = window.location.pathname;
    let page = pages[pathname] || "index.html";
    layout(page);
});

function login() {
    var login = document.querySelectorAll("#login");
    var register = document.getElementById("register");
    var forgotpwd = document.getElementById("forgotpwd");
    var closebtn = document.querySelectorAll("#close");
    var loginpage = document.getElementById("loginpage");
    var registerpage = document.getElementById("registerpage");
    var forgotpage = document.getElementById("forgotpage");

    login.forEach(function(link){
        link.addEventListener("click", function(event){
            event.preventDefault();
            loginpage.style.display = "flex";
            registerpage.style.display = "none";
        });
    });

    register.addEventListener("click", function(event) {
        event.preventDefault();
        loginpage.style.display = "none";
        registerpage.style.display = "flex";
    });

    forgotpwd.addEventListener("click", function(event) {
        event.preventDefault();
        forgotpage.style.display = "flex";
        loginpage.style.display = "none"
    });

    closebtn.forEach(function(btn) {
        btn.addEventListener("click", function(event) {
            event.preventDefault();
            loginpage.style.display = "none";
            registerpage.style.display = "none";
            forgotpage.style.display = "none";
        });
    });
}

function userinfo() {
    var userinfo = document.querySelectorAll("#userinfo");
    var cancel = document.querySelector('input[type="reset"]');
    var userpage = document.getElementById("userpage");

    userinfo.forEach(function(link){
        link.addEventListener("click", function(event) {
            event.preventDefault();
            userpage.style.display = "flex";
        });
    })

    cancel.addEventListener("click", function(event) {
        event.preventDefault();
        userpage.style.display = "none";
    });
}