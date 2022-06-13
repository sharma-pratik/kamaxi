// document.querySelector(".wpcf7").onsubmit = (e) => {
//   e.preventDefault();
//   var urls = ["/kamaxiHeights.pdf", "/kamaxiGreen.pdf", "/kamaxiKunj.pdf"];

//   var interval = setInterval(download, 300, urls);

//   function download(urls) {
//     var url = urls.pop();

//     var a = document.createElement("a");
//     a.setAttribute("href", url);
//     a.setAttribute("download", "");
//     a.setAttribute("target", "_blank");
//     a.click();

//     if (urls.length == 0) {
//       clearInterval(interval);
//     }
//   }
// };

// document.querySelector(".heightPdfs").onsubmit = (e) => {
//   e.preventDefault();
//   var urls = ["/kamaxiHeights.pdf"];

//   var interval = setInterval(download, 300, urls);

//   function download(urls) {
//     var url = urls.pop();
//     console.log(url);

//     var a = document.createElement("a");
//     a.setAttribute("href", url);
//     a.setAttribute("download", "");
//     a.setAttribute("target", "_blank");
//     a.click();

//     if (urls.length == 0) {
//       clearInterval(interval);
//     }
//   }
// };

const locationURL = window.location.href.split("/");
const loclength = locationURL.length;

if (locationURL[loclength - 1] == "green.html") {
  document.querySelectorAll(".greenPdfs").onsubmit = (e) => {
    e.preventDefault();
    var url = "./kamaxiGreen.pdf";
    var a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", "");
    a.download = "kamaxiGreen.pdf";
    a.dispatchEvent(new MouseEvent("click"));
  };
} else if (locationURL[loclength - 1] == "heights.html") {
  document.querySelectorAll(".heightPdfs").onsubmit = (e) => {
    e.preventDefault();
    var url = "./kamaxiHeights.pdf";
    var a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", "");
    a.download = "kamaxiHeights.pdf";
    a.dispatchEvent(new MouseEvent("click"));
  };
} else if (locationURL[loclength - 1] == "kunj.html") {
  document.querySelectorAll(".kunjPdfs").onsubmit = (e) => {
    e.preventDefault();
    var url = "./kamaxiKunj.pdf";
    var a = document.createElement("a");
    a.href = url;
    a.setAttribute("download", "");
    a.download = "kamaxiGreen.pdf";
    a.dispatchEvent(new MouseEvent("click"));
  };
} else if (locationURL[loclength - 1] == "") {
  document.querySelectorAll(".allPdfs").onsubmit = (e) => {
    e.preventDefault();
    var urls = ["/kamaxiHeights.pdf", "/kamaxiGreen.pdf", "/kamaxiKunj.pdf"];

    var interval = setInterval(download, 300, urls);

    function download(urls) {
      var url = urls.pop();

      var a = document.createElement("a");
      a.setAttribute("href", url);
      a.setAttribute("download", "");
      a.setAttribute("target", "_blank");
      a.click();

      if (urls.length == 0) {
        clearInterval(interval);
      }
    }
  };
}
