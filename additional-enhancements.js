/**
 * Additional Enhancements:
 *  - ideas by Armand Tresova
 *
 * @author xjsv
 * @version 1.1.3
 * @url https://raw.githubusercontent.com/XjSv/BBLog-Additional-Enhancements/master/additional-enhancements.js
 * @last-edit 2.21.2015 22:00
 */

BBLog.handle("add.plugin", {

    id   : "additional-enhancements",
    name : "Additional Enhancements",

    configFlags : [
        ["option.remove-buy-battlepacks", 0],
        ["option.remove-side-bar",        0],
    ],

    translations : {
        "en" : {
            "option.remove-buy-battlepacks"         : "Remove the 'BUY BATTLEPACKS' box in the Battlepacks page",
            "option.remove-buy-battlepacks.tooltip" : "Removes the 'BUY BATTLEPACKS' box above the 'UPCOMING RANK BATTLEPACKS' box in the Battlepacks page.",
            "option.remove-side-bar"                : "Remove the right sidebar in the landing page",
            "option.remove-side-bar.tooltip"        : "Removes the right sidebar in the landing page (battlelog.battlefield.com/bf4/) and expands the battle feed.",
        },
        "de" : {
            "option.remove-buy-battlepacks"         : "Remove the 'BUY BATTLEPACKS' box in the Battlepacks page",
            "option.remove-buy-battlepacks.tooltip" : "Removes the 'BUY BATTLEPACKS' box in the Battlepacks page.",
            "option.remove-side-bar"                : "Remove the right sidebar in the landing page",
            "option.remove-side-bar.tooltip"        : "Removes the right sidebar in the landing page and expands the battle feed.",
        },
    },

    init : function(instance) {
        if(BBLog.cache("mode") == "bf4") {
          instance.removeBuyBattlePacks(instance);
          instance.removeSideBar(instance);
        }
    },

    domchange : function(instance) {
        if(BBLog.cache("mode") == "bf4") {
          instance.removeBuyBattlePacks(instance);
          instance.removeSideBar(instance);
        }
    },

    removeBuyBattlePacks : function(instance) {
        var url = window.location.href;
        if(instance.storage("option.remove-buy-battlepacks") && url.match(/\/battlepacks\//) && $(".battlepacks-buypacks").length > 0) {
           $(".battlepacks-buypacks").remove();
        }
    },

    removeSideBar : function(instance) {
        var path = window.location.pathname;
        if(instance.storage("option.remove-side-bar") && path == '/bf4/' && $(".base-middle-content").length > 0 && $(".main-side-column").length > 0) {
            var battleFeed = $(".base-middle-content .span8");

            if($(battleFeed).hasClass('span8')) {
                $(battleFeed).removeClass('span8').addClass('span12');
            }

            $(".main-side-column").remove();
        }
    },
});