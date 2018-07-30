var element = document.getElementById("insertad");
element.innerHTML = "<ins class='adsbygoogle' data-ad-client='ca-pub-5138087599476912' data-ad-format='link' data-ad-slot='2405674907' style='display:block;height:250px;'></ins>";
var newScript = document.createElement("script");
var inlineScript = document.createTextNode("(adsbygoogle = window.adsbygoogle || []).push({});");
newScript.appendChild(inlineScript);
element.appendChild(newScript);