console.log('popup start');
$(function(){
    chrome.runtime.onMessage.addListener((req,sender,res)=>{
        console.log(req);
        console.log(sender);
        console.log(res)
    });
    $('#start').click(()=>{
        console.log('button ')
    })
});