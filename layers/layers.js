var wms_layers = [];

var format_BentengUtarabatas_wilayah_kelurahandesa_10k__batas_wilayah_kelurahandesa_10k_arshp_0 = new ol.format.GeoJSON();
var features_BentengUtarabatas_wilayah_kelurahandesa_10k__batas_wilayah_kelurahandesa_10k_arshp_0 = format_BentengUtarabatas_wilayah_kelurahandesa_10k__batas_wilayah_kelurahandesa_10k_arshp_0.readFeatures(json_BentengUtarabatas_wilayah_kelurahandesa_10k__batas_wilayah_kelurahandesa_10k_arshp_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BentengUtarabatas_wilayah_kelurahandesa_10k__batas_wilayah_kelurahandesa_10k_arshp_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BentengUtarabatas_wilayah_kelurahandesa_10k__batas_wilayah_kelurahandesa_10k_arshp_0.addFeatures(features_BentengUtarabatas_wilayah_kelurahandesa_10k__batas_wilayah_kelurahandesa_10k_arshp_0);
var lyr_BentengUtarabatas_wilayah_kelurahandesa_10k__batas_wilayah_kelurahandesa_10k_arshp_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BentengUtarabatas_wilayah_kelurahandesa_10k__batas_wilayah_kelurahandesa_10k_arshp_0, 
                style: style_BentengUtarabatas_wilayah_kelurahandesa_10k__batas_wilayah_kelurahandesa_10k_arshp_0,
                popuplayertitle: "Benteng Utara — batas_wilayah_kelurahandesa_10k__batas_wilayah_kelurahandesa_10k_arshp",
                interactive: true,
                title: '<img src="styles/legend/BentengUtarabatas_wilayah_kelurahandesa_10k__batas_wilayah_kelurahandesa_10k_arshp_0.png" /> Benteng Utara — batas_wilayah_kelurahandesa_10k__batas_wilayah_kelurahandesa_10k_arshp'
            });
var format_bentengbatas_wilayah_kelurahandesa_10k_ar_1 = new ol.format.GeoJSON();
var features_bentengbatas_wilayah_kelurahandesa_10k_ar_1 = format_bentengbatas_wilayah_kelurahandesa_10k_ar_1.readFeatures(json_bentengbatas_wilayah_kelurahandesa_10k_ar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bentengbatas_wilayah_kelurahandesa_10k_ar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bentengbatas_wilayah_kelurahandesa_10k_ar_1.addFeatures(features_bentengbatas_wilayah_kelurahandesa_10k_ar_1);
var lyr_bentengbatas_wilayah_kelurahandesa_10k_ar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bentengbatas_wilayah_kelurahandesa_10k_ar_1, 
                style: style_bentengbatas_wilayah_kelurahandesa_10k_ar_1,
                popuplayertitle: "benteng — batas_wilayah_kelurahandesa_10k_ar",
                interactive: true,
                title: '<img src="styles/legend/bentengbatas_wilayah_kelurahandesa_10k_ar_1.png" /> benteng — batas_wilayah_kelurahandesa_10k_ar'
            });
var format_BentengSelatanbatas_wilayah_kelurahandesa_10k_ar_2 = new ol.format.GeoJSON();
var features_BentengSelatanbatas_wilayah_kelurahandesa_10k_ar_2 = format_BentengSelatanbatas_wilayah_kelurahandesa_10k_ar_2.readFeatures(json_BentengSelatanbatas_wilayah_kelurahandesa_10k_ar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BentengSelatanbatas_wilayah_kelurahandesa_10k_ar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BentengSelatanbatas_wilayah_kelurahandesa_10k_ar_2.addFeatures(features_BentengSelatanbatas_wilayah_kelurahandesa_10k_ar_2);
var lyr_BentengSelatanbatas_wilayah_kelurahandesa_10k_ar_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BentengSelatanbatas_wilayah_kelurahandesa_10k_ar_2, 
                style: style_BentengSelatanbatas_wilayah_kelurahandesa_10k_ar_2,
                popuplayertitle: "Benteng Selatan — batas_wilayah_kelurahandesa_10k_ar",
                interactive: true,
                title: '<img src="styles/legend/BentengSelatanbatas_wilayah_kelurahandesa_10k_ar_2.png" /> Benteng Selatan — batas_wilayah_kelurahandesa_10k_ar'
            });
