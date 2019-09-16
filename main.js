var output = undefined
var input = undefined
var currentConfig = undefined
var timeoutId = undefined
var updatingUIFromConfig = false
var notes = []

document.addEventListener('DOMContentLoaded', function(){

           for (var i = 1; i <= 12; ++i) {
                  var list1 = document.getElementById('m' + i);

                  list1.options[0] = new Option('OMNI', '0');
                  list1.options[1] = new Option('1', '1');
                  list1.options[2] = new Option('2', '2');
                  list1.options[3] = new Option('3', '3');
                  list1.options[4] = new Option('4', '4');
                  list1.options[5] = new Option('5', '5');
                  list1.options[6] = new Option('6', '6');
                  list1.options[7] = new Option('7', '7');
                  list1.options[8] = new Option('8', '8');
                  list1.options[9] = new Option('9', '9');
                  list1.options[10] = new Option('10', '10');
                  list1.options[11] = new Option('11', '11');
                  list1.options[12] = new Option('12', '12');
                  list1.options[13] = new Option('13', '13');
                  list1.options[14] = new Option('14', '14');
                  list1.options[15] = new Option('15', '15');
                  list1.options[16] = new Option('16', '16');

                  var list3 = document.getElementById('n' + i);
                  list3.options[0] = new Option('Not Set', '0');
                  list3.options[1] = new Option('1 C#-1', '1');
                  list3.options[2] = new Option('2 D-1', '2');
                  list3.options[3] = new Option('3 D#-1', '3');
                  list3.options[4] = new Option('4 E-1', '4');
                  list3.options[5] = new Option('5 F-1', '5');
                  list3.options[6] = new Option('6 F#-1', '6');
                  list3.options[7] = new Option('7 G-1', '7');
                  list3.options[8] = new Option('8 G#-1', '8');
                  list3.options[9] = new Option('9 A-1', '9');
                  list3.options[10] = new Option('10 A#-1', '10');
                  list3.options[11] = new Option('11 B-1', '11');
                  list3.options[12] = new Option('12 C0', '12');
                  list3.options[13] = new Option('13 C#0', '13');
                  list3.options[14] = new Option('14 D0', '14');
                  list3.options[15] = new Option('15 D#0', '15');
                  list3.options[16] = new Option('16 E0', '16');
                  list3.options[17] = new Option('17 F0', '17');
                  list3.options[18] = new Option('18 F#0', '18');
                  list3.options[19] = new Option('19 G0', '19');
                  list3.options[20] = new Option('20 G#0', '20');
                  list3.options[21] = new Option('21 A0', '21');
                  list3.options[22] = new Option('22 A#0', '22');
                  list3.options[23] = new Option('23 B0', '23');
                  list3.options[24] = new Option('24 C1', '24');
                  list3.options[25] = new Option('25 C#1', '25');
                  list3.options[26] = new Option('26 D1', '26');
                  list3.options[27] = new Option('27 D#1', '27');
                  list3.options[28] = new Option('28 E1', '28');
                  list3.options[29] = new Option('29 F1', '29');
                  list3.options[30] = new Option('30 F#1', '30');
                  list3.options[31] = new Option('31 G1', '31');
                  list3.options[32] = new Option('32 G#1', '32');
                  list3.options[33] = new Option('33 A1', '33');
                  list3.options[34] = new Option('34 A#1', '34');
                  list3.options[35] = new Option('35 B1', '35');
                  list3.options[36] = new Option('36 C2', '36');
                  list3.options[37] = new Option('37 C#2', '37');
                  list3.options[38] = new Option('38 D2', '38');
                  list3.options[39] = new Option('39 D#2', '39');
                  list3.options[40] = new Option('40 E2', '40');
                  list3.options[41] = new Option('41 F2', '41');
                  list3.options[42] = new Option('42 F#2', '42');
                  list3.options[43] = new Option('43 G2', '43');
                  list3.options[44] = new Option('44 G#2', '44');
                  list3.options[45] = new Option('45 A2', '45');
                  list3.options[46] = new Option('46 A#2', '46');
                  list3.options[47] = new Option('47 B2', '47');
                  list3.options[48] = new Option('48 C3', '48');
                  list3.options[49] = new Option('49 C#3', '49');
                  list3.options[50] = new Option('50 D3', '50');
                  list3.options[51] = new Option('51 D#3', '51');
                  list3.options[52] = new Option('52 E3', '52');
                  list3.options[53] = new Option('53 F3', '53');
                  list3.options[54] = new Option('54 F#3', '54');
                  list3.options[55] = new Option('55 G3', '55');
                  list3.options[56] = new Option('56 G#3', '56');
                  list3.options[57] = new Option('57 A3', '57');
                  list3.options[58] = new Option('58 A#3', '58');
                  list3.options[59] = new Option('59 B3', '59');
                  list3.options[60] = new Option('60 C4', '60');
                  list3.options[61] = new Option('61 C#4', '61');
                  list3.options[62] = new Option('62 D4', '62');
                  list3.options[63] = new Option('63 D#4', '63');
                  list3.options[64] = new Option('64 E4', '64');
                  list3.options[65] = new Option('65 F4', '65');
                  list3.options[66] = new Option('66 F#4', '66');
                  list3.options[67] = new Option('67 G4', '67');
                  list3.options[68] = new Option('68 G#4', '68');
                  list3.options[69] = new Option('69 A4',  '69');
                  list3.options[70] = new Option('70 A#4', '70');
                  list3.options[71] = new Option('71 B4',  '71');
                  list3.options[72] = new Option('72 C5',  '72');
                  list3.options[73] = new Option('73 C#5', '73');
                  list3.options[74] = new Option('74 D5',  '74');
                  list3.options[75] = new Option('75 D#5', '75');
                  list3.options[76] = new Option('76 E5',  '76');
                  list3.options[77] = new Option('77 F5',  '77');
                  list3.options[78] = new Option('78 F#5', '78');
                  list3.options[79] = new Option('79 G5',  '79');
                  list3.options[80] = new Option('80 G#5', '80');
                  list3.options[81] = new Option('81 A5',  '81');
                  list3.options[82] = new Option('82 A#5', '82');
                  list3.options[83] = new Option('83 B5',  '83');
                  list3.options[84] = new Option('84 C6',  '84');
                  list3.options[85] = new Option('85 C#6', '85');
                  list3.options[86] = new Option('86 D6',  '86');
                  list3.options[87] = new Option('87 D#6', '87');
                  list3.options[88] = new Option('88 E6',  '88');
                  list3.options[89] = new Option('89 F6',  '89');
                  list3.options[90] = new Option('90 F#6', '90');
                  list3.options[91] = new Option('91 G6',  '91');
                  list3.options[92] = new Option('92 G#6', '92');
                  list3.options[93] = new Option('93 A6',  '93');
                  list3.options[94] = new Option('94 A#6', '94');
                  list3.options[95] = new Option('95 B6',  '95');
                  list3.options[96] = new Option('96 C7',  '96');
                  list3.options[97] = new Option('97 C#7', '97');
                  list3.options[98] = new Option('98 D7',  '98');
                  list3.options[99] = new Option('99 D#7', '99');
                  list3.options[100] = new Option('100 E7', '100');
                  list3.options[101] = new Option('101 F7', '101');
                  list3.options[102] = new Option('102 F#7', '102');
                  list3.options[103] = new Option('103 G7', '103');
                  list3.options[104] = new Option('104 G#7', '104');
                  list3.options[105] = new Option('105 A7', '105');
                  list3.options[106] = new Option('106 A#7', '106');
                  list3.options[107] = new Option('107 B7', '107');
                  list3.options[108] = new Option('108 C8', '108');
                  list3.options[109] = new Option('109 C#8', '109');
                  list3.options[110] = new Option('110 D8', '110');
                  list3.options[111] = new Option('111 D#8', '111');
                  list3.options[112] = new Option('112 E8', '112');
                  list3.options[113] = new Option('113 F8', '113');
                  list3.options[114] = new Option('114 F#8', '114');
                  list3.options[115] = new Option('115 G8', '115');
                  list3.options[116] = new Option('116 G#8', '116');
                  list3.options[117] = new Option('117 A8', '117');
                  list3.options[118] = new Option('118 A#8', '118');
                  list3.options[119] = new Option('119 B8', '119');
                  list3.options[120] = new Option('120 C9', '120');
                  list3.options[121] = new Option('121 C#9', '121');
                  list3.options[122] = new Option('122 D9', '122');
                  list3.options[123] = new Option('123 D#9', '123');
                  list3.options[124] = new Option('124 E9', '124');
                  list3.options[125] = new Option('125 F9', '125');
                  list3.options[126] = new Option('126 F#9', '126');
                  list3.options[127] = new Option('127 G9', '127');

                  var list4 = document.getElementById('c' + i);
                  list4.options[0] = new Option('Normal', '3');
                  list4.options[1] = new Option('Inverse', '18');
                  const index = i;
                  list4.addEventListener('change', function() {
                        window.changeCurve(index);
                     });
            }
    });



