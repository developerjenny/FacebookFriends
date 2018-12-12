/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile={
  name:"Juhee Kang",
  friends: 500,
  messages: ["hello","niceToMeetU","longTimeNoSee"],
  postMessage: function post(message){
      facebookProfile.messages.push(message);
      return facebookProfile.messages;
  },
  deleteMessage: function deleteMessage(index){
      facebookProfile.messages.splice(index,1);
      return facebookProfile.messages;
  },
  addFriend: function add(){
      facebookProfile.friends+=1;
      return facebookProfile.friends;
  },
  removeFriend: function removeFriend(){
      
      facebookProfile.friends-=1;
      return facebookProfile.friends;
  }
};
