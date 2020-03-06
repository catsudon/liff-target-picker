liff.sendMessages([{
  type: 'text',
  text: "You've successfully sent a message! Hooray!"
}, {
  type: 'sticker',
  packageId: '2',
  stickerId: '144'
}]).then(function () {
  window.alert("Message sent");
}).catch(function (error) {
  window.alert("Error sending message: " + error);
});