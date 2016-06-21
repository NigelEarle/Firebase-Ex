var ref = new Firebase('https://fir-ex-c1e5d.firebaseio.com/');

ref.set({
  title: "Hello World!",
  author: "Firebase",
  location: {
    city: "San Francisco",
    state: "California",
    zip: 94103
  }
});

ref.child('location/state').on('value',function(snapshot){
  console.log(snapshot.val());
});

ref.on('child_added', function(childSnapshot, prevSnapshot){
  console.log('things changed!!!', prevSnapshot.value());
})

// ref.set({
//   make: "Toyota",
//   model: "Highlander",
//   engine: {
//     cylinders: 4,
//     build_in: "California",
//     sold: 103
//   }
// })