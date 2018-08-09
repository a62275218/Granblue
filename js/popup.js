console.log('popup start');
$(function(){
    chrome.runtime.onMessage.addListener((req,sender,res)=>{
        console.log(req);
        console.log(sender);
        console.log(res)
    });

    $('#start').click(()=>{
        chrome.tabs.query({active: true,currentWindow:true},tabs=>{
            console.log(tabs)
            const port = chrome.tabs.connect(tabs[0].id, { name: 'popup_to_content' });
            console.log(port);
            port.postMessage({message:'start'})
        });
    })
});