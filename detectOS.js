
//returns true or false depending on if user is running iOS.
function iOS() {
    return [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ].includes(navigator.userAgentData.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

var iSiOS = iOS();

//alert(iSiOS);

//alert(navigator.userAgent);


