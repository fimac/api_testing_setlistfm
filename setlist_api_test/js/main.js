var API_KEY = "70491ff328db4ee083ef195f67c586f1";
var URL = "http://api.setlist.fm/rest/0.1/search/setlists.json";

var getSetList = function() {
  $.ajax({
    url: URL,
    method: "GET",
    dataType: "JSONP",
    data: {
      artistName: "sonic-youth"
    }
  }).done(function(data) {
    debugger;
    console.log(JSON.stringify(data));
    console.log("success");
  });
};
getSetList();

// http://api.setlist.fm/rest/0.1/search/setlists.json?&artistName=sonic-youth
// python -m SimpleHTTPServer
