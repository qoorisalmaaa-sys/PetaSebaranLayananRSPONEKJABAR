var wms_layers = [];


        var lyr_googleearthsatelite_0 = new ol.layer.Tile({
            'title': 'google earth satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasWilayahKabkota_2 = new ol.format.GeoJSON();
var features_BatasWilayahKabkota_2 = format_BatasWilayahKabkota_2.readFeatures(json_BatasWilayahKabkota_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayahKabkota_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahKabkota_2.addFeatures(features_BatasWilayahKabkota_2);
var lyr_BatasWilayahKabkota_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahKabkota_2, 
                style: style_BatasWilayahKabkota_2,
                popuplayertitle: 'Batas Wilayah Kab/kota',
                interactive: false,
                title: '<img src="styles/legend/BatasWilayahKabkota_2.png" /> Batas Wilayah Kab/kota'
            });
var format_AKB_3 = new ol.format.GeoJSON();
var features_AKB_3 = format_AKB_3.readFeatures(json_AKB_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AKB_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AKB_3.addFeatures(features_AKB_3);
var lyr_AKB_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AKB_3, 
                style: style_AKB_3,
                popuplayertitle: 'AKB',
                interactive: false,
    title: 'AKB<br />\
    <img src="styles/legend/AKB_3_0.png" /> BOGOR<br />\
    <img src="styles/legend/AKB_3_1.png" /> BANDUNG<br />\
    <img src="styles/legend/AKB_3_2.png" /> GARUT<br />\
    <img src="styles/legend/AKB_3_3.png" /> BEKASI<br />\
    <img src="styles/legend/AKB_3_4.png" /> CIREBON<br />\
    <img src="styles/legend/AKB_3_5.png" /> TASIKMALAYA<br />\
    <img src="styles/legend/AKB_3_6.png" /> SUKABUMI<br />\
    <img src="styles/legend/AKB_3_7.png" /> KOTA BANDUNG<br />\
    <img src="styles/legend/AKB_3_8.png" /> KARAWANG<br />\
    <img src="styles/legend/AKB_3_9.png" /> KOTA DEPOK<br />\
    <img src="styles/legend/AKB_3_10.png" /> KOTA BEKASI<br />\
    <img src="styles/legend/AKB_3_11.png" /> SUMEDANG<br />\
    <img src="styles/legend/AKB_3_12.png" /> BANDUNG BARAT<br />\
    <img src="styles/legend/AKB_3_13.png" /> CIAMIS<br />\
    <img src="styles/legend/AKB_3_14.png" /> PURWAKARTA<br />\
    <img src="styles/legend/AKB_3_15.png" /> INDRAMAYU<br />\
    <img src="styles/legend/AKB_3_16.png" /> MAJALENGKA<br />\
    <img src="styles/legend/AKB_3_17.png" /> KUNINGAN<br />\
    <img src="styles/legend/AKB_3_18.png" /> CIANJUR<br />\
    <img src="styles/legend/AKB_3_19.png" /> KOTA BOGOR<br />\
    <img src="styles/legend/AKB_3_20.png" /> SUBANG<br />\
    <img src="styles/legend/AKB_3_21.png" /> KOTA TASIKMALAYA<br />\
    <img src="styles/legend/AKB_3_22.png" /> KOTA CIMAHI<br />\
    <img src="styles/legend/AKB_3_23.png" /> KOTA SUKABUMI<br />\
    <img src="styles/legend/AKB_3_24.png" /> KOTA CIREBON<br />\
    <img src="styles/legend/AKB_3_25.png" /> KOTA BANJAR<br />\
    <img src="styles/legend/AKB_3_26.png" /> PANGANDARAN<br />' });
