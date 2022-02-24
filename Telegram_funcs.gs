/**
 * The function sends a message to the chat by bot
 * 
 * @param  {string} msg Text to be sent
 * @param  {number} chat_id
 * @param  {string} api Bot's API
 */
function send(msg, chat_id, api) {
  var payload = {
  'method': 'sendMessage',
  'chat_id': String(chat_id),
  'text': msg,
  'parse_mode': 'HTML'
  }
  var data = {
    'method': 'post',
    'payload': payload
  }
    UrlFetchApp.fetch('https://api.telegram.org/bot' + api + '/', data);
}


/**
 * The function edits a message text
 * 
 * @param  {string} msg Text to be sent
 * @param  {number} msg_id
 * @param  {string} api Bot's API
 */
function edit_msg(msg, chat_id, msg_id, api) {
  var payload = {
  'method': 'editMessageText',
  'chat_id': String(chat_id),
  'message_id': String(msg_id),
  'text': msg,
  'parse_mode': 'HTML'
  }
  var data = {
    'method': 'post',
    'payload': payload
  }
    UrlFetchApp.fetch('https://api.telegram.org/bot' + api + '/', data);
}



/**
 * The function sends a message to the chat by bot with reply
 * 
 * @param  {string} msg Text to be sent
 * @param  {number} chat_id
 * @param  {string} api Bot's API
 */
function send_reply(msg, chat_id, msg_id, api) {
  var payload = {
  'method': 'sendMessage',
  'chat_id': String(chat_id),
  'text': msg,
  'reply_to_message_id': msg_id,
  'parse_mode': 'HTML'
  }
  var data = {
    'method': 'post',
    'payload': payload
  }
    UrlFetchApp.fetch('https://api.telegram.org/bot' + api + '/', data);
}

/**
 * The function deletes a message from the chat
 * 
 * @param  {number} chat_id
 * @param  {number} msg_id Message's id to be deleted
 * @param  {string} api Bot's API
 */
function delete_msg(chat_id, msg_id, api) {
  var payload = {
  'method': 'deleteMessage',
  'chat_id': String(chat_id),
  'message_id': String(msg_id),
  'parse_mode': 'HTML'
  }
  var data = {
    'method': 'post',
    'payload': payload
  }
    UrlFetchApp.fetch('https://api.telegram.org/bot' + api + '/', data);
}

/**
 * The function sends an inline-keyboard to the chat
 * 
 * @param  {string} msg Text to be sent
 * @param  {number} chat_id
 * @param  {string} api Bot's API
 * @param  {object} keyboard The keyboard to be sent
 * 
 */
function send_key(msg, chat_id, api, keyboard)
{
  var payload = {
    'method': 'sendMessage',
    'chat_id': String(chat_id),
    'text': msg,
    'parse_mode': 'HTML',
    reply_markup : JSON.stringify(keyboard)
  }
  var data = {
    'method': 'post',
    'payload': payload
  }
  UrlFetchApp.fetch('https://api.telegram.org/bot' + api + '/', data);
}

/**
 * The function removes ReplyKeyboardMarkup
 * 
 * @param  {string} msg Text to be sent
 * @param  {number} chat_id
 * @param  {string} api Bot's API
 * 
 */
function send_removeKeyboard(msg, chat_id, api) {
   var payload = {
    'method': 'sendMessage',
    'chat_id': String(chat_id),
    'text': msg,
    'parse_mode': 'HTML',
    'reply_markup' : JSON.stringify({'remove_keyboard': true})
  }
  var data = {
    'method': 'post',
    'payload': payload
  }
  UrlFetchApp.fetch('https://api.telegram.org/bot' + api + '/', data); 
}

/**
 * The function sends GIF animation to the chat by bot
 * 
 * @param  {string} file_id GIF's id in telegram
 * @param  {number} chat_id
 * @param  {string} api Bot's API
 * 
 */
