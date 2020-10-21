const remote = require('electron').remote;
var win = remote.getCurrentWindow();

var platform = process.platform

var buttons = document.getElementsByClassName('titlebar-button')
var buttonsDiv = document.getElementById('titlebar-buttons')

var minimizeButton = null
var maximizeButton = null
var closeButton = null

if(platform == 'darwin') {
    var images = ['url(../assets/titlebarButtons/close_mac.png)', 'url(../assets/titlebarButtons/minimize_mac.png)', 'url(../assets/titlebarButtons/maximize_mac.png)']

    buttonsDiv.style.marginRight = 'auto';

    x = 0
    for(let button of buttons) {
        button.style.backgroundImage = images[x]
        x += 1
    }

    closeButton = buttons[0]
    minimizeButton = buttons[1]
    maximizeButton = buttons[2]

} else {
    var images = ['url(../assets/titlebarButtons/minimize_win.png)', 'url(../assets/titlebarButtons/maximize_win.png)', 'url(../assets/titlebarButtons/close_win.png)']

    buttonsDiv.style.marginLeft = 'auto';

    x = 0
    for(let button of buttons) {
        button.style.backgroundImage = images[x]

        button.addEventListener('mouseover', function() {
            button.style.backgroundColor = 'var(--color-gray-2)'
        })

        button.addEventListener('mouseout', function() {
            button.style.backgroundColor = 'var(--color-gray-1)'
        })

        x += 1
    }

    minimizeButton = buttons[0]
    maximizeButton = buttons[1]
    closeButton = buttons[2]
}

minimizeButton.addEventListener('click', function() {
    win.minimize();
})

maximizeButton.addEventListener('click', function() {
    if(!win.isMaximized()) {
        win.maximize()
    } else {
        win.unmaximize()
    }
})

closeButton.addEventListener('click', function() {
    win.close()
})
