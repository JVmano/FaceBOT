const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

// ########### Informações necessárias para comentar ######################
const user = 'jdefreitasmelo@gmail.com'
const pass = 'joao88140495'
const url = 'https://www.facebook.com/joaovitor.freitasmelo/posts/3453113961471098'
const comment = 'vrau'
// ########################################################################

async function engage () {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--disable-notifications']
  })

  console.log('Abrindo facebook...')
  const page = await browser.newPage()
  await page.goto(url)

  page.on('error', err => {
    console.log('error happen at the page: ', err)
  })

  page.on('pageerror', pageerr => {
    console.log('pageerror occurred: ', pageerr)
  })

  console.log('Logando...')
  await page.type('#email', user)
  await page.type('#pass', pass)

  await page.click('#loginbutton')

  await page.waitForTimeout(5000)

  console.log('Abrindo post...')
  await page.goto(url)

  await page.waitForTimeout(5000)

  await page.click('[contenteditable]')

  console.log('Iniciando spam...')
  for (let index = 0; index < 1000; index++) {
    console.log('Comentário ' + index)
    await page.keyboard.type(comment)
    await page.keyboard.press('Enter')
    // await page.waitForTimeout(500)
  }

  await page.waitForTimeout(5000)

  await browser.close()
}

engage()
