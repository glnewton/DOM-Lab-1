var showingSubMenu = false
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

let mainEl = document.querySelector("main");
    mainEl.style.backgroundColor = "var(--main-bg)";
    mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
    mainEl.classList.add("flex-ctr");

let topMenuEl = document.getElementById("top-menu");
    topMenuEl.style.height = "100%";
    topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
    topMenuEl.classList.add("flex-around");
    topMenuEl.addEventListener("click", function (event) {
        event.preventDefault();
        if (event.tagName !== "A") {
            console.log(event.target.innerHTML);
        }
        if (event.target.className == "active") {
            event.target.classList.remove("active");
            showingSubMenu = false;
            subMenuEl.style.top = "0";
        }
        for (let i = 0; i < topMenuLinks.length; i++) {
            topMenuLinks[i].classList.remove("active");
        }
        if ((event.tagname = "a")) {
            event.target.classList.add("active");
        }
        if (event.target.href === "http://" + document.links[0].host + "/about") {
            showingSubMenu = false
            console.log(showingSubMenu)
        } else {
            showingSubMenu = true
            console.log(showingSubMenu)
        }

        if(showingSubMenu == true){
            //buildSubMenu()
            console.log(event.target)
            subMenuEl.style.top = 100
        }
        else{
            subMenuEl.style.top = 0; 
        }   
       
        return
        
    });

// console.log(menuLinks[1].subLinks[0].innerHTML)
// el.target.subLinks

const buildSubMenu = () => {
    subMenuEl.innerText = null
    for (let i = 1; i < 3; i++) {
        for(let j = 0; j < 3;j++){
            let a = document.createElement("a");
            a.innerHTML = menuLinks[i].subLinks[j].text;
            a.href = menuLinks[i].subLinks[j].href;
            subMenuEl.append(a);
        }
        
      }
}

// Create an <a>element.
// On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
// Set the new element's content to the value of the textproperty of the "link" object.
// Append the new element to the subMenuElelement.

for (let i = 0; i < menuLinks.length; i++) {
  let a = document.createElement("a");
  a.innerHTML = menuLinks[i].text;
  a.href = menuLinks[i].href;
  topMenuEl.append(a);
}

let subMenuEl = document.getElementById("sub-menu");
    subMenuEl.style.height = "100%";
    subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
    subMenuEl.classList.add("flex-around");
    subMenuEl.style.position = "absolute";
    subMenuEl.style.top = 0;

let topMenuLinks = document.getElementById('top-menu').querySelectorAll('a')
