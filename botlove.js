var TelegramBot = require('node-telegram-bot-api');
   
// replace the value below with the Telegram token you receive from @BotFather
var token = 'token';

// Create a bot that uses 'polling' to fetch new updates
var bot = new TelegramBot(token, {polling: true});

 //
bot.on('message',function(msg){ 
      var cha =-1001471466288   //idالقناة 

      
      if(msg.text  && msg.chat.type==='private'){
        console.log(msg)
        bot.getChatMember(cha,msg.from.id)  //يقبل id و مسج قروم ادي 
           .then(res=>{
             //في حالة عدم وجود العضو في القناة left
              if(res.status==="left"){


                 bot.deleteMessage(msg.chat.id,msg.message_id)
                 bot.sendMessage(msg.chat.id,"@"+msg.from.username+"  انت غير مشترك بالقناة\nيمكنك الاشتراك عن طريق \nالرابط في الاسفل",
                 {

                  'reply_markup':{ 
  
                    'inline_keyboard':[
          
                  [{text:"اضغط هنا للاشتراك",url:'رابط القناة'}]
                    ]}



                  })

              }else{

                     //في حالة وجود العضوو بالقناة member

           if(res.status==="member" ){
 
          bot.sendMessage(msg.chat.id,msg.from.username+"\n   نسبة حبك لشريك حياتك 👨‍👩‍👦💍"+" {"+msg.text+"}",
         {
             'reply_markup':{ 
                    
               'inline_keyboard':[
                  
                    [{text:"😻👨‍👩‍👧❤️( " +getRandomInt(100)+" )",callback_data:"bb"}]
                                            ]}})

                                     } 
              }
              })} 
              });
              function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max)); }
                  