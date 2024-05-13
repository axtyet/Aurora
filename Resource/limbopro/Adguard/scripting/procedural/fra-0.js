/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: fra-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"/ANONYME|Anonyme|anonyme|PREMIUM|Premium|RAPIDE|Rapide|Usenet|VPN|Vpn/\"]]}"],["{\"selector\":\".hz-Listing--list-item\",\"tasks\":[[\"has\",{\"selector\":\".hz-Listing-priority\",\"tasks\":[[\"has-text\",\"Pub au top\"]]}]]}"],["{\"selector\":\"div[style=\\\"min-height: 0px;\\\"] > div[class^=\\\"css-\\\"] > div[class^=\\\"css-\\\"] > div[data-m32-ad]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".clusterTop\",\"tasks\":[[\"has\",{\"selector\":\".teaser\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Paid Post\"]]}]]}]]}"],["{\"selector\":\"article\",\"tasks\":[[\"has\",{\"selector\":\".sidebar-artitle\",\"tasks\":[[\"has-text\",\"/📣|📌/\"]]}]]}","{\"selector\":\"article\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"/📣|📌/\"]]}]]}"],["{\"selector\":\"div[class^=\\\"pub\\\"]\",\"tasks\":[[\"has-text\",\"adsbygoogle\"]]}"],["{\"selector\":\".post\",\"tasks\":[[\"has\",{\"selector\":\".postprofile\",\"tasks\":[[\"has-text\",\"Contenu sponsorisé\"]]}]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\".block-title\",\"tasks\":[[\"has-text\",\"sponsorisés\"]]}]]}"],["{\"selector\":\"._2FypS\",\"tasks\":[[\"has\",{\"selector\":\"._1rKqn\",\"tasks\":[[\"has-text\",\"/AD|Annonce|إعلان/\"]]}]]}","{\"selector\":\".search-item-card-wrapper-gallery\",\"tasks\":[[\"has\",{\"selector\":\"[class^=\\\"multi--ax\\\"]\",\"tasks\":[[\"has-text\",\"/AD|Annonce|إعلان/\"]]}]]}"],["{\"selector\":\".boutonlink\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"/VPN|rencontre/\"]]}]]}","{\"selector\":\".bp-fin\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"/VPN|rencontre/\"]]}]]}"],["{\"selector\":\".af-album-ctn > div.cols-right-album > div.ad-container\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".g-bg-gray-light-v4 > .text-center\",\"tasks\":[[\"has-text\",\"/^Publicité$/\"]]}"],["{\"selector\":\".breve\",\"tasks\":[[\"has\",{\"selector\":\".breve-info\",\"tasks\":[[\"has-text\",\"Sponsorisé\"]]}]]}"],["{\"selector\":\".o-block\",\"tasks\":[[\"has\",{\"selector\":\".o-block__content:has(.c-sponsoredMentions)\"}]]}","{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\".prdtBlocInline:has(.c-sponsoredMentions)\"}]]}"],["{\"selector\":\".ccm_list_catch__item\",\"tasks\":[[\"has-text\",\"Annonces\"]]}"],["{\"selector\":\".News1\",\"tasks\":[[\"has\",{\"selector\":\"td\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}]]}"],["{\"selector\":\".discussion_box > .post_simple_contener\",\"tasks\":[[\"has\",{\"selector\":\"> .post_simple > .postsimple_post_cell > .postsimple_head_cell > .postsimple_poster_info > div > .postsimple_pseudo > a > span\",\"tasks\":[[\"has-text\",\"/^Auto-promo$/\"]]}]]}"],["{\"selector\":\".postcontainer\",\"tasks\":[[\"has\",{\"selector\":\".username\",\"tasks\":[[\"has-text\",\"Publicité\"]]}]]}"],["{\"selector\":\".articles_list_item\",\"tasks\":[[\"has\",{\"selector\":\".category\",\"tasks\":[[\"has-text\",\"Sponsorisé\"]]}]]}"],["{\"selector\":\"#node-story > h2.story_subtitle_title\",\"tasks\":[[\"has-text\",\"/^Ailleurs sur le web$/\"]]}"],["{\"selector\":\".anchorMiddleOne\",\"tasks\":[[\"has\",{\"selector\":\".badge\",\"tasks\":[[\"has-text\",\"Sponsorisé\"]]}]]}","{\"selector\":\".anchorWrapper\",\"tasks\":[[\"has\",{\"selector\":\".cardHorizontalList__footer\",\"tasks\":[[\"has-text\",\"Sponsorisé\"]]}]]}","{\"selector\":\".card\",\"tasks\":[[\"has\",{\"selector\":\".badge\",\"tasks\":[[\"has-text\",\"Sponsorisé\"]]}]]}","{\"selector\":\".item-small-pres\",\"tasks\":[[\"has\",{\"selector\":\"a:has(.sponsored-prefix)\"}]]}","{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\"a:has(.sponsored-prefix)\"}]]}"],["{\"selector\":\".posts-list-row > .posts-list-row-item > .card-item > .ad-wrapper\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\".posts-list-row > .posts-list-row-item > .card-item > div[data-ad-unit-path]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".article-list > .article-list__item\",\"tasks\":[[\"has\",{\"selector\":\"> .article-list__text-wrapper > a > .article-list__label\",\"tasks\":[[\"has-text\",\"/^Contenu sponsorisé$/\"]]}]]}"],["{\"selector\":\".boxed\",\"tasks\":[[\"has\",{\"selector\":\".tag\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}]]}","{\"selector\":\".repo-component\",\"tasks\":[[\"has\",{\"selector\":\"label\",\"tasks\":[[\"has-text\",\"sponsored\"]]}]]}"],["{\"selector\":\".isnotmobi\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"sponsorisé\"]]}]]}","{\"selector\":\"tbody\",\"tasks\":[[\"has\",{\"selector\":\"i\",\"tasks\":[[\"has-text\",\"sponsorisé\"]]}]]}"],["{\"selector\":\"aside\",\"tasks\":[[\"has\",{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"Publicité\"]]}]]}"],["{\"selector\":\".article-thumbnail\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"/Sponsored|sponsorisé/\"]]}]]}"],["{\"selector\":\"app-home-item\",\"tasks\":[[\"has\",{\"selector\":\".article:has(.sponsored)\"}]]}"],["{\"selector\":\"section\",\"tasks\":[[\"has\",{\"selector\":\".brand\",\"tasks\":[[\"has-text\",\"sponsorisé\"]]}]]}"],["{\"selector\":\".post-card\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"sponso\"]]}]]}"],["{\"selector\":\".container\",\"tasks\":[[\"has\",{\"selector\":\".o-section-heading\",\"tasks\":[[\"has-text\",\"/Sponsored|Sponsorisées|Stores à la une/\"]]}]]}"],["{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"sponso\"]]}]]}"],["{\"selector\":\".results-container > div.result\",\"tasks\":[[\"has\",{\"selector\":\"> div.url > span.info\",\"tasks\":[[\"has-text\",\"Annonce\"]]}]]}"],["{\"selector\":\"body > #all > style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"#ban_center\"]]}"],["{\"selector\":\".post\",\"tasks\":[[\"has\",{\"selector\":\".postprofile\",\"tasks\":[[\"has\",{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"Ad Machine\"]]}]]}]]}"],["{\"selector\":\".owl-item\",\"tasks\":[[\"has\",{\"selector\":\"figure:has(img[src^=\\\"publicites/\\\"])\"}]]}"],["{\"selector\":\".post.has-profile\",\"tasks\":[[\"has\",{\"selector\":\".postbody:has(.adsbygoogle)\"}]]}"],["{\"selector\":\".wm-module\",\"tasks\":[[\"has-text\",\"Contenu sponsorisé\"]]}"],["{\"selector\":\".jwpv-desktop\",\"tasks\":[[\"has-text\",\"Publicité\"]]}"],["{\"selector\":\"[data-testid=\\\"tweet\\\"]\",\"tasks\":[[\"has-text\",\"Sponsorisé\"]]}"],["{\"selector\":\"div[style*=\\\"width: 300px\\\"]\",\"tasks\":[[\"has-text\",\"/Publicité|Publicités/\"]]}","{\"selector\":\"table[class=\\\"post\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"tbody\",\"tasks\":[[\"has-text\",\"/annonces|annonceurs/\"]]}]]}"],["{\"selector\":\".custom-sidebar\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"/Partenaires|Publicité/\"]]}]]}"],["{\"selector\":\"div[style]\",\"tasks\":[[\"has-text\",\"/ANONYME|Anonyme|anonyme|Usenet|VPN|Vpn/\"]]}","{\"selector\":\"table[style]\",\"tasks\":[[\"has-text\",\"/ANONYME|Anonyme|anonyme|Usenet|VPN|Vpn/\"]]}"],["{\"selector\":\".news-card\",\"tasks\":[[\"has-text\",\"Sponsorisé\"]]}"],["{\"selector\":\".post-nonfeatured\",\"tasks\":[[\"has\",{\"selector\":\".title-studio\",\"tasks\":[[\"has-text\",\"Contenu Sponsorisé\"]]}]]}"],["{\"selector\":\".riverPost\",\"tasks\":[[\"has\",{\"selector\":\".tag-desktop\",\"tasks\":[[\"has-text\",\"Publicité\"]]}]]}"],["{\"selector\":\"[class$=\\\"Container-right\\\"] > div.m-top-md\",\"tasks\":[[\"has\",{\"selector\":\"> div > span\",\"tasks\":[[\"has-text\",\"Publicité\"]]}]]}"],["{\"selector\":\"[id^=\\\"nume_html_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".mfe-card-group\",\"tasks\":[[\"has\",{\"selector\":\".mfe-card-group-title\",\"tasks\":[[\"has-text\",\"sponsorisées\"]]}]]}]]}","{\"selector\":\"[id^=\\\"nume_html_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".mfe-header\",\"tasks\":[[\"has\",{\"selector\":\".mfe-pull-left\",\"tasks\":[[\"has-text\",\"sponsorisés\"]]}]]}]]}"],["{\"selector\":\".highlight-item\",\"tasks\":[[\"has\",{\"selector\":\".word-wrapper\",\"tasks\":[[\"has-text\",\"sponso\"]]}]]}","{\"selector\":\".item.full.gameblog\",\"tasks\":[[\"has\",{\"selector\":\".post-details\",\"tasks\":[[\"has-text\",\"sponsorisé\"]]}]]}"],["{\"selector\":\"#main-container .blog__content\",\"tasks\":[[\"has\",{\"selector\":\"> .title-wrap--pr > h3\",\"tasks\":[[\"has-text\",\"Annonces\"]]}]]}"],["{\"selector\":\".main ~ table.messagetable > tbody > tr.message div[id^=\\\"div-gpt-ad-\\\"]\",\"tasks\":[[\"upward\",\"table.messagetable\"]]}"],["{\"selector\":\".news-bloc\",\"tasks\":[[\"has\",{\"selector\":\".article-type\",\"tasks\":[[\"has-text\",\"Sponsorisé\"]]}]]}"],["{\"selector\":\"article\",\"tasks\":[[\"has\",{\"selector\":\".date\",\"tasks\":[[\"has-text\",\"Sponso\"]]}]]}"],["{\"selector\":\"#blockPubGalleryWrapper\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".article-wrapper\",\"tasks\":[[\"has\",{\"selector\":\".subheading\",\"tasks\":[[\"has-text\",\"Partenaire\"]]}]]}","{\"selector\":\".homepage-section.supplement-section\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Partenaires\"]]}]]}","{\"selector\":\".sticky-sidebar-block > div.bloc\",\"tasks\":[[\"has-text\",\"Annonces légales\"]]}"],["{\"selector\":\"#mainContent > div > div#lht-space-ad\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".undefined\",\"tasks\":[[\"has-text\",\"Sponsorisé\"]]}","{\"selector\":\"a[data-test-id]\",\"tasks\":[[\"has\",{\"selector\":\"[class]\",\"tasks\":[[\"has-text\",\"/À la une|Sponsorisé|Urgent/\"]]}]]}","{\"selector\":\"a[data-test-id]\",\"tasks\":[[\"has\",{\"selector\":\"[class]\",\"tasks\":[[\"has-text\",\"Sponsorisé\"]]}]]}"],["{\"selector\":\"div[id^=\\\"custom-gpt-\\\"]\",\"tasks\":[[\"upward\",\"div\"]]}"],["{\"selector\":\".post > aside.sidebar-before-comments\",\"tasks\":[[\"has\",{\"selector\":\"> [class=\\\"default-title\\\"] > span\",\"tasks\":[[\"has-text\",\"/Ailleurs sur le web|A lire sur le même sujet/\"]]}]]}"],["{\"selector\":\"div[align=\\\"center\\\"]\",\"tasks\":[[\"has-text\",\"PUBLICITÉ\"]]}"],["{\"selector\":\".habpage\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".uk-margin-remove-last-child\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"PUBLICITÉ\"]]}]]}]]}"],["{\"selector\":\".container-fluid > .mt-1 > h3\",\"tasks\":[[\"has-text\",\"/^Liens commerciaux$/\"]]}"],["{\"selector\":\".col-xl-4 > .align-items-center > .text-right > span\",\"tasks\":[[\"has-text\",\"/^PUBLICITÉ$/\"]]}"],["{\"selector\":\"div[class^=\\\"sc-\\\"] > div[class^=\\\"sc-\\\"] > div[id^=\\\"RAD_\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"[data-identifier]\",\"tasks\":[[\"has\",{\"selector\":\"div:has(.sponsor-color)\"}]]}"],["{\"selector\":\".bot-card\",\"tasks\":[[\"has\",{\"selector\":\".lib\",\"tasks\":[[\"has-text\",\"Promoted\"]]}]]}","{\"selector\":\".bot-card\",\"tasks\":[[\"has\",{\"selector\":\".lib:has(img)\"}]]}"],["{\"selector\":\".alderaan-sous-article\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"publicité\"]]}]]}","{\"selector\":\".app-main > article.post > div:not([class^=\\\"entry-\\\"]):not([class^=\\\"comments-\\\"])\",\"tasks\":[[\"has-text\",\"Article sponsorisé\"]]}","{\"selector\":\"[class*=\\\"sous-categories\\\"]\",\"tasks\":[[\"has-text\",\"Lien partenaire\"]]}","{\"selector\":\"div > hr + article.type-post\",\"tasks\":[[\"has\",{\"selector\":\"header:has(a[href^=\\\"http://bit.ly/\\\"])\"}]]}","{\"selector\":\"div > hr + article.type-post\",\"tasks\":[[\"has\",{\"selector\":\"header:has(a[href^=\\\"http://bitly.com/\\\"])\"}]]}"],["{\"selector\":\".widget_article\",\"tasks\":[[\"has\",{\"selector\":\".title_widget\",\"tasks\":[[\"has-text\",\"/PUBLI INFO|Publi-info/\"]]}]]}"],["{\"selector\":\"#fullad-active\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"aside\",\"tasks\":[[\"has\",{\"selector\":\"div + span\",\"tasks\":[[\"has-text\",\"Publicité\"]]}]]}"],["{\"selector\":\".ccm_list_catch__item\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}"],["{\"selector\":\"#side > div[style^=\\\"float\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div\",\"tasks\":[[\"has-text\",\"/^Publicité$/\"]]}]]}","{\"selector\":\"#side > div[style^=\\\"float\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> h2\",\"tasks\":[[\"has-text\",\"/^Partenaires$/\"]]}]]}"],["{\"selector\":\".l-section\",\"tasks\":[[\"has\",{\"selector\":\"> div.l-section-h > div.g-cols > div > div.vc_column-inner > div.wpb_wrapper > div.w-separator > div.w-separator-h > h6 > span\",\"tasks\":[[\"has-text\",\"Publicité\"]]}]]}"],["{\"selector\":\".main-right > h2\",\"tasks\":[[\"has-text\",\"Partenaires\"]]}"],["{\"selector\":\".panel\",\"tasks\":[[\"has\",{\"selector\":\".panel-heading\",\"tasks\":[[\"has\",{\"selector\":\".panel-title\",\"tasks\":[[\"has-text\",\"Publicité\"]]}]]}]]}"],["{\"selector\":\"#sidebar-right > div.blockbox\",\"tasks\":[[\"has\",{\"selector\":\"> div.sidetitle > i\",\"tasks\":[[\"has-text\",\"Annonces\"]]}]]}"],["{\"selector\":\"li\",\"tasks\":[[\"has\",{\"selector\":\".inboxSenderEmail\",\"tasks\":[[\"has-text\",\"AD | Temp Number\"]]}]]}"],["{\"selector\":\"a[href=\\\"/streaming-video.html\\\"]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"section > div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> p\",\"tasks\":[[\"has-text\",\"/^Publicité$/\"]]}]]}"]];

const hostnamesMap = new Map([["extreme-down.art",0],["extreme-down.boats",0],["torrent9.fm",[0,42]],["extreme-down.moe",0],["gktorrents.org",[0,42]],["gktorrent.sh",[0,42]],["t911.tv",[0,42]],["2ememain.be",1],["tv5unis.ca",2],["20min.ch",3],["macg.co",4],["igen.fr",4],["watchgeneration.fr",4],["11anim.com",5],["3oloum.com",6],["ahladalil.com",6],["ahlamontada.com",6],["alamontada.com",6],["arabepro.com",6],["easyforumpro.com",6],["fcmulhousefans.com",6],["forum2jeux.com",6],["forumactif.com",6],["forums-actifs.com",6],["gid3an.com",6],["lebonforum.com",6],["own0.com",6],["passionmilitaria.com",6],["sorcieremonique.com",6],["walkingdead-rpg.com",6],["yoo7.com",6],["ze-43eme.com",6],["forumactif.fr",6],["forumpro.fr",6],["superforum.fr",6],["1fr1.net",6],["banouta.net",6],["forumalgerie.net",6],["jordanforum.net",6],["orizzontescuolaforum.net",6],["syriaforums.net",6],["7olm.org",6],["forumactif.org",6],["galoppourlavie.org",6],["algerie-eco.com",7],["aliexpress.com",8],["aliexpress.us",8],["android-mt.com",9],["aufeminin.com",10],["automobile-propre.com",11],["blogdumoderateur.com",12],["cdiscount.com",13],["commentcamarche.com",14],["commentcamarche.net",14],["distrowatch.com",15],["forumconstruire.com",16],["futura-sciences.com",17],["ici-londres.com",18],["jeanmarcmorandini.com",19],["jeuxvideo.com",20],["konbini.com",21],["laprovence.com",22],["libhunt.com",23],["linfoweb.com",24],["maison-islam.com",25],["narcity.com",26],["nextinpact.com",27],["nicematin.com",28],["numerama.com",29],["ouedkniss.com",30],["phonandroid.com",31],["qwant.com",32],["scan-manga.com",33],["sketchucation.com",34],["sookbtp.com",35],["starbike.com",36],["tourmag.com",37],["tsa-algerie.com",38],["twitter.com",39],["voyageforum.com",40],["zataz.com",41],["allocine.fr",43],["businessinsider.fr",44],["cnetfrance.fr",45],["cuisineactuelle.fr",46],["ebay.fr",47],["gameblog.fr",48],["h2-mobile.fr",49],["forum.hardware.fr",50],["hitek.fr",51],["iphonesoft.fr",52],["lalsace.fr",53],["latribune.fr",54],["leboncoin.fr",55],["lesechos.fr",56],["mariefrance.fr",57],["minutesports.fr",58],["moneyvox.fr",59],["on-mag.fr",60],["orange.fr",61],["actu.orange.fr",62],["radio.fr",63],["santemagazine.fr",64],["top.gg",65],["discordbots.org",65],["korben.info",66],["macommune.info",67],["lesfrontaliers.lu",68],["lessentiel.lu",69],["ccm.net",70],["cyclismactu.net",71],["emugen.net",72],["tennisactu.net",73],["thesiteoueb.net",74],["extreme-down.ninja",75],["temp-mail.org",76],["zoneseries.stream",77],["ici.tou.tv",78]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
