/*jslint vars: true , plusplus: true, continue:true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global $*/
$.__bodymovin.bm_audioHelper = (function () {
    var bm_keyframeHelper = $.__bodymovin.bm_keyframeHelper;
    var bm_timeremapHelper = $.__bodymovin.bm_timeremapHelper;
    var bm_generalUtils = $.__bodymovin.bm_generalUtils;
    var bm_eventDispatcher = $.__bodymovin.bm_eventDispatcher;
    var ob = {};
    
    function exportAudio(layerInfo, data, frameRate) {
        // For now nothing additional is getting exported
        // since the audio is rasterized with all effects applied during export
        // var stretch = data.sr;
        // var audioProperty = layerInfo.property('Audio');
        // bm_timeremapHelper.exportTimeremap(layerInfo, data, frameRate);
        // data.au = {
        //     lv: bm_keyframeHelper.exportKeyframes(audioProperty.property('Audio Levels'), frameRate, stretch),
        // }
        //
    }
    
    ob.exportAudio = exportAudio;
    
    return ob;
}());
    