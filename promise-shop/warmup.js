Parse.User.logIn('user', 'pass', {
    success: function (user) {
      query.find({
        success: function (results) {
          results[0].save({ key: value }, {
            success: function (result) {
              // the object was saved
            }
          });
        }
      });
    }
  });