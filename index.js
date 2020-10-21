function selectElement(selector) {
    const tags = ["h1", "h2", "p"];
    if (tags.includes(selector));{

return document.getElementsByTagName(selector)[0];
}
return document.getElementById(selector);
}
