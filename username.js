var neuro = require("neuro.js");

var usernameClassifier = new neuro.classifiers.Winnow({
    default_positive_weight: 1,
    default_negative_weight: 1,
    threshold: 0
  });
  
  usernameClassifier.trainOnline({ slur: 1, verb: 0, long: 1, illegible: 1}, 1); 
  usernameClassifier.trainOnline({ slur: 0, verb: 1, long: 0, illegible: 0}, 1); 
  usernameClassifier.trainOnline({ slur: 0, verb: 0, long: 0, illegible: 1}, 0); 
  usernameClassifier.trainOnline({ slur: 0, verb: 0, long: 0, illegible: 0}, 0)
  usernameClassifier.trainOnline({ slur: 0, verb: 1, long: 1, illegible: 0}, 1)
  usernameClassifier.trainOnline({ slur: 1, verb: 0, long: 1, illegible: 0}, 1)
  usernameClassifier.trainOnline({ slur: 1, verb: 0, long: 0, illegible: 1}, 1)

  // console.dir(
    // usernameClassifier.classify(
      // { wings: 1, flight: 0, beak: 1, chicken: 1 },
      /*explanation level=*/ 4
    //)
  //)