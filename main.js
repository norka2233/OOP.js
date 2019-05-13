const timer = document.querySelector("#container");
// timer to input this
const mainTimer{
  constructor(second){
    this.second = second;
    this.startTimer = this.second;
    this render();

  }
}
// counter div reduction
counter(){
  this.timeLeft = setInterval(() =>{
    if( this.startTimer > 0){
      this.startTimer -= 1;
    } else {
      clearInterval(this.timeLeft);
      this.resetTimer();
      // this.timeLeft = null;
      return;
    }
    this.showTime(this.startTime);
    this.animatedLine();
  },1000)

}

//animation of line
animatedLine() {
  const lineWidth = this.timerLine.offsetWidth;
  const path = Math.round((this.width)/(this.second));
  this.timeline.style.width = (lineWidth - path) >= 0 ? `${lineWidth - step}px` : `${0}px`
}

//shows Time
showTime(second) {
  const minute = Math.floor(second / 60);
  const repeatSecond = second % 60;
  this.blockTimer.innerText = `${minute}:${remaindSecond < 10 ? '0' : ''}${remaindSecond}`;
}

// executive function
render(){
  this.button = document.createElement("button");
  this.button.classList.add("button");
  this.button.textContent = "Start";
  this.button.addEventListener("click", this.pressedButton.bind(this));
  timer.append(this.button);
  this.showTime(this.second);
  timer.append(this.createTimeLine());
  this.width = this.timeline.offsetWidth;
  timer.classList += "wrapper";
  this.blockTimer = document.createElement("div");
  this.blockTimer.classList.add("time-block");


}
//creaction of timer line
createTimerLine() {
  this.thimerLine = document.createElement("div");
  this.timerLine.classList += "timerline"
  return this.timerLine;
}
// reset timer
cancelTimer() {
  this.timerLine.style.width = 100%;
  this.startTime = this.second;
  this.button.textContent = ("Start");
  this.showTime(this.second);
}

finishTimer() {
  clearInterval(this.timeLeft);
}

activeButton() {
  if(this.button.textContent == "Start") {
     this.button.textContent = "Stop";
     this.countDown();
  }else {
    this.button.textContent = "Start";
    this.finishTimer();
  }
}

const timerOne = new mainTimer(3);

class timerTwo extends mainTimer {
  constructor(seconds, defaulStart = false) {
    super(second);
    this.start = start;
    this.begin();
  }
}

begin() {
  if(this.start) {
    this.button.textContent = "Start";
    this.pressedButton()
  } else {
    this.button.textContent = "Stop";
    this.pressedButton();
  }
}