var format_AKI_4 = new ol.format.GeoJSON();
var features_AKI_4 = format_AKI_4.readFeatures(json_AKI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AKI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AKI_4.addFeatures(features_AKI_4);
var lyr_AKI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AKI_4, 
                style: style_AKI_4,
                popuplayertitle: 'AKI',
                interactive: false,
    title: 'AKI<br />\
    <img src="styles/legend/AKI_4_0.png" /> BOGOR<br />\
    <img src="styles/legend/AKI_4_1.png" /> GARUT<br />\
    <img src="styles/legend/AKI_4_2.png" /> BEKASI<br />\
    <img src="styles/legend/AKI_4_3.png" /> BANDUNG<br />\
    <img src="styles/legend/AKI_4_4.png" /> CIREBON<br />\
    <img src="styles/legend/AKI_4_5.png" /> KARAWANG<br />\
    <img src="styles/legend/AKI_4_6.png" /> TASIKMALAYA<br />\
    <img src="styles/legend/AKI_4_7.png" /> BANDUNG BARAT<br />\
    <img src="styles/legend/AKI_4_8.png" /> CIANJUR<br />\
    <img src="styles/legend/AKI_4_9.png" /> SUKABUMI<br />\
    <img src="styles/legend/AKI_4_10.png" /> KOTA DEPOK<br />\
    <img src="styles/legend/AKI_4_11.png" /> KOTA BANDUNG<br />\
    <img src="styles/legend/AKI_4_12.png" /> KOTA BEKASI<br />\
    <img src="styles/legend/AKI_4_13.png" /> CIAMIS<br />\
    <img src="styles/legend/AKI_4_14.png" /> PURWAKARTA<br />\
    <img src="styles/legend/AKI_4_15.png" /> SUBANG<br />\
    <img src="styles/legend/AKI_4_16.png" /> SUMEDANG<br />\
    <img src="styles/legend/AKI_4_17.png" /> MAJALENGKA<br />\
    <img src="styles/legend/AKI_4_18.png" /> INDRAMAYU<br />\
    <img src="styles/legend/AKI_4_19.png" /> KOTA TASIKMALAYA<br />\
    <img src="styles/legend/AKI_4_20.png" /> KOTA BOGOR<br />\
    <img src="styles/legend/AKI_4_21.png" /> KUNINGAN<br />\
    <img src="styles/legend/AKI_4_22.png" /> KOTA CIMAHI<br />\
    <img src="styles/legend/AKI_4_23.png" /> PANGANDARAN<br />\
    <img src="styles/legend/AKI_4_24.png" /> KOTA CIREBON<br />\
    <img src="styles/legend/AKI_4_25.png" /> KOTA BANJAR<br />\
    <img src="styles/legend/AKI_4_26.png" /> KOTA SUKABUMI<br />' });
var format_RSPONEKSpesialistik_5 = new ol.format.GeoJSON();
var features_RSPONEKSpesialistik_5 = format_RSPONEKSpesialistik_5.readFeatures(json_RSPONEKSpesialistik_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSPONEKSpesialistik_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSPONEKSpesialistik_5.addFeatures(features_RSPONEKSpesialistik_5);
var lyr_RSPONEKSpesialistik_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSPONEKSpesialistik_5, 
                style: style_RSPONEKSpesialistik_5,
                popuplayertitle: 'RS PONEK Spesialistik',
                interactive: true,
                title: '<img src="styles/legend/RSPONEKSpesialistik_5.png" /> RS PONEK Spesialistik'
            });
var format_RSPONEKSubspesialistik_6 = new ol.format.GeoJSON();
var features_RSPONEKSubspesialistik_6 = format_RSPONEKSubspesialistik_6.readFeatures(json_RSPONEKSubspesialistik_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSPONEKSubspesialistik_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSPONEKSubspesialistik_6.addFeatures(features_RSPONEKSubspesialistik_6);
var lyr_RSPONEKSubspesialistik_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSPONEKSubspesialistik_6, 
                style: style_RSPONEKSubspesialistik_6,
                popuplayertitle: 'RS PONEK Subspesialistik',
                interactive: true,
                title: '<img src="styles/legend/RSPONEKSubspesialistik_6.png" /> RS PONEK Subspesialistik'
            });
