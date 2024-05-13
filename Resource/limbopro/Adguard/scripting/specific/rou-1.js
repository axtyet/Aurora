/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2019-present Raymond Hill

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

// ruleset: rou-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["[href=\"https://www.patriotromania.ro/\"]",".Wdgt:has([src*=\".gif\"])",".widget_text:has([href*=\"utm_source=aff\"])",".ad",".banner_720,\n.fab_lastpost,\n.fab_mid_thread,\n.my_post_goad.my_post.row-fluid",".widget_custom_html:has([href][target=\"_blank\"]):not(*:has([href*=\"damboviteanul.com\"])):not(*:has([id=\"widget_container_curs\"]))",".banners-box,\n.new_domain_r.block",".rm-skin",".img-banner",".widget-container:has([href^=\"http://thecryptobot.com\"])","[style]:has(.adsbygoogle)","#ipsLayout_sidebar > .cWidgetContainer,\n.advertise,\n.content-page-mg > p,\n[alt=\"advertisement_alt\"],\n[href=\"https://luxuryescorts.com/\"],\n[href^=\"https://bcprm.com/promo.php\"]","[href^=\"https://www.profi.ro/\"]","[href^=\"https://bit.ly/\"]",".td-all-devices",".td_shadow_btn,\n.widget_media_image:has([href*=\"affiliate.php\"])","[style^=\"overflow:auto;\"]","[style^=\"overflow:\"]:has([data-ad-slot]),\n[style^=\"overflow:\"]:has([data-ad])","td[height^=\"500\"]","a[href^=\"https://www.udont2021.com/\"]",".widget_text",".widget_block:not(.widget_block:has([href*=\"romaniataramea.com\"])):not(.widget_block:has([href*=\"google.com\"])),\n.wpsd-master-wrapper,\n[href^=\"https://afflat3c1.com/trk/\"]","[style^=\"overflow:\"]:has(#v-scritub-v3)","center:has(a)",".ai_widget.widget","#ppsPopupBgOverlay,\n.code-block-8.code-block,\n.ppsPopupShell","[href^=\"https://event.2performant.com/\"]",".banner",".branding-container,\n[href*=\"AdB\"],\n[id^=\"div-gpt-ad\"]",".size-large.wp-block-image,\n[href^=\"https://www.gralmedical.ro/\"]","#adv-Piede-sticky,\n.code-block:has([id^=\"taboola-\"])",".revis-widget,\n[href=\"http://www.erbasu.ro/\"]",".mask,\n.widget-popup,\n.widget-profitshare",".widget:has(.adsbygoogle)","#bula-ultima-ora",".banneritem",".p-b-30","#banner1,\n#banner5,\n#banner6,\n#banner8_singlebottom,\n#logorow > a[style=\"margin-left:30px\"],\n#meteo,\n.floating,\ndiv.ric.richmedia","#hightopbanner",".adv","div.d2011-block-lateral-middle:has(a[href*=\"voceabasarabiei.net\"])","#idvop_fbl",".adds",".banner-img",".wrapper:has([id^=\"admixer\"]),\n[class^=\"Banner\"]","#Wbanner300x250 > .maxima_zilei",".numbers-promo-placeholder",".td-a-rec",".text-11",".braso-adlabel,\n.braso-adlabel + [class]",".side-widget:has([class=\"adsbygoogle\"])","[href*=\"?utm_source=\"]","[href*=\"/?utm_source=cetateanul\"]",".ad-banner,\n.py-6:has([href*=\"/etoro\"])",".adsense-imagine,\n[href=\"https://creditrapid.ro/\"]",".background-image-clickable",".block-minorHeader,\n[data-widget-key=\"Reclama\"],\n[href^=\"https://www.airbnb.com/\"]",".height-300,\n.top:has([id^=\"div-gpt-ad\"]),\n[data-platform=\"AdNow\"],\n[data-platform=\"MGID\"]","#sam_branding","[id*=\"ads\"],\n[id^=\"banner\"]",".widget_custom_html",".ai-track,\n.e-con-full,\n.elementor-widget-smartmag-codes,\n.smartmag-widget-codes,\n[href=\"https://viamso.ro/\"]","[id^=\"buffercode_banner\"]","[href^=\"https://accounts.binance.me/en/register\"]","[href^=\"http://bit.ly/\"]","[href^=\"https://freakhosting.com/\"]",".aobn",".news-fb-comments,\n.side-col","[style=\"min-height: 260px;\"]:has([id^=\"adocean\"])",".popmake-content,\n.td-a-rec-id-header,\n.widget_wq_reclame,\n[class*=\"_ad_\"]",".minh-250","#branding-holder,\n.ad-in-artilce,\n.retail_insert_in_article",".custom-html-widget.textwidget","[href=\"https://www.sipotehnokaronline.com/\"],\n[href^=\"https://www.sviatoacademy.ro/\"]","[id^=\"gid-ads\"]",".front-overlay-banners,\n[id=\"intRightSideBanners\"]",".bannergroup",".gofollow","[href=\"https://www.fabricadecompost.ro/\"]","#aboveheader,\n#sticky",".sam__branding,\n[style=\"min-height: 250px;\"]","#mvp-content-bot,\n.adsubtitlu",".promotion-section,\n[href=\"http://www.catenapascupas.ro/\"],\n[href^=\"https://www.catena.ro/\"]",".fmowr-link,\n.widget_fmowr.widget",".align-right:has(.adsbygoogle),\n.banner728x90px","[id^=\"ado\"]","[href=\"http://contramundum.ro/\"],\n[href=\"https://anonimus.ro/oferta-de-publicitate/\"],\n[href=\"https://fabricatinro.ro/\"],\n[href=\"https://gandeste.org/\"],\n[href=\"https://malltaranesc.ro/\"],\n[href=\"https://softimaj.ro/\"],\n[href=\"https://trenduri.blogspot.com/\"]","#ivm-inread,\n#slidebox,\n.DAGInScrollContainer,\n.bannerBox,\n.desktop_only.grey.section,\naside > .bannerBox,\nbody > .bannerGrey","#ribbon",".ads",".ads-vizualizare",".gads-top,\n.recl:not([href=\"#\"])","[href^=\"https://msi.gm/\"]",".widget:has([href^=\"https://arhiblog.ro/colaboram/\"])",".pubheader",".pub,\n.textwidget:has([target=\"_blank\"]),\n[href=\"https://www.sab.ro/\"],\n[href^=\"https://www.porschefinance.ro/\"]",".td_spot_img_all",".td-pb-span12.tdi_24",".reclama",".custom-html-widget","[style]:has(> #RO_Web_SP_LB1_Skin),\n[style]:has([id^=\"div-gpt-ad\"])",".ipsPad.ipsWidget_inner:has([src*=\"://www.hostclub.ro\"])",".bg--dark,\n.branding,\n.height-250:has([id^=\"div-gpt-ad\"])",".height-250:has(.strawberry-ads)",".side_right_box:has([src*=\"banner/\"])","#text-49,\n.banner_g,\n[href^=\"https://ro.xtb.com/\"],\n[href^=\"https://www.brd.ro/\"]",".demand-supply,\n[href=\"https://fwdbv.ro/abonamente/\"]","A[href=\"http://bit.ly/1RQRaRq\"],\nA[href=\"https://aegonmarket.ro/\"],\nA[href=\"https://bancatransilvania.ro/pentru-companii/imm/credite-imm/investeste-romaneste/\"],\nDIV[id=\"_tdv_all\"]","[href=\"https://www.facebook.com/bmonkeyadv.ro\"]",".ai-rotate",".grv-product-box,\n.recomandations","[class^=\"banner\"]","[class^=\"reclama\"]","#sidebar > [href*=\"_click\"]",".clearfix [href][target=\"_blank\"][rel]:has([alt][title][style])",".is-style-default [href]",".banners",".branding--top,\n.height-250:has(> [id^=\"div-gpt-ad\"])",".banner-ads-container",".article:has([href*=\"go4it\"]),\n.height-300:has([id^=\"div-gpt-ad\"]),\n.height-sm-360.height-xs-200.mg-bottom-20",".height-250",".textwidget:has([src])","#carvertical_widget,\n.description_area_gad,\n.second_carvertical_noVin,\n[href^=\"https://www.carvertical.com/\"]","#footer-ads-section,\n.pin-it-button",".hidden-xs:has([id^=\"div-gpt-ad\"])","#banner_container_top",".google-ads-billboard,\n.google-ads-in_article",".axd","[href*=\"utm_medium=banner\"],\n[id^=\"ad\"]",".billboard:has(#consoAdTop)",".wpb_wrapper > aside.widget_text.widget","[href=\"https://www.kerigma.ro/\"],\n[href^=\"https://librariact.ro/\"]","[src*=\"banner\"]",".textwidget",".customnomobile,\n[href^=\"https://www.nurvil.ro/\"]",".sidebar,\n.sidebar-mid,\n.theiaStickySidebar,\n[href=\"https://almaclinic.ro/\"],\n[href^=\"https://car-invatamant.ro/aplica-online/\"]","[href=\"https://www.amosnews.ro/\"]","[href^=\"https://www.facebook.com/profile.php\"]",".centered:has(.strawberry-ads-manager-container),\n.mg-bottom-10:has(.strawberry-ads-manager-container)","[href=\"https://redsky.ro/\"]",".twp-ad-image-section,\n[class*=\"widget_media_image\"],\n[id*=\"widget_sp\"]","[href=\"https://hotelilavamaveche.ro/\"]",".profitshare",".adsense","[data-banner]",".essbis-container",".td-loader-gif,\n[href*=\"maie.ro\"]","[href=\"https://www.dcbusiness.ro/cum-nu-construim-in-romania\"]","[href=\"https://arca.info.ro/\"],\n[href=\"https://www.proger.ro/\"]","[href^=\"https://ccir.ro/\"]","#articleContent > [style]:has([data-ad]),\n[align=\"center\"]:has(#div-gpt-dcnews_gpt-billboard_responsive),\n[data-ad]","[href*=\"&utm_campaign\"],\n[href*=\"banner\"],\n[href=\"http://www.arenamall.ro/\"],\n[href=\"https://anunturi.desteptarea.ro/minireclame/\"],\n[href^=\"https://volvobacau.ro/cere-oferta\"],\n[style*=\"banner\"]",".alert-warning.alert","[id^=\"media_image\"]:not(*:has([href*=\"dezvaluiri.ro\"]))",".space","#adContainer,\n#category_b",".a-wrap","[class*=\"banner\"]",".featuredBrandsCon",".content-add,\n.side-sticky-banner",".gridview-post-ad-two,\n[href=\"http://arosa.ro\"],\n[href=\"https://www.facebook.com/florievenimentecadouri\"],\n[href=\"https://www.facebook.com/laguna.focsani/\"],\n[href=\"https://www.facebook.com/reinabijou.ro\"],\n[href^=\"https://m.facebook.com/\"]",".ns-wrap-bottom-right",".section.add",".cxADBlock,\n.videoPlayerAD","[id^=\"media_image\"]","#background-link","#background-image,\n.nspb-interstitial,\n.player-bar-ad","#adobranding","[href=\"http://boromir.ro/\"],\n[href=\"https://uzinamecanicavl.ro/site/index.php\"]","#ado970p1,\n#ado970p2,\n#lastmin,\n#lastmin2,\n#likepagefb,\n#overlay,\n#ureche-fb,\n.agoramag,\n.bncp-desktop,\n.brandc,\n.ford.reclama-auto,\n.news-listing-comunicate,\n[href=\"https://agoramag.ro\"]",".container.mg-top-20:has([href*=\"pariuri\"]),\n[class^=\"ssc-card__branding\"],\n[id^=\"strawberry_feeds_manager_widget\"],\n[rel^=\"sponsored\"]",".banner-info","td[width=\"250\"]:not(*:has([href*=\"fileshare.ro\"]))","div[id^=\"custom_html\"],\ndiv[id^=\"text\"]",".boxOverContent__banner",".textwidget:not([class]:has([href^=\"https://floteauto.ro\"])):not([class]:has([href*=\"//www.autoexpert.ro\"])),\n[href^=\"https://ivecopentrutine.ro/\"]","[href*=\"profitshare.ro/\"]","aside.widget_media_image.widget.td_block_template_1","[href=\"https://e-husa.ro/\"]","[id^=\"block\"]:has([src*=\"pub\"])","aside.widget_media_image.widget",".geeki-before-content,\n.geeki-la-inceput-de-articol-mobil","[href=\"http://prohd.ro\"],\n[href=\"http://www.avis3000.ro/\"],\n[href=\"http://www.jos-palaria.ro/\"],\n[href^=\"https://www.fordcarbenta.ro/\"]",".mg-bottom-10:has(.strawberry-ads)",".container-wrapper > [href=\"https://www.gorjonline.ro/anunturi/\"]:has([src])",".elementor-element:has([data-widget_type=\"image.default\"]),\n.wp-block-image:has([sizes])","[class^=\"banner\"]:not(*:has(.related-in-article))",".images_adv","#master\\.dreapta\\.carlig\\.smartw_12938869,\n#medlive_6844636,\n#pageBodyx > .padded_page_body > .contentFather > .content > .right_side > a > img,\n#rss\\.domnuleprimar_5328294,\n#rss\\.euractiv_20456596,\n#rss\\.medlive_20312972,\n#rss\\.webpr_6183168,\n.articol_lead_full[style=\"width: 158px; margin-right:5px; float:left;\"],\n.at-widget-anunturi,\n.parteneri","#\\$\\{tile\\.name\\}_\\$\\{tile\\.id\\}",".td-a-rec-id-sidebar.td-a-rec","#adswidget1-quick-adsense-reloaded-2,\n#banners-4","#billboard,\n#rectangle,\n.fake_grooveskin",".height-sm-250.height-xs-400.text-center.mg-bottom-20,\n.mg-top-20.container--single.container > .mg-bottom-20","#text-25,\n.widget:has([src*=\"pagead\"])",".widget_custom_html.side-widget.widget_text,\n[href=\"http://www.april91.ro/\"],\n[id^=\"custom_html\"]:has([alt^=\"Agentie\"])",".banner_image","[width=\"2246\"][height=\"519\"]",".panel[class*=\"widget\"]",".code-block",".td-a-rec-id-custom-spot","#text-2",".DAGInScrollInner:has(.bannerBox),\n.bannerGrey",".afis-sticky,\n[id*=\"overlayer\"]",".sidebar:has([class^=\"ad-\"])","#billboard:has(.add-container)",".ai-attributes,\n.reclamaLata,\n.titluReclama","#floating",".section-full-ads",".row-header-baner,\ndiv.bnd",".pum-active",".index-slide,\n[id*=\"banner\"],\n[src^=\"https://luju.ro/static/images/ccir\"],\naside.externals:has([href*=\"cotidianul.ro\"]),\nvideo",".sp-module-content","#copy","#FixedDivContainer,\n#fixedDiv",".td_block_template_1:has(.td_single_image_bg),\n.td_block_template_1:has([class^=\"td-adspot\"])",".bannerDFP","#alephLiveBkp","#alephLive,\ndiv.notif-bula.notif",".mg-top-20,\n.sam-container",".textwidget:has(.adsbygoogle)",".widget_media_image",".theiaStickySidebar.inner,\n[href=\"http://www.volta.ro/\"],\n[href=\"https://www.platinumoptic.ro/\"],\n[href^=\"https://cybernet.volvocarsdealer.ro/cere-oferta\"]","#honda_bnr_rot_1,\n[href=\"http://www.itsybitsy.ro/live/\"]",".aboveDisqusBanners",".widget-container:has(.adsbygoogle),\n.widget-container:has([id=\"t5_zone_standard-ga\"])","#_tdv_all,\n[href*=\"imobiliare.ro\"]",".widget_rss:has([href*=\".bursa.ro/\"]),\n[class*=\"td-a-rec-id-custom_ad\"],\n[href=\"https://www.bursa.ro/\"]",".widget_custom_html.widget.widget_text",".listAd.center-block.img-responsive,\n.visible.go-premium-drawer",".content-segment:has([src*=\"pagead\"]),\n[style*=\"border-radius: 3px; margin-bottom: 20px; width: 160px;\"]:has([target=\"_blank\"])",".pls-dis-blck",".container-wrapper:has([src*=\".mgid.com\"])","#pa_inarticle_placeholder",".widget:has([target=\"_blank\"]),\n[href=\"http://www.coralimpex.ro/\"],\n[href=\"http://www.rosal.ro/\"],\n[href=\"http://www.trcj.ro\"]","#ys-container,\n.clear:has(a),\n.metasingle-jos,\n.visible.ys-layer",".widget-container:has(ins.adsbygoogle),\n[href=\"https://www.incorectpolitic.com\"]","[href=\"https://www.facebook.com/TaxiLuxTarguNeamt/\"]",".sow-image-container:has([target=\"_blank\"][rel])","#text-10","[href=\"https://indagra.ro\"],\n[href=\"https://plescavita.ro/produs/plescavita/\"],\n[href=\"https://www.indagra-food.ro/\"]","#block-2,\n.textwidget:has([src*=\"anner\"]),\n[href=\"https://www.rplp-piatracraiului.ro/\"]",".vc_column-inner:has(.adsbygoogle),\n[style^=\"min-height: 200px;\"]:has(.adsbygoogle)","#stickynote4",".adv-link",".second_header > .container > .reclama728,\n.textwidget:has(.afiliere)",".bk-sticksb-wrapper,\n.ottowebAds","[href=\"http://www.moveout.ro/\"],\n[href=\"https://chestionareauto.ro/\"]",".ptate,\n.ptate_banner_cmz,\n[href=\"http://www.rcforfun.ro/\"],\n[href=\"https://www.anvelopemag.ro/anvelope-iarna.aspx\"],\n[href^=\"https://afiliati-online.casapariurilor.ro/promoRedirect\"]",".stream-item-mag:has([href=\"\"]),\n.stream-item-mag:has([target=\"_blank\"]),\n[href=\"https://souqeshop.ro/panouri-solare-fotovoltaice/\"],\n[href^=\"https://vreaulanova.ro/\"]",".hiddenad,\n.reclama-cod,\n.reclama-inside,\n.reclama-video,\n[href=\"http://euro-instal.ro\"],\n[href=\"http://toronto-residence.ro/contact/\"],\n[href=\"https://certificatenergetictimis.ro/\"],\n[href=\"https://www.rapidauto.ro/ro/content/showroom-timisoara.html\"]",".sidebar-column-primary.sidebar-column.col-sm-4 > .sidebar,\ndiv[class^=\"ods\"]","#fpub-popup",".entry-content > div.demand-supply",".widget_custom_html:has([src*=\"pagead\"])","div.center.well-sm.well",".card:has(.adsbygoogle),\ntr[onclick*=\"revolut\"]","div[class^=\"akcelo\"]",".height-md-250,\n.height-md-300.height-xs-400,\n.height-sm-250.height-xs-300,\n.mg-bottom-10.text-center,\n.padding-top-10.padding-bottom-10,\ndiv.height-300,\ndiv.mg-bottom-20.height-300","#tdi_195,\n.tdi_153",".st-sidebar-widget:has([src*=\"publicitate\"]),\n[src^=\"/media/publicitate/\"],\ndiv.st-clr.st-ad-region",".td-a-rec-id-custom-spot:has([href=\"https://www.vadrexim.ro/anvelope.html\"]),\n.tdi_74,\n[style]:has(.td-adspot-title):has(.td_spot_img_all)","#text-6,\n[href=\"http://exploremag.ro\"],\n[href=\"http://www.inimadecopil.ro/\"]",".widget:not(*:has([href*=\"presasm.ro\"])):not(*:has([data-href*=\"facebook\"])),\n.wp-image-179110","[id^=\"box\"]:has(.adsbygoogle)",".in.fade.modal-backdrop,\n.in.fade.modal.subs-popup","[href*=\"?referral\"]","div[class^=\"strawberry-ad\"]","#crt-523989,\n#crt-523996,\n.height-250.mg-bottom-20,\n.height-250.mg-sm-bottom-20,\n.height-250.text-center,\n.strawberry-ad,\n.strawberry-ads-manager-container",".brandingDfp,\n.container.billboard-1-index:has([id^=\"div-gpt-ad\"])",".image[height=\"250\"][width=\"300\"]",".custom_ad_back_q","iframe[src*=\"feature=oembed\"]",".view-advertising-banner",".desktop.billboard.use-placeholder",".widget:has([href]:not([href*=\"radiomplusfm.ro\"]))","[href=\"https://renth.ro/index.php\"]",".feededay",".mrf-adsmedia",".object-contain,\n.rounded.border-gray-200","#ONN_player",".add728x90,\n[href=\"http://www.epamedia.ro\"],\n[href=\"http://www.messages2autdoor.ro\"]","#text-28 > .textwidget","#widgetArticleControlsLeft,\n#widgetArticleControlsRight,\n.left > .widget-profitshare",".promo","[href*=\"&do=advertisement\"]","#promoClk,\n#reclame",".lvd-blog-ad,\n.textwidget:has([target=\"_blank\"]:not([method])),\n.widget_text:has([id^=\"div-gpt-ad\"])",".leaderboard","#widget_text > .shadowblock,\n[href*=\"ad_click\"]","#ubm-banners-3,\n.ig_content,\narticle > div.td-post-content > p > a.td-modal-image","[href=\"mailto:publicitate@dcnews.ro\"]",".dfp-d-billboard,\n.dfp-d-branding",".textwidget:has([href*=\"facebook.com\"]),\n[href=\"https://www.welthaus.ro/\"]",".banner-image",".widget-title",".leaderboard.bstats,\ndiv[onclick]",".td-spot-id-content_bottom,\n.td-spot-id-content_inline,\n.td-spot-id-content_top",".adcontainer",".attachment-full.vc_single_image-img,\n.wpb_wrapper.vc_figure:has([target=\"_blank\"]),\n[href*=\"tornabuoni.ro\"],\n[href*=\"virtualmag.ro\"]","#custom_html-58,\n[id^=\"wds_\"]",".vc_column_inner > .vc_column-inner > .wpb_wrapper:has(.adsbygoogle)",".ai_widget",".col-sm-4:has([class=\"ad\"])","#topBranding,\n.topBranding","[id*=\"_ads\"]",".banner-request.news-widget-color-1.news-widget.widget,\n.bgcolor-revista-blogurilor,\n.border-revista-blogurilor,\n.giant-modal--fb-like.giant-modal,\n.giant-modal__left__text,\n.js-alternating-banners,\n.news-widget:not([class]:has([href^=\"https://www.stiripesurse.ro\"])),\n.row:not([class]:has([href^=\"https://www.stiripesurse.ro\"])),\n.small.banner,\n.vertical-banner,\n[href*=\"Adv\"],\n[href*=\"Promo\"]",".lazyloaded.size-full:not([src*=\"Aqua\"]),\n.wp-block-image",".incontent:has(.adsbygoogle),\n[id^=\"subst-\"][style]",".border:has([href*=\"binance.com\"])","#text-25:has(.adsbygoogle),\n#text-30:has([href*=\"jooble.org\"])","#ad-bilboard",".g-single,\n.widget:has([href]:not([href*=\"timponline.ro\"])),\n[href=\"https://www.facebook.com/romanadecomobili\"]",".code-block:has(.hbagency_space_19811),\n.size-full.wp-block-image",".magazin1,\n.magazin[href=\"http://camerevideoauto.ro\"],\n.smecher,\ndiv[style$=\"width:520px\"],\ndiv[style*=\"width:520px;\"]","#flashContent",".herald-header-wraper.header-middle,\n.widget:has([data-aid]),\n[href]:not([href*=\"tuktuk\"]):has([src*=\"anner\"]),\n[href^=\"//www.booking.com\"]",".header_banner",".home-featured-boxes,\n.homepage-banner,\n[href^=\"https://www.skinmedspa.ro/\"]",".wpb_content_element,\n[class^=\"widget\"] [src][width][height]",".sam_branding.hidden-xs,\ndiv[class^=\"strawberry\"]","#home_calendar > a","#widget-wrap:not(*:has([href*=\"uzpbihor.ro\"]))",".height-250:has(.adsbygoogle)",".widget-wrap:has(.adsbygoogle)","#background-div",".td-a-rec-id-custom-spot:has([alt=\"spot_img\"]),\n.td_block_template_1.td-single-image-,\n.tdc-element-style.td-pb-row.wpb_row:has([target=\"_blank\"]):has([class^=\"td-lazy-img\"])","#adocean\\.slots\\.box3,\n.minh-250.mb-20.mt-20,\n.minh-lg-600.sidebarBox,\n.slick-slider.slick-initialized.ws_gallery_image,\n.slick-slider.slick-initialized.ws_gallery_image > .draggable.slick-list > .slick-track,\n[class^=\"add\"]:has([id^=\"adocean\"])","[id^=\"werad\"]","[href=\"https://www.hulber.ro/\"],\n[href^=\"http://constantinnautics.ro/index.php\"]","[href=\"https://www.pieseshop.ro/\"]",".bookingaff,\n.widget_sp_image,\n.widget_sp_image-image-link",".hidden-xs:has(.ad-placeholder)","[href=\"https://www.priboisiasociatii.ro/\"]",".banda-sticky-mini,\n.banda-sticky-vp","div.ad",".rzonvm-image","#text-3","#block-3,\n#block-4,\n#block-6,\n#block-7","#foot-ad-wrap,\n#leader-wrap,\n.lazyloaded.alignnone","[class*=\"e3lan\"]",".ziarul-ad",".afiseaza-desktop,\n.widget_links.widget,\n.widget_text.widget:not(*:has([href*=\"ziaruldebacau.ro\"]))","[href*=\"adclick\"]",".widget_block,\n[href*=\"raureni.ro\"]",".td_block_template_1.vc_column_text:has([href]):not(*:has([href*=\"ziaruldinmuscel.ro\"])),\n.vc_empty_space","[href*=\"/adclick.php\"],\n[href^=\"https://www.bursa.ro\"]",".td-a-rec:has([href*=\"350x350\"])",".td-a-rec-id-content_bottom.td-a-rec,\n.vc_raw_html.td_block_wrap.wpb_wrapper,\n[href^=\"http://www.spitalbunavestire.ro/\"]","#mvp-leader-wrap","#optional_banner,\n[class^=\"custom_module add\"]","#pub-top-container","[href^=\"//www.techinstyle.ro/\"],\n[id^=\"custom_html\"]:has([id^=\"adocean\"])",".widget_text.text-124.widget,\n.wpb_wrapper:has([href^=\"https://repigmentare.ro/\"]),\n[href=\"http://stefanovidiu.ro/\"],\n[href=\"https://www.ecrgroup.eu/\"],\n[href=\"https://www.expresorul.ro/\"]"];

