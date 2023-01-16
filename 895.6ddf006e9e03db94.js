"use strict";(self.webpackChunknasheed_library=self.webpackChunknasheed_library||[]).push([[895],{5895:(Q,p,e)=>{e.r(p),e.d(p,{TrackListModule:()=>r});var c=e(6895),d=e(8996),u=e(5899),t=e(4650),g=e(8836),h=e(3828),f=e(6017),m=e(7876),_=e(4850),v=e(8711),y=e(1403);function k(a,s){1&a&&t._UZ(0,"app-progress-spinner")}function T(a,s){if(1&a&&t._UZ(0,"audio-player",5),2&a){const n=t.oxw();t.Q6J("audioList",n.tracks)}}const L=function(){return{padding:"2em"}};class i{constructor(s,n){this.music_service=s,this.end_of_page_scroll_service=n,this.tracks=[],this.current_tracks_page_number=1,this.last_page_reached=!1,this.loading=!1}ngOnInit(){this.get_tracks(),this.end_of_page_scroll_subscription=this.end_of_page_scroll_service.end_of_page_scroll$.subscribe(s=>{this.get_tracks()})}get_tracks(){!this.last_page_reached&&!this.loading&&(this.loading=!0,this.music_service.get_tracks(this.current_tracks_page_number).subscribe(s=>{null==s.next&&(this.last_page_reached=!0),this.set_next_page(),this.loading=!1,this.append_fetched_tracks(s.results)}))}append_fetched_tracks(s){this.tracks=this.tracks.concat(s)}set_next_page(){this.current_tracks_page_number++}on_play_track(s){this.audio_player.selectedAudio=s,this.audio_player.play()}ngOnDestroy(){this.end_of_page_scroll_subscription&&this.end_of_page_scroll_subscription.unsubscribe()}}i.\u0275fac=function(s){return new(s||i)(t.Y36(g.J),t.Y36(h.E))},i.\u0275cmp=t.Xpm({type:i,selectors:[["page-track-list"]],viewQuery:function(s,n){if(1&s&&t.Gf(u.N,5),2&s){let l;t.iGM(l=t.CRH())&&(n.audio_player=l.first)}},decls:9,vars:5,consts:[[3,"ngStyle"],[1,"title"],[3,"tracks","play_track"],[4,"ngIf"],[3,"audioList",4,"ngIf"],[3,"audioList"]],template:function(s,n){1&s&&(t._UZ(0,"app-header"),t.TgZ(1,"div",0)(2,"h2",1),t._uU(3," All Tracks"),t.qZA(),t._UZ(4,"mat-divider"),t.TgZ(5,"app-track-list",2),t.NdJ("play_track",function(A){return n.on_play_track(A)}),t.qZA(),t.YNc(6,k,1,0,"app-progress-spinner",3),t.qZA(),t.YNc(7,T,1,1,"audio-player",4),t._UZ(8,"app-nav")),2&s&&(t.xp6(1),t.Q6J("ngStyle",t.DdM(4,L)),t.xp6(4),t.Q6J("tracks",n.tracks),t.xp6(1),t.Q6J("ngIf",n.loading),t.xp6(1),t.Q6J("ngIf",0!=n.tracks.length))},dependencies:[c.O5,c.PC,f.r,m.G,_.d,v.c,u.N,y.O],styles:[".title[_ngcontent-%COMP%]{font-size:14px;font-weight:400}"]});const C=[{path:"",component:i}];class o{}o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.Bz.forChild(C),d.Bz]});var Z=e(2613),x=e(1321),J=e(294),M=e(4805);class r{}r.\u0275fac=function(s){return new(s||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[c.ez,J.I,M.x,Z.m,x.O,o]})}}]);