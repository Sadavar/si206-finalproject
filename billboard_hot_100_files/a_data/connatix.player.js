
            (function() {
                const cnxWindow = window.parent;
                const gcnx = cnxWindow['cnx'];

                if (!gcnx || !gcnx.cmd) {
                    cnxWindow['cnx'] = {};
                    cnxWindow['cnx'].cmd = [];
                }

                window.cnx_data_elements={"ver":547555,"eu":false,"params":"?cid=1ffe63de-eb53-11e9-b4d2-06948452ae1a","domain":"connatix.com","publisherExclusionLevel":0,"cmpIds":[2,5,6,7,9,10,14,21,25,27,28,31,35,46,47,54,58,59,61,63,68,72,76,77,79,84,90,92,104,105,112,113,123,125,129,134,141,162,165,167,168,171,181,183,185,198,200,212,213,218,221,222,224,225,227,229,231,235,236,237,242,246,247,258,259,260,264,273,279,280,282,287,291,292,294,297,299,300,302,303,304,306,308,309,311,312,316,317,318,321,323,327,329,330,332,335,340,341,343,345,348,350,351,352,354,355,361,363,364,367,369,371,374,376,379,380,382,383,384,385,386,387,388,390,392,396,397,399,401,403,404,405,406,407,409,410,411,412,413,414,415,416,417,418,419,420,421,422,423,424,425,426,427,428,429,430,431,432,433,434,435,436,437,438,439,440,441,442,443,444,445,446,447,448,449,450,452,453,454],"clientAb":{"3":[50,50],"4":[0,100]},"clientAbSettings":{"2":[{"Setup":[2,50]},{"Setup":[3,50]}],"3":[{"Setup":[0,50]},{"Setup":[1,50]}],"4":[{"Setup":[1,100]}]},"playerSettings":{},"serverAbSettings":{"0":[[0,50],[0,50]],"1":[[406,50],[506,50]]},"tier":1,"bundleAbSettings":{"abId":"AXII-600-1","part":"Master"},"es6":true,"omid":false,"standalone":false};
                window.cnx_data_elements.loadedTimestamp = Date.now();
                let s = window.document.createElement('script');
                s.src = '//cds.connatix.com/p/547555/elLoader.js';
                s.setAttribute('async', '1'),
                s.setAttribute('type', 'text/javascript');
                window.document.body.appendChild(s);
            })();