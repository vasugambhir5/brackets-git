import * as RemoteCommon from "./RemoteCommon";
import * as Promise from "bluebird";
import * as Strings from "strings";

var Dialogs = brackets.getModule("widgets/Dialogs"),
    Mustache = brackets.getModule("thirdparty/mustache/mustache");

var template            = require("text!src/dialogs/templates/push-dialog.html"),
    remotesTemplate     = require("text!src/dialogs/templates/remotes-template.html"),
    credentialsTemplate = require("text!src/dialogs/templates/credentials-template.html");

var defer,
    pushConfig;

function _attachEvents($dialog) {
    RemoteCommon.attachCommonEvents(pushConfig, $dialog);

    // select default - we don't want to remember forced or delete branch as default
    $dialog
        .find("input[name='strategy']")
        .filter("[value='DEFAULT']")
        .prop("checked", true);
}

function _show() {
    var templateArgs = {
        config: pushConfig,
        mode: "PUSH_TO",
        modeLabel: Strings.PUSH_TO,
        Strings: Strings
    };

    var compiledTemplate = Mustache.render(template, templateArgs, {
            credentials: credentialsTemplate,
            remotes: remotesTemplate
        }),
        dialog = Dialogs.showModalDialogUsingTemplate(compiledTemplate),
        $dialog = dialog.getElement();

    _attachEvents($dialog);

    dialog.done(function (buttonId) {
        if (buttonId === "ok") {
            RemoteCommon.collectValues(pushConfig, $dialog);
            defer.resolve(pushConfig);
        } else {
            defer.reject();
        }
    });
}

export function show(_pushConfig) {
    defer = Promise.defer();
    pushConfig = _pushConfig;
    pushConfig.push = true;
    RemoteCommon.collectInfo(pushConfig).then(_show);
    return defer.promise;
}
