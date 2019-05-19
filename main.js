const timer = document.querySelector("#container");
// timer to input this
class MainTimer{
  constructor(second) {
    this.second = second;
    this.startTimer = this.second;
    this.render();
  }

// counter div reduction
counter(){
  this.timeLeft = setInterval(() => {
    if( this.startTimer > 0) {
        this.startTimer -= 1;
    } else {
      clearInterval(this.timeLeft);
      this.cancelTimer();
      this.timeLeft = null;
      return;
    }
    this.showTime(this.startTimer);
    this.animatedLine();
  },1000)
}

//shows Time
showTime(second) {
  const minute = Math.floor(second / 60);
  const repeatSecond = second % 60;
  this.blockTimer.innerText = `${minute}:${repeatSecond < 10 ? '0' : ''}${repeatSecond}`;
}

// reset timer
  cancelTimer() {
    this.timerLine.style.width = `${100}%`;
    this.startTime = this.second;
    this.showTime(this.second);
    this.button.textContent = "Start";

  }

  finishTimer() {
    clearInterval(this.timeLeft);
  }

//animation of line
animatedLine() {
  const lineWidth = this.timerLine.offsetWidth;
  const path = Math.round((this.width)/(this.second));
  this.timerLine.style.width = (lineWidth - path) >= 0 ? `${lineWidth - path}px` : `${0}%`
}
//creation of timer line
createTimerLine() {
  this.timerLine = document.createElement("div");
  this.timerLine.classList += "timerLine"
  return this.timerLine;
}

begin() {
  if(this.button.textContent == "Start") {
    this.button.textContent == "Stop";
    this.counter();
  }
  else {
    this.button.textContent = "Start";
    this.cancelTimer();
  }
}


// executive function
render() {
  timer.classList += "cover";

  this.blockTimer = document.createElement("div");
  this.blockTimer.classList.add("time-block");
  timer.append(this.blockTimer)

  this.button = document.createElement("button");
  this.button.classList.add("button");
  this.button.textContent = "Start";
  timer.append(this.button);
  this.button.addEventListener("click", this.begin.bind(this));

  this.showTime(this.second);
  timer.append(this.createTimerLine());
  this.width = this.timerLine.offsetWidth;
}
}

const timerOne = new MainTimer(3);

class timerTwo extends MainTimer {
  constructor(second, defaultBegin = false) {
    super(second);
    this.defaultBegin = defaultBegin;
    this.beginWork();
  }


beginWork() {
  if(this.defaultBegin) {
     this.button.textContent = "Start";
     this.begin();
  }else {
    this.button.textContent = "Stop";
    this.begin();
  }
 }
}

const timerNumberTwo = new timerTwo(1000, true);
