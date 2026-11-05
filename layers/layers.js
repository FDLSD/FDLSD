var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_FondduLacSchoolDistrict_1 = new ol.format.GeoJSON();
var features_FondduLacSchoolDistrict_1 = format_FondduLacSchoolDistrict_1.readFeatures(json_FondduLacSchoolDistrict_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FondduLacSchoolDistrict_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FondduLacSchoolDistrict_1.addFeatures(features_FondduLacSchoolDistrict_1);
var lyr_FondduLacSchoolDistrict_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FondduLacSchoolDistrict_1, 
                style: style_FondduLacSchoolDistrict_1,
                popuplayertitle: 'Fond du Lac School District',
                interactive: false,
    title: 'Fond du Lac School District<br />\
    <img src="styles/legend/FondduLacSchoolDistrict_1_0.png" /> Chegwin<br />\
    <img src="styles/legend/FondduLacSchoolDistrict_1_1.png" /> Evans<br />\
    <img src="styles/legend/FondduLacSchoolDistrict_1_2.png" /> Lakeshore<br />\
    <img src="styles/legend/FondduLacSchoolDistrict_1_3.png" /> Parkside<br />\
    <img src="styles/legend/FondduLacSchoolDistrict_1_4.png" /> Pier<br />\
    <img src="styles/legend/FondduLacSchoolDistrict_1_5.png" /> Riverside<br />\
    <img src="styles/legend/FondduLacSchoolDistrict_1_6.png" /> Rosenow<br />\
    <img src="styles/legend/FondduLacSchoolDistrict_1_7.png" /> Waters<br />' });
var format_FDLSDOuterBoundary_2 = new ol.format.GeoJSON();
var features_FDLSDOuterBoundary_2 = format_FDLSDOuterBoundary_2.readFeatures(json_FDLSDOuterBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FDLSDOuterBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FDLSDOuterBoundary_2.addFeatures(features_FDLSDOuterBoundary_2);
var lyr_FDLSDOuterBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FDLSDOuterBoundary_2, 
                style: style_FDLSDOuterBoundary_2,
                popuplayertitle: 'FDLSD Outer Boundary',
                interactive: false,
                title: '<img src="styles/legend/FDLSDOuterBoundary_2.png" /> FDLSD Outer Boundary'
            });
var group_Addresses = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Addresses'});

lyr_GoogleHybrid_0.setVisible(true);lyr_FondduLacSchoolDistrict_1.setVisible(true);lyr_FDLSDOuterBoundary_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_FondduLacSchoolDistrict_1,lyr_FDLSDOuterBoundary_2];
lyr_FondduLacSchoolDistrict_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DISTRICT': 'DISTRICT', 'SDID': 'SDID', 'CESA': 'CESA', 'LEAID': 'LEAID', 'TYPE': 'TYPE', 'Elementary School': 'Elementary School', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_FDLSDOuterBoundary_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DISTRICT': 'DISTRICT', 'SDID': 'SDID', 'CESA': 'CESA', 'LEAID': 'LEAID', 'TYPE': 'TYPE', });
lyr_FondduLacSchoolDistrict_1.set('fieldImages', {'OBJECTID': 'Range', 'DISTRICT': 'TextEdit', 'SDID': 'TextEdit', 'CESA': 'Range', 'LEAID': 'Range', 'TYPE': 'TextEdit', 'Elementary School': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', });
lyr_FDLSDOuterBoundary_2.set('fieldImages', {'OBJECTID': 'Range', 'DISTRICT': 'TextEdit', 'SDID': 'TextEdit', 'CESA': 'Range', 'LEAID': 'Range', 'TYPE': 'TextEdit', });
lyr_FondduLacSchoolDistrict_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'DISTRICT': 'header label - always visible', 'SDID': 'inline label - visible with data', 'CESA': 'inline label - visible with data', 'LEAID': 'inline label - visible with data', 'TYPE': 'inline label - always visible', 'Elementary School': 'header label - always visible', 'auxiliary_storage_labeling_lineanchorpercent': 'no label', 'auxiliary_storage_labeling_lineanchorclipping': 'no label', 'auxiliary_storage_labeling_lineanchortype': 'no label', 'auxiliary_storage_labeling_lineanchortextpoint': 'no label', });
lyr_FDLSDOuterBoundary_2.set('fieldLabels', {'OBJECTID': 'no label', 'DISTRICT': 'no label', 'SDID': 'no label', 'CESA': 'no label', 'LEAID': 'no label', 'TYPE': 'no label', });
lyr_FDLSDOuterBoundary_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});