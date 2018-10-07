// names variables for later use
var jpgs = document.querySelectorAll('a[href$=".jpg"]'); //sets the variable jpgs to all hyperlink tags that end in .jpg
var pngs = document.querySelectorAll('a[href$=".png"]'); //sets the variable pngs to all hyperlink tags that end in .png
var gifs = document.querySelectorAll('a[href$=".gif"]'); //sets the variable gifs to all hyperlink tags that end in .gif
var svgs = document.querySelectorAll('a[href$=".svg"]'); //sets the variable gifs to all hyperlink tags that end in .svg
var urllist = [""]; //creates and array labled urllist
var typelist = ["jpgs","pngs","gifs","svgs"];
//obtains the selected file type that was saved to chrome.storage by options.js
chrome.storage.sync.get({
favoriteType: 'jpg'},
function(items) {
var fileType = items.favoriteType;
    //sets responses for diffrent selected file types
    switch(fileType){
    case "jpg":
    //repeats the code in brackets for the same amout of time as there are urls in the variable "jpgs"
    for (url in jpgs) {
    //logs all links that end in .jpg to the chrome console
    console.log ( jpgs[url].href );
    //adds all liks that end in .jpg to the array "urllist"
    urllist[urllist.length] = jpgs[url].href;}
    console.log('file type is jpg')
    break;

    case "png":
    //repeats the code in brackets for the same amout of time as there are urls in the variable "pngs"
    for (url in pngs) {
    //logs all links that end in .png to the chrome console
    console.log ( pngs[url].href ); 
    //adds all liks that end in .png to the array "urllist"
    urllist[urllist.length] = pngs[url].href;}
    console.log('file is png')
    break;

    case "gif":
    //repeats the code in brackets for the same amout of time as there are urls in the variable "gifs"
    for (url in gifs) {
    //logs all links that end in .gif to the chrome console
    console.log ( gifs[url].href );
    //adds all liks that end in .gif to the array "urllist"
    urllist[urllist.length] = gifs[url].href;}
    console.log('file is gif')
    break;

    case "svg":
     //repeats the code in brackets for the same amout of time as there are urls in the variable "svgs"
    for (url in svgs) {
    //logs all links that end in .svg to the chrome console
    console.log ( svgs[url].href );
    //adds all liks that end in .svg to the array "urllist"
    urllist[urllist.length] = svgs[url].href; }
    console.log('file is svg')
    break;
    
    //Does all of obove if the options page somehow does not set a file type
    default: 
    //repeats the code in brackets for the same amout of time as there are urls in the variable "svgs"
    for (url in svgs) {
    //logs all links that end in .svg to the chrome console
    console.log ( svgs[url].href );
    //adds all liks that end in .svg to the array "urllist"
    urllist[urllist.length] = svgs[url].href; }
    //repeats the code in brackets for the same amout of time as there are urls in the variable "gifs"
    for (url in gifs) {
    //logs all links that end in .gif to the chrome console
    console.log ( gifs[url].href );
    //adds all liks that end in .gif to the array "urllist"
    urllist[urllist.length] = gifs[url].href;}
    //repeats the code in brackets for the same amout of time as there are urls in the variable "pngs"
    for (url in pngs) {
    //logs all links that end in .png to the chrome console
    console.log ( pngs[url].href ); 
    //adds all liks that end in .png to the array "urllist"
    urllist[urllist.length] = pngs[url].href;}
    //repeats the code in brackets for the same amout of time as there are urls in the variable "jpgs"
    for (url in jpgs) {
    //logs all links that end in .jpg to the chrome console
    console.log ( jpgs[url].href );
    //adds all liks that end in .jpg to the array "urllist"
    urllist[urllist.length] = jpgs[url].href;}
    console.log('file not specified, will do all')
    }
//creates a new list labled "urllist2", this lit is exactly the same as the array "urllist" but it has a pipe seperating the list entries instead of a comma
var urllist2 = urllist.join(" | "); 
//creates an alert window that shows the array "urllist2"
window.alert(urllist2);
})
