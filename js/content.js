const injectScript = file => {
    let body = document.getElementsByTagName('body')[0];

    let s = document.createElement('script');

    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);

    let windowWraper = document.createElement('script');

    windowWraper.id = 'init_window';

    body.appendChild(s);
    body.appendChild(windowWraper);
};

$(function () {
    chrome.runtime.sendMessage({data: $('.btn-link-quest').attr('data-href')}, res => {
        console.log('start')
    });
    chrome.runtime.onConnect.addListener(port=>{
        console.log(port);
        //接收popup窗口传递
        if(port.name === 'popup_to_content'){
            port.onMessage.addListener(res=>{
                switch(res.message){
                    case 'start':
                        console.log(document.getElementsByClassName('board-tile-details'));
                        break;
                    default:
                        break;
                }
            })
        }
        // switch(port.name.message){
        //     case 'start':
        //         console.log('start');
        //         break;
        //     default:
        //         break;
        // }
    });
});