function connect (){
  if (WebMidi.enabled) {
    WebMidi.disable();
  }

  WebMidi.enable(function (err) {
    var conne = document.getElementById("connected")

    if (!err) {
      output = WebMidi.getOutputByName("dadamachines automat");
      input = WebMidi.getInputByName("dadamachines automat");

      WebMidi.addListener("disconnected", function(){
        conne.innerText = "automat not connected, please accept web midi and connect automat";
        conne.style.color = "#222";
        var whencon = document.getElementById("when-connected")
        whencon.className = ""
        var recon = document.getElementById("reconbut")
        recon.style = ""
      })

      if (output && input) {
                 conne.innerText = "automat connected";
                 conne.style.color = "#47b535";
                 var whencon = document.getElementById("when-connected")
                 whencon.className = "connected"
                 var recon = document.getElementById("reconbut")
                 recon.style = "display:none"
                 readVersion();
                 readSysex();
      } else {
                 conne.innerText = "could not find automat";
                 conne.style.color = "red";
      }
    } else {
                 conne.innerText = "please accept webmidi (in Google Chrome)";
                 conne.style.color = "red";
    }
  }, true);
}

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

if (isChrome) {
    connect()
} else {
    var conne = document.getElementById("connected")

    conne.innerText = "please open this page in Google Chrome or Chromium (because of web midi support)";
    conne.style.color = "red";
}

