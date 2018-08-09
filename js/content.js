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
    });
    chrome.runtime.onConnect.addListener(port => {
        //接收popup窗口传递
        if (port.name === 'popup_to_content')
        port.onMessage.addListener(res => {
            switch (res.message) {
                case 'star':
                    let list = document.getElementsByClassName('prt-summon-image');
                    console.log(list);
                    /*for(let i=0;i<list.length;i++){
                        console.log(list[i])
                    }*/
                    break;
                default:
                    break;
            }
        })
    });
});
