window.onload = function (e) {
    liff.init(function (data) {
        initializeApp(data);
    });
};

function initializeApp(data) {
    
}
document.getElementById('accessTokenField').textContent = accessToken;
toggleAccessToken();

liff.sendMessages([{
    'type': 'text',
    'text': "You've successfully sent a message! Hooray!"
}]).then(function() {
    window.alert('Message sent');

if(true){
    liff.shareTargetPicker([
        {
          type: "text",
          text: "Hello, World!"
        }
      ])}