function changeProgram(num){
  output.sendProgramChange(num);
}

function playNote(dur, velo){
    output.playNote(1, 1, {duration: dur, rawVelocity:true, velocity: velo})
}

function getTwoByteVal(array, index){
    var val1 = array[index];
    var val2 = array[index + 1];
    
    return (val2 << 7) | val1;
}

function setTwoByteVal(array, index, value){
    var val1 = (value & 0x3F80) >> 7;
    var val2 = value & 0x7f;
    
    array[index] = val2;
    array[index + 1] = val1;
}

function sysexListener(e) {
    console.log(e);
    if (e.data[1] == 0 && e.data[2] == 0x21 && e.data[3] == 0x3D &&
        e.data[4] == 0x64) {
        if (e.data[5] == 0x41) {
            showSysexConfig(e.data.slice(6, -1));
            var b1 = document.getElementById("save1")
            b1.disabled = false
        } else if (e.data[5] == 0x56) {
            var versMajor = e.data[6];
            var versMinor = e.data[7] * 256 + e.data[8];
            var versFix = e.data[9];
            var version = versMajor + '.' + versMinor + '.' + versFix;
            var pField = document.getElementById("version_config");
            pField.innerText = "Version is: " + version;
            var capabilities = e.data[11];
            if (capabilities > 0) {
                document.getElementById('expb').style.display = "block";
            }
            
            var numPins = e.data[13];
            for(var i = 12; i > numPins; --i) {
                document.getElementById('r' + i).style.display = "none";
            }
        }
    }
}

function readSysex(){
//    if (!input.hasListener('sysex', "all", sysexListener)) {
        input.addListener('sysex', "all", sysexListener);
//    }

    output.sendSysex([0, 0x21, 0x3D] ,[0x64,0x41,0x67,0x65,0x74,0x63]);
}

function readVersion(){
    if (!input.hasListener('sysex', "all", sysexListener)) {
        input.addListener('sysex', "all", sysexListener);
    }

    output.sendSysex([0, 0x21, 0x3D] ,[0x64,0x41,0x67,0x65,0x74,0x76]);
}

