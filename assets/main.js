var body = document.body || document.getElementsByTagName('body')[0]
var head = document.head || document.getElementsByTagName('head')[0]

document.getElementById("menu").addEventListener("click", function (){
    var style = body.getAttribute('style')
    style.length > 0 ? body.setAttribute('style','overflow-x:hidden;') : body.setAttribute('style','')
    var menuClass = document.getElementById("header-m-drop").getAttribute('class')
    menuClass = menuClass == 'css-d0n7q' ? 'css-1k32rax' : 'css-d0n7q'
    document.getElementById("header-m-drop").setAttribute('class',menuClass)
});

var hotjar = document.createElement('script')
hotjar.innerText = "(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:3514930,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');"
head.appendChild(hotjar)

var google = document.createElement('script')
google.setAttribute('async','')
google.setAttribute('src','https://www.googletagmanager.com/gtag/js?id=G-490CDYV0P3')
google.innerText = "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-490CDYV0P3');"
head.appendChild(google)
