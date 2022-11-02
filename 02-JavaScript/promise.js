const condition = true;
const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("성공");
  } else {
    reject("실패");
  }
});

promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("무조건");
  });

// 콜백 지옥
function findAndSaveUser(Users) {
  // 콜백 1
  Users.findOne({}, (err, user) => {
    if (err) {
      return console.error(err);
    }
    user.name = "zero";
    // 콜백2
    user.save((err) => {
      if (err) {
        return console.error(err);
      }
      // 콜백3
      Users.findOne({ gender: "m" }, (err, user) => {
        if (err) {
          return console.error(err);
        }
        // ...
      });
    });
  });
}

// Promise
function findAndSaveUser(Users) {
  Users.findOne({})
    .then((user) => {
      user.name = "zero";
      return user.save();
    })
    .then((user) => {
      return Users.findOne({ gender: "m" });
    })
    .catch((err) => {
      console.error(err);
    });
}

// async/await
async function findAndSaveUser(Users) {
  try {
    let user = await Users.findOne({}); // 해당 프로미스가 resolve될 때까지 기다린 뒤 다음 로직으로 넘어감
    user.name = "zero";
    user = await user.save();
    user = await Users.findOne({ gender: "m" });
  } catch (error) {
    console.error(error);
  }
}

const findAndSaveUser = async (Users) => {
  try {
    let user = await Users.findOne({}); // 해당 프로미스가 resolve될 때까지 기다린 뒤 다음 로직으로 넘어감
    user.name = "zero";
    user = await user.save();
    user = await Users.findOne({ gender: "m" });
  } catch (error) {
    console.error(error);
  }
};

// async 함수의 반환값
findAndSaveUser().then(() => {
  /*생략*/
});
// 또는
const other = async () => {
  const result = await findAndSaveUser();
};

// Promise.all
const promise1 = Promise.resolve("성공1"); // 즉시 resolve하는 프로미스
const promise2 = Promise.resolve("성공2");
Promise.all([promise1, promise2])
  .then((result) => {
    console.log(result); // [ '성공1', '성공2' ]
  })
  .catch((error) => {
    console.error(err);
  });

// async/await, for문 활용
(async () => {
  for await (promise of [promise1, promise2]) {
    console.log(promise);
  }
})();
