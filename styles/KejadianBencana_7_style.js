var size = 0;
var placement = 'point';
function categories_KejadianBencana_7(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Banjir':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 12.0 + size,
             fill: new ol.style.Fill({color: 'rgba(115,210,227,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Gempa Bumi':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 12.0 + size,
             fill: new ol.style.Fill({color: 'rgba(218,21,54,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Longsor':
                    return [ new ol.style.Style({
        image: new ol.style.Circle({radius: 12.0 + size,
             fill: new ol.style.Fill({color: 'rgba(242,147,14,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_KejadianBencana_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("BENCANA");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_KejadianBencana_7(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