var format_RSPONEKMultisubspesialistik_7 = new ol.format.GeoJSON();
var features_RSPONEKMultisubspesialistik_7 = format_RSPONEKMultisubspesialistik_7.readFeatures(json_RSPONEKMultisubspesialistik_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RSPONEKMultisubspesialistik_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RSPONEKMultisubspesialistik_7.addFeatures(features_RSPONEKMultisubspesialistik_7);
var lyr_RSPONEKMultisubspesialistik_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RSPONEKMultisubspesialistik_7, 
                style: style_RSPONEKMultisubspesialistik_7,
                popuplayertitle: 'RS PONEK Multisubspesialistik',
                interactive: true,
                title: '<img src="styles/legend/RSPONEKMultisubspesialistik_7.png" /> RS PONEK Multisubspesialistik'
            });

lyr_googleearthsatelite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_BatasWilayahKabkota_2.setVisible(true);lyr_AKB_3.setVisible(false);lyr_AKI_4.setVisible(false);lyr_RSPONEKSpesialistik_5.setVisible(true);lyr_RSPONEKSubspesialistik_6.setVisible(true);lyr_RSPONEKMultisubspesialistik_7.setVisible(true);
var layersList = [lyr_googleearthsatelite_0,lyr_OpenStreetMap_1,lyr_BatasWilayahKabkota_2,lyr_AKB_3,lyr_AKI_4,lyr_RSPONEKSpesialistik_5,lyr_RSPONEKSubspesialistik_6,lyr_RSPONEKMultisubspesialistik_7];
lyr_BatasWilayahKabkota_2.set('fieldAliases', {'KAB_KOTA': 'KAB_KOTA', });
lyr_AKB_3.set('fieldAliases', {'KAB_KOTA': 'KAB_KOTA', });
lyr_AKI_4.set('fieldAliases', {'KAB_KOTA': 'KAB_KOTA', });
lyr_RSPONEKSpesialistik_5.set('fieldAliases', {'fid': 'fid', 'nama_rs': 'nama_rs', 'klasifikasi': 'klasifikasi', });
lyr_RSPONEKSubspesialistik_6.set('fieldAliases', {'fid': 'fid', });
lyr_RSPONEKMultisubspesialistik_7.set('fieldAliases', {'fid': 'fid', 'nama-rs': 'nama-rs', });
lyr_BatasWilayahKabkota_2.set('fieldImages', {'KAB_KOTA': 'TextEdit', });
lyr_AKB_3.set('fieldImages', {'KAB_KOTA': 'TextEdit', });
lyr_AKI_4.set('fieldImages', {'KAB_KOTA': 'TextEdit', });
lyr_RSPONEKSpesialistik_5.set('fieldImages', {'fid': '', 'nama_rs': '', 'klasifikasi': '', });
lyr_RSPONEKSubspesialistik_6.set('fieldImages', {'fid': '', });
lyr_RSPONEKMultisubspesialistik_7.set('fieldImages', {'fid': '', 'nama-rs': '', });
lyr_BatasWilayahKabkota_2.set('fieldLabels', {'KAB_KOTA': 'no label', });
lyr_AKB_3.set('fieldLabels', {'KAB_KOTA': 'no label', });
lyr_AKI_4.set('fieldLabels', {'KAB_KOTA': 'no label', });
lyr_RSPONEKSpesialistik_5.set('fieldLabels', {'fid': 'hidden field', 'nama_rs': 'no label', 'klasifikasi': 'hidden field', });
lyr_RSPONEKSubspesialistik_6.set('fieldLabels', {'fid': 'hidden field', });
lyr_RSPONEKMultisubspesialistik_7.set('fieldLabels', {'fid': 'hidden field', 'nama-rs': 'no label', });
lyr_RSPONEKMultisubspesialistik_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});