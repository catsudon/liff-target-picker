var imgLink = ["https://upload.wikimedia.org/wikipedia/commons/5/51/Small_Red_Rose.JPG","https://1.bp.blogspot.com/-toDpeHWOY1w/VfOPP6a8UeI/AAAAAAAADrI/gFs7cFJJ5KY/s1600/img_3944.jpg","https://lh3.googleusercontent.com/proxy/wzwon5mMgifnnWaO9Thnoz1qBJIbzlBGXTtbJyaUt_Y4D8cxEe28_5PYBALRd5Psak9aNuAOSE852VqObGiAgMetV6VvzeRzOH0AeQ8H3MsrsmB7o1oMnLXzwE0M_6kHJQ","https://i.pinimg.com/originals/4c/58/74/4c58747c86541e59a8bc1c19a06859f9.jpg","https://2.bp.blogspot.com/-FhI7s8FCrGk/UrGwGMqNsII/AAAAAAAAAEk/xI1dvqGEhyA/s1600/DSC029766.jpg","https://img1.thaicomment.com/tc/friday/friday_004.jpg","https://www.technologychaoban.com/wp-content/uploads/2016/09/%E0%B8%9B%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%81%E0%B8%B8%E0%B8%AB%E0%B8%A5%E0%B8%B2%E0%B8%9A.jpg"]
var dayDisplay = ["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"]
var quote = ["สวัสดีเช้าวันอาทิตย์ \nสมหวัง...ทุกสิ่ง\nสมจริง...ทุกอย่าง","ขอให้สุขสำราญ เบิกบานจิต\nคิดสิ่งใด ให้สมปรารถนา","สดชื่นแจ่มใส\nใจสบายจิตร่มเย็น","ขอให้วันนี้ เป็นวันที่มีแต่รอยยิ้ม\nทุกปัญหาที่เจอ ผ่านไปได้ด้วยดี\nมีแต่สิ่งดีๆเกิดกับคุณและครอบครัว","อุดมโชค อุดมทรัพย์ อยู่เย็นเป็นสุข","ขอให้สุขสำราญ การงานสดใส","ยิ้มรับกับวันใหม่\nก้าวเดินต่อไปทางตามฝัน"]
window.onload = function (e) {
    tday = new Date()
    cday = tday.toUTCString()
    hour = cday.slice(17,19)
    dayName = cday.slice(0,3)
    if (dayName=="Sun" && hour<=18){
        var dayNum = 0
    }
    if (dayName=="Sun" && hour > 18){
        var dayNum = 1
    }
    if (dayName=="Mon" && hour<=18){
        var dayNum = 1
    }
    if (dayName=="Mon" && hour > 18){
        var dayNum = 2
    }
    if (dayName=="Tue" && hour<=18){
        var dayNum = 2
    }
    if (dayName=="Tue" && hour > 18){
        var dayNum = 3
    }
    if (dayName=="Wed" && hour<=18){
        var dayNum = 3
    }
    if (dayName=="Wed" && hour > 18){
        var dayNum = 4
    }
    if (dayName=="Thu" && hour<=18){
        var dayNum = 4
    }
    if (dayName=="Thu" && hour > 18){
        var dayNum = 5
    }
    if (dayName=="Fri" && hour<=18){
        var dayNum = 5
    }
    if (dayName=="Fri" && hour > 18){
        var dayNum = 6
    }
    if (dayName=="Sat" && hour<=18){
        var dayNum = 6
    }
    if (dayName=="Sat" && hour > 18){
        var dayNum = 0
    }
    console.log(hour)
    
  liff.init(function (data) {
      initializeApp(data);
      liff.sendMessages([{
        "type": "flex",
        "altText": "Flex Message",
        "contents": {
          "type": "bubble",
          "direction": "ltr",
          "header": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "สวัสดีวัน"+dayDisplay[dayNum],
                "size": "xxl",
                "align": "center",
                "color": "#DCC251"
              }
            ]
          },
          "hero": {
            "type": "image",
            "url": imgLink[dayNum],
            "flex": 10,
            "align": "center",
            "size": "full",
            "aspectRatio": "4:3",
            "aspectMode": "fit"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "เปรมปรีศรีสุข",
                "align": "center",
                "wrap": true
              }
            ]
          },
          "footer": {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "ส่งต่อให้เพื่อนๆ",
                  "uri": "https://linecorp.com"
                },
                "color": "#D3DD37"
              }
            ]
          }
        }
      }])
//     liff.login()
//     liff.shareTargetPicker([{
//       type: 'text',
//       text: "yaranaika"
//   }]).catch(function (error) {
//     window.alert("Error sending message: " + error);
// });
  })}

function initializeApp(data) {
  document.getElementById('languagefield').textContent = data.language;
  document.getElementById('viewtypefield').textContent = data.context.viewType;
  document.getElementById('useridfield').textContent = data.context.userId;
  document.getElementById('utouidfield').textContent = data.context.utouId;
  document.getElementById('roomidfield').textContent = data.context.roomId;
  document.getElementById('groupidfield').textContent = data.context.groupId;

  // openWindow call
  document.getElementById('openwindowbutton').addEventListener('click', function () {
      liff.openWindow({
          url: 'https://line.me'
      });
  });

  // closeWindow call
  document.getElementById('closewindowbutton').addEventListener('click', function () {
      liff.closeWindow();
  });

  // sendMessages call
  document.getElementById('sendmessagebutton').addEventListener('click', function () {
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
  });

  // get access token
  document.getElementById('getaccesstoken').addEventListener('click', function () {
      const accessToken = liff.getAccessToken();
      document.getElementById('accesstokenfield').textContent = accessToken;
      toggleAccessToken();
  });

  // get profile call
  document.getElementById('getprofilebutton').addEventListener('click', function () {
      liff.getProfile().then(function (profile) {
          document.getElementById('useridprofilefield').textContent = profile.userId;
          document.getElementById('displaynamefield').textContent = profile.displayName;

          const profilePictureDiv = document.getElementById('profilepicturediv');
          if (profilePictureDiv.firstElementChild) {
              profilePictureDiv.removeChild(profilePictureDiv.firstElementChild);
          }
          const img = document.createElement('img');
          img.src = profile.pictureUrl;
          img.alt = "Profile Picture";
          profilePictureDiv.appendChild(img);

          document.getElementById('statusmessagefield').textContent = profile.statusMessage;
          toggleProfileData();
      }).catch(function (error) {
          window.alert("Error getting profile: " + error);
      });
  });
}

function toggleAccessToken() {
  toggleElement('accesstokendata');
}

function toggleProfileData() {
  toggleElement('profileinfo');
}

function toggleElement(elementId) {
  const elem = document.getElementById(elementId);
  if (elem.offsetWidth > 0 && elem.offsetHeight > 0) {
      elem.style.display = "none";
  } else {
      elem.style.display = "block";
  }
}