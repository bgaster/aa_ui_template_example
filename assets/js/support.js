// A display messages to console version of AA's message library.

var console_msg = 0;
var send_param = 1;
var get_param = 2;
var change_module = 3;

function getParam(paramIdx) {
    var message = {
      "msg": "getParam",
      "index": paramIdx,
    };
    console.log(JSON.stringify(message))
}

function sendParam(paramIdx, value) {
    var message = {
      "msg": "sendParam",
      "index": paramIdx,
      "value": value
    };
    console.log(JSON.stringify(message))
}

function sendMsg(msgType, paramIdx, value) {
  if (value == undefined) {
    var message = {
      "msg": msgType,
      "index": paramIdx,
    };
  }
  else {
    var message = {
      "msg": msgType,
      "index": paramIdx,
      "value": value
    };
  }
  console.log(JSON.stringify(message))
}

function sendConsole(value) {
  var message = {
    "msg": "console",
    "index": 0,
    "value": value
  };
  console.log(JSON.stringify(message))
}