function send_animation(file_id, chat_id, api) {
  var payload = {
  'method': 'sendAnimation',
  'chat_id': String(chat_id),
  'animation': String(file_id)
  }
  var data = {
    'method': 'post',
    'payload': payload
  }
    UrlFetchApp.fetch('https://api.telegram.org/bot' + api + '/', data);
}

/**
 * The function deletes an inline-keyboard
 * 
 * @param  {number} chat_id
 * @param  {number} msg_id Message's id corresponding to the keyboard
 * @param  {string} api Bot's API
 * 
 */
function delete_inline(chat_id, msg_id, api) {
  var payload = {
    'method': 'editMessageReplyMarkup',
    'chat_id': String(chat_id),
    'message_id': String(msg_id)
  }
  var Data = {
    'method': 'post',
    'payload': payload
  }
  UrlFetchApp.fetch('https://api.telegram.org/bot' + api + '/', Data); 
}

/**
 * The function deletes an inline-keyboard
 * 
 * @param  {number} chat_id
 * @param  {number} msg_id Message's id corresponding to the keyboard
 * @param  {string} api Bot's API
 * @param  {object} keyboard  The keyboard to be sent instead of current one
 * 
 */
function edit_inline(chat_id, msg_id, api, keyboard) {
  var payload = {
    'method': 'editMessageReplyMarkup',
    'chat_id': String(chat_id),
    'message_id': String(msg_id),
    'reply_markup': JSON.stringify(keyboard)
  }
  
  var Data = {
    'method': 'post',
    'payload': payload
  }
  UrlFetchApp.fetch('https://api.telegram.org/bot' + api + '/', Data); 
}

/**
 * The function sends the typing action
 * 
 * @param  {number} chat_id
 * @param  {string} api Bot's API
 * 
 */
function send_action(chat_id,api) { //переименовать
  var payload = {
    'method': 'sendChatAction',
    'chat_id': String(chat_id),
    'action': 'typing'
  }
  var Data = {
    'method': 'post',
    'payload': payload
  }
  UrlFetchApp.fetch('https://api.telegram.org/bot' + api + '/', Data); 
}


function getNewDate(days) { //переименовать и перенести
  //let days = 2;
  let date = new Date();
  date.setDate(date.getDate()+days);
  date = date.toLocaleDateString('en-UK')+' '+date.toLocaleTimeString('en-UK');
  let date_arr = date.split(' ');
  let newDate = date_arr[0]

  //Logger.log(newDate)
  return newDate;
}


function getLastRow(sheet, column) { //переименовать и перенести
  const values = sheet.getRange(column + sheet.getLastRow()).getDisplayValues();
  let lastRow = 0;
  for (let i = values.length - 1; i >= 0 ; i--) {
    if (!lastRow && !values[i].every(e => e == '')) {
      lastRow = i + 1;
      break
    }
  }
  return lastRow;
}

/**
 * The function returns an index of the key in the sheet's column
 * 
 * @param  {number} key The key for searching
 * @param  {SpreadsheetApp.Sheet} sheet The variable containing link to the sheet
 * @param  {number} col The number of the column for searching
 * @return {number} ind of the key in the table if table includes a header or index of position in the array
 */
function getInd(key,sheet,col) { //переименовать и перенести

  let lr = sheet.getLastRow();
  let chat_id_arr = sheet.getRange(1,col,lr).getValues();
  chat_id_arr = chat_id_arr.flat();
  let ind = chat_id_arr.indexOf(key);
  
  return ind;
}


/**
 * The function sends photo to the chat by bot
 * 
 * @param  {string} doc blob format
 * @param  {number} chat_id
 * @param  {string} api Bot's API
 * 
 */
function send_doc(doc, chat_id, api) {
  var payload = {
  'method': 'sendDocument',
  'chat_id': String(chat_id),
  'document': doc
  }
  var data = {
    'method': 'post',
    'payload': payload
  }
    UrlFetchApp.fetch('https://api.telegram.org/bot' + api + '/', data);
}
