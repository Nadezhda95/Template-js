function bot_logic(msg_data) {
  send(`Бот запущен`,msg_data.chat_id,API);
  send(msg_data,msg_data.chat_id,API)
}