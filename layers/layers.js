var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_52KawasanTransmigrasiPronas_2 = new ol.format.GeoJSON();
var features_52KawasanTransmigrasiPronas_2 = format_52KawasanTransmigrasiPronas_2.readFeatures(json_52KawasanTransmigrasiPronas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_52KawasanTransmigrasiPronas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_52KawasanTransmigrasiPronas_2.addFeatures(features_52KawasanTransmigrasiPronas_2);
var lyr_52KawasanTransmigrasiPronas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_52KawasanTransmigrasiPronas_2, 
                style: style_52KawasanTransmigrasiPronas_2,
                interactive: true,
                title: '<img src="styles/legend/52KawasanTransmigrasiPronas_2.png" /> 52 Kawasan Transmigrasi Pronas'
            });
var format_JenisTanahFAO_3 = new ol.format.GeoJSON();
var features_JenisTanahFAO_3 = format_JenisTanahFAO_3.readFeatures(json_JenisTanahFAO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JenisTanahFAO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JenisTanahFAO_3.addFeatures(features_JenisTanahFAO_3);
var lyr_JenisTanahFAO_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JenisTanahFAO_3, 
                style: style_JenisTanahFAO_3,
                interactive: true,
    title: 'Jenis Tanah (FAO)<br />\
    <img src="styles/legend/JenisTanahFAO_3_0.png" /> ACRISOLS<br />\
    <img src="styles/legend/JenisTanahFAO_3_1.png" /> ANDOSOLS<br />\
    <img src="styles/legend/JenisTanahFAO_3_2.png" /> ARENOSOLS<br />\
    <img src="styles/legend/JenisTanahFAO_3_3.png" /> CAMBISOLS<br />\
    <img src="styles/legend/JenisTanahFAO_3_4.png" /> FERRALSOLS<br />\
    <img src="styles/legend/JenisTanahFAO_3_5.png" /> FLUVISOLS<br />\
    <img src="styles/legend/JenisTanahFAO_3_6.png" /> GLEYSOLS<br />\
    <img src="styles/legend/JenisTanahFAO_3_7.png" /> HISTOSOLS<br />\
    <img src="styles/legend/JenisTanahFAO_3_8.png" /> LITHOSOLS<br />\
    <img src="styles/legend/JenisTanahFAO_3_9.png" /> LUVISOLS<br />\
    <img src="styles/legend/JenisTanahFAO_3_10.png" /> PODZOLS<br />\
    <img src="styles/legend/JenisTanahFAO_3_11.png" /> REGOSOLS<br />\
    <img src="styles/legend/JenisTanahFAO_3_12.png" /> RENDZINAS<br />\
    <img src="styles/legend/JenisTanahFAO_3_13.png" /> VERTISOLS<br />'
        });
var format_PotensiBencanaBanjirInaRISKBNPB_4 = new ol.format.GeoJSON();
var features_PotensiBencanaBanjirInaRISKBNPB_4 = format_PotensiBencanaBanjirInaRISKBNPB_4.readFeatures(json_PotensiBencanaBanjirInaRISKBNPB_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotensiBencanaBanjirInaRISKBNPB_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotensiBencanaBanjirInaRISKBNPB_4.addFeatures(features_PotensiBencanaBanjirInaRISKBNPB_4);
var lyr_PotensiBencanaBanjirInaRISKBNPB_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PotensiBencanaBanjirInaRISKBNPB_4, 
                style: style_PotensiBencanaBanjirInaRISKBNPB_4,
                interactive: false,
    title: 'Potensi Bencana Banjir (InaRISK BNPB)<br />\
    <img src="styles/legend/PotensiBencanaBanjirInaRISKBNPB_4_0.png" /> Rendah<br />\
    <img src="styles/legend/PotensiBencanaBanjirInaRISKBNPB_4_1.png" /> Sedang<br />\
    <img src="styles/legend/PotensiBencanaBanjirInaRISKBNPB_4_2.png" /> Tinggi<br />'
        });
var format_PotensiBencanaGempaBumiInaRISKBNPB_5 = new ol.format.GeoJSON();
var features_PotensiBencanaGempaBumiInaRISKBNPB_5 = format_PotensiBencanaGempaBumiInaRISKBNPB_5.readFeatures(json_PotensiBencanaGempaBumiInaRISKBNPB_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotensiBencanaGempaBumiInaRISKBNPB_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotensiBencanaGempaBumiInaRISKBNPB_5.addFeatures(features_PotensiBencanaGempaBumiInaRISKBNPB_5);
var lyr_PotensiBencanaGempaBumiInaRISKBNPB_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PotensiBencanaGempaBumiInaRISKBNPB_5, 
                style: style_PotensiBencanaGempaBumiInaRISKBNPB_5,
                interactive: false,
    title: 'Potensi Bencana Gempa Bumi (InaRISK BNPB)<br />\
    <img src="styles/legend/PotensiBencanaGempaBumiInaRISKBNPB_5_0.png" /> Rendah<br />\
    <img src="styles/legend/PotensiBencanaGempaBumiInaRISKBNPB_5_1.png" /> Sedang<br />\
    <img src="styles/legend/PotensiBencanaGempaBumiInaRISKBNPB_5_2.png" /> Tinggi<br />'
        });
