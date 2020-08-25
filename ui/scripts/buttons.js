buttonPresses = function(e, client) {
  var params = [578,608,668,698,738,768,808,838,878,908,968,998,1048,1078,1128,1158];
  var notes = ['G1', 'A1', 'B1', 'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2', 'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3'];
  for (var x = 0; x < notes.length; x++) {
    if (e.clientX >= 333 + (x*57) && e.clientY >= 263 && e.clientX <= 363 + (x*57) && e.clientY <= 323)  {
      console.log(notes[x]);
      client.renderer.animateKeys(x, true)
    }
    if (e.clientX >= 364 + (x*57) && e.clientY >= 178 && e.clientX <= 389 + (x*57) && e.clientY <= 248) {
      console.log(notes[x]+ "#")
      client.renderer.animateKeys(x, false)
    }
  }
  if (e.clientX >= params[0]  && e.clientY >= 108  && e.clientX <= params[0] + 20  && e.clientY <= 149) {
    console.log("Pressed1")
  }
  if (e.clientX >= params[1] && e.clientY >= 108  && e.clientX <= params[1] + 20 && e.clientY <= 149) {
    console.log("Pressed2")
  }
  if (e.clientX >= params[2] && e.clientY >= 108  && e.clientX <= params[2] + 20 && e.clientY <= 149) {
    console.log("Pressed3")
  }
  if (e.clientX >= params[3] && e.clientY >= 108 && e.clientX <= params[3] + 20 && e.clientY <= 149) {
    console.log("Pressed4")
  }
  if (e.clientX >= params[4] && e.clientY >= 108 && e.clientX <= params[4] + 20 && e.clientY <= 149) {
    console.log("Pressed5")
  }
  if (e.clientX >= params[5] && e.clientY >= 108 && e.clientX <= params[5] + 20 && e.clientY <= 149) {
    console.log("Pressed6")
  }
  if (e.clientX >= params[6] && e.clientY >= 108 && e.clientX <= params[6] + 20 && e.clientY <= 149) {
    console.log("Pressed7")
  }
  if (e.clientX >= params[7] && e.clientY >= 108 && e.clientX <= params[7] + 20 && e.clientY <= 149) {
    console.log("Pressed8")
  }
  if (e.clientX >= params[8] && e.clientY >= 108 && e.clientX <= params[8] + 20 && e.clientY <= 149) {
    console.log("Pressed9")
  }
  if (e.clientX >= params[9] && e.clientY >= 108 && e.clientX <= params[9] + 20 && e.clientY <= 149) {
    console.log("Pressed10")
  }
  if (e.clientX >= params[10] && e.clientY >= 108 && e.clientX <= params[10] + 20 && e.clientY <= 149) {
    console.log("Pressed11")
  }
  if (e.clientX >= params[11] && e.clientY >= 108 && e.clientX <= params[11] + 20 && e.clientY <= 149) {
    console.log("Pressed12")
  }
  if (e.clientX >= params[12] && e.clientY >= 108 && e.clientX <= params[12] + 20 && e.clientY <= 149) {
    console.log("Pressed13")
  }
  if (e.clientX >= params[13] && e.clientY >= 108 && e.clientX <= params[13] + 20 && e.clientY <= 149) {
    console.log("Pressed14")
  }
  if (e.clientX >= params[14] && e.clientY >= 108 && e.clientX <= params[14] + 20 && e.clientY <= 149) {
    console.log("Pressed15")
  }
  if (e.clientX >= params[15] && e.clientY >= 108 && e.clientX <= params[15] + 20 && e.clientY <= 149) {
    console.log("Pressed16")
  }
}

buttonUnpresses = function(x, client){
  client.renderer.animateKeys(99, true)
}
