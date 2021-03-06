let fourfour = [
    [1, , , , 1, , , , 1, , , , 127, , ,]
]

for (y = 1; y < 12; y++) {
    fourfour[y] = []
    for (x = 0; x < 16; x++) {
        fourfour[y][x] = null
    }
}

window.AudioContext = window.AudioContext || window.webkitAudioContext;

var audioContext = null;
var nextNotetime = null;
var timerID = null;

var app = new Vue({
    el: '#sequencer',
    data: {
        playing: false,
        tempo: 128,
        playhead: 0,
        expanded: 4,
        steps: fourfour
    },
    methods: {
        nextStep: function () {
            this.playhead = this.playhead % 16 + 1

            if (output) {
                for (t = 0; t < 12; t++) {
                    if (this.steps[t][this.playhead - 1]) {
                        output.playNote(notes[t], 1, {
                            duration: 30,
                            rawVelocity: true,
                            velocity: this.steps[t][this.playhead - 1]
                        })
                    }
                }
            }
        },
        scheduler: function () {
            while (nextNotetime < audioContext.currentTime + 0.1) {
                var secondsPerBeat = 60.0 / this.tempo
                nextNotetime += 0.25 * secondsPerBeat;
                this.nextStep()
            }

            timerID = window.setTimeout(this.scheduler, 50.0);
        },
        clearPattern: function(){
            for (y = 0; y < 12; y++) {
                fourfour[y] = []
                for (x = 0; x < 16; x++) {
                    fourfour[y][x] = null
                }
            }
            Vue.set(this.steps, fourfour)
        },
        stop: function(){
            clearTimeout(timerID);
            this.playing = false;
        },
        playToggle: function () {
            if (this.playing !== false) {
                clearTimeout(timerID);
                this.playing = false;
            } else {
                if(!audioContext){
                    audioContext = new AudioContext()
                }
                nextNotetime = audioContext.currentTime;
                this.playing = true;
                this.scheduler()
            }
        },
        stepq: function (track, step) {
            return this.steps[track - 1][step - 1]
        },
        setstep: function (track, step, vel) {
            if (this.steps[track - 1][step - 1] == null) {
                this.steps[track - 1][step - 1] = vel
            } else if (this.steps[track - 1][step - 1] === 1 && vel == 127) {
                this.steps[track - 1][step - 1] = vel
            } else {
                this.steps[track - 1][step - 1] = null
            }

            Vue.set(this.steps, track - 1, this.steps[track - 1])
        }
    }
})