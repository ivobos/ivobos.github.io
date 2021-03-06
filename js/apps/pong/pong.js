define(['exports'], function(exports) {
    exports.getModuleConfig = function() {
        return {
            "apps/lib/container": { enabled: true},
            "apps/lib/camera": { enabled: true},
            "apps/lib/lights": { enabled: true},
            "apps/lib/renderer": { enabled: true},
            "apps/lib/loop": { enabled: true},
            "apps/lib/physics": { enabled: true},
            "apps/lib/mouse": { enabled: true},
            "apps/lib/touch": { enabled: true},
            "apps/lib/orientation": { enabled: true},
            "apps/lib/camshake": {enabled: true},
            "apps/lib/pointer": {enabled: true},
            "apps/pong/consts": { enabled: true},
            "apps/pong/balls": { enabled: true},
            "apps/pong/borders": { enabled: true},
            "apps/pong/paddles": { enabled: true}
        };
    };
});