var format_JalanBenteng_3 = new ol.format.GeoJSON();
var features_JalanBenteng_3 = format_JalanBenteng_3.readFeatures(json_JalanBenteng_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanBenteng_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanBenteng_3.addFeatures(features_JalanBenteng_3);
var lyr_JalanBenteng_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanBenteng_3, 
                style: style_JalanBenteng_3,
                popuplayertitle: "Jalan Benteng",
                interactive: true,
                title: '<img src="styles/legend/JalanBenteng_3.png" /> Jalan Benteng'
            });
var format_sd_4 = new ol.format.GeoJSON();
var features_sd_4 = format_sd_4.readFeatures(json_sd_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sd_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sd_4.addFeatures(features_sd_4);
var lyr_sd_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sd_4, 
                style: style_sd_4,
                popuplayertitle: "sd",
                interactive: true,
                title: '<img src="styles/legend/sd_4.png" /> sd'
            });
var format_sma_5 = new ol.format.GeoJSON();
var features_sma_5 = format_sma_5.readFeatures(json_sma_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sma_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sma_5.addFeatures(features_sma_5);
var lyr_sma_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sma_5, 
                style: style_sma_5,
                popuplayertitle: "sma",
                interactive: true,
                title: '<img src="styles/legend/sma_5.png" /> sma'
            });
var format_tk_6 = new ol.format.GeoJSON();
var features_tk_6 = format_tk_6.readFeatures(json_tk_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tk_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tk_6.addFeatures(features_tk_6);
var lyr_tk_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tk_6, 
                style: style_tk_6,
                popuplayertitle: "tk",
                interactive: true,
                title: '<img src="styles/legend/tk_6.png" /> tk'
            });
var format_masjid_7 = new ol.format.GeoJSON();
var features_masjid_7 = format_masjid_7.readFeatures(json_masjid_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_masjid_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_masjid_7.addFeatures(features_masjid_7);
var lyr_masjid_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_masjid_7, 
                style: style_masjid_7,
                popuplayertitle: "masjid",
                interactive: true,
                title: '<img src="styles/legend/masjid_7.png" /> masjid'
            });
var format_dimsum_8 = new ol.format.GeoJSON();
var features_dimsum_8 = format_dimsum_8.readFeatures(json_dimsum_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dimsum_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dimsum_8.addFeatures(features_dimsum_8);
var lyr_dimsum_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dimsum_8, 
                style: style_dimsum_8,
                popuplayertitle: "dimsum",
                interactive: true,
                title: '<img src="styles/legend/dimsum_8.png" /> dimsum'
            });
var format_smp_9 = new ol.format.GeoJSON();
var features_smp_9 = format_smp_9.readFeatures(json_smp_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_smp_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_smp_9.addFeatures(features_smp_9);
var lyr_smp_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_smp_9, 
                style: style_smp_9,
                popuplayertitle: "smp",
                interactive: true,
                title: '<img src="styles/legend/smp_9.png" /> smp'
            });

