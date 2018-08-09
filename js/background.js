// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({color: '#3aa757'}, function () {
        console.log("The color is blue.");
    });
});

chrome.runtime.onMessage.addListener((req,sender,res)=>{
    console.log(req);
    console.log(sender);
    console.log(res)
});

chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
        {
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {hostContains: 'trello.com'},
                })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }
    ]);
});

