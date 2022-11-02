// old
var relationship1 = {
  name: "zero",
  friends: ["nero", "hero", "xero"],
  logFriends: function () {
    var that = this; // relationship1을 가리키는 this을 that에 저장
    this.friends.forEach(function (friend) {
      console.log(that.name, friend);
    });
  },
};
relationship1.logFriends();

// new
const relationship2 = {
  name: "zero",
  friends: ["nero", "hero", "xero"],
  logFriends() {
    this.friends.forEach((friend) => {
      // 화살표 함수를 사용하여 바깥 스코프인 logFriends()의 this 사용 가능
      console.log(this.name, friend);
    });
  },
};
relationship2.logFriends();
