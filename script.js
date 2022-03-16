const keys = document.querySelectorAll('h4')
const msg = document.querySelectorAll('h2')
const slot = document.querySelectorAll('p')
const back = document.querySelector('.back')
const enter = document.querySelector('h6')
const h1 = document.querySelector('h1')
const section = document.querySelectorAll('section')
const body = document.querySelector('body')
const em = document.querySelector('em')
const strong = document.querySelector('strong')
const burger = document.querySelector('.hamburger')
const menu = document.querySelector('div strong')


let tracka = 0
let trackb = 0
let trackc = 0
let trackd = 5

let five = []

let word = task[Math.floor(Math.random() * task.length)].toUpperCase().split('')
let attempts = check.toString().toUpperCase().split(",")
//let word = "words".split('')

//🟩🟨⬛

let pop = ""

let highlite = setInterval(function() {
  for (var i = trackc; i <= trackd - 1; i++) {
    slot[i].className = "active"
  }
}, 1000)

highlite;
function Retry() {
  for (var i = trackc; i <= trackd - 1; i++) {
    slot[i].className += " retry"
  }
}

keys.forEach((key,index1)=>{
  key.addEventListener('click', function() {
    if (trackb < trackd) {
      slot[tracka].innerHTML = key.innerHTML
      tracka++
      trackb++
    }
  })
}
)

back.addEventListener("click", function() {
  if (trackb <= trackd && trackb > trackc) {
    slot[tracka - 1].innerHTML = ""
    tracka--
    trackb--
  }
})
function guess(down) {
  let sum = ""
  for (var i = down; i < down + 5; i++) {
    if (trackd === 30) {
      msg.forEach((m,index4)=>{
        m.innerHTML = word[index4]
      }
      )
      clearInterval(highlite)
      Validate(trackc + 5, trackd + 5)
      Match()
      section[0].style.display = "block"
      section[1].style.display = "block"
    } else {
      sum = sum + slot[i].innerHTML
    }
  }
  return sum
}

function guessed(down) {
  let sum = ""
  for (var i = down; i < down + 5; i++) {
  
      sum = sum + slot[i].innerHTML
  }
  return sum
}

enter.addEventListener("click", function() {
  if (word.join('') === guessed(trackc)) {
    h1.innerHTML = pop + "🟩🟩🟩🟩🟩"
    msg.forEach((m,index4)=>{
      m.innerHTML = word[index4]
    }
    )
    clearInterval(highlite)
    Validate(trackc + 5, trackd + 5)
    Match()
    section[0].style.display = "block"
    section[1].style.display = "block"

  } else if (attempts.includes(guess(trackc))) {
    if (trackd === 5 && tracka === trackd) {

      trackc = 5
      trackd = 10
      Validate(trackc, trackd)
      Match()

    } else if (trackd === 10 && tracka === trackd) {
      trackc = 10
      trackd = 15
      Validate(trackc, trackd)
      Match()
    } else if (trackd === 15 && tracka === trackd) {
      trackc = 15
      trackd = 20
      Validate(trackc, trackd)
      Match()
    } else if (trackd === 20 && tracka === trackd) {
      trackc = 20
      trackd = 25
      Validate(trackc, trackd)
      Match()
    } else if (trackd === 25 && tracka === trackd) {
      trackc = 25
      trackd = 30
      Validate(trackc, trackd)
      Match()
    } else if (trackd === 30 && tracka === trackd) {
      trackc = 30
      trackd = 35
      Validate(trackc, trackd)
      Match()
      clearInterval(highlite)
    }
    pop += "<br>"
  } else if (trackd < 31) {
    Retry()
  }

})

function Validate(e, f) {
  slot.forEach((g,index2)=>{
    if (index2 >= (e - 5) && index2 <= (f - 6)) {
      //if(g.innerHTML = word[])
      five.push(index2)
      five = five.slice(-5)
      //if
    }

  }
  )
}

function Match() {
  five.forEach((h,index3)=>{
    if (slot[h].innerHTML === word[index3]) {
      slot[h].className = "pass"
      pop += "🟩"
      keys.forEach(key=>{
        if (key.innerHTML === slot[h].innerHTML) {
          key.className = "pass"
        }
      }
      )

    } else if (word.includes(slot[h].innerHTML)) {
      slot[h].className = "try"
      pop += "🟨"
      keys.forEach(key=>{
        if (key.innerHTML === slot[h].innerHTML) {
          key.className = "pass"
        }
      }
      )
    } else {

      slot[h].className = "fail"
      pop += "🟫"
      keys.forEach(key=>{
        if (key.innerHTML === slot[h].innerHTML) {
          key.className = "fail"
        }
      }
      )
    }

  }
  )
}

em.addEventListener('click', function() {
  navigator.clipboard.writeText("#Wordle #301 \n \n" + h1.innerText + " \n \n" + window.location.pathname)
  em.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>'
})



  burger.addEventListener('click', function() {
    burger.classList.toggle('is-active')
    menu.classList.toggle('rotate')

  })
