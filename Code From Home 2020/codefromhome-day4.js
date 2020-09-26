// Problem 1: cardGame - Recursion
// You and your friends want to play cards, but in the spirit of social distancing you decide to play online. It would be boring just to play a game someone else has built, so you decide to build your own card game! 

// Your friend has built a program to cut a deck (an array of card names) at a random spot, returning two arrays of card names. She wants you to build a program that will shuffle a cut deck by interleaving the cards.

// Your program will take two arrays of possibly different lengths and will return one array with the elements interleaved:
// the first element being the first element of the first input array,
// the second element being the first element of the second input array,
// the third element being the second element of the first input array,
// and so on.

// e.g.
// const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs']
// const bottomHalf = ['Jack of Hearts', 'Ten of Spades']
// shuffle(topHalf, bottomHalf) -> [
//                                  'Queen of Diamonds',
//                                  'Jack of Hearts',
//                                  'Five of Hearts',
//                                  'Ten of Spades',
//                                  'Ace of Spades',
//                                  'Eight of Clubs',
//                                 ]

// The remaining cards should be appended to the end of the array.

// This problem can be solved in different ways, but try to solve it with recursion!

// function shuffle(topHalf, bottomHalf) {
//     // base case, if ive interleaved all of the bottom, return the top
//     if (bottomHalf.length === 0) return topHalf;

//     // recursive case, if the bottom half isn't exhausted yet, splice in where the card needs to go which conveniently is it's index in bottomHalf. So since Ten of Spades is the second card at bottomHalf it gets spliced in at topHalf[2] before Ace of Spades. The end card is popped off bottomHalf and the recursive call is made.
//     if (bottomHalf.length > 0) {
//       topHalf.splice(bottomHalf.length, 0, bottomHalf[bottomHalf.length - 1]);
//       bottomHalf.pop();
//       shuffle(topHalf, bottomHalf);
//     }
//   }
  
  
  // UNCOMMENT TO TEST YOUR WORK
  // const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs']
  // const bottomHalf = ['Jack of Hearts', 'Ten of Spades']
  // console.log(shuffle(topHalf, bottomHalf)); 
  //   /*-> ['Queen of Diamonds',
  //         'Jack of Hearts',
  //         'Five of Hearts',
  //         'Ten of Spades',
  //         'Ace of Spades',
  //         'Eight of Clubs',
  //       ]
  //   */





// Problem 2: ZoomRoom - OOP
//   ZoomRoom (Advanced): Create a Zoom room and attendees using Javascript classes.

// Zoom is more important now than ever.

// Create a class Attendee with the following methods:
//  - mute: sets Attendee.mute = true
//  - unmute: sets Attendee.mute = false


// Create a class ZoomRoom with the following methods:
//  - addAttendee: adds an Attendee to the ZoomRoom
//  - removeAttendee: removes the last-joined Attendee from the ZoomRoom
//  - makeHost: sets ZoomRoom.host to Attendee's id
//  - muteAll: sets mute = true for all Attendees
//  - unmuteAll: sets mute = false for all Attendees

class Attendee {
    constructor(name) {
      this.attendeeName = name;
      this.isMuted = false;
    }
  
    mute() {
      // write code here to set this.isMuted = true
      this.isMuted = true;
    }
  
    unmute() {
      // write code here to set this.isMuted = false
      this.isMuted = false;

    }
  }
  