var format_PotensiBencanaLongsorInaRISKBNPB_6 = new ol.format.GeoJSON();
var features_PotensiBencanaLongsorInaRISKBNPB_6 = format_PotensiBencanaLongsorInaRISKBNPB_6.readFeatures(json_PotensiBencanaLongsorInaRISKBNPB_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PotensiBencanaLongsorInaRISKBNPB_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PotensiBencanaLongsorInaRISKBNPB_6.addFeatures(features_PotensiBencanaLongsorInaRISKBNPB_6);
var lyr_PotensiBencanaLongsorInaRISKBNPB_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PotensiBencanaLongsorInaRISKBNPB_6, 
                style: style_PotensiBencanaLongsorInaRISKBNPB_6,
                interactive: false,
    title: 'Potensi Bencana Longsor (InaRISK BNPB)<br />\
    <img src="styles/legend/PotensiBencanaLongsorInaRISKBNPB_6_0.png" /> Rendah<br />\
    <img src="styles/legend/PotensiBencanaLongsorInaRISKBNPB_6_1.png" /> Sedang<br />\
    <img src="styles/legend/PotensiBencanaLongsorInaRISKBNPB_6_2.png" /> Tinggi<br />'
        });
var format_KejadianBencana_7 = new ol.format.GeoJSON();
var features_KejadianBencana_7 = format_KejadianBencana_7.readFeatures(json_KejadianBencana_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KejadianBencana_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KejadianBencana_7.addFeatures(features_KejadianBencana_7);
var lyr_KejadianBencana_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KejadianBencana_7, 
                style: style_KejadianBencana_7,
                interactive: true,
    title: 'Kejadian Bencana<br />\
    <img src="styles/legend/KejadianBencana_7_0.png" /> Banjir<br />\
    <img src="styles/legend/KejadianBencana_7_1.png" /> Gempa Bumi<br />\
    <img src="styles/legend/KejadianBencana_7_2.png" /> Longsor<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_52KawasanTransmigrasiPronas_2.setVisible(true);lyr_JenisTanahFAO_3.setVisible(true);lyr_PotensiBencanaBanjirInaRISKBNPB_4.setVisible(true);lyr_PotensiBencanaGempaBumiInaRISKBNPB_5.setVisible(true);lyr_PotensiBencanaLongsorInaRISKBNPB_6.setVisible(true);lyr_KejadianBencana_7.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_52KawasanTransmigrasiPronas_2,lyr_JenisTanahFAO_3,lyr_PotensiBencanaBanjirInaRISKBNPB_4,lyr_PotensiBencanaGempaBumiInaRISKBNPB_5,lyr_PotensiBencanaLongsorInaRISKBNPB_6,lyr_KejadianBencana_7];
lyr_52KawasanTransmigrasiPronas_2.set('fieldAliases', {'Kawasan': 'Kawasan', 'PROVINSI': 'PROVINSI', 'KEPMEN': 'KEPMEN', 'LUAS_HA': 'LUAS_HA', });
lyr_JenisTanahFAO_3.set('fieldAliases', {'Jenis_Soil': 'Jenis_Soil', 'Keterangan': 'Keterangan', 'Penjelasan': 'Penjelasan', });
lyr_PotensiBencanaBanjirInaRISKBNPB_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_PotensiBencanaGempaBumiInaRISKBNPB_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_PotensiBencanaLongsorInaRISKBNPB_6.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_KejadianBencana_7.set('fieldAliases', {'KAWASAN': 'KAWASAN', 'BENCANA': 'BENCANA', 'TANGGAL': 'TANGGAL', 'LOKASI': 'LOKASI', 'KETERANGAN': 'KETERANGAN', 'KERUSAKAN': 'KERUSAKAN', 'FOTO': 'FOTO', 'SUMBER': 'SUMBER', });
lyr_52KawasanTransmigrasiPronas_2.set('fieldImages', {'Kawasan': 'TextEdit', 'PROVINSI': 'TextEdit', 'KEPMEN': 'TextEdit', 'LUAS_HA': 'TextEdit', });
lyr_JenisTanahFAO_3.set('fieldImages', {'Jenis_Soil': 'TextEdit', 'Keterangan': 'TextEdit', 'Penjelasan': 'TextEdit', });
lyr_PotensiBencanaBanjirInaRISKBNPB_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PotensiBencanaGempaBumiInaRISKBNPB_5.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PotensiBencanaLongsorInaRISKBNPB_6.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_KejadianBencana_7.set('fieldImages', {'KAWASAN': 'TextEdit', 'BENCANA': 'TextEdit', 'TANGGAL': 'TextEdit', 'LOKASI': 'TextEdit', 'KETERANGAN': 'TextEdit', 'KERUSAKAN': 'TextEdit', 'FOTO': 'ExternalResource', 'SUMBER': 'TextEdit', });
lyr_52KawasanTransmigrasiPronas_2.set('fieldLabels', {'Kawasan': 'inline label', 'PROVINSI': 'inline label', 'KEPMEN': 'inline label', 'LUAS_HA': 'inline label', });
lyr_JenisTanahFAO_3.set('fieldLabels', {'Jenis_Soil': 'inline label', 'Keterangan': 'inline label', 'Penjelasan': 'inline label', });
lyr_PotensiBencanaBanjirInaRISKBNPB_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_PotensiBencanaGempaBumiInaRISKBNPB_5.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_PotensiBencanaLongsorInaRISKBNPB_6.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_KejadianBencana_7.set('fieldLabels', {'KAWASAN': 'inline label', 'BENCANA': 'inline label', 'TANGGAL': 'inline label', 'LOKASI': 'inline label', 'KETERANGAN': 'inline label', 'KERUSAKAN': 'inline label', 'FOTO': 'inline label', 'SUMBER': 'inline label', });
lyr_KejadianBencana_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});