webpackJsonp([2],{4:function(A,g,I){"use strict";function C(A){return A&&A.__esModule?A:{"default":A}}Object.defineProperty(g,"__esModule",{value:!0});var t=I(8),i=C(t);g["default"]={load:i["default"]}},5:function(A,g){"use strict";Object.defineProperty(g,"__esModule",{value:!0}),g["default"]={props:{state:{type:Number,"default":0,validator:function(A){return[-1,0,1].indexOf(A)>-1}},tip:{type:String,"default":"正在加载中"}}}},6:function(A,g,I){g=A.exports=I(1)(),g.push([A.id,".data-load .msg[_v-3a59f034]{line-height:70px;text-align:center;font-size:14px}.data-load-true[_v-3a59f034]{margin:20px auto;position:relative;-webkit-animation:rotate-forever 1s infinite linear;animation:rotate-forever 1s infinite linear;height:30px;width:30px;border:4px solid #2962ff;border-right-color:transparent;border-radius:50%}.data-load-true .msg[_v-3a59f034]{display:none}@-webkit-keyframes rotate-forever{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate-forever{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},7:function(A,g){A.exports=' <div class=data-load :class="{\'data-load-true\' : state == 0}" _v-3a59f034=""> <div class=msg _v-3a59f034="">{{tip}}</div> </div> '},8:function(A,g,I){var C,t;I(9),C=I(5),t=I(7),A.exports=C||{},A.exports.__esModule&&(A.exports=A.exports["default"]),t&&(("function"==typeof A.exports?A.exports.options||(A.exports.options={}):A.exports).template=t)},9:function(A,g,I){var C=I(6);"string"==typeof C&&(C=[[A.id,C,""]]);I(2)(C,{});C.locals&&(A.exports=C.locals)},38:function(A,g,I){"use strict";function C(A){return A&&A.__esModule?A:{"default":A}}Object.defineProperty(g,"__esModule",{value:!0});var t=I(10),i=C(t),e=I(4),a=C(e),d=I(65),o=C(d);g["default"]={components:a["default"],data:function(){return{loadState:0,loadTip:"正在加载中...",dataBtn:!0,data:[],transparent:o["default"],form:{tab:"all",page:1,limit:10,mdrender:!0}}},methods:{loadNext:function(){this.dataBtn=!0}},route:{data:function(A){var g=this;this.loadState=0,this.loadTip="正在加载中...",this.dataBtn=!0,this.data=[],this.form.page=1,this.form.tab=this.$route.query.tab,clearInterval(this.timer),this.timer=setInterval(function(){i["default"].testMeet(g.$refs.load.$el)&&g.dataBtn&&(g.dataBtn=!1,g.loadState=0,g.loadTip="正在加载中...",i["default"].get("/api/v1/topics",g.form,function(A){var I=A.data;g.loadState=1,g.loadTip="上拉加载更多",I.map(function(A){return g.data.push(A)}),g.form.page++,g.dataBtn=!0},function(){g.loadState=-1,g.loadTip="加载失败",g.dataBtn=!1}))},30)}},detached:function(){clearInterval(this.timer)}}},53:function(A,g,I){g=A.exports=I(1)(),g.push([A.id,".list li[_v-7156eda4]{position:relative;margin-bottom:25px;box-shadow:1px 1px 6px #b5b5b5;background:#fff}.list .typeicon[_v-7156eda4]{position:absolute;top:0;right:0;z-index:2;height:80px}.list .typeicon .icon[_v-7156eda4]{padding:20px 5px}.list .typeicon .iconfont[_v-7156eda4]{display:block;font-size:34px;-webkit-transform:rotate(35deg);transform:rotate(35deg)}.list .typeicon .icon-jinghua[_v-7156eda4]{color:#147b18}.list .typeicon .icon-zhiding[_v-7156eda4]{color:red}.list .user[_v-7156eda4]{padding:10px}.list .user .headimg[_v-7156eda4]{padding-right:10px}.list .user .headimg .pic[_v-7156eda4]{overflow:hidden;width:38px;height:38px;border-radius:50%;background:#d5d5d5}.list .user .name[_v-7156eda4]{font-size:16px;color:#000}.list .user .time[_v-7156eda4]{line-height:20px;font-size:12px;color:#888}.list .user .tab[_v-7156eda4]{padding-left:5px;line-height:20px;font-size:12px}.list .tit[_v-7156eda4]{padding:10px;color:#000}.images .item[_v-7156eda4],.images[_v-7156eda4]{padding:5px}.images .pic[_v-7156eda4],.images img[_v-7156eda4]{width:100%}.images .pic[_v-7156eda4]{overflow:hidden;border-radius:5px;border:1px solid #e1e1e1;background:#eee}.images img[_v-7156eda4]{background-size:cover;background-position:50%}.expand[_v-7156eda4]{padding:10px 0;border-top:1px solid #e1e1e1;text-align:center}.expand .item[_v-7156eda4]{padding:0 10px;line-height:20px;text-align:center;border-right:1px solid #e1e1e1}.expand .item[_v-7156eda4]:last-of-type{border:none}.expand .item .iconfont[_v-7156eda4]{color:#aaa}.expand .item .num[_v-7156eda4],.expand .item .time[_v-7156eda4]{padding-left:3px;font-size:12px;color:#aaa}.expand .item .pic[_v-7156eda4],.expand .item img[_v-7156eda4]{width:16px;height:16px;background:#d5d5d5;background-size:cover;background-position:50%}.expand .item .pic[_v-7156eda4]{overflow:hidden;border-radius:50%}",""])},65:function(A,g){A.exports="data:image/png;base64,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bG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTYtMDgtMDNUMTA6MjM6MDErMDg6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNi0wOC0wNFQxNzowMTo1NiswODowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTYtMDgtMDRUMTc6MDE6NTYrMDg6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5EaXNwbGF5PC9waG90b3Nob3A6SUNDUHJvZmlsZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDo0M2M1M2JlMC03YTBhLTQ0YWQtYmViYS00YzM0YWNiMTBkODk8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4N2NkY2IzOC05YTc2LTExNzktODFiMC05ODRmZWUxZmYzMWQ8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDowNTY1N2MwYy01ZjQxLTRjMDktYTVhNy1jOWUwN2VlMjhmNTQ8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6MDU2NTdjMGMtNWY0MS00YzA5LWE1YTctYzllMDdlZTI4ZjU0PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE2LTA4LTAzVDEwOjIzOjAxKzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNvbnZlcnRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6cGFyYW1ldGVycz5mcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nPC9zdEV2dDpwYXJhbWV0ZXJzPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo0M2M1M2JlMC03YTBhLTQ0YWQtYmViYS00YzM0YWNiMTBkODk8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTYtMDgtMDRUMTc6MDE6NTYrMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L3htcE1NOkhpc3Rvcnk+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjY1NTM1PC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xMjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+EYHL0wAAACBjSFJNAABtdQAAc6AAAPzdAACDZAAAcOgAAOxoAAAwPgAAEJDk7JnqAAAAHklEQVR42mL8//8/AymAiYFEMKphpGgAAAAA//8DAPVYAxUtpIfwAAAAAElFTkSuQmCC"},71:function(A,g){A.exports=' <ul class=list _v-7156eda4=""> <li v-for="item in data" track-by=id _v-7156eda4=""> <div class=typeicon flex="" v-if="item.top || item.good" _v-7156eda4=""> <div class=icon v-if=item.top _v-7156eda4=""> <i class="iconfont icon-zhiding" _v-7156eda4=""></i> </div> <div class=icon v-if=item.good _v-7156eda4=""> <i class="iconfont icon-jinghua" _v-7156eda4=""></i> </div> </div> <div class=user flex=box:first _v-7156eda4=""> <div class=headimg _v-7156eda4=""> <div class=pic _v-7156eda4=""> <img :src=item.author.avatar_url alt="" _v-7156eda4=""> </div> </div> <div class=box _v-7156eda4=""> <div class=name _v-7156eda4="">{{item.author.loginname}}</div> <div flex="" _v-7156eda4=""> <time class=time _v-7156eda4="">发表于{{item.create_at | formatDate}}</time> <a class=tab v-link="`/?tab=${item.tab}`" v-if=item.tab _v-7156eda4="">#{{item.tab | tabName}}#</a> </div> </div> </div> <a v-link="`/topic/${item.id}`" _v-7156eda4=""> <div class=tit _v-7156eda4="">{{item.title}}</div> <div class="images count-{{item.content | getTextImgUrl | length}}" flex=box:mean _v-7156eda4=""> <div class=item v-for="imgurl in item.content | getTextImgUrl" _v-7156eda4=""> <div class=pic _v-7156eda4=""> <img :src=transparent :style="{backgroundImage: `url(${imgurl})`}" alt="" _v-7156eda4=""> </div> </div> </div> <div class=expand flex=box:mean _v-7156eda4=""> <div class="item click" flex="main:center cross:center" _v-7156eda4=""> <i class="iconfont icon-chakan" _v-7156eda4=""></i> <div class=num _v-7156eda4="">{{item.visit_count &gt; 0 ? item.visit_count : \'暂无阅读\'}}</div> </div> <div class="item reply" flex="main:center cross:center" _v-7156eda4=""> <i class="iconfont icon-pinglun" _v-7156eda4=""></i> <div class=num _v-7156eda4="">{{item.reply_count &gt; 0 ? item.reply_count : \'暂无评论\'}}</div> </div> <div class="item last-reply" flex="main:center cross:center" _v-7156eda4=""> <div class=pic _v-7156eda4=""> <img :src=transparent alt="" :style="{backgroundImage: `url(${item.author.avatar_url})`}" _v-7156eda4=""> </div> <time class=time _v-7156eda4="">{{item.last_reply_at | formatDate}}</time> </div> </div> </a> </li> </ul> <div v-on:click=loadNext _v-7156eda4=""> <load v-ref:load="" :tip=loadTip :state=loadState _v-7156eda4=""></load> </div> '},77:function(A,g,I){var C,t;I(88),C=I(38),t=I(71),A.exports=C||{},A.exports.__esModule&&(A.exports=A.exports["default"]),t&&(("function"==typeof A.exports?A.exports.options||(A.exports.options={}):A.exports).template=t)},88:function(A,g,I){var C=I(53);"string"==typeof C&&(C=[[A.id,C,""]]);I(2)(C,{});C.locals&&(A.exports=C.locals)}});