/* SECOND ITERATION */

consoleText(['Jacob Johns','More stuff here'],['name','desc']);


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function consoleText(words, id) {

  for (let i = 0; i < words.length; i++) {
    let idElement = document.getElementById(id[i]);
    idElement.classList.add('cursor');

    for (let j = 0; j <= words[i].length; j++) {
      idElement.textContent += words[i].charAt(j);
      await sleep(150);
    }
    if (i + 1 != words.length) {
      idElement.classList.remove('cursor');
    }
  }
}



/* FIRST ITERATION and attempts


//consoleText(['Jacob Johns','Description'],['name','desc']);

setInterval(consoleText('Jacob Johns','name'), 120);

function consoleText(words, id) {
  let visible = true;
  let con = document.getElementById('consoleOne');
  let letterCount = 0;
  let waiting = false;
  let target = document.getElementById(id);
  //let target;
  //let secondTarget = document.getElementById(id[1]);
  let first;
  let second;

  target.innerHTML = words.substring(0, letterCount);
  letterCount++;

  /*for (let i = 0; i < id.length; i++) {
    letterCount = 0;
    target = document.getElementById(id[i]);

    for (let j = 0; j < words[i].length + 1; j++) {
      target.innerHTML = words[i].substring(0, letterCount);
      letterCount++;
    }
  }*/



  /*window.setInterval(function() {
    if (first != true) {
      target.innerHTML = words[0].substring(0, letterCount);
      letterCount++;
      if (letterCount > words[0].length + 1) {
        first = true;
        letterCount = 0;
        con = document.getElementById('consoleTwo');
      }
    } else if (second != true) {
      secondTarget.innerHTML = words[1].substring(0, letterCount);
      letterCount++;
      if (letterCount > words[1].length + 1) {
        let second = true;
      }
    } else if (third != true) {
      
    }
  }, 120)

  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden';
      visible = false;
    } else {
      con.className = 'console-underscore'
      visible = true;
    }
  }, 400)
}

*/
