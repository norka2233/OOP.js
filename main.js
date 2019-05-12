const timer = document.querySelector(".container");
// timer to input this
const MainTimer{
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
    this.showTime(this.startTime){
      this
    }

}
//animation of line
animatedLine(){
  const lineWidth = this.timerLine.offsetWidth;
  const path = Math.round((this.width)/(this.second));
  this.timeline.style.width = (lineWidth - path) >= 0 ? `${lineWidth - step}px` : `${0}px`
}
//shows Time
showTime(second){
  const minute = Math.floor(second / 60);
  const repeatSeconds = second % 60;
  this.blockTimer.innerText = `${minute}:${remaindSecond < 10 ? '0' : ''}${remaindSeconds}`;
}
// executive function
render(){
  this.button = document.createElement("button");
  this.button.classList.add("button");
  this.button.textContent = "Start";
  timer.append(this.button);
  this.showTime(this.seconds);
  timer.append(this.createTimeLine());
  this.width = this.timeline.offsetWidth;
}
//creaction of timer line
createTimerLine(){
  this.thimerLine = document.createElement("div");
  this.timerLine.classList += "timerline"
  return this.timerLine;
}
// reset timer
resetTimer(){
  this.timerLine.line.width = 100%;
  this.startTime = this.second;
  this.button.textContent = ("Start");
}
