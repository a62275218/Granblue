console.log('popup start');

function getCurrentTab() {
    return new Promise((resolve, reject) => {
        chrome.tabs.query({active: true, currentWindow: true}, tabs => {
            resolve(tabs[0]);
        });
    })
}

$(function () {
    //点击事件
    let message;
    $('#star').click(async () => {
        let currentTab = await getCurrentTab();
        chrome.tabs.update(currentTab.id, {url: 'http://game.granbluefantasy.jp/#quest/supporter/510031/5'});
        message = 'star'
    });
    //监听事件
    chrome.tabs.onUpdated.addListener(async (id, changeInfo, tab) => {
        const port = chrome.tabs.connect(tab.id, {name: 'popup_to_content'});
        if(changeInfo.status === 'complete'){
            let currentTab = await getCurrentTab();
            switch(currentTab.url){
                case 'http://game.granbluefantasy.jp/#quest/supporter/510031/5':
                    port.postMessage({message:message});
                    break;
                default:
                    break;
            }
        }
    });
});

