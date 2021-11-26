function api_connector ()
{
  let App_link = "";
  UrlFetchApp.fetch("https://api.telegram.org/bot"+API+"/setWebHook?url="+App_link); 
}