/*************************************

项目名称：Fileball
下载地址：https://t.cn/A6ScGy9g
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！
使用说明：新版已不支持，仅支持1.2.10以下版本

**************************************

[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(.*?)*$) url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/QuantumultX/chxm1023/Rewrite/fileball.js
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(.*?)*$) url script-request-header https://raw.githubusercontent.com/axtyet/Nebula/main/QuantumultX/chxm1023/Rewrite/fileball.js
^https:\/\/firebaseremoteconfig\.googleapis\.com\/v\d\/projects\/.*\/?(.*?)*$ url script-response-body https://raw.githubusercontent.com/axtyet/Nebula/main/QuantumultX/chxm1023/Rewrite/sjyz.js
^https:\/\/app-measurement\.com\/config\/app\/(.*?) url reject

[mitm]
hostname = api.revenuecat.com, app-measurement.com, firebaseremoteconfig.googleapis.com

*************************************/

 
;var encode_version = 'jsjiami.com.v5', pdaze = '__0xfdebb',  __0xfdebb=['OnwXDw==','w4DDiE3Cq8OBwr4vQkxY','WcKfaQo=','wrMfw4p2MA==','aSnDgcKvB8OIwo7DosKDw5s=','N1whGMOrN2/CpHTDsQhp','MnQQLQ==','TE3CuV/Cs0E6wqE6wrTDoMKUwpTDiF5XWAg=','QXrCvVlSw4pPwrUh','EMKFw7pyHMKCPsODw6QjQ8K1LA==','w5fDtCk=','5Ym86Zmx54i15p2k5Y6E772YasOt5L+i5a295p2s5b6H56q5','GE82','HxcQ','w6/ClnPDs8KCw6ZuHxN1NhTDj8Kjw5loD8OHwoxiQCnDm8KcMMOYGMKEwovChsOcJcOIQcOjKg3DqMOow4HDosK0wp1mw6wTKA17w4oxwo7CgMK0w4oKwp7CscKoLHlh','XsKQbRs=','wp7DlQpFZQ==','wohtw7U=','wqnDpMKfXcKQ','KQnDmm7CojLDicOtaiZzwqRXVSci','ZXpPw49C','T8OMw79ow5E=','e0tww48=','UMKQw50/bA==','CMOBw6/Dg8KUGm8=','w6A3fcO8','w7Q5YcOhNcKvMQ==','woB8wohrYA==','dAnDkj3ChE3ClA==','UmPDg8K+wroINw==','LXYKCFfChiQ=','Q8K3w4lOEMKaw4UUKA==','MV07AsOwN28=','RMK4fw==','XU/CplfCvw==','cMOAw6A=','ccOzwq/CjsOc','w5rDmXbCqMO1','wrTDoEV/wrI=','RMKfw6rDvMKo','w7LCvsKKHV8=','b8K4w6ggeQ==','ScOiw7Nvwpw=','5YuE6Zqe54m55p6q5Y6T776Ow4LDquS+n+WtmOafh+W+iueomQ==','woNmw4wcdg==','wp5dwqd1fw==','XCA1F8KK','IcKJGRzCnQ==','IlQSNsOH','Q8OMw7PChsKGwoZxwqo=','S8O9w61wworDnsOM','RcKWwqV9QcKSaw==','OsKKGw==','a0thw458','O1wzHg==','wrXDtktZwpjDrEPCoCI=','V8Kvw7sqwqQ=','K8O8woLCocOu','w7pyL8OdFQ==','OmjDrsKuCA==','w5DDkkHCq8ONwqAj','ccKpw5YwwpI=','SsKOw4EjbA==','wrJdw47Cng==','Ik3DusKY','Kg7DhmLCpA==','H8Ocw6DDk8Ke','fjI6E8K2','YsKNcUx5','fgjDmiE=','wpPCm0PDqA==','wqZTw5LCg8KGwosm','wqFxw5ssQg==','TcOqw6BmwpXDhsOAUMKm','w7TCrcOaw4DDk3YC','Q8KLwrlhXA==','TcKMw4wpfQ==','WcKYw5vDh8KA','GMKKLifClg==','GsK3w5bDlgvCusKewpjDmMKfw6lrw6Fe','TcOow5JOwrE=','wogMw4s=','wpAHw64=','cBbDuiLCgg==','acO5w71Kw48=','RkjDvsK9wrM=','w4rDvEDCgsOD','w6PDmDc=','w7vChsOHw7lz','wq0xwqbCjcKK','wql+w5HCosKY','I8K0NC3CpA==','wqdswoM=','U2TCn1Bd','Ti0FJcK5','VMK8w4PDv8KT','QcKJwo1iRw==','fmfCikhZ','FmYuPB4=','wos0wqPCgsKq','w7tYL8O3CA==','VsKzw74swqfDuk4gwrs=','KUzDuMKO','c8K8w49ZTcKvw4seKMKc','wprDsgxvbiZH','TMKNw4g4NcK7w79xwqvCuQ==','wqrDj8KCWsKBW10iw4hGeg==','LBPDmSPCsDLDisOmKGNXwqIHDR5mXn4p','5LuU5L2m5a275LmF77yB56WR5qyI6L+G6L2L5omk5Zef5YyN','woMuwq7ClcOXTTvDqg==','dA7DhCPDmhHDg8O1','WcKewrPCgsOWRjPDhsOQTsO3w7nDocKNDH8AF8ORwo4=','ZMKTeUBrwrkEw49S','UcKbw4wufcKow6s=','fsKmwpDCp8OyMMKLLMKkYsKYwrHCm0ogwrwI','wrw0wrh7cS5sHMOewoPCisO/CMK2wpHDkEQ=','wr/CscKABcKWwp4c','Z0tiw59+K10=','UsKYw6nDv8KKEyXDgMOPw7Y=','wr/Dk8KMTMKARkwfw51G','L2AfOxAmacOuwozCjhzDkF0=','ZBPDnj3CiFPCmMKkK8Ks','w6QjbcOhOcKxPSF3wqc=','KMOBwq7CscOPPnfChzPCsQ==','Y8OlwpbCq8OwOcKANMKkb8KN'];(function(_0x1d8617,_0x192cec){var _0x46d66f=function(_0x5b9d25){while(--_0x5b9d25){_0x1d8617['push'](_0x1d8617['shift']());}};var _0x21ba52=function(){var _0x15f5aa={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5d8784,_0x1cd58f,_0x139fa3,_0x4fb0fa){_0x4fb0fa=_0x4fb0fa||{};var _0x250302=_0x1cd58f+'='+_0x139fa3;var _0x4147ce=0x0;for(var _0x4147ce=0x0,_0x4da000=_0x5d8784['length'];_0x4147ce<_0x4da000;_0x4147ce++){var _0x43dcc8=_0x5d8784[_0x4147ce];_0x250302+=';\x20'+_0x43dcc8;var _0x1c3c6a=_0x5d8784[_0x43dcc8];_0x5d8784['push'](_0x1c3c6a);_0x4da000=_0x5d8784['length'];if(_0x1c3c6a!==!![]){_0x250302+='='+_0x1c3c6a;}}_0x4fb0fa['cookie']=_0x250302;},'removeCookie':function(){return'dev';},'getCookie':function(_0xadc5d7,_0x179bb2){_0xadc5d7=_0xadc5d7||function(_0x5b4c48){return _0x5b4c48;};var _0x118e43=_0xadc5d7(new RegExp('(?:^|;\x20)'+_0x179bb2['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0xc43c65=function(_0x78aa5a,_0x5f16c6){_0x78aa5a(++_0x5f16c6);};_0xc43c65(_0x46d66f,_0x192cec);return _0x118e43?decodeURIComponent(_0x118e43[0x1]):undefined;}};var _0x2ab2af=function(){var _0x7c2242=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x7c2242['test'](_0x15f5aa['removeCookie']['toString']());};_0x15f5aa['updateCookie']=_0x2ab2af;var _0x327561='';var _0xb0bd5=_0x15f5aa['updateCookie']();if(!_0xb0bd5){_0x15f5aa['setCookie'](['*'],'counter',0x1);}else if(_0xb0bd5){_0x327561=_0x15f5aa['getCookie'](null,'counter');}else{_0x15f5aa['removeCookie']();}};_0x21ba52();}(__0xfdebb,0xe1));var _0x2d52=function(_0x41c3dc,_0x365016){_0x41c3dc=_0x41c3dc-0x0;var _0x4cb434=__0xfdebb[_0x41c3dc];if(_0x2d52['initialized']===undefined){(function(){var _0x118cad=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x34f29e='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x118cad['atob']||(_0x118cad['atob']=function(_0x28fd0a){var _0x2d2102=String(_0x28fd0a)['replace'](/=+$/,'');for(var _0x2aa4ec=0x0,_0x498cbc,_0x46a95a,_0x17c17e=0x0,_0x1275bf='';_0x46a95a=_0x2d2102['charAt'](_0x17c17e++);~_0x46a95a&&(_0x498cbc=_0x2aa4ec%0x4?_0x498cbc*0x40+_0x46a95a:_0x46a95a,_0x2aa4ec++%0x4)?_0x1275bf+=String['fromCharCode'](0xff&_0x498cbc>>(-0x2*_0x2aa4ec&0x6)):0x0){_0x46a95a=_0x34f29e['indexOf'](_0x46a95a);}return _0x1275bf;});}());var _0x1ac7ee=function(_0xb3f6aa,_0x1ec847){var _0x323f13=[],_0x2e52ae=0x0,_0x15d233,_0x64b874='',_0x1e1cec='';_0xb3f6aa=atob(_0xb3f6aa);for(var _0x2b56fb=0x0,_0x1bedee=_0xb3f6aa['length'];_0x2b56fb<_0x1bedee;_0x2b56fb++){_0x1e1cec+='%'+('00'+_0xb3f6aa['charCodeAt'](_0x2b56fb)['toString'](0x10))['slice'](-0x2);}_0xb3f6aa=decodeURIComponent(_0x1e1cec);for(var _0x1d0e2d=0x0;_0x1d0e2d<0x100;_0x1d0e2d++){_0x323f13[_0x1d0e2d]=_0x1d0e2d;}for(_0x1d0e2d=0x0;_0x1d0e2d<0x100;_0x1d0e2d++){_0x2e52ae=(_0x2e52ae+_0x323f13[_0x1d0e2d]+_0x1ec847['charCodeAt'](_0x1d0e2d%_0x1ec847['length']))%0x100;_0x15d233=_0x323f13[_0x1d0e2d];_0x323f13[_0x1d0e2d]=_0x323f13[_0x2e52ae];_0x323f13[_0x2e52ae]=_0x15d233;}_0x1d0e2d=0x0;_0x2e52ae=0x0;for(var _0x251fba=0x0;_0x251fba<_0xb3f6aa['length'];_0x251fba++){_0x1d0e2d=(_0x1d0e2d+0x1)%0x100;_0x2e52ae=(_0x2e52ae+_0x323f13[_0x1d0e2d])%0x100;_0x15d233=_0x323f13[_0x1d0e2d];_0x323f13[_0x1d0e2d]=_0x323f13[_0x2e52ae];_0x323f13[_0x2e52ae]=_0x15d233;_0x64b874+=String['fromCharCode'](_0xb3f6aa['charCodeAt'](_0x251fba)^_0x323f13[(_0x323f13[_0x1d0e2d]+_0x323f13[_0x2e52ae])%0x100]);}return _0x64b874;};_0x2d52['rc4']=_0x1ac7ee;_0x2d52['data']={};_0x2d52['initialized']=!![];}var _0xa578aa=_0x2d52['data'][_0x41c3dc];if(_0xa578aa===undefined){if(_0x2d52['once']===undefined){var _0x161138=function(_0x5de24e){this['rc4Bytes']=_0x5de24e;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x161138['prototype']['checkState']=function(){var _0x679d60=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x679d60['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x161138['prototype']['runState']=function(_0x34523b){if(!Boolean(~_0x34523b)){return _0x34523b;}return this['getState'](this['rc4Bytes']);};_0x161138['prototype']['getState']=function(_0x50ee53){for(var _0x185962=0x0,_0x313893=this['states']['length'];_0x185962<_0x313893;_0x185962++){this['states']['push'](Math['round'](Math['random']()));_0x313893=this['states']['length'];}return _0x50ee53(this['states'][0x0]);};new _0x161138(_0x2d52)['checkState']();_0x2d52['once']=!![];}_0x4cb434=_0x2d52['rc4'](_0x4cb434,_0x365016);_0x2d52['data'][_0x41c3dc]=_0x4cb434;}else{_0x4cb434=_0xa578aa;}return _0x4cb434;};const _0x2d66cc={};const _0x2c27da=JSON[_0x2d52('0x0','UN$I')](typeof $response!=_0x2d52('0x1','cg4b')&&$response[_0x2d52('0x2','KDs5')]||null);const _0x446057=$request['headers'][_0x2d52('0x3',']t0^')]||$request[_0x2d52('0x4','uwRz')][_0x2d52('0x5','hoR8')];const _0x9a0b23={'Fileball':{'name':_0x2d52('0x6','QX@0'),'id':_0x2d52('0x7','hVrG')}};const _0x44c28d={'warning':_0x2d52('0x8','5gnH'),'feedback':_0x2d52('0x9','Xa4o'),'wechat':_0x2d52('0xa','NlUF'),'original_purchase_date':_0x2d52('0xb','#HYL'),'purchase_date':'2022-09-09T09:09:09Z','ownership_type':'PURCHASED'};if(typeof $response==_0x2d52('0xc','5gnH')){delete $request[_0x2d52('0xd','hoR8')][_0x2d52('0xe','eIJ2')];delete $request['headers'][_0x2d52('0xf','1hWe')];_0x2d66cc[_0x2d52('0x10','f5v)')]=$request[_0x2d52('0x11','Xn8]')];}else if(_0x2c27da&&_0x2c27da[_0x2d52('0x12','ZZUM')]){_0x2c27da[_0x2d52('0x13','QX@0')][_0x2d52('0x14','^)[c')]=_0x2c27da[_0x2d52('0x15','NlUF')]['subscriptions']||{};_0x2c27da[_0x2d52('0x16','sAO!')]['entitlement']=_0x2c27da[_0x2d52('0x17','CXU3')][_0x2d52('0x18','eIJ2')]||{};for(const _0x200f41 in _0x9a0b23){if(new RegExp('^'+_0x200f41,'i')[_0x2d52('0x19','9dFi')](_0x446057)){_0x2c27da['subscriber']['subscriptions'][_0x9a0b23[_0x200f41]['id']]=_0x44c28d;_0x2c27da[_0x2d52('0x1a','CgDq')]['entitlements'][_0x9a0b23[_0x200f41][_0x2d52('0x1b','M5$6')]]=JSON[_0x2d52('0x1c','06j9')](JSON['stringify'](_0x44c28d));_0x2c27da[_0x2d52('0x1d','LSLM')][_0x2d52('0x1e','EQKA')][_0x9a0b23[_0x200f41][_0x2d52('0x1f','^)[c')]][_0x2d52('0x20','%V)y')]=_0x9a0b23[_0x200f41]['id'];break;}}_0x2d66cc['body']=JSON['stringify'](_0x2c27da);}$done(_0x2d66cc);;(function(_0x1528a6,_0x237bdc,_0x2ab3f6){var _0x4e6604=function(){var _0x3940e6=!![];return function(_0x5610f2,_0x3d9d02){var _0x31b816=_0x3940e6?function(){if(_0x3d9d02){var _0x5b3b33=_0x3d9d02['apply'](_0x5610f2,arguments);_0x3d9d02=null;return _0x5b3b33;}}:function(){};_0x3940e6=![];return _0x31b816;};}();var _0x793e10=_0x4e6604(this,function(){var _0x46082e=function(){return'\x64\x65\x76';},_0x633724=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x5ae38c=function(){var _0x3b87ba=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x3b87ba['\x74\x65\x73\x74'](_0x46082e['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x18bbde=function(){var _0x2be630=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x2be630['\x74\x65\x73\x74'](_0x633724['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x4f2709=function(_0x426445){var _0x73366b=~-0x1>>0x1+0xff%0x0;if(_0x426445['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x73366b)){_0x415b29(_0x426445);}};var _0x415b29=function(_0x196050){var _0x48d62a=~-0x4>>0x1+0xff%0x0;if(_0x196050['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x48d62a){_0x4f2709(_0x196050);}};if(!_0x5ae38c()){if(!_0x18bbde()){_0x4f2709('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x4f2709('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x4f2709('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x793e10();var _0x5c22b5={'xuPKi':_0x2d52('0x21','JRou'),'pfGGX':function _0x1f7dd6(_0x2832df,_0x577c7c){return _0x2832df===_0x577c7c;},'wleBC':'object','pHNcB':function _0x2df8e9(_0x1b8da8,_0x233a73){return _0x1b8da8!==_0x233a73;},'qKrYx':'EjQ','RtHCd':_0x2d52('0x22','pd%R'),'TqHpj':function _0x457b06(_0x392138,_0x42658f,_0xf1dda6){return _0x392138(_0x42658f,_0xf1dda6);},'BugAW':function _0x284c03(_0x4fb73b){return _0x4fb73b();},'xSJcI':_0x2d52('0x23','MNvw'),'yfYsC':function _0x1f1874(_0x5cd39b,_0x55cb98){return _0x5cd39b!==_0x55cb98;},'NoRyH':function _0x43d6b1(_0x3d9ac5,_0x3b0921){return _0x3d9ac5===_0x3b0921;},'ezQMT':function _0x1fe887(_0x2270e4,_0x353ecc){return _0x2270e4+_0x353ecc;},'Qsdey':_0x2d52('0x24','^)[c')};var _0x5f071a=function(){var _0x28764e=!![];return function(_0x11d69c,_0x2d2c2b){var _0x36e637=_0x28764e?function(){var _0x599178={'XNUCh':function _0xafc357(_0x4cafe6,_0x5b32d4){return _0x4cafe6===_0x5b32d4;},'pqCAQ':'XEk'};if(_0x599178['XNUCh'](_0x2d52('0x25','9dFi'),_0x599178['pqCAQ'])){debugger;}else{if(_0x2d2c2b){var _0x27ad5d=_0x2d2c2b['apply'](_0x11d69c,arguments);_0x2d2c2b=null;return _0x27ad5d;}}}:function(){};_0x28764e=![];return _0x36e637;};}();(function(){_0x5f071a(this,function(){var _0x41587a={'lBgNn':function _0xd9a90e(_0x56e5bb,_0x412b1d){return _0x56e5bb!==_0x412b1d;},'eBqbs':_0x2d52('0x26','%b)U'),'ZACMi':_0x2d52('0x27','CgDq'),'jTLtY':_0x2d52('0x28','M5$6'),'ABFCp':function _0x17c597(_0x31ed33,_0x1f7817){return _0x31ed33+_0x1f7817;},'dgjxN':'chain'};if(_0x41587a[_0x2d52('0x29','uwRz')](_0x2d52('0x2a','8vhB'),_0x41587a[_0x2d52('0x2b','QX@0')])){var _0x26315f=new RegExp(_0x2d52('0x2c','hVrG'));var _0x51d890=new RegExp(_0x41587a['ZACMi'],'i');var _0x3d50fd=_0xcd3e92(_0x41587a[_0x2d52('0x2d','Xn8]')]);if(!_0x26315f['test'](_0x41587a[_0x2d52('0x2e','i3Db')](_0x3d50fd,_0x41587a['dgjxN']))||!_0x51d890[_0x2d52('0x2f','Xn8]')](_0x41587a['ABFCp'](_0x3d50fd,_0x2d52('0x30','hoR8')))){_0x3d50fd('0');}else{_0xcd3e92();}}else{that['console']['log']=func;that[_0x2d52('0x31','#HYL')][_0x2d52('0x32','sAO!')]=func;that[_0x2d52('0x33','sAO!')][_0x2d52('0x34','1hWe')]=func;that[_0x2d52('0x35','NlUF')]['info']=func;that[_0x2d52('0x36','H@1J')]['error']=func;that[_0x2d52('0x37','9dFi')][_0x2d52('0x38',']t0^')]=func;that[_0x2d52('0x39','EQKA')]['trace']=func;}})();}());var _0x15d8df=function(){var _0x37f2a9={'rUWmt':_0x2d52('0x3a','5gnH')};if('UEb'!==_0x37f2a9['rUWmt']){var _0x4ecde4=_0x4b78a0?function(){if(fn){var _0x5029d7=fn[_0x2d52('0x3b','%V)y')](context,arguments);fn=null;return _0x5029d7;}}:function(){};_0x4b78a0=![];return _0x4ecde4;}else{var _0x4b78a0=!![];return function(_0x53af4d,_0x1f5608){var _0xfd3ec9={'wxMLX':function _0x188b13(_0x2528a5,_0x152419){return _0x2528a5!==_0x152419;},'idYpW':_0x2d52('0x3c','1zs&'),'dabaF':function _0x185ae4(_0x139558){return _0x139558();},'dnmCZ':function _0x21eed4(_0xf29dd2,_0x4f2ef0){return _0xf29dd2!==_0x4f2ef0;},'erapA':'cyO','VFEja':function _0x1e0521(_0xd4f610,_0x4dcd34){return _0xd4f610(_0x4dcd34);}};var _0x3f49f6=_0x4b78a0?function(){if(_0xfd3ec9[_0x2d52('0x3d','eIJ2')]('XRc',_0xfd3ec9[_0x2d52('0x3e','CgDq')])){var _0x305761=function(){while(!![]){}};return _0xfd3ec9['dabaF'](_0x305761);}else{if(_0x1f5608){if(_0xfd3ec9[_0x2d52('0x3f','Yge2')](_0xfd3ec9[_0x2d52('0x40','ZZUM')],_0xfd3ec9[_0x2d52('0x41','wIdZ')])){_0xfd3ec9[_0x2d52('0x42','hoR8')](result,'0');}else{var _0x33efbf=_0x1f5608[_0x2d52('0x43','1zs&')](_0x53af4d,arguments);_0x1f5608=null;return _0x33efbf;}}}}:function(){};_0x4b78a0=![];return _0x3f49f6;};}}();var _0x19c74d=_0x5c22b5['TqHpj'](_0x15d8df,this,function(){var _0x370a35=function(){var _0x111869={'WBrtO':function _0x1212bf(_0x4a9257,_0x9009eb){return _0x4a9257===_0x9009eb;},'FruES':'qbr','zDMkx':_0x2d52('0x44','65SJ')};if(_0x111869['WBrtO'](_0x111869['FruES'],_0x111869[_0x2d52('0x45','8vhB')])){}else{_0x1528a6[_0x2ab3f6](_0x111869[_0x2d52('0x46','1hWe')]);}};var _0x2746dd=typeof window!==_0x5c22b5['xuPKi']?window:_0x5c22b5[_0x2d52('0x47','SuIz')](typeof process,_0x5c22b5[_0x2d52('0x48','Ew0k')])&&_0x5c22b5[_0x2d52('0x49','EQKA')](typeof require,_0x2d52('0x4a','IHaz'))&&_0x5c22b5['pfGGX'](typeof global,_0x5c22b5['wleBC'])?global:this;if(!_0x2746dd[_0x2d52('0x4b','1zs&')]){_0x2746dd[_0x2d52('0x4c','pd%R')]=function(_0x295bde){var _0x2ab3f6={};_0x2ab3f6[_0x2d52('0x4d','Ew0k')]=_0x295bde;_0x2ab3f6['warn']=_0x295bde;_0x2ab3f6[_0x2d52('0x4e','Xn8]')]=_0x295bde;_0x2ab3f6[_0x2d52('0x4f','EQKA')]=_0x295bde;_0x2ab3f6['error']=_0x295bde;_0x2ab3f6[_0x2d52('0x50','Yge2')]=_0x295bde;_0x2ab3f6[_0x2d52('0x51','cg4b')]=_0x295bde;return _0x2ab3f6;}(_0x370a35);}else{if(_0x5c22b5[_0x2d52('0x52','CXU3')](_0x5c22b5[_0x2d52('0x53','UN$I')],_0x5c22b5[_0x2d52('0x54','KDs5')])){_0x2746dd[_0x2d52('0x55','CgDq')]=function(_0x67ecd4){var _0x289d2b={'RtLyS':'8|0|3|1|4|5|2|6|7'};var _0x1fabd6=_0x289d2b[_0x2d52('0x56','cg4b')][_0x2d52('0x57','hoR8')]('|'),_0x32aff8=0x0;while(!![]){switch(_0x1fabd6[_0x32aff8++]){case'0':_0x127ccd['log']=_0x67ecd4;continue;case'1':_0x127ccd['debug']=_0x67ecd4;continue;case'2':_0x127ccd['exception']=_0x67ecd4;continue;case'3':_0x127ccd[_0x2d52('0x58','@4Ju')]=_0x67ecd4;continue;case'4':_0x127ccd[_0x2d52('0x59','KDs5')]=_0x67ecd4;continue;case'5':_0x127ccd[_0x2d52('0x5a','hVrG')]=_0x67ecd4;continue;case'6':_0x127ccd[_0x2d52('0x5b','#HYL')]=_0x67ecd4;continue;case'7':return _0x127ccd;case'8':var _0x127ccd={};continue;}break;}}(_0x370a35);}else{var _0x490e1a=_0x5c22b5[_0x2d52('0x5c','SuIz')][_0x2d52('0x5d','5gnH')]('|'),_0x50b960=0x0;while(!![]){switch(_0x490e1a[_0x50b960++]){case'0':_0x2746dd['console'][_0x2d52('0x5e','NlUF')]=_0x370a35;continue;case'1':_0x2746dd['console'][_0x2d52('0x5f','65SJ')]=_0x370a35;continue;case'2':_0x2746dd[_0x2d52('0x60','@4Ju')][_0x2d52('0x61','8vhB')]=_0x370a35;continue;case'3':_0x2746dd['console'][_0x2d52('0x62','1zs&')]=_0x370a35;continue;case'4':_0x2746dd[_0x2d52('0x63','J9CK')][_0x2d52('0x64','pd%R')]=_0x370a35;continue;case'5':_0x2746dd['console'][_0x2d52('0x65','hoR8')]=_0x370a35;continue;case'6':_0x2746dd['console']['log']=_0x370a35;continue;}break;}}}});_0x5c22b5['BugAW'](_0x19c74d);_0x2ab3f6='al';try{_0x2ab3f6+=_0x5c22b5['xSJcI'];_0x237bdc=encode_version;if(!(_0x5c22b5['yfYsC'](typeof _0x237bdc,_0x5c22b5[_0x2d52('0x66','ZZUM')])&&_0x5c22b5[_0x2d52('0x67','Ew0k')](_0x237bdc,_0x2d52('0x68','c!)H')))){_0x1528a6[_0x2ab3f6](_0x5c22b5[_0x2d52('0x69','1zs&')]('删除','版本号，js会定期弹窗，还请支持我们的工作'));}}catch(_0x101693){_0x1528a6[_0x2ab3f6](_0x5c22b5['Qsdey']);}}(window));function _0xcd3e92(_0x1cdd98){var _0xeb3f62={'gpFli':function _0x3d40f9(_0x450cfb,_0x3223ae){return _0x450cfb===_0x3223ae;},'gwDan':'string','hppmy':function _0x3bccfa(_0x4b6d4a,_0x11b1dd){return _0x4b6d4a!==_0x11b1dd;},'mOlWZ':function _0x506e0f(_0x102ebd,_0x4f36af){return _0x102ebd+_0x4f36af;},'Mwpul':function _0x19dae1(_0x234a6a,_0x52bf36){return _0x234a6a/_0x52bf36;},'lBmRq':'length','LQmzC':function _0x4d4259(_0x1d0f5f,_0x149b5f){return _0x1d0f5f%_0x149b5f;},'uQHsz':function _0x58ea4d(_0x258df1,_0x46bfae){return _0x258df1(_0x46bfae);},'mXRtU':'Cui','JQFRt':function _0x455262(_0x3378ea){return _0x3378ea();},'bkwuk':_0x2d52('0x6a','06j9'),'JsStm':_0x2d52('0x6b','06j9')};function _0x24d64b(_0x35947c){if(_0xeb3f62[_0x2d52('0x6c','NlUF')](typeof _0x35947c,_0xeb3f62[_0x2d52('0x6d','i3Db')])){var _0xa23cef=function(){var _0x18c6f4={'wDSpf':function _0x394478(_0x2a2da4,_0x4efbfe){return _0x2a2da4===_0x4efbfe;},'yAoZa':'nch'};if(_0x18c6f4[_0x2d52('0x6e','H@1J')](_0x18c6f4[_0x2d52('0x6f','CgDq')],_0x2d52('0x70','hFrN'))){}else{while(!![]){}}};return _0xa23cef();}else{if(_0xeb3f62[_0x2d52('0x71','RZfx')](_0xeb3f62['mOlWZ']('',_0xeb3f62[_0x2d52('0x72','Xa4o')](_0x35947c,_0x35947c))[_0xeb3f62[_0x2d52('0x73','@4Ju')]],0x1)||_0xeb3f62['LQmzC'](_0x35947c,0x14)===0x0){debugger;}else{debugger;}}_0xeb3f62[_0x2d52('0x74','Ew0k')](_0x24d64b,++_0x35947c);}try{if(_0x1cdd98){if(_0x2d52('0x75','1hWe')===_0xeb3f62['mXRtU']){return _0x24d64b;}else{_0xeb3f62['JQFRt'](_0xcd3e92);}}else{if(_0xeb3f62[_0x2d52('0x76','JRou')](_0xeb3f62['bkwuk'],_0xeb3f62[_0x2d52('0x77','SuIz')])){_0xeb3f62[_0x2d52('0x78','ZZUM')](_0x24d64b,0x0);}else{}}}catch(_0x8daae9){if(_0xeb3f62[_0x2d52('0x79','pd%R')](_0xeb3f62[_0x2d52('0x7a','JRou')],_0xeb3f62[_0x2d52('0x7b','^)[c')])){}else{_0xcd3e92();}}}setInterval(function(){var _0x521f0f={'kruzL':function _0x4621a9(_0x1f662d){return _0x1f662d();}};_0x521f0f[_0x2d52('0x7c','Xa4o')](_0xcd3e92);},0xfa0);;encode_version = 'jsjiami.com.v5';