function showSysexConfig(configData){
    updatingUIFromConfig = true;
    currentConfig = configData;
    var pField = document.getElementById("sysex_config");
    var displayData = "";
    var nvData = undefined;
    var veloData = undefined;
    var gateData = undefined;
    var numPins = 12;
    var offset = 8;

    if(configData[0] == 0x70 && configData[1] == 0x69 &&
        configData[2] == 0x6E && configData[3] == 0x73) {
        numPins = configData[7];
        nvData = configData.slice(offset, offset + (2 * numPins));
        offset += 2 * numPins;
        console.log('num pins = ' + numPins);
    }

    if(configData[offset] == 0x76 && configData[offset + 1] == 0x6C &&
       configData[offset + 2] == 0x74 && configData[offset + 3] == 0x79) {
        offset += 4;
        veloData = configData.slice(offset, offset + (6 * numPins));
        offset += 6 * numPins;
        console.log('have veloData');
    }

    if(configData.length >= (offset + (2 * numPins) + 4)) {
      if(configData[offset] == 0x67 && configData[offset + 1] == 0x61 &&
         configData[offset + 2] == 0x74 && configData[offset + 3] == 0x65) {
          offset += 4;
          var rawGateData = configData.slice(offset, offset + (2 * numPins));
          gateData = new Uint16Array(numPins);
          for(var i = 0; i < numPins; i++) {
              var lowerPart = rawGateData[i * 2];
              var upperPart = rawGateData[i * 2 + 1];
              gateData[i] = lowerPart | (upperPart << 7);
          }
          console.log('have gateData');
      }
    }

    if (nvData && veloData) {
        var j;
        for(var i = 0; i < numPins; i++) {
            displayData += "pin: " + (i + 1);
            displayData += "    channel: " + nvData[i];
            displayData += "    note: " + nvData[i + numPins];
            displayData += "    program: " + veloData[i];
            displayData += "    msMin: " + getTwoByteVal(veloData, (i * 2) + numPins);
            displayData += "    msMax: " + getTwoByteVal(veloData, (i * 2) + (numPins * 3));
            if (gateData) {
                displayData += "    gate: " + gateData[i];
            }
            displayData += "\r\n";

            var list1 = document.getElementById('m' + (i + 1));
            var note1 = document.getElementById('n' + (i + 1));
            notes[i] = nvData[i + numPins];
            var curve1 = document.getElementById('c' + (i + 1));
            var jsr = jsrArray[i];

            note1.value = nvData[i + numPins];
            list1.value = nvData[i];
            curve1.value = veloData[i + (numPins * 5)];
            jsr.setValue(0, getTwoByteVal(veloData, (i * 2) + numPins));
            jsr.setValue(1, getTwoByteVal(veloData, (i * 2) + (numPins * 3)));
            // need to set this again in case the range was inconsistent with the first set
            jsr.setValue(0, getTwoByteVal(veloData, (i * 2) + numPins));
        }
        
        for(var i = 12; i > numPins; --i) {
            document.getElementById('r' + i).style.display = "none";
        }
        console.log(displayData);
    }

    outputModeSanityCheck();
    pField.innerText = displayData;
    updatingUIFromConfig = false;
}

function outputModeSanityCheck() {
    for(var i = 0; i < 12; i++) {
        var list2 = document.getElementById('v' + (i + 1));
        var note1 = document.getElementById('n' + (i + 1));
        note1.disabled = false;
    }
}

function getConfigDataFromForm() {
    var numPins = 12;
    
    if (document.getElementById('r7').style.display === "none") {
        numPins = 6;
    }
    
    var configData = new Uint8Array(12 + (numPins * 8));

    var header1 = new Uint8Array([0x70,0x69,0x6E,0x73]);
    var header2 = new Uint8Array([0x76,0x6C,0x74,0x79]);

    configData.set(header1);
    configData.set(header2, 8 + (numPins * 2));

    var j;
    configData[7] = numPins;
                   
    for(var i = 0; i < numPins; i++) {
        var list1 = document.getElementById('m' + (i + 1));
        var note1 = document.getElementById('n' + (i + 1));
        var range1 = document.getElementById('range-' + (i + 1) + '-1');
        var range2 = document.getElementById('range-' + (i + 1) + '-2');
        var curve1 = document.getElementById('c' + (i + 1));

        j = i + 8;
        configData[j] = list1.value;
        configData[j + numPins] = note1.value;
        j = 12 + (numPins * 2);
        configData[i + j] = 0;
        j += numPins;
        setTwoByteVal(configData, (i * 2) + j, range1.value);
        j += numPins * 2;
        setTwoByteVal(configData, (i * 2) + j, range2.value);
        j += numPins * 2;
        configData[i + j] = curve1.value;
    }

    return configData;
}

function writeSysex(configData){
    if (configData) {
        var preArray = new Uint8Array([0x64,0x41]);
        var arrayOut = new Uint8Array(preArray.length + configData.length);
        arrayOut.set(preArray);
        arrayOut.set(configData, preArray.length);

        output.sendSysex([0, 0x21, 0x3D], Array.from(arrayOut));
    }
    for(i=0;i<12;i++){
        var note = document.getElementById('n' + (i + 1));
        notes[i] = note.value
    }
}

function writeSysexConfigToFile(configData){
    var saveDataToFile = (function (blob, fileName) {
                var a = document.createElement("a");
                document.body.appendChild(a);
                a.style = "display: none";
                      return function (arrayOut, fileName) {
                var blob =  new Blob([arrayOut], {type: "application/octet-stream"});
                var url = window.URL.createObjectURL(blob);

                a.href = url;
                a.download = fileName;
                a.click();
                window.URL.revokeObjectURL(url);
                };
                }());

    if (configData) {
        var preArray = new Uint8Array([0xF0, 0, 0x21,0x3D,0x64,0x41]);
        var postArray = new Uint8Array([0xF7]);
        var arrayOut = new Uint8Array(preArray.length + configData.length + 1);
        arrayOut.set(preArray);
        arrayOut.set(configData, preArray.length);
        arrayOut.set(postArray, preArray.length + configData.length);

        saveDataToFile(arrayOut, "automat.syx");
    }
}

