﻿// Acme Thread Calculator (acme_thread.js)

function ExtMajorMinAlw (P) {
    var Alw = P/20;
    var min = 0.005;
    if (Alw > min) {
        return Alw;
    }
    else {
        return min;
    }
}

function Allowance (G, D) {
    if (G==2) {
        return 0.008*Math.sqrt(D);
    }
    if (G==3) {
        return 0.006*Math.sqrt(D);
    }
    if (G==4) {
        return 0.004*Math.sqrt(D);
    }
}

function Tolerance (G, D, P) {
    var di, pi;
    if (G==2) {
        di = 0.006*Math.sqrt(D);
        pi = 0.03*Math.sqrt(P);
    }
    if (G==3) {
        di = 0.0028*Math.sqrt(D);
        pi = 0.014*Math.sqrt(P);
    }
    if (G==4) {
        di = 0.002*Math.sqrt(D);
        pi = 0.01*Math.sqrt(P);
    }
    return di + pi;
}

function ExtMinorMaxCalc(k, p) {
    var EMMT;
    if (p<=10) {
        EMMT = k-0.02; 
    } 
    if (p>10) {
        EMMT = k-0.01
    }
    return EMMT;
}

function intMajorCalc(D, P) {
    if (P >= 0.1) {
        D += 0.02;
    }
    if (P < 0.1) {
        D += 0.01
    }
    return D;
}

function intMinorCalc (D, P) {
    var Alw = P/20;
    if (Alw < 0.005) {
        Alw = 0.005;
    }
    return D += Alw;
}

/*
function wireClosest(min, best, max, sizes) {
    var closest;
    if (max >= sizes[0] && max <= sizes[sizes.length-1]){
      for (var i = 0; i<sizes.length-1; i++) {
        if (sizes[i]>=min && sizes[i]<=best) {
          closest = sizes[i];
          break;
        }
        if (sizes[i]>best && sizes[i]<=max) {
          closest = sizes[i];
          break;
        }
      }
  
    }
    else {
      closest = best;
    }
    return closest;
}
*/

function AcmeThreadData () {

    // Collect Inputs
    const basicMajorDia = Number(document.getElementById("inputBasic").value);
    const TPI = Number(document.getElementById("inputTPI").value);
    const gClass = Number(document.getElementById("inputClass").value);
    
    // Basic Thread Data
    const pitch = 1/TPI;
    const basicPitchDia = basicMajorDia-(pitch/2);
    const basicMinorDia = basicMajorDia-pitch;
    const leadAngle = toDegrees(Math.atan(pitch/(basicPitchDia*Math.PI)));

    // External Thread Data
    const extMajorDiaMax = basicMajorDia;
    const extMajorDiaMin = basicMajorDia-ExtMajorMinAlw(pitch);
    const extPitchDiaMax = basicPitchDia-Allowance(gClass, basicMajorDia);
    const extPitchDiaMin = extPitchDiaMax-Tolerance(gClass, basicMajorDia, pitch);
    const extMinorDiaMax = ExtMinorMaxCalc(basicMinorDia, TPI);
    const extMinorDiaMin = extMinorDiaMax-(1.5*Tolerance(gClass, basicMajorDia, pitch));

    // Internal Thread Data
    const intMajorDiaMin = intMajorCalc(basicMajorDia, pitch);
    const intMajorDiaMax = intMajorCalc(intMajorDiaMin, pitch);
    const intPitchDiaMin = basicPitchDia;
    const intPitchDiaMax = basicPitchDia+Tolerance(gClass, basicMajorDia, pitch);
    const intMinorDiaMin = basicMinorDia;
    const intMinorDiaMax = intMinorCalc(basicMinorDia, pitch);

    // External Measurement Over Wires Data
    /*
    const wireSizes = [0.018, 0.024, 0.029, 0.032, 0.04, 0.045, 0.055, 0.063, 0.072, 0.081, 0.092, 0.108, 0.12, 0.125, 0.127, 0.143, 0.185, 0.1875, 0.25];
    const wireMin = 0.487263*pitch;
    const wireBest = 0.51645*pitch;
    const wireMax = 0.650013*pitch;
    const wireSelect = wireClosest(wireMin, wireBest, wireMax, wireSizes);
    const halfAngle = toRadians(29/2); //halfAngle
    //const a = halfAngle;
    //const halfPitch = pitch/2;
    var l1 = Math.atan(pitch/(basicPitchDia*Math.PI));
    var l2 = 1/Math.sin(l1);
    var l3 = wireSelect*(1+l2);
    var l4 = -1*(pitch/2)*(Math.cos(halfAngle)/Math.sin(halfAngle));
    const deltaMOW = l4 + l3;
    //const deltaMOW = (-1*(pitch/2)*(Math.cos(a)/Math.sin(a)))+(wireSelect*(1+(1/Math.sin(Math.atan(P/(basicPitchDia*Math.PI))))));
    //const deltaMOW = halfPitch*(1/Math.tan(halfAngle)+wireSelect*(1+1/Math.sin(halfAngle)));
    const basicMOW = basicPitchDia+deltaMOW;
    const maxMOW = extPitchDiaMax+deltaMOW;
    const minMOW = extPitchDiaMin+deltaMOW;
    */

    // Post Data to Output
    var result = basicMajorDia + '"-' + TPI + ' ACME ' + gClass + 'G'
    + '\n'
    + '\n ----- Basic Thread Data -----'
    + '\n Basic Major Diameter: ' + fix(basicMajorDia, 4)
    + '\n Basic Pitch Diameter: ' + fix(basicPitchDia, 4)
    + '\n Basic Minor Diameter: ' + fix(basicMinorDia, 4)
    + '\n TPI: ' + TPI + '  -->  Pitch: ' + fix(pitch, 4).toString()
    + '\n Class: ' + gClass.toString() + 'G'
    + '\n'
    + '\n ----- External Thread Data -----'
    + '\n Major Diameter Max.: ' + fix(extMajorDiaMax, 4)
    + '\n Major Diameter Min.: ' + fix(extMajorDiaMin, 4)
    + '\n Pitch Diameter Max.: ' + fix(extPitchDiaMax, 4)
    + '\n Pitch Diameter Min.: ' + fix(extPitchDiaMin, 4)
    + '\n Minor Diameter Max.: ' + fix(extMinorDiaMax, 4)
    + '\n Minor Diameter Min.: ' + fix(extMinorDiaMin, 4)
    + '\n'
    + '\n ----- Internal Thread Data -----'
    + '\n Minor Diameter Min.: ' + fix(intMinorDiaMin, 4)
    + '\n Minor Diameter Max.: ' + fix(intMinorDiaMax, 4)
    + '\n Pitch Diameter Min.: ' + fix(intPitchDiaMin, 4)
    + '\n Pitch Diameter Max.: ' + fix(intPitchDiaMax, 4)
    + '\n Major Diameter Min.: ' + fix(intMajorDiaMin, 4)
    + '\n Major Diameter Max.: ' + fix(intMajorDiaMax, 4)
    //+ '\n'
    //+ '\n ----- External Over Wires -----'
    //+ '\n Wire Size: ' + fix(wireSelect, 4)
    //+ '\n Ext. Basic PDOW: ' + fix(basicMOW, 4)
    //+ '\n Ext. Max PDOW: ' + fix(maxMOW, 4)
    //+ '\n Ext. Min. PDOW: '+ fix(minMOW, 4)
    + '\n' ;
    document.getElementById("result").rows = 31;
    document.getElementById("result").value = result;
}
