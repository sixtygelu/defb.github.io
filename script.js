function getQueryVariable(variable) {
    var chunk = window.location.search.substring(1).split('&');
    for (var i = 0; i < chunk.length; i++) {
        var pair = chunk[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return '';
}
var path = getQueryVariable('p');
window.location = 'fb://' + path;
setTimeout(function(){
    window.location = 'https://www.facebook.com/' + path;
}, 10);
