
        function _base64ToArrayBuffer(base64) {
            var binary_string = window.atob(base64);
            var len = binary_string.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i);
            }
            return bytes.buffer;
        }

        function _arrayBufferToBase64( buffer ) {
          var binary = '';
          var bytes = new Uint8Array( buffer );
          var len = bytes.byteLength;
          for (var i = 0; i < len; i++) {
             binary += String.fromCharCode( bytes[ i ] );
          }
          return window.btoa( binary );
        }

        document.addEventListener("DOMContentLoaded", function() {
            var old_prefilter = jQuery.htmlPrefilter;

            jQuery.htmlPrefilter = function(v) {
            
                var regs = [
                    /<a[^>]*href="(?<url>[^"]*)"[^>]*>/gi,
                    /<img[^>]*src="(?<url>[^"]*)"\/?>/gi,
                    /<source[^>]*src="(?<url>[^"]*)"/gi
                ];
                
                var replaces = {};

                for (i in regs)
                {
                    reg = regs[i];

                    var m = true;
                    var n = 0;
                    while (m && n < 100)
                    {
                        n += 1;
                        
                        m = reg.exec(v);
                        if (m)
                        {
                            if (m['groups'] && m['groups']['url'])
                            {
                                var url = m['groups']['url'];
                                if (server_data.hasOwnProperty(url))
                                {
                                    console.log(`Added url:${url} to be replaced with data of ${server_data[url].length} bytes length`);
                                    replaces[url] = server_data[url];                                    
                                }
                            }
                        }
                    }
                }
                
                for (let src in replaces)
                {
                    let dest = replaces[src];
                    v = v.replace(src, dest);
                }

                return old_prefilter(v);
            };
        });

        var server_data={
 "data/behaviors.csv": "\"Epic\",\"Feature\",\"Story\",\"FAILED\",\"BROKEN\",\"PASSED\",\"SKIPPED\",\"UNKNOWN\"\n\"\",\"\",\"\",\"0\",\"0\",\"4\",\"0\",\"0\"\n", 
 "data/behaviors.json": "{\"uid\":\"b1a8273437954620fa374b796ffaacdd\",\"name\":\"behaviors\",\"children\":[{\"name\":\"test_create_post\",\"uid\":\"a065f564149e2acc\",\"parentUid\":\"b1a8273437954620fa374b796ffaacdd\",\"status\":\"passed\",\"time\":{\"start\":1770261679038,\"stop\":1770261679249,\"duration\":211},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":1,\"retriesStatusChange\":false,\"parameters\":[],\"tags\":[]},{\"name\":\"test_xss_inject_and_filter[&lt;script&gt;alert(1)&lt;/script&gt;]\",\"uid\":\"3ab48e80de9f505e\",\"parentUid\":\"b1a8273437954620fa374b796ffaacdd\",\"status\":\"passed\",\"time\":{\"start\":1770261679252,\"stop\":1770261679406,\"duration\":154},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":1,\"retriesStatusChange\":false,\"parameters\":[\"'&lt;script&gt;alert(1)&lt;/script&gt;'\"],\"tags\":[]},{\"name\":\"test_xss_inject_and_filter[&lt;img src=x onerror=alert(2)&gt;]\",\"uid\":\"6fd4479f9fae1c63\",\"parentUid\":\"b1a8273437954620fa374b796ffaacdd\",\"status\":\"passed\",\"time\":{\"start\":1770261679410,\"stop\":1770261679557,\"duration\":147},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":1,\"retriesStatusChange\":false,\"parameters\":[\"'&lt;img src=x onerror=alert(2)&gt;'\"],\"tags\":[]},{\"name\":\"test_xss_inject_and_filter[javascript:alert(3)]\",\"uid\":\"9f1ae229a985bf99\",\"parentUid\":\"b1a8273437954620fa374b796ffaacdd\",\"status\":\"passed\",\"time\":{\"start\":1770261679563,\"stop\":1770261679693,\"duration\":130},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":1,\"retriesStatusChange\":false,\"parameters\":[\"'javascript:alert(3)'\"],\"tags\":[]}]}", 
 "data/categories.csv": "", 
 "data/categories.json": "{\"uid\":\"4b4757e66a1912dae1a509f688f20b0f\",\"name\":\"categories\",\"children\":[]}", 
 "data/packages.json": "{\"uid\":\"83edc06c07f9ae9e47eb6dd1b683e4e2\",\"name\":\"packages\",\"children\":[{\"name\":\"test_wp_crud\",\"children\":[{\"name\":\"test_create_post\",\"uid\":\"a065f564149e2acc\",\"parentUid\":\"99f33a1ab0b77d1202ca9f48db31b810\",\"status\":\"passed\",\"time\":{\"start\":1770261679038,\"stop\":1770261679249,\"duration\":211},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":1,\"retriesStatusChange\":false,\"parameters\":[],\"tags\":[]},{\"name\":\"test_xss_inject_and_filter[&lt;script&gt;alert(1)&lt;/script&gt;]\",\"uid\":\"3ab48e80de9f505e\",\"parentUid\":\"99f33a1ab0b77d1202ca9f48db31b810\",\"status\":\"passed\",\"time\":{\"start\":1770261679252,\"stop\":1770261679406,\"duration\":154},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":1,\"retriesStatusChange\":false,\"parameters\":[\"'&lt;script&gt;alert(1)&lt;/script&gt;'\"],\"tags\":[]},{\"name\":\"test_xss_inject_and_filter[&lt;img src=x onerror=alert(2)&gt;]\",\"uid\":\"6fd4479f9fae1c63\",\"parentUid\":\"99f33a1ab0b77d1202ca9f48db31b810\",\"status\":\"passed\",\"time\":{\"start\":1770261679410,\"stop\":1770261679557,\"duration\":147},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":1,\"retriesStatusChange\":false,\"parameters\":[\"'&lt;img src=x onerror=alert(2)&gt;'\"],\"tags\":[]},{\"name\":\"test_xss_inject_and_filter[javascript:alert(3)]\",\"uid\":\"9f1ae229a985bf99\",\"parentUid\":\"99f33a1ab0b77d1202ca9f48db31b810\",\"status\":\"passed\",\"time\":{\"start\":1770261679563,\"stop\":1770261679693,\"duration\":130},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":1,\"retriesStatusChange\":false,\"parameters\":[\"'javascript:alert(3)'\"],\"tags\":[]}],\"uid\":\"99f33a1ab0b77d1202ca9f48db31b810\"}]}", 
 "data/suites.csv": "\"Status\",\"Start Time\",\"Stop Time\",\"Duration in ms\",\"Parent Suite\",\"Suite\",\"Sub Suite\",\"Test Class\",\"Test Method\",\"Name\",\"Description\"\n\"passed\",\"Thu Feb 05 11:21:19 CST 2026\",\"Thu Feb 05 11:21:19 CST 2026\",\"130\",\"\",\"test_wp_crud\",\"\",\"\",\"\",\"test_xss_inject_and_filter[javascript:alert(3)]\",\"\"\n\"passed\",\"Thu Feb 05 11:21:19 CST 2026\",\"Thu Feb 05 11:21:19 CST 2026\",\"154\",\"\",\"test_wp_crud\",\"\",\"\",\"\",\"test_xss_inject_and_filter[&lt;script&gt;alert(1)&lt;/script&gt;]\",\"\"\n\"passed\",\"Thu Feb 05 11:21:19 CST 2026\",\"Thu Feb 05 11:21:19 CST 2026\",\"147\",\"\",\"test_wp_crud\",\"\",\"\",\"\",\"test_xss_inject_and_filter[&lt;img src=x onerror=alert(2)&gt;]\",\"\"\n\"passed\",\"Thu Feb 05 11:21:19 CST 2026\",\"Thu Feb 05 11:21:19 CST 2026\",\"211\",\"\",\"test_wp_crud\",\"\",\"\",\"\",\"test_create_post\",\"\"\n", 
 "data/suites.json": "{\"uid\":\"98d3104e051c652961429bf95fa0b5d6\",\"name\":\"suites\",\"children\":[{\"name\":\"test_wp_crud\",\"children\":[{\"name\":\"test_create_post\",\"uid\":\"a065f564149e2acc\",\"parentUid\":\"e24eb85d4c683b9fbc0681a0c18ffe46\",\"status\":\"passed\",\"time\":{\"start\":1770261679038,\"stop\":1770261679249,\"duration\":211},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":1,\"retriesStatusChange\":false,\"parameters\":[],\"tags\":[]},{\"name\":\"test_xss_inject_and_filter[&lt;script&gt;alert(1)&lt;/script&gt;]\",\"uid\":\"3ab48e80de9f505e\",\"parentUid\":\"e24eb85d4c683b9fbc0681a0c18ffe46\",\"status\":\"passed\",\"time\":{\"start\":1770261679252,\"stop\":1770261679406,\"duration\":154},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":1,\"retriesStatusChange\":false,\"parameters\":[\"'&lt;script&gt;alert(1)&lt;/script&gt;'\"],\"tags\":[]},{\"name\":\"test_xss_inject_and_filter[&lt;img src=x onerror=alert(2)&gt;]\",\"uid\":\"6fd4479f9fae1c63\",\"parentUid\":\"e24eb85d4c683b9fbc0681a0c18ffe46\",\"status\":\"passed\",\"time\":{\"start\":1770261679410,\"stop\":1770261679557,\"duration\":147},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":1,\"retriesStatusChange\":false,\"parameters\":[\"'&lt;img src=x onerror=alert(2)&gt;'\"],\"tags\":[]},{\"name\":\"test_xss_inject_and_filter[javascript:alert(3)]\",\"uid\":\"9f1ae229a985bf99\",\"parentUid\":\"e24eb85d4c683b9fbc0681a0c18ffe46\",\"status\":\"passed\",\"time\":{\"start\":1770261679563,\"stop\":1770261679693,\"duration\":130},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":1,\"retriesStatusChange\":false,\"parameters\":[\"'javascript:alert(3)'\"],\"tags\":[]}],\"uid\":\"e24eb85d4c683b9fbc0681a0c18ffe46\"}]}", 
 "data/timeline.json": "{\"uid\":\"ab17fc5a4eb3bca4b216b548c7f9fcbc\",\"name\":\"timeline\",\"children\":[{\"name\":\"LAPTOP-HO22AREP\",\"children\":[{\"name\":\"28032-MainThread\",\"children\":[{\"name\":\"test_xss_inject_and_filter[&lt;script&gt;alert(1)&lt;/script&gt;]\",\"uid\":\"94095ceda728b88c\",\"parentUid\":\"7f30a416b182e6c1e10ac42b5e414bc8\",\"status\":\"passed\",\"time\":{\"start\":1770259882745,\"stop\":1770259882882,\"duration\":137},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":0,\"retriesStatusChange\":false,\"parameters\":[\"'&lt;script&gt;alert(1)&lt;/script&gt;'\"],\"tags\":[]},{\"name\":\"test_create_post\",\"uid\":\"66bf7ad36594fd25\",\"parentUid\":\"7f30a416b182e6c1e10ac42b5e414bc8\",\"status\":\"passed\",\"time\":{\"start\":1770259882557,\"stop\":1770259882739,\"duration\":182},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":0,\"retriesStatusChange\":false,\"parameters\":[],\"tags\":[]},{\"name\":\"test_xss_inject_and_filter[&lt;img src=x onerror=alert(2)&gt;]\",\"uid\":\"7f7838a09fd8cd28\",\"parentUid\":\"7f30a416b182e6c1e10ac42b5e414bc8\",\"status\":\"passed\",\"time\":{\"start\":1770259882883,\"stop\":1770259883001,\"duration\":118},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":0,\"retriesStatusChange\":false,\"parameters\":[\"'&lt;img src=x onerror=alert(2)&gt;'\"],\"tags\":[]},{\"name\":\"test_xss_inject_and_filter[javascript:alert(3)]\",\"uid\":\"1e0146c9f44a009\",\"parentUid\":\"7f30a416b182e6c1e10ac42b5e414bc8\",\"status\":\"passed\",\"time\":{\"start\":1770259883005,\"stop\":1770259883134,\"duration\":129},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":0,\"retriesStatusChange\":false,\"parameters\":[\"'javascript:alert(3)'\"],\"tags\":[]}],\"uid\":\"7f30a416b182e6c1e10ac42b5e414bc8\"},{\"name\":\"29988-MainThread\",\"children\":[{\"name\":\"test_create_post\",\"uid\":\"a065f564149e2acc\",\"parentUid\":\"a434e3fafab4082ca218fa9729a9e915\",\"status\":\"passed\",\"time\":{\"start\":1770261679038,\"stop\":1770261679249,\"duration\":211},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":1,\"retriesStatusChange\":false,\"parameters\":[],\"tags\":[]},{\"name\":\"test_xss_inject_and_filter[javascript:alert(3)]\",\"uid\":\"9f1ae229a985bf99\",\"parentUid\":\"a434e3fafab4082ca218fa9729a9e915\",\"status\":\"passed\",\"time\":{\"start\":1770261679563,\"stop\":1770261679693,\"duration\":130},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":1,\"retriesStatusChange\":false,\"parameters\":[\"'javascript:alert(3)'\"],\"tags\":[]},{\"name\":\"test_xss_inject_and_filter[&lt;script&gt;alert(1)&lt;/script&gt;]\",\"uid\":\"3ab48e80de9f505e\",\"parentUid\":\"a434e3fafab4082ca218fa9729a9e915\",\"status\":\"passed\",\"time\":{\"start\":1770261679252,\"stop\":1770261679406,\"duration\":154},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":1,\"retriesStatusChange\":false,\"parameters\":[\"'&lt;script&gt;alert(1)&lt;/script&gt;'\"],\"tags\":[]},{\"name\":\"test_xss_inject_and_filter[&lt;img src=x onerror=alert(2)&gt;]\",\"uid\":\"6fd4479f9fae1c63\",\"parentUid\":\"a434e3fafab4082ca218fa9729a9e915\",\"status\":\"passed\",\"time\":{\"start\":1770261679410,\"stop\":1770261679557,\"duration\":147},\"flaky\":false,\"newFailed\":false,\"newPassed\":false,\"newBroken\":false,\"retriesCount\":1,\"retriesStatusChange\":false,\"parameters\":[\"'&lt;img src=x onerror=alert(2)&gt;'\"],\"tags\":[]}],\"uid\":\"a434e3fafab4082ca218fa9729a9e915\"}],\"uid\":\"7fef3127fc19e4175bb3b5115f99836a\"}]}", 
 "data/attachments/16a97489b3985b88.txt": "新建文章 ID: 49\n", 
 "data/attachments/1f7b2076cb01e095.txt": "新建文章 ID: 48\n", 
 "data/test-cases/1e0146c9f44a009.json": "{\"uid\":\"1e0146c9f44a009\",\"name\":\"test_xss_inject_and_filter[javascript:alert(3)]\",\"fullName\":\"test_wp_crud#test_xss_inject_and_filter\",\"historyId\":\"b6fba6e8d52bc5937dfedd5ea03425fa\",\"time\":{\"start\":1770259883005,\"stop\":1770259883134,\"duration\":129},\"status\":\"passed\",\"flaky\":false,\"newFailed\":false,\"newBroken\":false,\"newPassed\":false,\"retriesCount\":0,\"retriesStatusChange\":false,\"beforeStages\":[],\"afterStages\":[],\"labels\":[{\"name\":\"suite\",\"value\":\"test_wp_crud\"},{\"name\":\"host\",\"value\":\"LAPTOP-HO22AREP\"},{\"name\":\"thread\",\"value\":\"28032-MainThread\"},{\"name\":\"framework\",\"value\":\"pytest\"},{\"name\":\"language\",\"value\":\"cpython3\"},{\"name\":\"package\",\"value\":\"test_wp_crud\"},{\"name\":\"resultFormat\",\"value\":\"allure2\"}],\"parameters\":[{\"name\":\"payload\",\"value\":\"'javascript:alert(3)'\"}],\"links\":[],\"hidden\":true,\"retry\":true,\"extra\":{\"categories\":[],\"tags\":[]},\"source\":\"1e0146c9f44a009.json\",\"parameterValues\":[\"'javascript:alert(3)'\"]}", 
 "data/test-cases/3ab48e80de9f505e.json": "{\"uid\":\"3ab48e80de9f505e\",\"name\":\"test_xss_inject_and_filter[&lt;script&gt;alert(1)&lt;/script&gt;]\",\"fullName\":\"test_wp_crud#test_xss_inject_and_filter\",\"historyId\":\"8096603ac9bb9f9921d41e920917aec4\",\"time\":{\"start\":1770261679252,\"stop\":1770261679406,\"duration\":154},\"status\":\"passed\",\"flaky\":false,\"newFailed\":false,\"newBroken\":false,\"newPassed\":false,\"retriesCount\":1,\"retriesStatusChange\":false,\"beforeStages\":[],\"afterStages\":[],\"labels\":[{\"name\":\"suite\",\"value\":\"test_wp_crud\"},{\"name\":\"host\",\"value\":\"LAPTOP-HO22AREP\"},{\"name\":\"thread\",\"value\":\"29988-MainThread\"},{\"name\":\"framework\",\"value\":\"pytest\"},{\"name\":\"language\",\"value\":\"cpython3\"},{\"name\":\"package\",\"value\":\"test_wp_crud\"},{\"name\":\"resultFormat\",\"value\":\"allure2\"}],\"parameters\":[{\"name\":\"payload\",\"value\":\"'&lt;script&gt;alert(1)&lt;/script&gt;'\"}],\"links\":[],\"hidden\":false,\"retry\":false,\"extra\":{\"severity\":\"normal\",\"retries\":[{\"uid\":\"94095ceda728b88c\",\"status\":\"passed\",\"time\":{\"start\":1770259882745,\"stop\":1770259882882,\"duration\":137}}],\"categories\":[],\"tags\":[]},\"source\":\"3ab48e80de9f505e.json\",\"parameterValues\":[\"'&lt;script&gt;alert(1)&lt;/script&gt;'\"]}", 
 "data/test-cases/66bf7ad36594fd25.json": "{\"uid\":\"66bf7ad36594fd25\",\"name\":\"test_create_post\",\"fullName\":\"test_wp_crud#test_create_post\",\"historyId\":\"3b1a2da975164b4be4fa3b7d8b3f6b96\",\"time\":{\"start\":1770259882557,\"stop\":1770259882739,\"duration\":182},\"status\":\"passed\",\"flaky\":false,\"newFailed\":false,\"newBroken\":false,\"newPassed\":false,\"retriesCount\":0,\"retriesStatusChange\":false,\"beforeStages\":[],\"testStage\":{\"status\":\"passed\",\"steps\":[],\"attachments\":[{\"uid\":\"1f7b2076cb01e095\",\"name\":\"stdout\",\"source\":\"1f7b2076cb01e095.txt\",\"type\":\"text/plain\",\"size\":20}],\"parameters\":[],\"hasContent\":true,\"shouldDisplayMessage\":false,\"attachmentsCount\":1,\"stepsCount\":0},\"afterStages\":[],\"labels\":[{\"name\":\"suite\",\"value\":\"test_wp_crud\"},{\"name\":\"host\",\"value\":\"LAPTOP-HO22AREP\"},{\"name\":\"thread\",\"value\":\"28032-MainThread\"},{\"name\":\"framework\",\"value\":\"pytest\"},{\"name\":\"language\",\"value\":\"cpython3\"},{\"name\":\"package\",\"value\":\"test_wp_crud\"},{\"name\":\"resultFormat\",\"value\":\"allure2\"}],\"parameters\":[],\"links\":[],\"hidden\":true,\"retry\":true,\"extra\":{\"categories\":[],\"tags\":[]},\"source\":\"66bf7ad36594fd25.json\",\"parameterValues\":[]}", 
 "data/test-cases/6fd4479f9fae1c63.json": "{\"uid\":\"6fd4479f9fae1c63\",\"name\":\"test_xss_inject_and_filter[&lt;img src=x onerror=alert(2)&gt;]\",\"fullName\":\"test_wp_crud#test_xss_inject_and_filter\",\"historyId\":\"dff1731833db0c9065f8000cc25412e6\",\"time\":{\"start\":1770261679410,\"stop\":1770261679557,\"duration\":147},\"status\":\"passed\",\"flaky\":false,\"newFailed\":false,\"newBroken\":false,\"newPassed\":false,\"retriesCount\":1,\"retriesStatusChange\":false,\"beforeStages\":[],\"afterStages\":[],\"labels\":[{\"name\":\"suite\",\"value\":\"test_wp_crud\"},{\"name\":\"host\",\"value\":\"LAPTOP-HO22AREP\"},{\"name\":\"thread\",\"value\":\"29988-MainThread\"},{\"name\":\"framework\",\"value\":\"pytest\"},{\"name\":\"language\",\"value\":\"cpython3\"},{\"name\":\"package\",\"value\":\"test_wp_crud\"},{\"name\":\"resultFormat\",\"value\":\"allure2\"}],\"parameters\":[{\"name\":\"payload\",\"value\":\"'&lt;img src=x onerror=alert(2)&gt;'\"}],\"links\":[],\"hidden\":false,\"retry\":false,\"extra\":{\"severity\":\"normal\",\"retries\":[{\"uid\":\"7f7838a09fd8cd28\",\"status\":\"passed\",\"time\":{\"start\":1770259882883,\"stop\":1770259883001,\"duration\":118}}],\"categories\":[],\"tags\":[]},\"source\":\"6fd4479f9fae1c63.json\",\"parameterValues\":[\"'&lt;img src=x onerror=alert(2)&gt;'\"]}", 
 "data/test-cases/7f7838a09fd8cd28.json": "{\"uid\":\"7f7838a09fd8cd28\",\"name\":\"test_xss_inject_and_filter[&lt;img src=x onerror=alert(2)&gt;]\",\"fullName\":\"test_wp_crud#test_xss_inject_and_filter\",\"historyId\":\"dff1731833db0c9065f8000cc25412e6\",\"time\":{\"start\":1770259882883,\"stop\":1770259883001,\"duration\":118},\"status\":\"passed\",\"flaky\":false,\"newFailed\":false,\"newBroken\":false,\"newPassed\":false,\"retriesCount\":0,\"retriesStatusChange\":false,\"beforeStages\":[],\"afterStages\":[],\"labels\":[{\"name\":\"suite\",\"value\":\"test_wp_crud\"},{\"name\":\"host\",\"value\":\"LAPTOP-HO22AREP\"},{\"name\":\"thread\",\"value\":\"28032-MainThread\"},{\"name\":\"framework\",\"value\":\"pytest\"},{\"name\":\"language\",\"value\":\"cpython3\"},{\"name\":\"package\",\"value\":\"test_wp_crud\"},{\"name\":\"resultFormat\",\"value\":\"allure2\"}],\"parameters\":[{\"name\":\"payload\",\"value\":\"'&lt;img src=x onerror=alert(2)&gt;'\"}],\"links\":[],\"hidden\":true,\"retry\":true,\"extra\":{\"categories\":[],\"tags\":[]},\"source\":\"7f7838a09fd8cd28.json\",\"parameterValues\":[\"'&lt;img src=x onerror=alert(2)&gt;'\"]}", 
 "data/test-cases/94095ceda728b88c.json": "{\"uid\":\"94095ceda728b88c\",\"name\":\"test_xss_inject_and_filter[&lt;script&gt;alert(1)&lt;/script&gt;]\",\"fullName\":\"test_wp_crud#test_xss_inject_and_filter\",\"historyId\":\"8096603ac9bb9f9921d41e920917aec4\",\"time\":{\"start\":1770259882745,\"stop\":1770259882882,\"duration\":137},\"status\":\"passed\",\"flaky\":false,\"newFailed\":false,\"newBroken\":false,\"newPassed\":false,\"retriesCount\":0,\"retriesStatusChange\":false,\"beforeStages\":[],\"afterStages\":[],\"labels\":[{\"name\":\"suite\",\"value\":\"test_wp_crud\"},{\"name\":\"host\",\"value\":\"LAPTOP-HO22AREP\"},{\"name\":\"thread\",\"value\":\"28032-MainThread\"},{\"name\":\"framework\",\"value\":\"pytest\"},{\"name\":\"language\",\"value\":\"cpython3\"},{\"name\":\"package\",\"value\":\"test_wp_crud\"},{\"name\":\"resultFormat\",\"value\":\"allure2\"}],\"parameters\":[{\"name\":\"payload\",\"value\":\"'&lt;script&gt;alert(1)&lt;/script&gt;'\"}],\"links\":[],\"hidden\":true,\"retry\":true,\"extra\":{\"categories\":[],\"tags\":[]},\"source\":\"94095ceda728b88c.json\",\"parameterValues\":[\"'&lt;script&gt;alert(1)&lt;/script&gt;'\"]}", 
 "data/test-cases/9f1ae229a985bf99.json": "{\"uid\":\"9f1ae229a985bf99\",\"name\":\"test_xss_inject_and_filter[javascript:alert(3)]\",\"fullName\":\"test_wp_crud#test_xss_inject_and_filter\",\"historyId\":\"b6fba6e8d52bc5937dfedd5ea03425fa\",\"time\":{\"start\":1770261679563,\"stop\":1770261679693,\"duration\":130},\"status\":\"passed\",\"flaky\":false,\"newFailed\":false,\"newBroken\":false,\"newPassed\":false,\"retriesCount\":1,\"retriesStatusChange\":false,\"beforeStages\":[],\"afterStages\":[],\"labels\":[{\"name\":\"suite\",\"value\":\"test_wp_crud\"},{\"name\":\"host\",\"value\":\"LAPTOP-HO22AREP\"},{\"name\":\"thread\",\"value\":\"29988-MainThread\"},{\"name\":\"framework\",\"value\":\"pytest\"},{\"name\":\"language\",\"value\":\"cpython3\"},{\"name\":\"package\",\"value\":\"test_wp_crud\"},{\"name\":\"resultFormat\",\"value\":\"allure2\"}],\"parameters\":[{\"name\":\"payload\",\"value\":\"'javascript:alert(3)'\"}],\"links\":[],\"hidden\":false,\"retry\":false,\"extra\":{\"severity\":\"normal\",\"retries\":[{\"uid\":\"1e0146c9f44a009\",\"status\":\"passed\",\"time\":{\"start\":1770259883005,\"stop\":1770259883134,\"duration\":129}}],\"categories\":[],\"tags\":[]},\"source\":\"9f1ae229a985bf99.json\",\"parameterValues\":[\"'javascript:alert(3)'\"]}", 
 "data/test-cases/a065f564149e2acc.json": "{\"uid\":\"a065f564149e2acc\",\"name\":\"test_create_post\",\"fullName\":\"test_wp_crud#test_create_post\",\"historyId\":\"3b1a2da975164b4be4fa3b7d8b3f6b96\",\"time\":{\"start\":1770261679038,\"stop\":1770261679249,\"duration\":211},\"status\":\"passed\",\"flaky\":false,\"newFailed\":false,\"newBroken\":false,\"newPassed\":false,\"retriesCount\":1,\"retriesStatusChange\":false,\"beforeStages\":[],\"testStage\":{\"status\":\"passed\",\"steps\":[],\"attachments\":[{\"uid\":\"16a97489b3985b88\",\"name\":\"stdout\",\"source\":\"16a97489b3985b88.txt\",\"type\":\"text/plain\",\"size\":20}],\"parameters\":[],\"hasContent\":true,\"shouldDisplayMessage\":false,\"attachmentsCount\":1,\"stepsCount\":0},\"afterStages\":[],\"labels\":[{\"name\":\"suite\",\"value\":\"test_wp_crud\"},{\"name\":\"host\",\"value\":\"LAPTOP-HO22AREP\"},{\"name\":\"thread\",\"value\":\"29988-MainThread\"},{\"name\":\"framework\",\"value\":\"pytest\"},{\"name\":\"language\",\"value\":\"cpython3\"},{\"name\":\"package\",\"value\":\"test_wp_crud\"},{\"name\":\"resultFormat\",\"value\":\"allure2\"}],\"parameters\":[],\"links\":[],\"hidden\":false,\"retry\":false,\"extra\":{\"severity\":\"normal\",\"retries\":[{\"uid\":\"66bf7ad36594fd25\",\"status\":\"passed\",\"time\":{\"start\":1770259882557,\"stop\":1770259882739,\"duration\":182}}],\"categories\":[],\"tags\":[]},\"source\":\"a065f564149e2acc.json\",\"parameterValues\":[]}", 
 "export/influxDbData.txt": "launch_status failed=0 1770262959000000000\nlaunch_status broken=0 1770262959000000000\nlaunch_status passed=4 1770262959000000000\nlaunch_status skipped=0 1770262959000000000\nlaunch_status unknown=0 1770262959000000000\nlaunch_time duration=655 1770262959000000000\nlaunch_time min_duration=130 1770262959000000000\nlaunch_time max_duration=211 1770262959000000000\nlaunch_time sum_duration=642 1770262959000000000\nlaunch_retries retries=4 1770262959000000000\nlaunch_retries run=4 1770262959000000000\n", 
 "export/mail.html": "data:text/html;base64, PCFET0NUWVBFIGh0bWw+CjxodG1sPgo8aGVhZD4KICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04Ij4KICAgIDx0aXRsZT5BbGx1cmUgUmVwb3J0IHN1bW1hcnkgbWFpbDwvdGl0bGU+CjwvaGVhZD4KPGJvZHk+CiAgICBNYWlsIGJvZHkKPC9ib2R5Pgo8L2h0bWw+Cg==", 
 "export/prometheusData.txt": "launch_status_failed 0\nlaunch_status_broken 0\nlaunch_status_passed 4\nlaunch_status_skipped 0\nlaunch_status_unknown 0\nlaunch_time_duration 655\nlaunch_time_min_duration 130\nlaunch_time_max_duration 211\nlaunch_time_sum_duration 642\nlaunch_retries_retries 4\nlaunch_retries_run 4\n", 
 "history/categories-trend.json": "[{\"data\":{}}]", 
 "history/duration-trend.json": "[{\"data\":{\"duration\":655}}]", 
 "history/history-trend.json": "[{\"data\":{\"failed\":0,\"broken\":0,\"skipped\":0,\"passed\":4,\"unknown\":0,\"total\":4}}]", 
 "history/history.json": "{\"dff1731833db0c9065f8000cc25412e6\":{\"statistic\":{\"failed\":0,\"broken\":0,\"skipped\":0,\"passed\":1,\"unknown\":0,\"total\":1},\"items\":[{\"uid\":\"6fd4479f9fae1c63\",\"status\":\"passed\",\"time\":{\"start\":1770261679410,\"stop\":1770261679557,\"duration\":147}}]},\"b6fba6e8d52bc5937dfedd5ea03425fa\":{\"statistic\":{\"failed\":0,\"broken\":0,\"skipped\":0,\"passed\":1,\"unknown\":0,\"total\":1},\"items\":[{\"uid\":\"9f1ae229a985bf99\",\"status\":\"passed\",\"time\":{\"start\":1770261679563,\"stop\":1770261679693,\"duration\":130}}]},\"3b1a2da975164b4be4fa3b7d8b3f6b96\":{\"statistic\":{\"failed\":0,\"broken\":0,\"skipped\":0,\"passed\":1,\"unknown\":0,\"total\":1},\"items\":[{\"uid\":\"a065f564149e2acc\",\"status\":\"passed\",\"time\":{\"start\":1770261679038,\"stop\":1770261679249,\"duration\":211}}]},\"8096603ac9bb9f9921d41e920917aec4\":{\"statistic\":{\"failed\":0,\"broken\":0,\"skipped\":0,\"passed\":1,\"unknown\":0,\"total\":1},\"items\":[{\"uid\":\"3ab48e80de9f505e\",\"status\":\"passed\",\"time\":{\"start\":1770261679252,\"stop\":1770261679406,\"duration\":154}}]}}", 
 "history/retry-trend.json": "[{\"data\":{\"run\":4,\"retry\":4}}]", 
 "plugin/behaviors/index.js": "'use strict';\n\nallure.api.addTranslation('en', {\n    tab: {\n        behaviors: {\n            name: 'Behaviors'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Features by stories',\n            showAll: 'show all'\n        }\n    }\n});\n\nallure.api.addTranslation('ru', {\n    tab: {\n        behaviors: {\n            name: 'Функциональность'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Функциональность',\n            showAll: 'показать все'\n        }\n    }\n});\n\nallure.api.addTranslation('zh', {\n    tab: {\n        behaviors: {\n            name: '功能'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: '特性场景',\n            showAll: '显示所有'\n        }\n    }\n});\n\nallure.api.addTranslation('de', {\n    tab: {\n        behaviors: {\n            name: 'Verhalten'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Features nach Stories',\n            showAll: 'Zeige alle'\n        }\n    }\n});\n\nallure.api.addTranslation('nl', {\n    tab: {\n        behaviors: {\n            name: 'Functionaliteit'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Features en story’s',\n            showAll: 'Toon alle'\n        }\n    }\n});\n\nallure.api.addTranslation('he', {\n    tab: {\n        behaviors: {\n            name: 'התנהגויות'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'תכונות לפי סיפורי משתמש',\n            showAll: 'הצג הכול'\n        }\n    }\n});\n\nallure.api.addTranslation('br', {\n    tab: {\n        behaviors: {\n            name: 'Comportamentos'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Funcionalidades por história',\n            showAll: 'Mostrar tudo'\n        }\n    }\n});\n\nallure.api.addTranslation('ja', {\n    tab: {\n        behaviors: {\n            name: '振る舞い'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'ストーリー別の機能',\n            showAll: '全て表示'\n        }\n    }\n});\n\nallure.api.addTranslation('es', {\n    tab: {\n        behaviors: {\n            name: 'Funcionalidades'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Funcionalidades por Historias de Usuario',\n            showAll: 'mostrar todo'\n        }\n    }\n});\n\nallure.api.addTranslation('kr', {\n    tab: {\n        behaviors: {\n            name: '동작'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: '스토리별 기능',\n            showAll: '전체 보기'\n        }\n    }\n});\n\nallure.api.addTranslation('fr', {\n    tab: {\n        behaviors: {\n            name: 'Comportements'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Thèmes par histoires',\n            showAll: 'Montrer tout'\n        }\n    }\n});\n\nallure.api.addTranslation('pl', {\n    tab: {\n        behaviors: {\n            name: 'Zachowania'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Funkcje według historii',\n            showAll: 'pokaż wszystko'\n        }\n    }\n});\n\nallure.api.addTranslation('az', {\n    tab: {\n        behaviors: {\n            name: 'Davranışlar'\n        }\n    },\n    widget: {\n        behaviors: {\n            name: 'Hekayələr üzrə xüsusiyyətlər',\n            showAll: 'hamısını göstər'\n        }\n    }\n});\n\nallure.api.addTab('behaviors', {\n    title: 'tab.behaviors.name', icon: 'fa fa-list',\n    route: 'behaviors(/)(:testGroup)(/)(:testResult)(/)(:testResultTab)(/)',\n    onEnter: (function (testGroup, testResult, testResultTab) {\n        return new allure.components.TreeLayout({\n            testGroup: testGroup,\n            testResult: testResult,\n            testResultTab: testResultTab,\n            tabName: 'tab.behaviors.name',\n            baseUrl: 'behaviors',\n            url: 'data/behaviors.json',\n            csvUrl: 'data/behaviors.csv'\n        });\n    })\n});\n\nallure.api.addWidget('widgets', 'behaviors', allure.components.WidgetStatusView.extend({\n    rowTag: 'a',\n    title: 'widget.behaviors.name',\n    baseUrl: 'behaviors',\n    showLinks: true\n}));\n", 
 "plugin/packages/index.js": "'use strict';\n\nallure.api.addTranslation('en', {\n    tab: {\n        packages: {\n            name: 'Packages'\n        }\n    }\n});\n\nallure.api.addTranslation('ru', {\n    tab: {\n        packages: {\n            name: 'Пакеты'\n        }\n    }\n});\n\nallure.api.addTranslation('zh', {\n    tab: {\n        packages: {\n            name: '包'\n        }\n    }\n});\n\nallure.api.addTranslation('de', {\n    tab: {\n        packages: {\n            name: 'Pakete'\n        }\n    }\n});\n\nallure.api.addTranslation('nl', {\n    tab: {\n        packages: {\n            name: 'Packages'\n        }\n    }\n});\n\nallure.api.addTranslation('he', {\n    tab: {\n        packages: {\n            name: 'חבילות'\n        }\n    }\n});\n\nallure.api.addTranslation('br', {\n    tab: {\n        packages: {\n            name: 'Pacotes'\n        }\n    }\n});\n\nallure.api.addTranslation('ja', {\n    tab: {\n        packages: {\n            name: 'パッケージ'\n        }\n    }\n});\n\nallure.api.addTranslation('es', {\n    tab: {\n        packages: {\n            name: 'Paquetes'\n        }\n    }\n});\n\nallure.api.addTranslation('kr', {\n    tab: {\n        packages: {\n            name: '패키지'\n        }\n    }\n});\n\nallure.api.addTranslation('fr', {\n    tab: {\n        packages: {\n            name: 'Paquets'\n        }\n    }\n});\n\nallure.api.addTranslation('pl', {\n    tab: {\n        packages: {\n            name: 'Pakiety'\n        }\n    }\n});\n\nallure.api.addTranslation('az', {\n    tab: {\n        packages: {\n            name: 'Paketlər'\n        }\n    }\n});\n\nallure.api.addTab('packages', {\n    title: 'tab.packages.name', icon: 'fa fa-align-left',\n    route: 'packages(/)(:testGroup)(/)(:testResult)(/)(:testResultTab)(/)',\n    onEnter: (function (testGroup, testResult, testResultTab) {\n        return new allure.components.TreeLayout({\n            testGroup: testGroup,\n            testResult: testResult,\n            testResultTab: testResultTab,\n            tabName: 'tab.packages.name',\n            baseUrl: 'packages',\n            url: 'data/packages.json'\n        });\n    })\n});\n", 
 "plugin/screen-diff/index.js": "(function () {\n    var settings = allure.getPluginSettings('screen-diff', { diffType: 'diff' });\n\n    function renderImage(src) {\n        return (\n            '&lt;div class=\"screen-diff__container\"&gt;' +\n            '&lt;img class=\"screen-diff__image\" src=\"' +\n            src +\n            '\"&gt;' +\n            '&lt;/div&gt;'\n        );\n    }\n\n    function findImage(data, name) {\n        if (data.testStage && data.testStage.attachments) {\n            var matchedImage = data.testStage.attachments.filter(function (attachment) {\n                return attachment.name === name;\n            })[0];\n            if (matchedImage) {\n                return 'data/attachments/' + matchedImage.source;\n            }\n        }\n        return null;\n    }\n\n    function renderDiffContent(type, diffImage, actualImage, expectedImage) {\n        if (type === 'diff') {\n            if (diffImage) {\n                return renderImage(diffImage);\n            }\n        }\n        if (type === 'overlay' && expectedImage) {\n            return (\n                '&lt;div class=\"screen-diff__overlay screen-diff__container\"&gt;' +\n                '&lt;img class=\"screen-diff__image\" src=\"' +\n                expectedImage +\n                '\"&gt;' +\n                '&lt;div class=\"screen-diff__image-over\"&gt;' +\n                '&lt;img class=\"screen-diff__image\" src=\"' +\n                actualImage +\n                '\"&gt;' +\n                '&lt;/div&gt;' +\n                '&lt;/div&gt;'\n            );\n        }\n        if (actualImage) {\n            return renderImage(actualImage);\n        }\n        return 'No diff data provided';\n    }\n\n    var TestResultView = Backbone.Marionette.View.extend({\n        regions: {\n            subView: '.screen-diff-view',\n        },\n        template: function () {\n            return '&lt;div class=\"screen-diff-view\"&gt;&lt;/div&gt;';\n        },\n        onRender: function () {\n            var data = this.model.toJSON();\n            var testType = data.labels.filter(function (label) {\n                return label.name === 'testType';\n            })[0];\n            var diffImage = findImage(data, 'diff');\n            var actualImage = findImage(data, 'actual');\n            var expectedImage = findImage(data, 'expected');\n            if (!testType || testType.value !== 'screenshotDiff') {\n                return;\n            }\n            this.showChildView(\n                'subView',\n                new ScreenDiffView({\n                    diffImage: diffImage,\n                    actualImage: actualImage,\n                    expectedImage: expectedImage,\n                }),\n            );\n        },\n    });\n    var ErrorView = Backbone.Marionette.View.extend({\n        templateContext: function () {\n            return this.options;\n        },\n        template: function (data) {\n            return '&lt;pre class=\"screen-diff-error\"&gt;' + data.error + '&lt;/pre&gt;';\n        },\n    });\n    var AttachmentView = Backbone.Marionette.View.extend({\n        regions: {\n            subView: '.screen-diff-view',\n        },\n        template: function () {\n            return '&lt;div class=\"screen-diff-view\"&gt;&lt;/div&gt;';\n        },\n        onRender: function () {\n            jQuery\n                .getJSON(this.options.sourceUrl)\n                .then(this.renderScreenDiffView.bind(this), this.renderErrorView.bind(this));\n        },\n        renderErrorView: function (error) {\n            console.log(error);\n            this.showChildView(\n                'subView',\n                new ErrorView({\n                    error: error.statusText,\n                }),\n            );\n        },\n        renderScreenDiffView: function (data) {\n            this.showChildView(\n                'subView',\n                new ScreenDiffView({\n                    diffImage: data.diff,\n                    actualImage: data.actual,\n                    expectedImage: data.expected,\n                }),\n            );\n        },\n    });\n\n    var ScreenDiffView = Backbone.Marionette.View.extend({\n        className: 'pane__section',\n        events: function () {\n            return {\n                ['click [name=\"screen-diff-type-' + this.cid + '\"]']: 'onDiffTypeChange',\n                'mousemove .screen-diff__overlay': 'onOverlayMove',\n            };\n        },\n        initialize: function (options) {\n            this.diffImage = options.diffImage;\n            this.actualImage = options.actualImage;\n            this.expectedImage = options.expectedImage;\n            this.radioName = 'screen-diff-type-' + this.cid;\n        },\n        templateContext: function () {\n            return {\n                diffType: settings.get('diffType'),\n                diffImage: this.diffImage,\n                actualImage: this.actualImage,\n                expectedImage: this.expectedImage,\n                radioName: this.radioName,\n            };\n        },\n        template: function (data) {\n            if (!data.diffImage && !data.actualImage && !data.expectedImage) {\n                return '';\n            }\n\n            return (\n                '&lt;h3 class=\"pane__section-title\"&gt;Screen Diff&lt;/h3&gt;' +\n                '&lt;div class=\"screen-diff__content\"&gt;' +\n                '&lt;div class=\"screen-diff__switchers\"&gt;' +\n                '&lt;label&gt;&lt;input type=\"radio\" name=\"' +\n                data.radioName +\n                '\" value=\"diff\"&gt; Show diff&lt;/label&gt;' +\n                '&lt;label&gt;&lt;input type=\"radio\" name=\"' +\n                data.radioName +\n                '\" value=\"overlay\"&gt; Show overlay&lt;/label&gt;' +\n                '&lt;/div&gt;' +\n                renderDiffContent(\n                    data.diffType,\n                    data.diffImage,\n                    data.actualImage,\n                    data.expectedImage,\n                ) +\n                '&lt;/div&gt;'\n            );\n        },\n        adjustImageSize: function (event) {\n            var overImage = this.$(event.target);\n            overImage.width(overImage.width());\n        },\n        onRender: function () {\n            const diffType = settings.get('diffType');\n            this.$('[name=\"' + this.radioName + '\"][value=\"' + diffType + '\"]').prop(\n                'checked',\n                true,\n            );\n            if (diffType === 'overlay') {\n                this.$('.screen-diff__image-over img').on('load', this.adjustImageSize.bind(this));\n            }\n        },\n        onOverlayMove: function (event) {\n            var pageX = event.pageX;\n            var containerScroll = this.$('.screen-diff__container').scrollLeft();\n            var elementX = event.currentTarget.getBoundingClientRect().left;\n            var delta = pageX - elementX + containerScroll;\n            this.$('.screen-diff__image-over').width(delta);\n        },\n        onDiffTypeChange: function (event) {\n            settings.save('diffType', event.target.value);\n            this.render();\n        },\n    });\n    allure.api.addTestResultBlock(TestResultView, { position: 'before' });\n    allure.api.addAttachmentViewer('application/vnd.allure.image.diff', {\n        View: AttachmentView,\n        icon: 'fa fa-exchange',\n    });\n})();\n", 
 "plugin/screen-diff/styles.css": ".screen-diff__switchers {\n  margin-bottom: 1em;\n}\n\n.screen-diff__switchers label + label {\n  margin-left: 1em;\n}\n\n.screen-diff__overlay {\n  position: relative;\n  cursor: col-resize;\n}\n\n.screen-diff__container {\n  overflow-x: auto;\n}\n\n.screen-diff__image-over {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background: #fff;\n  position: absolute;\n  overflow: hidden;\n  box-shadow: 2px 0 1px -1px #aaa;\n}\n\n.screen-diff-error {\n  color: #fd5a3e;\n}\n", 
 "widgets/behaviors.json": "{\"total\":4,\"items\":[]}", 
 "widgets/categories-trend.json": "[{\"data\":{}}]", 
 "widgets/categories.json": "{\"total\":0,\"items\":[]}", 
 "widgets/duration-trend.json": "[{\"data\":{\"duration\":655}}]", 
 "widgets/duration.json": "[{\"uid\":\"9f1ae229a985bf99\",\"name\":\"test_xss_inject_and_filter[javascript:alert(3)]\",\"time\":{\"start\":1770261679563,\"stop\":1770261679693,\"duration\":130},\"status\":\"passed\",\"severity\":\"normal\"},{\"uid\":\"3ab48e80de9f505e\",\"name\":\"test_xss_inject_and_filter[&lt;script&gt;alert(1)&lt;/script&gt;]\",\"time\":{\"start\":1770261679252,\"stop\":1770261679406,\"duration\":154},\"status\":\"passed\",\"severity\":\"normal\"},{\"uid\":\"6fd4479f9fae1c63\",\"name\":\"test_xss_inject_and_filter[&lt;img src=x onerror=alert(2)&gt;]\",\"time\":{\"start\":1770261679410,\"stop\":1770261679557,\"duration\":147},\"status\":\"passed\",\"severity\":\"normal\"},{\"uid\":\"a065f564149e2acc\",\"name\":\"test_create_post\",\"time\":{\"start\":1770261679038,\"stop\":1770261679249,\"duration\":211},\"status\":\"passed\",\"severity\":\"normal\"}]", 
 "widgets/environment.json": "[]", 
 "widgets/executors.json": "[]", 
 "widgets/history-trend.json": "[{\"data\":{\"failed\":0,\"broken\":0,\"skipped\":0,\"passed\":4,\"unknown\":0,\"total\":4}}]", 
 "widgets/launch.json": "[]", 
 "widgets/retry-trend.json": "[{\"data\":{\"run\":4,\"retry\":4}}]", 
 "widgets/severity.json": "[{\"uid\":\"a065f564149e2acc\",\"name\":\"test_create_post\",\"time\":{\"start\":1770261679038,\"stop\":1770261679249,\"duration\":211},\"status\":\"passed\",\"severity\":\"normal\"},{\"uid\":\"9f1ae229a985bf99\",\"name\":\"test_xss_inject_and_filter[javascript:alert(3)]\",\"time\":{\"start\":1770261679563,\"stop\":1770261679693,\"duration\":130},\"status\":\"passed\",\"severity\":\"normal\"},{\"uid\":\"3ab48e80de9f505e\",\"name\":\"test_xss_inject_and_filter[&lt;script&gt;alert(1)&lt;/script&gt;]\",\"time\":{\"start\":1770261679252,\"stop\":1770261679406,\"duration\":154},\"status\":\"passed\",\"severity\":\"normal\"},{\"uid\":\"6fd4479f9fae1c63\",\"name\":\"test_xss_inject_and_filter[&lt;img src=x onerror=alert(2)&gt;]\",\"time\":{\"start\":1770261679410,\"stop\":1770261679557,\"duration\":147},\"status\":\"passed\",\"severity\":\"normal\"}]", 
 "widgets/status-chart.json": "[{\"uid\":\"9f1ae229a985bf99\",\"name\":\"test_xss_inject_and_filter[javascript:alert(3)]\",\"time\":{\"start\":1770261679563,\"stop\":1770261679693,\"duration\":130},\"status\":\"passed\",\"severity\":\"normal\"},{\"uid\":\"3ab48e80de9f505e\",\"name\":\"test_xss_inject_and_filter[&lt;script&gt;alert(1)&lt;/script&gt;]\",\"time\":{\"start\":1770261679252,\"stop\":1770261679406,\"duration\":154},\"status\":\"passed\",\"severity\":\"normal\"},{\"uid\":\"6fd4479f9fae1c63\",\"name\":\"test_xss_inject_and_filter[&lt;img src=x onerror=alert(2)&gt;]\",\"time\":{\"start\":1770261679410,\"stop\":1770261679557,\"duration\":147},\"status\":\"passed\",\"severity\":\"normal\"},{\"uid\":\"a065f564149e2acc\",\"name\":\"test_create_post\",\"time\":{\"start\":1770261679038,\"stop\":1770261679249,\"duration\":211},\"status\":\"passed\",\"severity\":\"normal\"}]", 
 "widgets/suites.json": "{\"total\":1,\"items\":[{\"uid\":\"e24eb85d4c683b9fbc0681a0c18ffe46\",\"name\":\"test_wp_crud\",\"statistic\":{\"failed\":0,\"broken\":0,\"skipped\":0,\"passed\":4,\"unknown\":0,\"total\":4}}]}", 
 "widgets/summary.json": "{\"reportName\":\"Allure Report\",\"testRuns\":[],\"statistic\":{\"failed\":0,\"broken\":0,\"skipped\":0,\"passed\":4,\"unknown\":0,\"total\":4},\"time\":{\"start\":1770261679038,\"stop\":1770261679693,\"duration\":655,\"minDuration\":130,\"maxDuration\":211,\"sumDuration\":642}}", 
};
    var server = sinon.fakeServer.create();

                server.respondWith("GET", "data/behaviors.csv", [
                      200, { "Content-Type": "text/csv" }, server_data["data/behaviors.csv"],
                ]);
            
                server.respondWith("GET", "data/behaviors.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/behaviors.json"],
                ]);
            
                server.respondWith("GET", "data/categories.csv", [
                      200, { "Content-Type": "text/csv" }, server_data["data/categories.csv"],
                ]);
            
                server.respondWith("GET", "data/categories.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/categories.json"],
                ]);
            
                server.respondWith("GET", "data/packages.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/packages.json"],
                ]);
            
                server.respondWith("GET", "data/suites.csv", [
                      200, { "Content-Type": "text/csv" }, server_data["data/suites.csv"],
                ]);
            
                server.respondWith("GET", "data/suites.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/suites.json"],
                ]);
            
                server.respondWith("GET", "data/timeline.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/timeline.json"],
                ]);
            
                server.respondWith("GET", "data/attachments/16a97489b3985b88.txt", [
                      200, { "Content-Type": "text/plain;charset=UTF-8" }, server_data["data/attachments/16a97489b3985b88.txt"],
                ]);
            
                server.respondWith("GET", "data/attachments/1f7b2076cb01e095.txt", [
                      200, { "Content-Type": "text/plain;charset=UTF-8" }, server_data["data/attachments/1f7b2076cb01e095.txt"],
                ]);
            
                server.respondWith("GET", "data/test-cases/1e0146c9f44a009.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/test-cases/1e0146c9f44a009.json"],
                ]);
            
                server.respondWith("GET", "data/test-cases/3ab48e80de9f505e.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/test-cases/3ab48e80de9f505e.json"],
                ]);
            
                server.respondWith("GET", "data/test-cases/66bf7ad36594fd25.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/test-cases/66bf7ad36594fd25.json"],
                ]);
            
                server.respondWith("GET", "data/test-cases/6fd4479f9fae1c63.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/test-cases/6fd4479f9fae1c63.json"],
                ]);
            
                server.respondWith("GET", "data/test-cases/7f7838a09fd8cd28.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/test-cases/7f7838a09fd8cd28.json"],
                ]);
            
                server.respondWith("GET", "data/test-cases/94095ceda728b88c.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/test-cases/94095ceda728b88c.json"],
                ]);
            
                server.respondWith("GET", "data/test-cases/9f1ae229a985bf99.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/test-cases/9f1ae229a985bf99.json"],
                ]);
            
                server.respondWith("GET", "data/test-cases/a065f564149e2acc.json", [
                      200, { "Content-Type": "application/json" }, server_data["data/test-cases/a065f564149e2acc.json"],
                ]);
            
                server.respondWith("GET", "export/influxDbData.txt", [
                      200, { "Content-Type": "text/plain;charset=UTF-8" }, server_data["export/influxDbData.txt"],
                ]);
            
                server.respondWith("GET", "export/mail.html", [
                      200, { "Content-Type": "text/html" }, server_data["export/mail.html"],
                ]);
            
                server.respondWith("GET", "export/prometheusData.txt", [
                      200, { "Content-Type": "text/plain;charset=UTF-8" }, server_data["export/prometheusData.txt"],
                ]);
            
                server.respondWith("GET", "history/categories-trend.json", [
                      200, { "Content-Type": "application/json" }, server_data["history/categories-trend.json"],
                ]);
            
                server.respondWith("GET", "history/duration-trend.json", [
                      200, { "Content-Type": "application/json" }, server_data["history/duration-trend.json"],
                ]);
            
                server.respondWith("GET", "history/history-trend.json", [
                      200, { "Content-Type": "application/json" }, server_data["history/history-trend.json"],
                ]);
            
                server.respondWith("GET", "history/history.json", [
                      200, { "Content-Type": "application/json" }, server_data["history/history.json"],
                ]);
            
                server.respondWith("GET", "history/retry-trend.json", [
                      200, { "Content-Type": "application/json" }, server_data["history/retry-trend.json"],
                ]);
            
                server.respondWith("GET", "plugin/behaviors/index.js", [
                      200, { "Content-Type": "application/javascript" }, server_data["plugin/behaviors/index.js"],
                ]);
            
                server.respondWith("GET", "plugin/packages/index.js", [
                      200, { "Content-Type": "application/javascript" }, server_data["plugin/packages/index.js"],
                ]);
            
                server.respondWith("GET", "plugin/screen-diff/index.js", [
                      200, { "Content-Type": "application/javascript" }, server_data["plugin/screen-diff/index.js"],
                ]);
            
                server.respondWith("GET", "plugin/screen-diff/styles.css", [
                      200, { "Content-Type": "text/css" }, server_data["plugin/screen-diff/styles.css"],
                ]);
            
                server.respondWith("GET", "widgets/behaviors.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/behaviors.json"],
                ]);
            
                server.respondWith("GET", "widgets/categories-trend.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/categories-trend.json"],
                ]);
            
                server.respondWith("GET", "widgets/categories.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/categories.json"],
                ]);
            
                server.respondWith("GET", "widgets/duration-trend.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/duration-trend.json"],
                ]);
            
                server.respondWith("GET", "widgets/duration.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/duration.json"],
                ]);
            
                server.respondWith("GET", "widgets/environment.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/environment.json"],
                ]);
            
                server.respondWith("GET", "widgets/executors.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/executors.json"],
                ]);
            
                server.respondWith("GET", "widgets/history-trend.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/history-trend.json"],
                ]);
            
                server.respondWith("GET", "widgets/launch.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/launch.json"],
                ]);
            
                server.respondWith("GET", "widgets/retry-trend.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/retry-trend.json"],
                ]);
            
                server.respondWith("GET", "widgets/severity.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/severity.json"],
                ]);
            
                server.respondWith("GET", "widgets/status-chart.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/status-chart.json"],
                ]);
            
                server.respondWith("GET", "widgets/suites.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/suites.json"],
                ]);
            
                server.respondWith("GET", "widgets/summary.json", [
                      200, { "Content-Type": "application/json" }, server_data["widgets/summary.json"],
                ]);
            server.autoRespond = true;