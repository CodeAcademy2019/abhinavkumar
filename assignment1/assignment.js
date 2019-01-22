// Creates new frame
function Frame(){
  this.pinsLeft = 10;
  this.triesLeft = 2;
  this.states = {strike: false,spare: false,open: false,maybeSpare: false;
  this.score = 0;
}


// Updates the frame created
function frameState(pinsDown) {

  this.pinsLeft = this.pinsLeft - pinsDown;
  console.log('PINS LEFT:',this.pinsLeft);
  this.triesLeft = this.triesLeft - 1;
  console.log('TRIES LEFT',this.triesLeft);

  if((this.pinsLeft === 0) && (this.triesLeft === 1)){
    this.states.strike = true;
    console.log('\nSTRIKE', this.states.strike);
    this.score = 10;
  }else if((this.pinsLeft === 0) && (this.triesLeft === 0)){
    this.states.spare = true;
    console.log('\nSpare', this.states.spare);
    this.score = 10;
  }else if((this.pinsLeft === 1) && (this.triesLeft === 0)){
    this.states.open = true;
    console.log('\nOpen', this.states.open);
    this.score = 10 - this.pinsLeft;
  }
  else{
    this.states.maybeStrike = true;
    console.log('\nMaybe Spare', this.states.maybeSpare);
    this.score = 10 - this.pinsleft; 
  }
}

let score = 0;

//GAME START
function gameStart(totalRolls){
  
  // Create fresh Frame
  console.log('NEW GAME!\n');

  //first frame generated
  frame1 = new Frame();
  frame2 = new Frame();
  frame3 = new Frame();
  frame4 = new Frame();
  frame5 = new Frame();
  frame6 = new Frame();
  frame7 = new Frame();
  frame8 = new Frame();
  frame9 = new Frame();
  frame10 = new Frame();

  let frames = [frame1,frame2,frame3,frame4,frame5,frame6,frame7,frame8,frame9.frame10];

  totalRolls.forEach((roll => {
    console.log('Roll is',roll);

    frameState.call(frame,roll);

    if((frame.states.strike === true)){
      
      frame = new Frame();
    }

  }));


}
gameStart([10,10]);

