//############################################设置页面宽度
function setWidth(uiWidth){
    var setDensitydpi = function(spec){
        var dpr = window.devicePixelRatio,
            deviceWidth = 0,
            getTargetDensitydpi = 0,
            temContent = "";
        deviceWidth = dpr == 2 ? 720 : ( dpr == 1.5 ? 480 : ( dpr == 1 ? 320 : 240 ) );
        getTargetDensitydpi = uiWidth / deviceWidth * dpr * 160;
        temContent = 'target-densitydpi=' + getTargetDensitydpi + ', width=device-width , user-scalable=no' ;
        return temContent;
    };
    var setDeviceWidth = function(){
        return 'target-densitydpi=device-dpi, width='+uiWidth +', user-scalable=no,minimal-ui';
    };
    var vp = document.createElement("meta");
    vp.setAttribute("name","viewport");
    var vpContent = "";
    var ua = navigator.userAgent;
    vpContent = setDeviceWidth();
    ( /Android/i.test(ua) && /(2\.[1|2|3]\.[\d])/i.test(ua) ) && ( vpContent = setDensitydpi() );
    vp.setAttribute( 'content', vpContent);
    document.getElementsByTagName('head')[0].appendChild(vp);
}
setWidth(640);