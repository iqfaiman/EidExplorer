ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([101.469034, 3.031704, 101.563877, 3.101132]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NumberofShops_1 = new ol.format.GeoJSON();
var features_NumberofShops_1 = format_NumberofShops_1.readFeatures(json_NumberofShops_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NumberofShops_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NumberofShops_1.addFeatures(features_NumberofShops_1);
var lyr_NumberofShops_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NumberofShops_1, 
                style: style_NumberofShops_1,
                interactive: false,
    title: 'Number of Shops<br />\
    <img src="styles/legend/NumberofShops_1_0.png" /> 0 - 13<br />\
    <img src="styles/legend/NumberofShops_1_1.png" /> 13 - 26<br />\
    <img src="styles/legend/NumberofShops_1_2.png" /> 26 - 39<br />\
    <img src="styles/legend/NumberofShops_1_3.png" /> 39 - 52<br />\
    <img src="styles/legend/NumberofShops_1_4.png" /> 52 - 65<br />'
        });
var format_TypesofShops_2 = new ol.format.GeoJSON();
var features_TypesofShops_2 = format_TypesofShops_2.readFeatures(json_TypesofShops_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TypesofShops_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TypesofShops_2.addFeatures(features_TypesofShops_2);
var lyr_TypesofShops_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TypesofShops_2, 
                style: style_TypesofShops_2,
                interactive: false,
                title: '<img src="styles/legend/TypesofShops_2.png" /> Types of Shops'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_NumberofShops_1.setVisible(true);lyr_TypesofShops_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_NumberofShops_1,lyr_TypesofShops_2];
lyr_NumberofShops_1.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'NOB': 'NOB', 'Seksyen': 'Seksyen', });
lyr_TypesofShops_2.set('fieldAliases', {'Seksyen': 'Seksyen', 'Name': 'Name', 'Type/Categorize': 'Type/Categorize', 'Operation Time': 'Operation Time', 'No. Tel': 'No. Tel', 'Northing': 'Northing', 'Easting': 'Easting', 'Rating': 'Rating', });
lyr_NumberofShops_1.set('fieldImages', {'Id': '', 'Shape_Leng': '', 'Shape_Area': '', 'NOB': '', 'Seksyen': '', });
lyr_TypesofShops_2.set('fieldImages', {'Seksyen': '', 'Name': '', 'Type/Categorize': '', 'Operation Time': '', 'No. Tel': '', 'Northing': '', 'Easting': '', 'Rating': '', });
lyr_NumberofShops_1.set('fieldLabels', {'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'NOB': 'no label', 'Seksyen': 'inline label', });
lyr_TypesofShops_2.set('fieldLabels', {'Seksyen': 'inline label', 'Name': 'inline label', 'Type/Categorize': 'inline label', 'Operation Time': 'inline label', 'No. Tel': 'inline label', 'Northing': 'inline label', 'Easting': 'inline label', 'Rating': 'inline label', });
lyr_TypesofShops_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});