const hostnamesMap = new Map([["*",0],["filme-bune.biz",1],["aproapemasini.com",2],["asculta-live.com",3],["sighet247.ro",3],["clubopel.com",4],["damboviteanul.com",5],["escortebucuresti.com",6],["gazetaromaneasca.com",7],["georgebutunoiu.com",8],["restocracy.ro",8],["incorectpolitic.com",9],["mediculmeu.com",10],["nimfomane.com",11],["pofta-buna.com",12],["programegratuitepc.com",[13,14,15]],["bzi.ro",[13,117]],["arenavalceana.ro",14],["qreferat.com",16],["rasfoiesc.com",[17,18]],["scritub.com",[17,22]],["roboxfilme4k.com",19],["romaniataramea.com",[20,21]],["timpul.md",[20,46]],["serveresamp.com",23],["viatasisanatate.com",[24,25]],["ziarulromanesc.de",[24,30]],["vloggeri.com",26],["ziare.com",[27,28]],["poliexpert.md",27],["bursa.ro",[27,114]],["exquis.ro",27],["inturda.ro",[27,198]],["mobilissimo.ro",[27,142,224]],["stiripesurse.ro",[27,149,306]],["ziartopdearges.com",29],["revistaconstructiilor.eu",31],["academiacatavencu.info",32],["actualitati.info",33],["litoraltv.ro",[33,210]],["tuktuk.ro",[33,316]],["gandul.info",34],["mediafax.ro",[34,217,218]],["prosport.ro",[34,268]],["zf.ro",[34,217,334]],["gazetadeagricultura.info",35],["albaiulianul.ro",35],["ph-online.ro",35],["reporteris.ro",35],["7media.md",36],["curentul.md",[37,38]],["tribuna.md",38],["hotnews.md",39],["istoria.md",40],["protv.md",41],["radiochisinau.md",42],["shok.md",43],["stiri.md",44],["stirinonstop.md",[45,46]],["bacau.net",[47,48]],["presadeazi.ro",[47,261]],["timisplus.ro",47],["brasov.net",49],["bucurestitv.net",50],["buzau.net",51],["cetateanul.net",52],["coinjournal.net",53],["dexonline.net",54],["newsromania.net",55],["roforum.net",56],["romaniatv.net",[57,58]],["playtech.ro",[58,258]],["saptamana.net",59],["satmareanul.net",60],["glasul-hd.ro",[60,77,182]],["lapunkt.ro",60],["turdanews.net",61],["vestea.net",62],["filmeonlinesubtitrate.org",63],["filmeserialeonline.org",64],["1tap.ro",65],["4tuning.ro",[66,67]],["anunturi-auto.4tuning.ro",66],["pieseauto.ro",66],["forum.4tuning.ro",68],["7est.ro",69],["9am.ro",[70,71]],["kudika.ro",[70,205]],["wall-street.ro",[70,89,327]],["actualdecluj.ro",72],["jocuricool.ro",[72,201]],["motorclasic.ro",[72,228]],["stiriardeal.ro",[72,295]],["actualitateavranceana.ro",73],["adevarul.ro",74],["aerotim.ro",75],["agoramedia.ro",76],["agro-tv.ro",[77,78]],["ctnews.ro",77],["agrointel.ro",79],["aktual24.ro",80],["alba24.ro",81],["amosnews.ro",82],["ampress.ro",83],["androidu.ro",84],["animalzoo.ro",85],["capital.ro",85],["doctorulzilei.ro",85],["evz.ro",[85,169]],["infoactual.ro",85],["retetesivedete.ro",[85,167,280]],["anonimus.ro",86],["antena3.ro",[87,88]],["jurnalul.ro",[88,202]],["anunturi66.ro",[89,90]],["spynews.ro",89],["tvhappy.ro",89],["useit.ro",89],["anunturigarla.ro",91],["arenait.ro",92],["arhiblog.ro",93],["autoexpert.ro",[94,95]],["floteauto.ro",[94,175]],["autolatest.ro",[96,97]],["flux24.ro",[96,176]],["focuspress.ro",[96,177]],["mediaflux.ro",[96,219]],["mediastiri.ro",96],["monitorulexpres.ro",96],["politik24.ro",[96,259]],["refleqtmedia.ro",96],["solidnews.ro",96],["stiridepitesti.ro",[96,297]],["automobilen.ro",98],["eblogauto.ro",98],["sporttim.ro",98],["autoplay.ro",99],["g4media.ro",99],["gazetadambovitei.ro",99],["ziarul21.ro",[99,339]],["autouncle.ro",100],["forum.b-zone.ro",101],["b1tv.ro",102],["b365.ro",103],["bancherul.ro",104],["bankingnews.ro",105],["bizbrasov.ro",106],["biziday.ro",107],["brasovmetropolitan.ro",108],["brasovstiri.ro",109],["bucataras.ro",110],["bugetul.ro",[111,112]],["cugetliber.ro",111],["buletindecarei.ro",113],["buzoienii.ro",115],["bzb.ro",116],["i-car.ro",[116,191]],["campinatv.ro",118],["cancan.ro",[119,120]],["impact.ro",[120,193]],["cargo-bus.ro",121],["carzz.ro",122],["catchy.ro",123],["ciao.ro",124],["cinemagia.ro",125],["click.ro",126],["clubmercedes.ro",127],["loganclub.ro",127],["clujust.ro",128],["conso.ro",129],["craiovaforum.ro",130],["crestintotal.ro",131],["crisana.ro",132],["cspower.ro",[132,139]],["hotnews.ro",[132,188]],["luju.ro",[132,211]],["cristianmargarit.ro",133],["gazetadecluj.ro",133],["sroscas.ro",133],["criterii.ro",134],["cronicadefalticeni.ro",135],["cronicazilei.ro",[136,137]],["editiedevrancea.ro",[137,160]],["csid.ro",138],["ct100.ro",140],["curier.ro",141],["daciaclub.ro",[142,143]],["reno.ro",[142,143]],["dailybusiness.ro",144],["fanatik.ro",[144,170]],["dailyfeed.ro",145],["dc360.ro",146],["dcbusiness.ro",[147,148]],["dcnews.ro",[147,149,150]],["desteptarea.ro",151],["dez.ro",152],["dezvaluiri.ro",153],["diacritice.ro",154],["digi24.ro",155],["dinpopor.ro",156],["dirtbike.ro",157],["zvj.ro",157],["divahair.ro",158],["doc.ro",159],["emag.ro",161],["epitesti.ro",162],["eporno.ro",163],["filme-porno.ro",163],["estnews.ro",164],["europafm.ro",[165,166]],["virginradio.ro",[165,325]],["evenimentulistoric.ro",167],["evenimentvalcean.ro",168],["farmaciata.ro",171],["fileshare.ro",172],["filmecrestineonline.ro",173],["flashscore.ro",174],["forum-auto.ro",178],["gadget.ro",179],["gazetadinvest.ro",180],["geeki.ro",181],["go4games.ro",183],["gorjonline.ro",184],["graiulsalajului.ro",185],["gsp.ro",186],["horoscop.ro",187],["science.hotnews.ro",189],["hunedoaraplus.ro",190],["ilike-it.ro",192],["impactpress.ro",194],["info1tv.ro",195],["infobistrita.ro",196],["informatia-zilei.ro",197],["investigatoria.ro",199],["jamilacuisine.ro",200],["national.ro",[200,235]],["zhd.ro",200],["ziarmedical.ro",200],["kanald.ro",203],["kfetele.ro",204],["lauralaurentiu.ro",206],["libertatea.ro",207],["libertateapentrufemei.ro",208],["libnet.ro",209],["lumeasatului.ro",212],["manafu.ro",213],["manager.ro",214],["mangalianews.ro",215],["marketingportal.ro",216],["mesagerulhunedorean.ro",[220,221]],["odat.ro",[220,247]],["stiridinromania.ro",[220,299]],["tomisnews.ro",[221,313]],["ziaruldevalcea.ro",[221,344]],["mesagerulneamt.ro",222],["missauto.ro",223],["moduri.ro",225],["moise.ro",226],["monitoruldevrancea.ro",227],["multecase.ro",229],["myexpert.ro",230],["myradioonline.ro",231],["mytex.ro",232],["napocanews.ro",[233,234]],["r3media.ro",[233,272]],["ziuaconstanta.ro",[233,350]],["nationalisti.ro",236],["neamt24.ro",237],["newmoney.ro",238],["newsbucovina.ro",239],["ziarroman.ro",[239,337]],["newsbucuresti.ro",240],["newsbv.ro",241],["newsmed.ro",242],["nosteam.ro",243],["novatv.ro",244],["nwradu.ro",245],["obiectiv-sm.ro",246],["onlinesport.ro",248],["opiniabuzau.ro",249],["opiniatimisoarei.ro",250],["oradesibiu.ro",251],["ortodoxinfo.ro",252],["paginademedia.ro",253],["parerimagazin.ro",254],["pbinfo.ro",255],["peco-online.ro",256],["petitchef.ro",257],["portalsm.ro",260],["presagalati.ro",262],["presasm.ro",263],["pretbenzina.ro",264],["pricy.ro",265],["project-e.ro",266],["promotor.ro",267],["protv.ro",269],["prwave.ro",270],["qmagazine.ro",271],["radiobrasov.ro",273],["radioimpuls.ro",274],["radiomplusfm.ro",275],["rangfort.ro",276],["razvanbb.ro",277],["redactia.ro",278],["republikanews.ro",279],["rnews.ro",281],["roman24.ro",282],["romanialibera.ro",283],["romedic.ro",284],["sa-mp.ro",285],["sfatulmedicului.ro",286],["sfatulparintilor.ro",287],["shtiu.ro",288],["site-anunturi.ro",289],["smlive.ro",290],["spectacola.ro",291],["sport.ro",292],["sportulsalajean.ro",293],["stiri-neamt.ro",294],["stiridecluj.ro",296],["stiridesibiu.ro",298],["stiriest.ro",300],["stirilebzi.ro",301],["stirileimobiliare.ro",302],["stirilekanald.ro",303],["stirileprotv.ro",304],["stirimed.ro",305],["stirivaslui.ro",307],["substantial.ro",308],["super-boost.ro",309],["televiziunea-medicala.ro",310],["tenisdecamp.ro",311],["timponline.ro",312],["trafictube.ro",314],["transilvaniareporter.ro",315],["turatii.ro",317],["turbomag.ro",318],["tvmneamt.ro",319],["retete.unica.ro",320],["urban.ro",321],["uzpbihor.ro",322],["vbiz.ro",323],["videotutorial.ro",324],["vremeanoua.ro",326],["weradio.ro",328],["yachtexpert.ro",[329,330]],["zero-accidente.ro",[330,333]],["zch.ro",331],["zcj.ro",332],["ziardecluj.ro",335],["ziarobiectiv.ro",336],["ziartarguneamt.ro",338],["ziarulargesul.ro",340],["ziarulatac.ro",341],["ziaruldebacau.ro",342],["ziaruldeiasi.ro",343],["ziaruldinmuscel.ro",345],["ziarulevenimentul.ro",346],["ziarulincomod.ro",347],["ziarulsanatatea.ro",348],["ziarulunirea.ro",349],["ziuanews.ro",351],["zonait.ro",352],["nasul.tv",353]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["patriotromania.ro",[0]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
