const pages = {
    "/index.html": "index.html",
    "/forcast.html": "forcast.html",
    "/dummie.html": "dummie.html",
    "/dummie-more.html": "dummie-more.html",
    "/test.html": "test.html",
    "/test-testing.html": "test-testing.html",
    "/test-history.html": "test-history.html",
    "/result.html": "result.html"
}

const titles = {
    "index.html": "職得期待",
    "forcast.html": "景氣預測",
    "dummie.html": "資訊懶人包",
    "dummie-more.html": "懶人包-更多",
    "test.html": "職涯測驗",
    "test-testing.html": "職涯測驗",
    "test-history.html": "歷史紀錄",
    "result.html": "測驗結果"
}

const cssFiles = {
    "index.html": ["css/layout.css", "css/layout-rwd.css", "css/index.css", "css/index-rwd.css"],
    "forcast.html": ["css/layout.css", "css/layout-rwd.css", "css/forcast.css", "css/forcast-rwd.css"],
    "dummie.html": ["css/layout.css", "css/layout-rwd.css", "css/dummie.css", "css/dummie-rwd.css"],
    "dummie-more.html": ["css/layout.css", "css/layout-rwd.css", "css/dummie-more.css"],
    "test.html": ["css/layout.css", "css/layout-rwd.css", "css/test.css"],
    "test-testing.html": ["css/layout.css", "css/layout-rwd.css", "css/test.css"],
    "test-history.html": ["css/layout.css", "css/layout-rwd.css", "css/test-history.css"],
    "result.html": ["css/layout.css", "css/layout-rwd.css", "css/result.css"]
}

const jsFiles = {
    "index.html": ["javascript/carousel.js"],
    "test-testing.html":  ["javascript/dropable.js"]
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
    var registerpage = document.getElementById("register");
    var closebtn = document.querySelectorAll("#close");
    var loginpage = document.getElementById("loginpage");
    var registerpage = document.getElementById("registerpage");

    login.forEach(function(link){
        link.addEventListener("click", function(event){
            event.preventDefault();
            loginpage.style.display = "flex";
            registerpage.style.display = "none";
        });
    })

    register.addEventListener("click", function(event) {
        event.preventDefault();
        loginpage.style.display = "none";
        registerpage.style.display = "flex";
    });

    closebtn.forEach(function(btn) {
        btn.addEventListener("click", function(event) {
            event.preventDefault();
            loginpage.style.display = "none";
            registerpage.style.display = "none";
        });
    });
}

function userinfo( ){
    var userinfo = document.getElementById("userinfo");
    var infopage = document.getElementById("infopage");

    userinfo.addEventListener("click", function(event) {
        event.preventDefault();
        infopage.style.display = "flex";
    });
}