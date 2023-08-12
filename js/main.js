import * as el from './elements.js'
import { Quotes } from './quotes.js'


el.cookieBtn.onclick = () => setTimeout( updateDisplay, 1250 )

el.newCookieBtn.onclick = () => document.documentElement.classList.add("display")

async function updateDisplay () {
  el.card.textContent = await Quotes.new()
  document.documentElement.classList.remove("display")
}