function readSysexConfigFromFile() {
    var fileElem = document.getElementById("fileElem");
    fileElem.click();
}

function readSysexFile(e) {
    var file = e[0];
    if (!file) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
        var contents = e.target.result;
        showSysexConfig(new Uint8Array(contents.slice(6, -1)));
    };
    reader.readAsArrayBuffer(file);
}

var warningIssued = false;
var testInProgress = new Array(12).fill(false);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function testNode(index, vel) {
    while (testInProgress[index]) {
        await sleep(100);
    }
    testInProgress[index] = true;
    
    if (!warningIssued) {
        alert("Please note, test mode works best when note and channel settings are saved on the automat");
        warningIssued = true;
    }
    var list1 = document.getElementById('m' + index);
    var note1 = document.getElementById('n' + index);

    var channel = 1;
    if (list1.value != '0') {
        channel = list1.value;
    }

    var note = note1.value;

    if(note != '0') {
        for(var i = 0; i < 3; ++i) {
            output.playNote(note, channel, {duration: 1100, rawVelocity:true, velocity:vel})
            await sleep(1200);
        }
    }
    testInProgress[index] = false;
}

function loadExperimentalPage(){
    window.location.href = "./experimental.html";
}

function drawResponse(index) {
    var min_range = document.getElementById('range-' + index + '-1');
    var max_range = document.getElementById('range-' + index + '-2');
    var curve = document.getElementById('c' + index);
    var canvas = document.getElementById('d' + index);
    
    var range = (max_range.value - min_range.value);
    var base_val = min_range.value * 1.0;
    
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, 100);

    for(var i = 1; i < 128; ++i) {
        if(max_range.value == 0) {
            ctx.lineTo(i, 0);
            continue;
        }

        // Map the input range of 0..127 to a value between 0..1.
        var fraction = i / 127.0;
        
        // Map 0..1 to 0..1, but let it grow exponentially.
        var y = Math.pow(fraction, 3);
        
        if (curve.value == 0x12) {
            fraction = (127 - i) / 127.0;
            y = 1 - Math.pow(fraction, 2);
        }
        
        // Convert to a value between 0..1000. We add the base
        // value to assure that we produce growing values; otherwise
        // the first numbers in the sequence would be rounded to the
        // same values.
        var v = (y * range) + base_val;
        
        // Round 500..1000 in 10 steps increment.
        if (v >= 500) {
            v -= v % 10;
            // Round 150..499 in 5 steps increment.
        }
        else if (v >= 150) {
            v -= v % 5;
        }
        
        ctx.lineTo(i, 100 - (v / 10));
    }
    
    ctx.stroke();
}

function changeCurve(index) {
    drawResponse(index);

    if (updatingUIFromConfig) {
        return;
    }
    
    var max_range = document.getElementById('range-' + index + '-2');
    var note1 = document.getElementById('n' + index);
    var curve1 = document.getElementById('c' + index);
    var note = note1.value;
    var power = curve1.value;
    
    var value1 = (max_range.value & 0x3F80) >> 7;
    var value2 = max_range.value & 0x7f;
    var message = [0x6D, 0x4D, index - 1, value1, value2, power];
    
    if (timeoutId != undefined) {
        clearTimeout(timeoutId);
    }
    
    // Don't overload MIDI.   Limit to 10 messages per second
    timeoutId = setTimeout(function(){
                           output.sendSysex([0, 0x21, 0x3D], message);
                           timeoutId = undefined;} , 100);
}

async function updateMaxMinRange(index, input, value) {
    drawResponse(index);

    if (updatingUIFromConfig) {
        return;
    }
    
    var note1 = document.getElementById('n' + index);
    var curve1 = document.getElementById('c' + index);
    var note = note1.value;
    var power = curve1.value;
    
    var message = [0x6D, 0x4D, index - 1, value >> 7, value & 0x07F, power];

    if (input.id.endsWith('-1')) {
        message[1] = 0x6D;
    }
    
    if (timeoutId != undefined) {
        clearTimeout(timeoutId);
    }
    
    // Don't overload MIDI.   Limit to 10 messages per second
    timeoutId = setTimeout(function(){
                                  output.sendSysex([0, 0x21, 0x3D], message);
                                  timeoutId = undefined;} , 100);
 }

