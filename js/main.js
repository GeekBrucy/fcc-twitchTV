function handleData (data) {
  let status = ''
  let html = ''
  if (data.stream) {
    status = 'online'
  } else if (data.stream === null){
    status = 'offline'
    
  }
  html = `
  <div>
    <a href="#" class="result-item">
      <div class="item-title">
        <img class="item-logo" src="https://static-cdn.jtvnw.net/user-default-pictures/b83b1794-7df9-4878-916c-88c2ad2e4f9f-profile_image-300x300.jpg">
        <div class="item-name">chiveyx</div>
      </div>
      <div class="item-info">
        <div class="item-status online">
          <span>online</span>
        </div>
        <div class="item-desc">Snatching bounties and hanging in DA HUB </div>
        <div class="item-views">62 Viewing</div>
      </div>
    </a>
  </div>
  `
}
function dataPreload (type='streams', url) {
  let baseUrl_stream = 'https://wind-bow.gomix.me/twitch-api/streams/'
  let baseUrl_channel = 'https://wind-bow.gomix.me/twitch-api/streams/'
  for (let i = 0; i < url.length; i++) {
    let timer = null
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      $.getJSON(baseUrl_stream + url[i] + '?callback=?', function(data) {
        if (data.stream) {
          handleData(data)
        } else {
          checkUser(url[i])
        }
      })
    }, 500)
  }
}

function sendRequest (url, type='streams', keywords) {
  $.getJSON(url + type + '/' + keywords + '?callback=?', function(data) {
    if (data.stream) {
      handleData(data)
    } else {
      checkUser(url[i])
    }
  })
}

function checkUser (type='channels', str) {

}
function handleTabClick () {
  $('.tab-label').on('click', function () {
    $('.tab-label').removeClass('active')
    $(this).addClass('active')
  })
}
function handleSubmitClick (url, type, inputEl) {
  
}
$(document).ready(function () {
  let baseUrl = 'https://wind-bow.gomix.me/twitch-api/'
  let saved = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
  let searchInput = $('.search-input-text')
  $('.search-submit').on('click', function () {
    handleSubmitClick(baseUrl, searchInput)
  })
  searchInput.on('keyup', function () {
    if ($(this).keyCode === 13) {
      $('.search-submit').click()
    }
  })
  handleTabClick()
  // getStream(handleData, saved)
})
