UI.AddCheckbox("Enable Chat Spam");

var _timeouts = []; function setTimeout(t, e) { var i = (new Date).getTime(); return _timeouts.push({ date: i, wait: e, call: t, type: "timeout" }), _timeouts.length - 1 } function setInterval(t, e) { var i = (new Date).getTime(); return _timeouts.push({ date: i, wait: e, call: t, type: "interval" }), _timeouts.length - 1 } function clearTimeout(t) { _timeouts.splice(t, 1) } function clearInterval(t) { clearTimeout(t) } function _setTimeoutOnFrame() { for (var t = (new Date).getTime(), e = 0; e < _timeouts.length; e++) { var i = _timeouts[e]; t > i.date + i.wait && (i.call(t + i.wait, e), "timeout" == i.type ? _timeouts.splice(e, 1) : "interval" == i.type && (_timeouts[e].date = t)) } } Global.RegisterCallback("FrameStageNotify", "_setTimeoutOnFrame");
var lol;
var string;

string = UI.AddTextbox("Message");

function Main() {

        lol = setTimeout(Say, 1000);
} 

function Say() {
    if (!UI.GetValue("Enable Chat Spam"))
        return Main();

    var test = UI.GetString.apply(this, string);

    Global.ExecuteCommand('say ' + test);
    Main();
} Main();