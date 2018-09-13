{ // names variables for later use
    var jpgs = document.querySelectorAll('a[href$=".jpg"]'); //sets the variable jpgs to all hyperlink tags that end in .jpg
    var pngs = document.querySelectorAll('a[href$=".png"]'); //sets the variable pngs to all hyperlink tags that end in .png
    var gifs = document.querySelectorAll('a[href$=".gif"]'); //sets the variable gifs to all hyperlink tags that end in .gif
    var svgs = document.querySelectorAll('a[href$=".svg"]'); //sets the variable gifs to all hyperlink tags that end in .svg
    var urllist = [""]; //creates and array labled urllist
    var typelist = ["jpgs","pngs","gifs","svgs"];
}

{
    chrome.storage.sync.get({
    favoriteType: 'jpg'},
    function(items) {
	var fileType = items.favoriteType;
    //console.log('File is ' + fileType);
        
        switch(fileType){
        case "jpg":
        for (url in jpgs) { //repeats the code in brackets for the same amout of time as there are urls in the variable "jpgs"
        console.log ( jpgs[url].href ); //logs all links that end in .jpg to the chrome console
        urllist[urllist.length] = jpgs[url].href; //adds all liks that end in .jpg to the array "urllist"
        }
        console.log('file is jpg')
        break;
        case "png":
        for (url in pngs) { //repeats the code in brackets for the same amout of time as there are urls in the variable "pngs"
        console.log ( pngs[url].href ); //logs all links that end in .png to the chrome console
        urllist[urllist.length] = pngs[url].href; //adds all liks that end in .png to the array "urllist"
        }
        console.log('file is png')
        break;
        case "gif":
        for (url in gifs) { //repeats the code in brackets for the same amout of time as there are urls in the variable "gifs"
        console.log ( gifs[url].href ); //logs all links that end in .gif to the chrome console
        urllist[urllist.length] = gifs[url].href; //adds all liks that end in .gif to the array "urllist"
        }
        console.log('file is gif')
        break;
        case "svg":
        for (url in svgs) { //repeats the code in brackets for the same amout of time as there are urls in the variable "svgs"
        console.log ( svgs[url].href ); //logs all links that end in .svg to the chrome console
        urllist[urllist.length] = svgs[url].href; //adds all liks that end in .svg to the array "urllist"
        }
        console.log('file is svg')
        break;
        default:
        console.log('file not specified, will do all')
        }

    var urllist2 = urllist.join(" | "); //creates a new list labled "urllist2", this lit is exactly the same as the array "urllist" but it has a pipe seperating the list entries instead of a comma
    window.alert(urllist2); //creates an alert window that shows the array "urllist2"
    })
}