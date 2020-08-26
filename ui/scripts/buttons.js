var waveform = 0
var attack = 0
var decay = 0
var sustain = 0
var release = 0
var vibrato = 0
var tremelo = 0
var tempo = 0

var params = [578,608,668,698,738,768,808,838,878,908,968,998,1048,1078,1128,1158];
var notes = ['G1', 'A1', 'B1', 'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2', 'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3'];

currentNote = 0
isWhite = true
noteOnRecieved = false

buttonPresses = function(e, client) {
  for (var x = 0; x < notes.length; x++) {
    if (e.clientX >= 333 + (x*57) && e.clientY >= 263 && e.clientX <= 363 + (x*57) && e.clientY <= 323)  {
      console.log(notes[x] + " on");
      currentNote = x
      isWhite = true
      noteOnRecieved = true
      client.renderer.animateKeys(x, true)
    }
    if (e.clientX >= 364 + (x*57) && e.clientY >= 178 && e.clientX <= 389 + (x*57) && e.clientY <= 248) {
      if (notes[x].includes("B") == false && notes[x].includes("E") == false) {
        console.log(notes[x]+ "# on")
        currentNote = x
        isWhite = false
        noteOnRecieved = true
        client.renderer.animateKeys(x, false)
      }
    }
  }
  if (e.clientX >= params[0]  && e.clientY >= 108  && e.clientX <= params[0] + 20  && e.clientY <= 149) {
    if (waveform > 0) {
      waveform = waveform - 1
      console.log("- Waveform")
      client.renderer.setParams(0, waveform)
    }
    noteOnRecieved = false
  }
  if (e.clientX >= params[1] && e.clientY >= 108  && e.clientX <= params[1] + 20 && e.clientY <= 149) {
    if (waveform < 9) {
      waveform = waveform + 1
      console.log("+ Waveform")
      client.renderer.setParams(0, waveform)
    }
    noteOnRecieved = false
  }
  if (e.clientX >= params[2] && e.clientY >= 108  && e.clientX <= params[2] + 20 && e.clientY <= 149) {
    if (attack > 0) {
      attack = attack - 1
      console.log("- Attack")
      client.renderer.setParams(1, attack)
    }
    noteOnRecieved = false
  }
  if (e.clientX >= params[3] && e.clientY >= 108 && e.clientX <= params[3] + 20 && e.clientY <= 149) {
    if (attack < 9) {
      attack = attack + 1
      console.log("+ Attack")
      client.renderer.setParams(1, attack)
    }
    noteOnRecieved = false
  }
  if (e.clientX >= params[4] && e.clientY >= 108 && e.clientX <= params[4] + 20 && e.clientY <= 149) {
    if (decay > 0) {
      decay = decay - 1
      console.log("- Decay")
      client.renderer.setParams(2, decay)
    }
    noteOnRecieved = false
  }
  if (e.clientX >= params[5] && e.clientY >= 108 && e.clientX <= params[5] + 20 && e.clientY <= 149) {
    if (decay < 9) {
      decay = decay + 1
      console.log("+ Decay")
      client.renderer.setParams(2, decay)
    }
    noteOnRecieved = false
  }
  if (e.clientX >= params[6] && e.clientY >= 108 && e.clientX <= params[6] + 20 && e.clientY <= 149) {
    if (sustain > 0) {
      sustain = sustain - 1
      console.log("- Sustain")
      client.renderer.setParams(3, sustain)
    }
    noteOnRecieved = false
  }
  if (e.clientX >= params[7] && e.clientY >= 108 && e.clientX <= params[7] + 20 && e.clientY <= 149) {
    if (sustain < 9) {
      sustain = sustain + 1
      console.log("+ Sustain")
      client.renderer.setParams(3, sustain)
    }
    noteOnRecieved = false
  }
  if (e.clientX >= params[8] && e.clientY >= 108 && e.clientX <= params[8] + 20 && e.clientY <= 149) {
    if (release > 0) {
      release = release - 1
      console.log("- Release")
      client.renderer.setParams(4, release)
    }
    noteOnRecieved = false
  }
  if (e.clientX >= params[9] && e.clientY >= 108 && e.clientX <= params[9] + 20 && e.clientY <= 149) {
    if (release < 9) {
      release = release + 1
      console.log("+ Release")
      client.renderer.setParams(4, release)
    }
    noteOnRecieved = false
  }
  if (e.clientX >= params[10] && e.clientY >= 108 && e.clientX <= params[10] + 20 && e.clientY <= 149) {
    if (vibrato > 0) {
      vibrato = vibrato - 1
      console.log("- Vibrato")
      client.renderer.setParams(5, vibrato)
    }
    noteOnRecieved = false
  }
  if (e.clientX >= params[11] && e.clientY >= 108 && e.clientX <= params[11] + 20 && e.clientY <= 149) {
    if (vibrato < 9) {
      vibrato = vibrato + 1
      console.log("+ Vibrato")
      client.renderer.setParams(5, vibrato)
    }
    noteOnRecieved = false
  }
  if (e.clientX >= params[12] && e.clientY >= 108 && e.clientX <= params[12] + 20 && e.clientY <= 149) {
    if (tremelo > 0) {
      tremelo = tremelo - 1
      console.log("- Tremelo")
      client.renderer.setParams(6, tremelo)
    }
    noteOnRecieved = false
  }
  if (e.clientX >= params[13] && e.clientY >= 108 && e.clientX <= params[13] + 20 && e.clientY <= 149) {
    if (tremelo < 9) {
      tremelo = tremelo + 1
      console.log("+ Tremelo")
      client.renderer.setParams(6, tremelo)
    }
    noteOnRecieved = false
  }
  if (e.clientX >= params[14] && e.clientY >= 108 && e.clientX <= params[14] + 20 && e.clientY <= 149) {
    if (tempo > 0) {
      tempo = tempo - 1
      console.log("- Tempo")
      client.renderer.setParams(7, tempo)
    }
    noteOnRecieved = false
  }
  if (e.clientX >= params[15] && e.clientY >= 108 && e.clientX <= params[15] + 20 && e.clientY <= 149) {
    if (tempo < 19) {
      tempo = tempo + 1
      console.log("+ Tempo")
      client.renderer.setParams(7, tempo)
    }
    noteOnRecieved = false
  }
}

buttonUnpresses = function(client){
  if (noteOnRecieved == true) {
    if (isWhite == true) {
      console.log(notes[currentNote] + " off");
      client.renderer.animateKeys(currentNote, true)
    }
    else {
      console.log(notes[currentNote] + "# off");
      client.renderer.animateKeys(currentNote, false)
    }
  }
  noteOnRecieved == false
}
