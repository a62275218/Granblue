$(function () {
    chrome.runtime.sendMessage({data: $('.btn-link-quest').attr('data-href')}, res => {
        console.log('123')
    });
});


