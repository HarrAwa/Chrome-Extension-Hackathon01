chrome.contextMenus.create({
    id: 'myContextMenu',
    title: 'My Context Menu',
    contexts: ['all']
})

chrome.contextMenus.onClicked.addListener((info,tab)=>{
    let wikiPage = info['selectionText'].replace(/\s+|\s+/g, '');
    console.log(wikiPage);
    chrome.runtime.sendMessage({from: 'background', message: wikiPage })
    // console.log(info);
    // console.log(tab);
})

