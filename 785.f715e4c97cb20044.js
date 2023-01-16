"use strict";(self.webpackChunknasheed_library=self.webpackChunknasheed_library||[]).push([[785],{4785:(N,d,n)=>{n.r(d),n.d(d,{ArtistListModule:()=>c});var r=n(6895),x=n(8605),_=n(8996),t=n(4650),g=n(8836),m=n(3828),u=n(6017),h=n(7876),f=n(4850),A=n(9437),v=n(1403);function C(e,s){1&e&&t._UZ(0,"app-progress-spinner")}const Z=function(){return{padding:"1em","padding-top":"2em","padding-bottom":"2em"}};class p{constructor(s,i){this.music_service=s,this.end_of_page_scroll_service=i,this.artists=[],this.current_page_number=1,this.last_page_reached=!1,this.loading=!1}ngOnInit(){this.get_artists(),this.end_of_page_scroll_subscription=this.end_of_page_scroll_service.end_of_page_scroll$.subscribe(s=>{this.get_artists()})}get_artists(){!this.last_page_reached&&!this.loading&&(this.loading=!0,this.music_service.get_artists(this.current_page_number).subscribe(s=>{null==s.next&&(this.last_page_reached=!0),this.loading=!1,this.set_next_page(),this.append_fetched_artists(s.results)}))}append_fetched_artists(s){this.artists=this.artists.concat(s)}set_next_page(){this.current_page_number++}ngOnDestroy(){this.end_of_page_scroll_subscription&&this.end_of_page_scroll_subscription.unsubscribe()}}p.\u0275fac=function(s){return new(s||p)(t.Y36(g.J),t.Y36(m.E))},p.\u0275cmp=t.Xpm({type:p,selectors:[["page-artist-list"]],decls:8,vars:4,consts:[[3,"ngStyle"],[1,"title"],[3,"artists"],[4,"ngIf"]],template:function(s,i){1&s&&(t._UZ(0,"app-header"),t.TgZ(1,"div",0)(2,"h2",1),t._uU(3," All Artists"),t.qZA(),t._UZ(4,"mat-divider")(5,"app-artist-list",2),t.YNc(6,C,1,0,"app-progress-spinner",3),t.qZA(),t._UZ(7,"app-nav")),2&s&&(t.xp6(1),t.Q6J("ngStyle",t.DdM(3,Z)),t.xp6(4),t.Q6J("artists",i.artists),t.xp6(1),t.Q6J("ngIf",i.loading))},dependencies:[r.O5,r.PC,u.r,h.G,f.d,A.m,v.O],styles:[".title[_ngcontent-%COMP%]{font-size:14px;font-weight:400}"]});var y=n(5899),b=n(8066);function O(e,s){if(1&e&&(t.TgZ(0,"div",6)(1,"div"),t._UZ(2,"img",7),t.qZA(),t.TgZ(3,"h3",8),t._uU(4),t.qZA()()),2&e){const i=t.oxw();t.xp6(2),t.s9C("src",i.artist.image,t.LSH),t.MGl("alt","Photo of ",i.artist.name,""),t.xp6(2),t.Oqu(i.artist.name)}}function M(e,s){if(1&e){const i=t.EpF();t.TgZ(0,"div")(1,"app-track-item",9),t.NdJ("play",function(){const Y=t.CHM(i).$implicit,F=t.oxw();return t.KtG(F.on_play(Y))}),t.qZA(),t._UZ(2,"mat-divider"),t.qZA()}if(2&e){const i=s.$implicit;t.xp6(1),t.Q6J("track",i)}}function J(e,s){1&e&&t._UZ(0,"app-progress-spinner")}function T(e,s){if(1&e&&t._UZ(0,"audio-player",10),2&e){const i=t.oxw();t.Q6J("audioList",i.artist_tracks)}}const k=function(){return{padding:"1em","padding-top":"2em","padding-bottom":"2em"}};class l{constructor(s,i,a){this.music_service=s,this.activated_route=i,this.end_of_page_scroll_service=a,this.artist_tracks=[],this.tracks_page_number=1,this.last_tracks_page_reached=!1,this.loading=!0}ngOnInit(){this.activated_route.paramMap.subscribe(s=>{let i=s.get("artist_id");this.music_service.get_artist(i).subscribe(a=>{this.artist=a,this.get_artist_tracks()})}),this.end_of_page_scroll_subscription=this.end_of_page_scroll_service.end_of_page_scroll$.subscribe(s=>{this.artist&&this.get_artist_tracks()})}set_next_tracks_page_number(){this.tracks_page_number++}get_artist_tracks(){this.last_tracks_page_reached||(this.loading=!0,this.music_service.get_artist_tracks(this.artist,this.tracks_page_number).subscribe(s=>{null==s.next&&(this.last_tracks_page_reached=!0),this.loading=!1,this.set_next_tracks_page_number(),this.append_fetched_artist_tracks(s.results)}))}append_fetched_artist_tracks(s){this.artist_tracks=this.artist_tracks.concat(s)}ngOnDestroy(){this.end_of_page_scroll_subscription&&this.end_of_page_scroll_subscription.unsubscribe()}on_play(s){this.audio_player.selectedAudio=s,this.audio_player.play()}}l.\u0275fac=function(s){return new(s||l)(t.Y36(g.J),t.Y36(_.gz),t.Y36(m.E))},l.\u0275cmp=t.Xpm({type:l,selectors:[["page-artist-detail"]],viewQuery:function(s,i){if(1&s&&t.Gf(y.N,5),2&s){let a;t.iGM(a=t.CRH())&&(i.audio_player=a.first)}},decls:10,vars:6,consts:[[3,"ngStyle"],["class","artist-container",4,"ngIf"],[1,"title"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"audioList",4,"ngIf"],[1,"artist-container"],[1,"artist__image",3,"src","alt"],[1,"artist__name"],[3,"track","play"],[3,"audioList"]],template:function(s,i){1&s&&(t._UZ(0,"app-header"),t.TgZ(1,"div",0),t.YNc(2,O,5,3,"div",1),t.TgZ(3,"h3",2),t._uU(4,"Tracks"),t.qZA(),t._UZ(5,"mat-divider"),t.YNc(6,M,3,1,"div",3),t.YNc(7,J,1,0,"app-progress-spinner",4),t.qZA(),t.YNc(8,T,1,1,"audio-player",5),t._UZ(9,"app-nav")),2&s&&(t.xp6(1),t.Q6J("ngStyle",t.DdM(5,k)),t.xp6(1),t.Q6J("ngIf",i.artist),t.xp6(4),t.Q6J("ngForOf",i.artist_tracks),t.xp6(1),t.Q6J("ngIf",i.loading),t.xp6(1),t.Q6J("ngIf",0!=i.artist_tracks.length))},dependencies:[r.sg,r.O5,r.PC,u.r,h.G,f.d,b.q,y.N,v.O],styles:[".artist-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.artist__image[_ngcontent-%COMP%]{border-radius:50%;width:110px;height:110px}.artist__name[_ngcontent-%COMP%]{font-size:14px}.title[_ngcontent-%COMP%]{font-size:14px;font-weight:400}"]});const U=[{path:"",component:p},{path:":artist_id",component:l}];class o{}o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[_.Bz.forChild(U),_.Bz]});var D=n(2613),L=n(1321),Q=n(294),I=n(4805);class c{}c.\u0275fac=function(s){return new(s||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[r.ez,x.Cl,Q.I,I.x,D.m,L.O,o]})}}]);