lyr_BentengUtarabatas_wilayah_kelurahandesa_10k__batas_wilayah_kelurahandesa_10k_arshp_0.setVisible(true);lyr_bentengbatas_wilayah_kelurahandesa_10k_ar_1.setVisible(true);lyr_BentengSelatanbatas_wilayah_kelurahandesa_10k_ar_2.setVisible(true);lyr_JalanBenteng_3.setVisible(true);lyr_sd_4.setVisible(true);lyr_sma_5.setVisible(true);lyr_tk_6.setVisible(true);lyr_masjid_7.setVisible(true);lyr_dimsum_8.setVisible(true);lyr_smp_9.setVisible(true);
var layersList = [lyr_BentengUtarabatas_wilayah_kelurahandesa_10k__batas_wilayah_kelurahandesa_10k_arshp_0,lyr_bentengbatas_wilayah_kelurahandesa_10k_ar_1,lyr_BentengSelatanbatas_wilayah_kelurahandesa_10k_ar_2,lyr_JalanBenteng_3,lyr_sd_4,lyr_sma_5,lyr_tk_6,lyr_masjid_7,lyr_dimsum_8,lyr_smp_9];
lyr_BentengUtarabatas_wilayah_kelurahandesa_10k__batas_wilayah_kelurahandesa_10k_arshp_0.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_bentengbatas_wilayah_kelurahandesa_10k_ar_1.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_BentengSelatanbatas_wilayah_kelurahandesa_10k_ar_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_JalanBenteng_3.set('fieldAliases', {'id': 'id', 'Nama Jalan': 'Nama Jalan', });
lyr_sd_4.set('fieldAliases', {'id': 'id', 'sd': 'sd', 'photo': 'photo', });
lyr_sma_5.set('fieldAliases', {'id': 'id', 'sma': 'sma', 'photo': 'photo', });
lyr_tk_6.set('fieldAliases', {'id': 'id', 'tk': 'tk', 'photo': 'photo', });
lyr_masjid_7.set('fieldAliases', {'id': 'id', 'masjid': 'masjid', 'photo': 'photo', });
lyr_dimsum_8.set('fieldAliases', {'id': 'id', 'dimsum': 'dimsum', 'photo': 'photo', });
lyr_smp_9.set('fieldAliases', {'id': 'id', 'smp': 'smp', 'photo': 'photo', });
lyr_BentengUtarabatas_wilayah_kelurahandesa_10k__batas_wilayah_kelurahandesa_10k_arshp_0.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_bentengbatas_wilayah_kelurahandesa_10k_ar_1.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_BentengSelatanbatas_wilayah_kelurahandesa_10k_ar_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_JalanBenteng_3.set('fieldImages', {'id': 'TextEdit', 'Nama Jalan': 'TextEdit', });
lyr_sd_4.set('fieldImages', {'id': 'TextEdit', 'sd': 'TextEdit', 'photo': 'ExternalResource', });
lyr_sma_5.set('fieldImages', {'id': 'TextEdit', 'sma': 'TextEdit', 'photo': 'ExternalResource', });
lyr_tk_6.set('fieldImages', {'id': 'TextEdit', 'tk': 'TextEdit', 'photo': 'ExternalResource', });
lyr_masjid_7.set('fieldImages', {'id': 'TextEdit', 'masjid': 'TextEdit', 'photo': 'ExternalResource', });
lyr_dimsum_8.set('fieldImages', {'id': 'TextEdit', 'dimsum': 'TextEdit', 'photo': 'ExternalResource', });
lyr_smp_9.set('fieldImages', {'id': 'TextEdit', 'smp': 'TextEdit', 'photo': 'ExternalResource', });
lyr_BentengUtarabatas_wilayah_kelurahandesa_10k__batas_wilayah_kelurahandesa_10k_arshp_0.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_bentengbatas_wilayah_kelurahandesa_10k_ar_1.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_BentengSelatanbatas_wilayah_kelurahandesa_10k_ar_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_JalanBenteng_3.set('fieldLabels', {'id': 'no label', 'Nama Jalan': 'no label', });
lyr_sd_4.set('fieldLabels', {'id': 'no label', 'sd': 'no label', 'photo': 'no label', });
lyr_sma_5.set('fieldLabels', {'id': 'no label', 'sma': 'no label', 'photo': 'no label', });
lyr_tk_6.set('fieldLabels', {'id': 'no label', 'tk': 'no label', 'photo': 'no label', });
lyr_masjid_7.set('fieldLabels', {'id': 'no label', 'masjid': 'no label', 'photo': 'no label', });
lyr_dimsum_8.set('fieldLabels', {'id': 'no label', 'dimsum': 'no label', 'photo': 'no label', });
lyr_smp_9.set('fieldLabels', {'id': 'no label', 'smp': 'no label', 'photo': 'no label', });
lyr_smp_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});