// Create a class ZoomRoom with the following methods:
//  - addAttendee: adds an Attendee to the ZoomRoom
//  - removeAttendee: removes the last-joined Attendee from the ZoomRoom
//  - makeHost: sets ZoomRoom.host to Attendee's id
//  - muteAll: sets mute = true for all Attendees
//  - unmuteAll: sets mute = false for all Attendees

  class ZoomRoom {
    constructor(hostKey) {
      this.attendees = []; // attendees can either be an object or an array, you choose!
      this.attendeeCount = 0;
      this.host = null;
      this.hostKey = hostKey;
    }
  
    addAttendee(attendeeName) {
      // write code here to add passed in attendee to this.attendees
      // don't forget to increment attendeeCount and return it out!
      this.attendees.push(attendeeName);
      this.attendeeCount++;
      return this.attendeeCount;
    }
  
    removeAttendee() {
      // write code here to remove attendee from this.attendees
      // what else do you need to do before you return the removedAttendee?
      this.attendeeCount--;
      return this.attendees.pop();
    }
  
    makeHost(attendeeIndex, hostKey) {
      // attendeeIndex should be the key of the attendee in this.attendees
      // make sure you check that the hostKey passed in matches this.hostKey before assigning this.host to the attendeeIndex
      if (hostKey === this.hostKey) this.host = this.attendees[attendeeIndex];
    }
  
    // how can you leverage the Attendee class's mute and unumute methods to mute/unmute all meeting Attendees?
    muteAll() {
      // was using "this" in my forEach iteration, needed to use item
      this.attendees.forEach((item) => {
        item.isMuted = true;
      });
    }
  
    unmuteAll() {
      this.attendees.forEach((item) => {
        item.isMuted = false;
      });
    }
}
  
  // // Uncomment these lines to test your code!
  const myZoom = new ZoomRoom('123abc');
  const brandon = new Attendee('Brandon');
  const carl = new Attendee('Carl');
  myZoom.addAttendee(brandon);
  myZoom.addAttendee(carl);
  
  console.log(myZoom.attendees[0].attendeeName); // -> 'Brandon'
  console.log(myZoom.attendees[1].attendeeName); // -> 'Carl'
  console.log(myZoom.removeAttendee().attendeeName) // -> 'Carl'
  
  myZoom.makeHost(0, '123abc');
  console.log(myZoom.host.attendeeName); // -> 'Brandon'
  
  // incorrect password will not overwrite host
  myZoom.makeHost(1, 'abc123');
  console.log(myZoom.host.attendeeName) // -> still 'Brandon'
  
  // add bob in so there are two attendees again
  myZoom.addAttendee(new Attendee('Bob'));
  // should make isMuted for all attendees true
  myZoom.muteAll();
  console.log(myZoom.attendees[0].isMuted); // -> true
  console.log(myZoom.attendees[1].isMuted); // -> true
  
  // should make isMuted for all attendees false
  myZoom.unmuteAll();
  console.log(myZoom.attendees[0].isMuted); // -> false
  console.log(myZoom.attendees[1].isMuted); // -> false
  
//////////////////////////////////////////////////////////////////////////////////////////

// Problem 3: netflixList - OOP
// You are planning a 2 week Netflix binge marathon and you need to compile a movie / show list beforehand. 

// Using our constructor functions below, create prototype methods that will add a movie/show, remove a movie/show, show your entire list, and show your list of a specific type.

// 1. The addToList method will add a new Media to our Netflix list
// 2. The removeFromList method will remove a Media from our Netflix list based on title. Returns the removed Media.
// 3. The showEntireList method shows our current Netflix list
// 4. The showListByType shows our current Netflix list that have that specific type

function Media(title, type, hasEpisodes) {
    this.title = title; // the title of the movie or show
    this.type = type; // is it 'comedy', 'drama', 'documentary', etc.
    this.hasEpisodes = hasEpisodes; // boolean check if it's a show or movie. if it's a movie = false; show = true;
  }
  
  function Netflix() {
    this.list = []; // this will store all of our movies and shows
  }
  
  Netflix.prototype.addToList = function (title, type, hasEpisodes) {
    // write code here to add a Media to our list
    let newMedia = new Media(title, type, hasEpisodes);
    this.list.push(newMedia);
  };
  
  Netflix.prototype.removeFromList = function (title) {
    // write code here to remove a Media from our list
    // return removed item from list
    // miguel notes: iterate threough media list array and look for matching title
    let removedArr = [];

    this.list.forEach((item, index) => {
      if (item.title === title) {
        removedArr.push(item);
        this.list.splice(index, 1);
      };
    });
    return removedArr[0];
  };
  
  Netflix.prototype.showEntireList = function () {
    // show all of our current movies/shows on our list
    return this.list;
  };
  
  Netflix.prototype.showListByType = function (type) {
    // show all of our current movies/shows on our list that has the same type
    const searchedArr = [];

    this.list.forEach(item => {
      if (item.type === type) searchedArr.push(item);
    });
    return searchedArr;
  };
  
  // Uncomment these to test your code!
  const netflix = new Netflix();
  netflix.addToList('Ozark', 'drama', true);
  netflix.addToList('Kill Bill Vol. 2', 'action', false);
  netflix.addToList('The Last Dance', 'documentary', true);
  netflix.addToList('John Wick 3', 'action', false);
  console.log(netflix.showEntireList());
  console.log(netflix.removeFromList('The Last Dance')); // {title: 'The Last Dance', type: 'documentary', hasEpisodes: true}
  console.log(netflix.showEntireList()); // [{ title: 'Ozark', type: 'drama', hasEpisodes: true }, { title: 'Kill Bill Vol. 2', type: 'action', hasEpisodes: false }, { title: 'John Wick 3', type: 'action', hasEpisodes: false }]
  console.log(netflix.showListByType('action')); // [{ title: 'Kill Bill Vol. 2', type: 'action', hasEpisodes: false }, { title: 'John Wick 3', type: 'action', hasEpisodes: false }]