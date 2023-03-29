class Stopwatch {
  constructor() {
    this.duration = 0
    this.endTime = null
    this.startTime = null
    this.running = false
  }

  //throw error : Stopwatch has already started
  start() {
    if (this.running) throw new Error('Already running')
    this.running = true
    this.startTime = new Date()
  }
  //throw error : Stopwatch has is already stopped
  stop() {
    if (!this.running) throw new Error('Already stopped')
    this.running = false
    this.endTime = new Date()
    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000
    this.duration += seconds
  }
  //brings duration to back to 0
  reset() {
    this.duration = 0
    this.endTime = null
    this.startTime = null
    this.running = false
  }
}

const sw = new Stopwatch()
console.log(sw)
//duration must change when watch starts and stops


