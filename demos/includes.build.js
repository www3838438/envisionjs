window.FlashCanvasOptions = {
  swfPath: 'lib/FlashCanvas/bin/'
};
yepnope([

  {
    test : (navigator.appVersion.indexOf("MSIE") != -1  && parseFloat(navigator.appVersion.split("MSIE")[1]) < 9),
    yep : [
      'lib/flotr2/lib/base64.js'
    ]
  },
  {
    test : (navigator.appVersion.indexOf("MSIE") != -1),
    yep : [
      'lib/FlashCanvas/bin/flashcanvas.js'
    ]
  },

  // Libs
  'flotr2.min.js',
  'handles.js',
  'lib/bonzo/bonzo.min.js',
  'vis.min.js',

  { complete : example }
]);
