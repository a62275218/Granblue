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
$(window).load(function () {
    chrome.runtime.sendMessage({data: $('.btn-link-quest').attr('data-href')}, res => {
    });
    chrome.runtime.onConnect.addListener(port => {
        //接收popup窗口传递
        if (port.name === 'popup_to_content')
        port.onMessage.addListener(res => {
            switch (res.message) {
                case 'star':
                    let timer = setInterval(()=>{
                        let summonList = $('.prt-supporter-detail');
                        if(summonList.length >0){
                            clearInterval(timer);
                            let u = setInterval(()=>{
                                summonList[1].click(()=>{
                                    console.log('click')
                                });
                            });
                            Array.from(summonList).forEach((item,idx)=>{
                                if(item.innerText.includes('Kaguya')){
                                    console.log(summonList[idx])
                                }
                            });

                        }
                    },200);
                    break;
                case 'test':
                    let board = document.getElementsByClassName('board-tile-fade');
                    // $('div:contains("欢迎")').click();
                    console.log(board[1])
                    board[1].click();
                    break;
                default:
                    break;
            }
        })
    });
});
