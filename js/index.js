const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Task 1: Create selectors to point your data into elements
document.getElementById('cta-img').setAttribute('src', siteContent.cta["img-src"])
document.getElementById('middle-img').src = siteContent["main-content"]["middle-img-src"]

// Task 2: Update the HTML with the JSON data
const navLinks = document.querySelectorAll('header nav a')
const linkTexts = Object.values(siteContent.nav)
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].textContent = linkTexts[i]
}
// navLinks.forEach(a => {
//   a.textContent = siteContent.nav[i]
// })

document.querySelector('section.cta div.cta-text h1').textContent = siteContent.cta["h1"]
document.querySelector('section.cta div.cta-text button').textContent = siteContent.cta["button"]

document.querySelector('section.main-content div.top-content div.text-content:nth-of-type(1) h4').textContent = siteContent["main-content"]["features-h4"]
document.querySelector('section.main-content div.top-content div.text-content:nth-of-type(2) h4').textContent = siteContent["main-content"]["about-h4"]

document.querySelector('section.main-content div.top-content div.text-content:nth-of-type(1) p').textContent = siteContent["main-content"]["features-content"]
document.querySelector('section.main-content div.top-content div.text-content:nth-of-type(2) p').textContent = siteContent["main-content"]["about-content"]

document.querySelector('section.main-content div.bottom-content div.text-content:nth-of-type(1) h4').textContent = siteContent["main-content"]["services-h4"]
document.querySelector('section.main-content div.bottom-content div.text-content:nth-of-type(2) h4').textContent = siteContent["main-content"]["product-h4"]
document.querySelector('section.main-content div.bottom-content div.text-content:nth-of-type(3) h4').textContent = siteContent["main-content"]["vision-h4"]

document.querySelector('section.main-content div.bottom-content div.text-content:nth-of-type(1) p').textContent = siteContent["main-content"]["services-content"]
document.querySelector('section.main-content div.bottom-content div.text-content:nth-of-type(2) p').textContent = siteContent["main-content"]["product-content"]
document.querySelector('section.main-content div.bottom-content div.text-content:nth-of-type(3) p').textContent = siteContent["main-content"]["vision-content"]

document.querySelector('section.contact h4').textContent = siteContent["contact"]["contact-h4"]
document.querySelector('section.contact p:nth-of-type(1)').textContent = siteContent["contact"]["address"]
document.querySelector('section.contact p:nth-of-type(2)').textContent = siteContent["contact"]["phone"]
document.querySelector('section.contact p:nth-of-type(3)').textContent = siteContent["contact"]["email"]

document.querySelector('footer p').textContent = siteContent["footer"]["copyright"]

//Task 3: Add new content
const greenLinks = document.querySelectorAll('a')
for (i = 0; i < greenLinks.length; i++) {
  greenLinks[i].style.color = 'green'
}

const siteNav = document.querySelector('header nav')
const newLinkAppend = {
  href: '#',
  textContent: 'Append',
}
const linkAppend = document.createElement('a')

linkAppend.href = newLinkAppend.href
linkAppend.textContent = newLinkAppend.textContent

siteNav.appendChild(linkAppend)

const newLinkPrepend = {
  href: '#',
  textContent: 'Prepend',
}
const linkPrepend = document.createElement('a')

linkPrepend.href = newLinkPrepend.href
linkPrepend.textContent = newLinkPrepend.textContent

siteNav.prepend(linkPrepend)

// Stretch Goals
const allNavLinks = document.querySelectorAll('a')
for (i = 0; i < allNavLinks.length; i++) {
  allNavLinks[i].style.color = 'blue'
  allNavLinks[i].style.fontSize = '16px'
  allNavLinks[i].style.fontWeight = '900'
}

let headerButton = document.getElementsByTagName('button');
headerButton[0].addEventListener('click', (changeText) => {
  document.querySelector('h1').innerHTML = "Hello DOM!"
})
