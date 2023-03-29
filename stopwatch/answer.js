class Stopwatch {
    constructor() {
        this.duration = 0
        this.running = false
        this.startTime = null
        this.endTime = null
    }

    //throw error : Stopwatch has already started
    start() {
        if (this.running) throw new Error('Stopwatch has already started')
        this.running = true
        this.startTime = new Date()
    }
    //throw error : Stopwatch has is already stopped
    stop() {
        if (!this.running) throw new Error('Stopwatch has already stopped')
        this.running = false
        this.endTime = new Date()
        const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
        this.duration += seconds
    }
    //brings duration to back to 0
    reset() {
        this.duration = 0
        this.running = false
        this.startTime = null
        this.endTime = null
    }
}

const sw = new Stopwatch()
console.log(sw)
