/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='https://raw.githubusercontent.com/DeathBarmaglot/climber/main/new/images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'f',
                type: 'image',
                rect: ['0px', '-3px','300px','191px','auto', 'auto'],
                clip: ['rect(3px 300px 183.5px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"f.jpg",'0px','0px']
            },
            {
                id: '_5',
                display: 'block',
                type: 'image',
                rect: ['-484px', '-148px','1270px','570px','auto', 'auto'],
                overflow: 'visible',
                opacity: 1,
                fill: ["rgba(0,0,0,0)",im+"5.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'new',
                display: 'block',
                type: 'image',
                rect: ['-506px', '-227px','1320px','560px','auto', 'auto'],
                overflow: 'visible',
                fill: ["rgba(0,0,0,0)",im+"new.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: '_2',
                display: 'block',
                type: 'image',
                rect: ['-1px', '-2px','122px','182px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.jpg",'0px','0px']
            },
            {
                id: '_1b',
                display: 'block',
                type: 'image',
                rect: ['166px', '-1px','139px','185px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1b.jpg",'0px','0px']
            },
            {
                id: 'l',
                display: 'block',
                type: 'image',
                rect: ['-1274px', '-784px','2860px','1750px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"l.svg",'0px','0px'],
                transform: [[],[],[],['0.08','0.08']]
            },
            {
                id: '_1a',
                display: 'none',
                type: 'image',
                rect: ['0px', '-4px','127px','192px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1a.jpg",'0px','0px']
            },
            {
                id: '_1c',
                display: 'none',
                type: 'image',
                rect: ['0px', '-6px','127px','192px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1c.jpg",'0px','0px'],
                transform: [[],[],[],['-1']]
            },
            {
                id: 'mag',
                display: 'block',
                type: 'image',
                rect: ['-530px', '-229px','1490px','650px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"mag.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'a12',
                display: 'none',
                type: 'image',
                rect: ['-596px', '-172px','1620px','610px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a12.svg",'0px','0px'],
                transform: [[],[],[],['0.09','0.09']]
            },
            {
                id: 'a2',
                display: 'none',
                type: 'image',
                rect: ['-579px', '-174px','1590px','610px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a2.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: '_1',
                display: 'block',
                type: 'image',
                rect: ['164px', '-4px','139px','184px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.jpg",'0px','0px']
            },
            {
                id: 't',
                type: 'image',
                rect: ['-447px', '53px','1060px','150px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'i',
                type: 'image',
                rect: ['-636px', '-12px','1430px','290px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"i.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_a2}": [
                ["style", "top", '-174px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "left", '-579px'],
                ["style", "display", 'none']
            ],
            "${_new}": [
                ["style", "top", '-226px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "left", '-506px'],
                ["style", "display", 'block']
            ],
            "${__1b}": [
                ["style", "top", '-1px'],
                ["style", "display", 'block'],
                ["style", "height", '185px'],
                ["style", "left", '166px'],
                ["style", "width", '139px']
            ],
            "${__1c}": [
                ["style", "top", '-6px'],
                ["style", "display", 'none'],
                ["style", "height", '192px'],
                ["transform", "scaleX", '-1'],
                ["style", "left", '0px'],
                ["style", "width", '127px']
            ],
            "${_i}": [
                ["style", "top", '-12px'],
                ["transform", "scaleY", '0'],
                ["style", "left", '-636px'],
                ["transform", "scaleX", '0']
            ],
            "${_f}": [
                ["style", "top", '-3px'],
                ["style", "left", '0px'],
                ["style", "clip", [3,300,183.5,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__2}": [
                ["style", "top", '-2px'],
                ["style", "display", 'block'],
                ["style", "height", '182px'],
                ["style", "opacity", '0'],
                ["style", "left", '-1px'],
                ["style", "width", '122px']
            ],
            "${_a1}": [
                ["style", "left", '324px'],
                ["style", "top", '72px']
            ],
            "${_l}": [
                ["style", "top", '-784px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "clip", [0,2860,961.8399047851563,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-1274px'],
                ["style", "display", 'block']
            ],
            "${__1}": [
                ["style", "top", '-4px'],
                ["style", "height", '184px'],
                ["style", "display", 'block'],
                ["style", "left", '164px'],
                ["style", "width", '139px']
            ],
            "${_mag}": [
                ["style", "top", '-229px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "left", '-530px'],
                ["style", "display", 'block']
            ],
            "${_a12}": [
                ["style", "top", '-172px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "left", '-596px'],
                ["style", "display", 'none']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_t}": [
                ["style", "top", '53px'],
                ["transform", "scaleY", '0'],
                ["style", "left", '-447px'],
                ["transform", "scaleX", '0']
            ],
            "${__5}": [
                ["style", "top", '-148px'],
                ["style", "display", 'block'],
                ["style", "opacity", '1'],
                ["style", "clip", [0,1270,-75,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-484px']
            ],
            "${__1a}": [
                ["style", "top", '-4px'],
                ["style", "display", 'none'],
                ["style", "height", '192px'],
                ["style", "left", '0px'],
                ["style", "width", '127px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 12000,
            autoPlay: true,
            timeline: [
                { id: "eid9", tween: [ "transform", "${_new}", "scaleY", '0.15', { fromValue: '0'}], position: 0, duration: 287, easing: "easeInOutCubic" },
                { id: "eid16", tween: [ "transform", "${_new}", "scaleY", '0.12', { fromValue: '0.15'}], position: 345, duration: 155, easing: "easeInOutCubic" },
                { id: "eid111", tween: [ "style", "${_l}", "clip", [0,2860,1750,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,2860,961.8399047851563,0]}], position: 10309, duration: 1362, easing: "easeInOutCubic" },
                { id: "eid33", tween: [ "style", "${_a1}", "left", '-405px', { fromValue: '324px'}], position: 1665, duration: 85 },
                { id: "eid101", tween: [ "transform", "${_t}", "scaleY", '0.12', { fromValue: '0'}], position: 6956, duration: 137, easing: "easeInOutCubic" },
                { id: "eid105", tween: [ "transform", "${_t}", "scaleY", '0', { fromValue: '0.12'}], position: 8352, duration: 137, easing: "easeInOutCubic" },
                { id: "eid96", tween: [ "transform", "${_i}", "scaleX", '0.1', { fromValue: '0'}], position: 8489, duration: 137, easing: "easeInOutCubic" },
                { id: "eid108", tween: [ "transform", "${_i}", "scaleX", '0', { fromValue: '0.1'}], position: 9863, duration: 137, easing: "easeInOutCubic" },
                { id: "eid100", tween: [ "transform", "${_t}", "scaleX", '0.12', { fromValue: '0'}], position: 6956, duration: 137, easing: "easeInOutCubic" },
                { id: "eid104", tween: [ "transform", "${_t}", "scaleX", '0', { fromValue: '0.12'}], position: 8352, duration: 137, easing: "easeInOutCubic" },
                { id: "eid47", tween: [ "transform", "${_a2}", "scaleX", '0.09', { fromValue: '0'}], position: 5500, duration: 130, easing: "easeInOutCubic" },
                { id: "eid2", tween: [ "style", "${__2}", "opacity", '1', { fromValue: '0'}], position: 2076, duration: 210, easing: "easeInOutCubic" },
                { id: "eid64", tween: [ "style", "${__2}", "display", 'none', { fromValue: 'block'}], position: 4098, duration: 0 },
                { id: "eid91", tween: [ "style", "${__2}", "display", 'none', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid20", tween: [ "style", "${__5}", "display", 'none', { fromValue: 'block'}], position: 2076, duration: 0 },
                { id: "eid89", tween: [ "style", "${__5}", "display", 'none', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid84", tween: [ "style", "${_l}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
                { id: "eid12", tween: [ "style", "${__5}", "clip", [0,1270,570,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,1270,-75,0]}], position: 500, duration: 500, easing: "easeInOutCubic" },
                { id: "eid39", tween: [ "transform", "${_a12}", "scaleX", '0.09', { fromValue: '0'}], position: 3897, duration: 130, easing: "easeInOutCubic" },
                { id: "eid52", tween: [ "transform", "${_a12}", "scaleX", '0', { fromValue: '0.09'}], position: 5500, duration: 130, easing: "easeInOutCubic" },
                { id: "eid97", tween: [ "transform", "${_i}", "scaleY", '0.1', { fromValue: '0'}], position: 8489, duration: 137, easing: "easeInOutCubic" },
                { id: "eid109", tween: [ "transform", "${_i}", "scaleY", '0', { fromValue: '0.1'}], position: 9863, duration: 137, easing: "easeInOutCubic" },
                { id: "eid49", tween: [ "style", "${_a2}", "display", 'block', { fromValue: 'none'}], position: 5500, duration: 0 },
                { id: "eid69", tween: [ "style", "${_a2}", "display", 'none', { fromValue: 'block'}], position: 6970, duration: 0 },
                { id: "eid92", tween: [ "style", "${_a2}", "display", 'none', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid34", tween: [ "style", "${_a1}", "top", '-202px', { fromValue: '72px'}], position: 1665, duration: 85 },
                { id: "eid19", tween: [ "style", "${_new}", "display", 'none', { fromValue: 'block'}], position: 2076, duration: 0 },
                { id: "eid90", tween: [ "style", "${_new}", "display", 'none', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid82", tween: [ "transform", "${_l}", "scaleY", '0.08', { fromValue: '0'}], position: 10000, duration: 309, easing: "easeInOutCubic" },
                { id: "eid22", tween: [ "transform", "${_mag}", "scaleY", '0.1', { fromValue: '0'}], position: 2076, duration: 130, easing: "easeInOutCubic" },
                { id: "eid38", tween: [ "transform", "${_a12}", "scaleY", '0.09', { fromValue: '0'}], position: 3897, duration: 130, easing: "easeInOutCubic" },
                { id: "eid53", tween: [ "transform", "${_a12}", "scaleY", '0', { fromValue: '0.09'}], position: 5500, duration: 130, easing: "easeInOutCubic" },
                { id: "eid41", tween: [ "style", "${_a12}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid42", tween: [ "style", "${_a12}", "display", 'block', { fromValue: 'none'}], position: 3897, duration: 0 },
                { id: "eid85", tween: [ "style", "${_a12}", "display", 'none', { fromValue: 'block'}], position: 12000, duration: 0 },
                { id: "eid80", tween: [ "transform", "${_l}", "scaleX", '0.08', { fromValue: '0'}], position: 10000, duration: 309, easing: "easeInOutCubic" },
                { id: "eid48", tween: [ "transform", "${_a2}", "scaleY", '0.09', { fromValue: '0'}], position: 5500, duration: 130, easing: "easeInOutCubic" },
                { id: "eid71", tween: [ "style", "${__1b}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid70", tween: [ "style", "${__1b}", "display", 'block', { fromValue: 'none'}], position: 7036, duration: 0 },
                { id: "eid76", tween: [ "style", "${__1b}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0 },
                { id: "eid86", tween: [ "style", "${__1b}", "display", 'none', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid78", tween: [ "style", "${_mag}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid88", tween: [ "style", "${_mag}", "display", 'none', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid32", tween: [ "style", "${_mag}", "top", '-269px', { fromValue: '-229px'}], position: 3852, duration: 175, easing: "easeInOutCubic" },
                { id: "eid68", tween: [ "style", "${_mag}", "top", '-268px', { fromValue: '-269px'}], position: 6970, duration: 66, easing: "easeInOutCubic" },
                { id: "eid27", tween: [ "style", "${__1c}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${__1c}", "display", 'block', { fromValue: 'none'}], position: 5630, duration: 0 },
                { id: "eid63", tween: [ "style", "${__1c}", "display", 'none', { fromValue: 'block'}], position: 6970, duration: 0 },
                { id: "eid87", tween: [ "style", "${__1c}", "display", 'none', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid67", tween: [ "style", "${_mag}", "left", '-663px', { fromValue: '-530px'}], position: 6970, duration: 66, easing: "easeInOutCubic" },
                { id: "eid75", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid74", tween: [ "style", "${__1}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
                { id: "eid77", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'block'}], position: 10000, duration: 0 },
                { id: "eid83", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid28", tween: [ "style", "${__1a}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${__1a}", "display", 'block', { fromValue: 'none'}], position: 4027, duration: 0 },
                { id: "eid58", tween: [ "style", "${__1a}", "display", 'none', { fromValue: 'block'}], position: 5630, duration: 0 },
                { id: "eid93", tween: [ "style", "${__1a}", "display", 'none', { fromValue: 'none'}], position: 12000, duration: 0 },
                { id: "eid7", tween: [ "transform", "${_new}", "scaleX", '0.15', { fromValue: '0'}], position: 0, duration: 287, easing: "easeInOutCubic" },
                { id: "eid15", tween: [ "transform", "${_new}", "scaleX", '0.12', { fromValue: '0.15'}], position: 345, duration: 155, easing: "easeInOutCubic" },
                { id: "eid21", tween: [ "transform", "${_mag}", "scaleX", '0.1', { fromValue: '0'}], position: 2076, duration: 130, easing: "easeInOutCubic" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-961887");
