	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	
bookConfig.loadingCaptionColor="#DDDDDD";
bookConfig.loadingBackground="#323232";
bookConfig.appLogoOpenWindow="Blank";
bookConfig.logoHeight="40";
bookConfig.logoPadding="0";
bookConfig.logoTop="0";
bookConfig.toolbarColor="#000000";
bookConfig.iconColor="#ECF5FB";
bookConfig.pageNumColor="#000000";
bookConfig.iconFontColor="#FFFFFF";
bookConfig.toolbarAlwaysShow="No";
bookConfig.formFontColor="#FFFFFF";
bookConfig.formBackgroundColor="#27181A";
bookConfig.ToolBarAlpha="1";
bookConfig.showBookInstructionOnStart="false";
bookConfig.InstructionsButtonVisible="Show";
bookConfig.showInstructionOnStart="No";
bookConfig.showGotoButtonsAtFirst="No";
bookConfig.QRCode="Hide";
bookConfig.HomeButtonVisible="Hide";
bookConfig.enablePageBack="Show";
bookConfig.ShareButtonVisible="NO";
shareObj = [];
bookConfig.isInsertFrameLinkEnable="NO";
bookConfig.addCurrentPage="No";
bookConfig.EmailButtonVisible="NO";
bookConfig.btnShareWithEmailBody="\{link\}";
bookConfig.ThumbnailsButtonVisible="Show";
bookConfig.thumbnailColor="#333333";
bookConfig.thumbnailAlpha="70";
bookConfig.BookMarkButtonVisible="Hide";
bookConfig.TableOfContentButtonVisible="NO";
bookConfig.isHideTabelOfContentNodes="NO";
bookConfig.SearchButtonVisible="NO";
bookConfig.leastSearchChar="3";
bookConfig.searchKeywordFontColor="#FFB000";
bookConfig.searchHightlightColor="#FFFF00";
bookConfig.SelectTextButtonVisible="NO";
bookConfig.PrintButtonVisible="No";
bookConfig.BackgroundSoundButtonVisible="NO";
bookConfig.FlipSound="No";
bookConfig.BackgroundSoundLoop="-1";
bookConfig.AutoPlayButtonVisible="NO";
bookConfig.autoPlayAutoStart="No";
bookConfig.autoPlayDuration="9";
bookConfig.autoPlayLoopCount="1";
bookConfig.ZoomButtonVisible="NO";
bookConfig.maxZoomWidth="1400";
bookConfig.defaultZoomWidth="1000";
bookConfig.mouseWheelFlip="Yes";
bookConfig.ZoomMapVisible="Hide";
bookConfig.DownloadButtonVisible="Hide";
bookConfig.PhoneButtonVisible="Hide";
bookConfig.AnnotationButtonVisible="Disable";
bookConfig.FullscreenButtonVisible="Show";
bookConfig.MagnifierButtonVisible="Hide";
bookConfig.bgBeginColor="#E2E2E2";
bookConfig.bgEndColor="#E2E2E2";
bookConfig.bgMRotation="90";
bookConfig.backgroundPosition="stretch";
bookConfig.backgroundOpacity="100";
bookConfig.backgroundScene="None";
bookConfig.LeftShadowWidth="90";
bookConfig.LeftShadowAlpha="0.6";
bookConfig.RightShadowWidth="55";
bookConfig.RightShadowAlpha="0.6";
bookConfig.ShowTopLeftShadow="Yes";
bookConfig.HardPageEnable="No";
bookConfig.hardCoverBorderWidth="8";
bookConfig.borderColor="#572F0D";
bookConfig.outerCoverBorder="Yes";
bookConfig.cornerRound="8";
bookConfig.leftMarginOnMobile="0";
bookConfig.topMarginOnMobile="0";
bookConfig.rightMarginOnMobile="0";
bookConfig.bottomMarginOnMobile="0";
bookConfig.pageBackgroundColor="#E8E8E8";
bookConfig.flipshortcutbutton="Show";
bookConfig.BindingType="side";
bookConfig.RightToLeft="No";
bookConfig.FlipDirection="0";
bookConfig.flippingTime="0.6";
bookConfig.retainBookCenter="Yes";
bookConfig.FlipStyle="Flip";
bookConfig.autoDoublePage="Yes";
bookConfig.isTheBookOpen="No";
bookConfig.thicknessWidthType="Thinner";
bookConfig.thicknessColor="#FFFFFF";
bookConfig.SingleModeBanFlipToLastPage="No";
bookConfig.showThicknessOnMobile="No";
bookConfig.isSingleBookFullWindowOnMobile="no";
bookConfig.isStopMouseMenu="yes";
bookConfig.restorePageVisible="No";
bookConfig.topMargin="10";
bookConfig.bottomMargin="10";
bookConfig.leftMargin="10";
bookConfig.rightMargin="10";
bookConfig.hideMiniFullscreen="no";
bookConfig.maxWidthToSmallMode="400";
bookConfig.maxHeightToSmallMode="300";
bookConfig.leftRightPnlShowOption="None";
bookConfig.highDefinitionConversion="yes";
bookConfig.LargeLogoPosition="top-left";
bookConfig.LargeLogoTarget="Blank";
bookConfig.isFixLogoSize="No";
bookConfig.logoFixWidth="0";
bookConfig.logoFixHeight="0";
bookConfig.SupportOperatePageZoom="NO";
bookConfig.showHelpContentAtFirst="No";
bookConfig.updateURLForPage="No";
bookConfig.LinkDownColor="#800080";
bookConfig.LinkAlpha="0.2";
bookConfig.OpenWindow="Blank";
bookConfig.showLinkHint="No";

bookConfig.macBookVersion = "MOedlpFHcZqtFAaRppELXfktFMZSguANTakjIAbRrqMLVYksLMbYkiHLYeguJJeSviELZSimDMednkNFdZstHKWfmpGDbTgjHKUfmlNDQWvjCC1cCf5Bc0_";
bookConfig.Html5Template = "Metro";
bookConfig.UIBaseURL="mobile/";
bookConfig.isFlipPdf=false;
bookConfig.searchTextJS="mobile/javascript/search_config.js";
bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";
bookConfig.totalPageCount=288;
bookConfig.largePageWidth=419;
bookConfig.largePageHeight=595;
bookConfig.bookTitle="Me";
bookConfig.normalPath="./files/mobile/";
bookConfig.largePath="./files/mobile/";
bookConfig.productName="Flip PDF";
bookConfig.useTheAliCloudChart=false;
bookConfig.MidBgColor="#1ec55d";
bookConfig.bookmarkCR = "6ed7b8e09289b65d11171ef76d49b2d0029b3082";
;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};
bookConfig.thumbPath="./files/thumb/";
var fliphtml5_pages=[{"l":"./files/mobile/1.jpg","n":"./files/mobile/1.jpg","t":"./files/thumb/1.jpg"},{"l":"./files/mobile/2.jpg","n":"./files/mobile/2.jpg","t":"./files/thumb/2.jpg"},{"l":"./files/mobile/3.jpg","n":"./files/mobile/3.jpg","t":"./files/thumb/3.jpg"},{"l":"./files/mobile/4.jpg","n":"./files/mobile/4.jpg","t":"./files/thumb/4.jpg"},{"l":"./files/mobile/5.jpg","n":"./files/mobile/5.jpg","t":"./files/thumb/5.jpg"},{"l":"./files/mobile/6.jpg","n":"./files/mobile/6.jpg","t":"./files/thumb/6.jpg"},{"l":"./files/mobile/7.jpg","n":"./files/mobile/7.jpg","t":"./files/thumb/7.jpg"},{"l":"./files/mobile/8.jpg","n":"./files/mobile/8.jpg","t":"./files/thumb/8.jpg"},{"l":"./files/mobile/9.jpg","n":"./files/mobile/9.jpg","t":"./files/thumb/9.jpg"},{"l":"./files/mobile/10.jpg","n":"./files/mobile/10.jpg","t":"./files/thumb/10.jpg"},{"l":"./files/mobile/11.jpg","n":"./files/mobile/11.jpg","t":"./files/thumb/11.jpg"},{"l":"./files/mobile/12.jpg","n":"./files/mobile/12.jpg","t":"./files/thumb/12.jpg"},{"l":"./files/mobile/13.jpg","n":"./files/mobile/13.jpg","t":"./files/thumb/13.jpg"},{"l":"./files/mobile/14.jpg","n":"./files/mobile/14.jpg","t":"./files/thumb/14.jpg"},{"l":"./files/mobile/15.jpg","n":"./files/mobile/15.jpg","t":"./files/thumb/15.jpg"},{"l":"./files/mobile/16.jpg","n":"./files/mobile/16.jpg","t":"./files/thumb/16.jpg"},{"l":"./files/mobile/17.jpg","n":"./files/mobile/17.jpg","t":"./files/thumb/17.jpg"},{"l":"./files/mobile/18.jpg","n":"./files/mobile/18.jpg","t":"./files/thumb/18.jpg"},{"l":"./files/mobile/19.jpg","n":"./files/mobile/19.jpg","t":"./files/thumb/19.jpg"},{"l":"./files/mobile/20.jpg","n":"./files/mobile/20.jpg","t":"./files/thumb/20.jpg"},{"l":"./files/mobile/21.jpg","n":"./files/mobile/21.jpg","t":"./files/thumb/21.jpg"},{"l":"./files/mobile/22.jpg","n":"./files/mobile/22.jpg","t":"./files/thumb/22.jpg"},{"l":"./files/mobile/23.jpg","n":"./files/mobile/23.jpg","t":"./files/thumb/23.jpg"},{"l":"./files/mobile/24.jpg","n":"./files/mobile/24.jpg","t":"./files/thumb/24.jpg"},{"l":"./files/mobile/25.jpg","n":"./files/mobile/25.jpg","t":"./files/thumb/25.jpg"},{"l":"./files/mobile/26.jpg","n":"./files/mobile/26.jpg","t":"./files/thumb/26.jpg"},{"l":"./files/mobile/27.jpg","n":"./files/mobile/27.jpg","t":"./files/thumb/27.jpg"},{"l":"./files/mobile/28.jpg","n":"./files/mobile/28.jpg","t":"./files/thumb/28.jpg"},{"l":"./files/mobile/29.jpg","n":"./files/mobile/29.jpg","t":"./files/thumb/29.jpg"},{"l":"./files/mobile/30.jpg","n":"./files/mobile/30.jpg","t":"./files/thumb/30.jpg"},{"l":"./files/mobile/31.jpg","n":"./files/mobile/31.jpg","t":"./files/thumb/31.jpg"},{"l":"./files/mobile/32.jpg","n":"./files/mobile/32.jpg","t":"./files/thumb/32.jpg"},{"l":"./files/mobile/33.jpg","n":"./files/mobile/33.jpg","t":"./files/thumb/33.jpg"},{"l":"./files/mobile/34.jpg","n":"./files/mobile/34.jpg","t":"./files/thumb/34.jpg"},{"l":"./files/mobile/35.jpg","n":"./files/mobile/35.jpg","t":"./files/thumb/35.jpg"},{"l":"./files/mobile/36.jpg","n":"./files/mobile/36.jpg","t":"./files/thumb/36.jpg"},{"l":"./files/mobile/37.jpg","n":"./files/mobile/37.jpg","t":"./files/thumb/37.jpg"},{"l":"./files/mobile/38.jpg","n":"./files/mobile/38.jpg","t":"./files/thumb/38.jpg"},{"l":"./files/mobile/39.jpg","n":"./files/mobile/39.jpg","t":"./files/thumb/39.jpg"},{"l":"./files/mobile/40.jpg","n":"./files/mobile/40.jpg","t":"./files/thumb/40.jpg"},{"l":"./files/mobile/41.jpg","n":"./files/mobile/41.jpg","t":"./files/thumb/41.jpg"},{"l":"./files/mobile/42.jpg","n":"./files/mobile/42.jpg","t":"./files/thumb/42.jpg"},{"l":"./files/mobile/43.jpg","n":"./files/mobile/43.jpg","t":"./files/thumb/43.jpg"},{"l":"./files/mobile/44.jpg","n":"./files/mobile/44.jpg","t":"./files/thumb/44.jpg"},{"l":"./files/mobile/45.jpg","n":"./files/mobile/45.jpg","t":"./files/thumb/45.jpg"},{"l":"./files/mobile/46.jpg","n":"./files/mobile/46.jpg","t":"./files/thumb/46.jpg"},{"l":"./files/mobile/47.jpg","n":"./files/mobile/47.jpg","t":"./files/thumb/47.jpg"},{"l":"./files/mobile/48.jpg","n":"./files/mobile/48.jpg","t":"./files/thumb/48.jpg"},{"l":"./files/mobile/49.jpg","n":"./files/mobile/49.jpg","t":"./files/thumb/49.jpg"},{"l":"./files/mobile/50.jpg","n":"./files/mobile/50.jpg","t":"./files/thumb/50.jpg"},{"l":"./files/mobile/51.jpg","n":"./files/mobile/51.jpg","t":"./files/thumb/51.jpg"},{"l":"./files/mobile/52.jpg","n":"./files/mobile/52.jpg","t":"./files/thumb/52.jpg"},{"l":"./files/mobile/53.jpg","n":"./files/mobile/53.jpg","t":"./files/thumb/53.jpg"},{"l":"./files/mobile/54.jpg","n":"./files/mobile/54.jpg","t":"./files/thumb/54.jpg"},{"l":"./files/mobile/55.jpg","n":"./files/mobile/55.jpg","t":"./files/thumb/55.jpg"},{"l":"./files/mobile/56.jpg","n":"./files/mobile/56.jpg","t":"./files/thumb/56.jpg"},{"l":"./files/mobile/57.jpg","n":"./files/mobile/57.jpg","t":"./files/thumb/57.jpg"},{"l":"./files/mobile/58.jpg","n":"./files/mobile/58.jpg","t":"./files/thumb/58.jpg"},{"l":"./files/mobile/59.jpg","n":"./files/mobile/59.jpg","t":"./files/thumb/59.jpg"},{"l":"./files/mobile/60.jpg","n":"./files/mobile/60.jpg","t":"./files/thumb/60.jpg"},{"l":"./files/mobile/61.jpg","n":"./files/mobile/61.jpg","t":"./files/thumb/61.jpg"},{"l":"./files/mobile/62.jpg","n":"./files/mobile/62.jpg","t":"./files/thumb/62.jpg"},{"l":"./files/mobile/63.jpg","n":"./files/mobile/63.jpg","t":"./files/thumb/63.jpg"},{"l":"./files/mobile/64.jpg","n":"./files/mobile/64.jpg","t":"./files/thumb/64.jpg"},{"l":"./files/mobile/65.jpg","n":"./files/mobile/65.jpg","t":"./files/thumb/65.jpg"},{"l":"./files/mobile/66.jpg","n":"./files/mobile/66.jpg","t":"./files/thumb/66.jpg"},{"l":"./files/mobile/67.jpg","n":"./files/mobile/67.jpg","t":"./files/thumb/67.jpg"},{"l":"./files/mobile/68.jpg","n":"./files/mobile/68.jpg","t":"./files/thumb/68.jpg"},{"l":"./files/mobile/69.jpg","n":"./files/mobile/69.jpg","t":"./files/thumb/69.jpg"},{"l":"./files/mobile/70.jpg","n":"./files/mobile/70.jpg","t":"./files/thumb/70.jpg"},{"l":"./files/mobile/71.jpg","n":"./files/mobile/71.jpg","t":"./files/thumb/71.jpg"},{"l":"./files/mobile/72.jpg","n":"./files/mobile/72.jpg","t":"./files/thumb/72.jpg"},{"l":"./files/mobile/73.jpg","n":"./files/mobile/73.jpg","t":"./files/thumb/73.jpg"},{"l":"./files/mobile/74.jpg","n":"./files/mobile/74.jpg","t":"./files/thumb/74.jpg"},{"l":"./files/mobile/75.jpg","n":"./files/mobile/75.jpg","t":"./files/thumb/75.jpg"},{"l":"./files/mobile/76.jpg","n":"./files/mobile/76.jpg","t":"./files/thumb/76.jpg"},{"l":"./files/mobile/77.jpg","n":"./files/mobile/77.jpg","t":"./files/thumb/77.jpg"},{"l":"./files/mobile/78.jpg","n":"./files/mobile/78.jpg","t":"./files/thumb/78.jpg"},{"l":"./files/mobile/79.jpg","n":"./files/mobile/79.jpg","t":"./files/thumb/79.jpg"},{"l":"./files/mobile/80.jpg","n":"./files/mobile/80.jpg","t":"./files/thumb/80.jpg"},{"l":"./files/mobile/81.jpg","n":"./files/mobile/81.jpg","t":"./files/thumb/81.jpg"},{"l":"./files/mobile/82.jpg","n":"./files/mobile/82.jpg","t":"./files/thumb/82.jpg"},{"l":"./files/mobile/83.jpg","n":"./files/mobile/83.jpg","t":"./files/thumb/83.jpg"},{"l":"./files/mobile/84.jpg","n":"./files/mobile/84.jpg","t":"./files/thumb/84.jpg"},{"l":"./files/mobile/85.jpg","n":"./files/mobile/85.jpg","t":"./files/thumb/85.jpg"},{"l":"./files/mobile/86.jpg","n":"./files/mobile/86.jpg","t":"./files/thumb/86.jpg"},{"l":"./files/mobile/87.jpg","n":"./files/mobile/87.jpg","t":"./files/thumb/87.jpg"},{"l":"./files/mobile/88.jpg","n":"./files/mobile/88.jpg","t":"./files/thumb/88.jpg"},{"l":"./files/mobile/89.jpg","n":"./files/mobile/89.jpg","t":"./files/thumb/89.jpg"},{"l":"./files/mobile/90.jpg","n":"./files/mobile/90.jpg","t":"./files/thumb/90.jpg"},{"l":"./files/mobile/91.jpg","n":"./files/mobile/91.jpg","t":"./files/thumb/91.jpg"},{"l":"./files/mobile/92.jpg","n":"./files/mobile/92.jpg","t":"./files/thumb/92.jpg"},{"l":"./files/mobile/93.jpg","n":"./files/mobile/93.jpg","t":"./files/thumb/93.jpg"},{"l":"./files/mobile/94.jpg","n":"./files/mobile/94.jpg","t":"./files/thumb/94.jpg"},{"l":"./files/mobile/95.jpg","n":"./files/mobile/95.jpg","t":"./files/thumb/95.jpg"},{"l":"./files/mobile/96.jpg","n":"./files/mobile/96.jpg","t":"./files/thumb/96.jpg"},{"l":"./files/mobile/97.jpg","n":"./files/mobile/97.jpg","t":"./files/thumb/97.jpg"},{"l":"./files/mobile/98.jpg","n":"./files/mobile/98.jpg","t":"./files/thumb/98.jpg"},{"l":"./files/mobile/99.jpg","n":"./files/mobile/99.jpg","t":"./files/thumb/99.jpg"},{"l":"./files/mobile/100.jpg","n":"./files/mobile/100.jpg","t":"./files/thumb/100.jpg"},{"l":"./files/mobile/101.jpg","n":"./files/mobile/101.jpg","t":"./files/thumb/101.jpg"},{"l":"./files/mobile/102.jpg","n":"./files/mobile/102.jpg","t":"./files/thumb/102.jpg"},{"l":"./files/mobile/103.jpg","n":"./files/mobile/103.jpg","t":"./files/thumb/103.jpg"},{"l":"./files/mobile/104.jpg","n":"./files/mobile/104.jpg","t":"./files/thumb/104.jpg"},{"l":"./files/mobile/105.jpg","n":"./files/mobile/105.jpg","t":"./files/thumb/105.jpg"},{"l":"./files/mobile/106.jpg","n":"./files/mobile/106.jpg","t":"./files/thumb/106.jpg"},{"l":"./files/mobile/107.jpg","n":"./files/mobile/107.jpg","t":"./files/thumb/107.jpg"},{"l":"./files/mobile/108.jpg","n":"./files/mobile/108.jpg","t":"./files/thumb/108.jpg"},{"l":"./files/mobile/109.jpg","n":"./files/mobile/109.jpg","t":"./files/thumb/109.jpg"},{"l":"./files/mobile/110.jpg","n":"./files/mobile/110.jpg","t":"./files/thumb/110.jpg"},{"l":"./files/mobile/111.jpg","n":"./files/mobile/111.jpg","t":"./files/thumb/111.jpg"},{"l":"./files/mobile/112.jpg","n":"./files/mobile/112.jpg","t":"./files/thumb/112.jpg"},{"l":"./files/mobile/113.jpg","n":"./files/mobile/113.jpg","t":"./files/thumb/113.jpg"},{"l":"./files/mobile/114.jpg","n":"./files/mobile/114.jpg","t":"./files/thumb/114.jpg"},{"l":"./files/mobile/115.jpg","n":"./files/mobile/115.jpg","t":"./files/thumb/115.jpg"},{"l":"./files/mobile/116.jpg","n":"./files/mobile/116.jpg","t":"./files/thumb/116.jpg"},{"l":"./files/mobile/117.jpg","n":"./files/mobile/117.jpg","t":"./files/thumb/117.jpg"},{"l":"./files/mobile/118.jpg","n":"./files/mobile/118.jpg","t":"./files/thumb/118.jpg"},{"l":"./files/mobile/119.jpg","n":"./files/mobile/119.jpg","t":"./files/thumb/119.jpg"},{"l":"./files/mobile/120.jpg","n":"./files/mobile/120.jpg","t":"./files/thumb/120.jpg"},{"l":"./files/mobile/121.jpg","n":"./files/mobile/121.jpg","t":"./files/thumb/121.jpg"},{"l":"./files/mobile/122.jpg","n":"./files/mobile/122.jpg","t":"./files/thumb/122.jpg"},{"l":"./files/mobile/123.jpg","n":"./files/mobile/123.jpg","t":"./files/thumb/123.jpg"},{"l":"./files/mobile/124.jpg","n":"./files/mobile/124.jpg","t":"./files/thumb/124.jpg"},{"l":"./files/mobile/125.jpg","n":"./files/mobile/125.jpg","t":"./files/thumb/125.jpg"},{"l":"./files/mobile/126.jpg","n":"./files/mobile/126.jpg","t":"./files/thumb/126.jpg"},{"l":"./files/mobile/127.jpg","n":"./files/mobile/127.jpg","t":"./files/thumb/127.jpg"},{"l":"./files/mobile/128.jpg","n":"./files/mobile/128.jpg","t":"./files/thumb/128.jpg"},{"l":"./files/mobile/129.jpg","n":"./files/mobile/129.jpg","t":"./files/thumb/129.jpg"},{"l":"./files/mobile/130.jpg","n":"./files/mobile/130.jpg","t":"./files/thumb/130.jpg"},{"l":"./files/mobile/131.jpg","n":"./files/mobile/131.jpg","t":"./files/thumb/131.jpg"},{"l":"./files/mobile/132.jpg","n":"./files/mobile/132.jpg","t":"./files/thumb/132.jpg"},{"l":"./files/mobile/133.jpg","n":"./files/mobile/133.jpg","t":"./files/thumb/133.jpg"},{"l":"./files/mobile/134.jpg","n":"./files/mobile/134.jpg","t":"./files/thumb/134.jpg"},{"l":"./files/mobile/135.jpg","n":"./files/mobile/135.jpg","t":"./files/thumb/135.jpg"},{"l":"./files/mobile/136.jpg","n":"./files/mobile/136.jpg","t":"./files/thumb/136.jpg"},{"l":"./files/mobile/137.jpg","n":"./files/mobile/137.jpg","t":"./files/thumb/137.jpg"},{"l":"./files/mobile/138.jpg","n":"./files/mobile/138.jpg","t":"./files/thumb/138.jpg"},{"l":"./files/mobile/139.jpg","n":"./files/mobile/139.jpg","t":"./files/thumb/139.jpg"},{"l":"./files/mobile/140.jpg","n":"./files/mobile/140.jpg","t":"./files/thumb/140.jpg"},{"l":"./files/mobile/141.jpg","n":"./files/mobile/141.jpg","t":"./files/thumb/141.jpg"},{"l":"./files/mobile/142.jpg","n":"./files/mobile/142.jpg","t":"./files/thumb/142.jpg"},{"l":"./files/mobile/143.jpg","n":"./files/mobile/143.jpg","t":"./files/thumb/143.jpg"},{"l":"./files/mobile/144.jpg","n":"./files/mobile/144.jpg","t":"./files/thumb/144.jpg"},{"l":"./files/mobile/145.jpg","n":"./files/mobile/145.jpg","t":"./files/thumb/145.jpg"},{"l":"./files/mobile/146.jpg","n":"./files/mobile/146.jpg","t":"./files/thumb/146.jpg"},{"l":"./files/mobile/147.jpg","n":"./files/mobile/147.jpg","t":"./files/thumb/147.jpg"},{"l":"./files/mobile/148.jpg","n":"./files/mobile/148.jpg","t":"./files/thumb/148.jpg"},{"l":"./files/mobile/149.jpg","n":"./files/mobile/149.jpg","t":"./files/thumb/149.jpg"},{"l":"./files/mobile/150.jpg","n":"./files/mobile/150.jpg","t":"./files/thumb/150.jpg"},{"l":"./files/mobile/151.jpg","n":"./files/mobile/151.jpg","t":"./files/thumb/151.jpg"},{"l":"./files/mobile/152.jpg","n":"./files/mobile/152.jpg","t":"./files/thumb/152.jpg"},{"l":"./files/mobile/153.jpg","n":"./files/mobile/153.jpg","t":"./files/thumb/153.jpg"},{"l":"./files/mobile/154.jpg","n":"./files/mobile/154.jpg","t":"./files/thumb/154.jpg"},{"l":"./files/mobile/155.jpg","n":"./files/mobile/155.jpg","t":"./files/thumb/155.jpg"},{"l":"./files/mobile/156.jpg","n":"./files/mobile/156.jpg","t":"./files/thumb/156.jpg"},{"l":"./files/mobile/157.jpg","n":"./files/mobile/157.jpg","t":"./files/thumb/157.jpg"},{"l":"./files/mobile/158.jpg","n":"./files/mobile/158.jpg","t":"./files/thumb/158.jpg"},{"l":"./files/mobile/159.jpg","n":"./files/mobile/159.jpg","t":"./files/thumb/159.jpg"},{"l":"./files/mobile/160.jpg","n":"./files/mobile/160.jpg","t":"./files/thumb/160.jpg"},{"l":"./files/mobile/161.jpg","n":"./files/mobile/161.jpg","t":"./files/thumb/161.jpg"},{"l":"./files/mobile/162.jpg","n":"./files/mobile/162.jpg","t":"./files/thumb/162.jpg"},{"l":"./files/mobile/163.jpg","n":"./files/mobile/163.jpg","t":"./files/thumb/163.jpg"},{"l":"./files/mobile/164.jpg","n":"./files/mobile/164.jpg","t":"./files/thumb/164.jpg"},{"l":"./files/mobile/165.jpg","n":"./files/mobile/165.jpg","t":"./files/thumb/165.jpg"},{"l":"./files/mobile/166.jpg","n":"./files/mobile/166.jpg","t":"./files/thumb/166.jpg"},{"l":"./files/mobile/167.jpg","n":"./files/mobile/167.jpg","t":"./files/thumb/167.jpg"},{"l":"./files/mobile/168.jpg","n":"./files/mobile/168.jpg","t":"./files/thumb/168.jpg"},{"l":"./files/mobile/169.jpg","n":"./files/mobile/169.jpg","t":"./files/thumb/169.jpg"},{"l":"./files/mobile/170.jpg","n":"./files/mobile/170.jpg","t":"./files/thumb/170.jpg"},{"l":"./files/mobile/171.jpg","n":"./files/mobile/171.jpg","t":"./files/thumb/171.jpg"},{"l":"./files/mobile/172.jpg","n":"./files/mobile/172.jpg","t":"./files/thumb/172.jpg"},{"l":"./files/mobile/173.jpg","n":"./files/mobile/173.jpg","t":"./files/thumb/173.jpg"},{"l":"./files/mobile/174.jpg","n":"./files/mobile/174.jpg","t":"./files/thumb/174.jpg"},{"l":"./files/mobile/175.jpg","n":"./files/mobile/175.jpg","t":"./files/thumb/175.jpg"},{"l":"./files/mobile/176.jpg","n":"./files/mobile/176.jpg","t":"./files/thumb/176.jpg"},{"l":"./files/mobile/177.jpg","n":"./files/mobile/177.jpg","t":"./files/thumb/177.jpg"},{"l":"./files/mobile/178.jpg","n":"./files/mobile/178.jpg","t":"./files/thumb/178.jpg"},{"l":"./files/mobile/179.jpg","n":"./files/mobile/179.jpg","t":"./files/thumb/179.jpg"},{"l":"./files/mobile/180.jpg","n":"./files/mobile/180.jpg","t":"./files/thumb/180.jpg"},{"l":"./files/mobile/181.jpg","n":"./files/mobile/181.jpg","t":"./files/thumb/181.jpg"},{"l":"./files/mobile/182.jpg","n":"./files/mobile/182.jpg","t":"./files/thumb/182.jpg"},{"l":"./files/mobile/183.jpg","n":"./files/mobile/183.jpg","t":"./files/thumb/183.jpg"},{"l":"./files/mobile/184.jpg","n":"./files/mobile/184.jpg","t":"./files/thumb/184.jpg"},{"l":"./files/mobile/185.jpg","n":"./files/mobile/185.jpg","t":"./files/thumb/185.jpg"},{"l":"./files/mobile/186.jpg","n":"./files/mobile/186.jpg","t":"./files/thumb/186.jpg"},{"l":"./files/mobile/187.jpg","n":"./files/mobile/187.jpg","t":"./files/thumb/187.jpg"},{"l":"./files/mobile/188.jpg","n":"./files/mobile/188.jpg","t":"./files/thumb/188.jpg"},{"l":"./files/mobile/189.jpg","n":"./files/mobile/189.jpg","t":"./files/thumb/189.jpg"},{"l":"./files/mobile/190.jpg","n":"./files/mobile/190.jpg","t":"./files/thumb/190.jpg"},{"l":"./files/mobile/191.jpg","n":"./files/mobile/191.jpg","t":"./files/thumb/191.jpg"},{"l":"./files/mobile/192.jpg","n":"./files/mobile/192.jpg","t":"./files/thumb/192.jpg"},{"l":"./files/mobile/193.jpg","n":"./files/mobile/193.jpg","t":"./files/thumb/193.jpg"},{"l":"./files/mobile/194.jpg","n":"./files/mobile/194.jpg","t":"./files/thumb/194.jpg"},{"l":"./files/mobile/195.jpg","n":"./files/mobile/195.jpg","t":"./files/thumb/195.jpg"},{"l":"./files/mobile/196.jpg","n":"./files/mobile/196.jpg","t":"./files/thumb/196.jpg"},{"l":"./files/mobile/197.jpg","n":"./files/mobile/197.jpg","t":"./files/thumb/197.jpg"},{"l":"./files/mobile/198.jpg","n":"./files/mobile/198.jpg","t":"./files/thumb/198.jpg"},{"l":"./files/mobile/199.jpg","n":"./files/mobile/199.jpg","t":"./files/thumb/199.jpg"},{"l":"./files/mobile/200.jpg","n":"./files/mobile/200.jpg","t":"./files/thumb/200.jpg"},{"l":"./files/mobile/201.jpg","n":"./files/mobile/201.jpg","t":"./files/thumb/201.jpg"},{"l":"./files/mobile/202.jpg","n":"./files/mobile/202.jpg","t":"./files/thumb/202.jpg"},{"l":"./files/mobile/203.jpg","n":"./files/mobile/203.jpg","t":"./files/thumb/203.jpg"},{"l":"./files/mobile/204.jpg","n":"./files/mobile/204.jpg","t":"./files/thumb/204.jpg"},{"l":"./files/mobile/205.jpg","n":"./files/mobile/205.jpg","t":"./files/thumb/205.jpg"},{"l":"./files/mobile/206.jpg","n":"./files/mobile/206.jpg","t":"./files/thumb/206.jpg"},{"l":"./files/mobile/207.jpg","n":"./files/mobile/207.jpg","t":"./files/thumb/207.jpg"},{"l":"./files/mobile/208.jpg","n":"./files/mobile/208.jpg","t":"./files/thumb/208.jpg"},{"l":"./files/mobile/209.jpg","n":"./files/mobile/209.jpg","t":"./files/thumb/209.jpg"},{"l":"./files/mobile/210.jpg","n":"./files/mobile/210.jpg","t":"./files/thumb/210.jpg"},{"l":"./files/mobile/211.jpg","n":"./files/mobile/211.jpg","t":"./files/thumb/211.jpg"},{"l":"./files/mobile/212.jpg","n":"./files/mobile/212.jpg","t":"./files/thumb/212.jpg"},{"l":"./files/mobile/213.jpg","n":"./files/mobile/213.jpg","t":"./files/thumb/213.jpg"},{"l":"./files/mobile/214.jpg","n":"./files/mobile/214.jpg","t":"./files/thumb/214.jpg"},{"l":"./files/mobile/215.jpg","n":"./files/mobile/215.jpg","t":"./files/thumb/215.jpg"},{"l":"./files/mobile/216.jpg","n":"./files/mobile/216.jpg","t":"./files/thumb/216.jpg"},{"l":"./files/mobile/217.jpg","n":"./files/mobile/217.jpg","t":"./files/thumb/217.jpg"},{"l":"./files/mobile/218.jpg","n":"./files/mobile/218.jpg","t":"./files/thumb/218.jpg"},{"l":"./files/mobile/219.jpg","n":"./files/mobile/219.jpg","t":"./files/thumb/219.jpg"},{"l":"./files/mobile/220.jpg","n":"./files/mobile/220.jpg","t":"./files/thumb/220.jpg"},{"l":"./files/mobile/221.jpg","n":"./files/mobile/221.jpg","t":"./files/thumb/221.jpg"},{"l":"./files/mobile/222.jpg","n":"./files/mobile/222.jpg","t":"./files/thumb/222.jpg"},{"l":"./files/mobile/223.jpg","n":"./files/mobile/223.jpg","t":"./files/thumb/223.jpg"},{"l":"./files/mobile/224.jpg","n":"./files/mobile/224.jpg","t":"./files/thumb/224.jpg"},{"l":"./files/mobile/225.jpg","n":"./files/mobile/225.jpg","t":"./files/thumb/225.jpg"},{"l":"./files/mobile/226.jpg","n":"./files/mobile/226.jpg","t":"./files/thumb/226.jpg"},{"l":"./files/mobile/227.jpg","n":"./files/mobile/227.jpg","t":"./files/thumb/227.jpg"},{"l":"./files/mobile/228.jpg","n":"./files/mobile/228.jpg","t":"./files/thumb/228.jpg"},{"l":"./files/mobile/229.jpg","n":"./files/mobile/229.jpg","t":"./files/thumb/229.jpg"},{"l":"./files/mobile/230.jpg","n":"./files/mobile/230.jpg","t":"./files/thumb/230.jpg"},{"l":"./files/mobile/231.jpg","n":"./files/mobile/231.jpg","t":"./files/thumb/231.jpg"},{"l":"./files/mobile/232.jpg","n":"./files/mobile/232.jpg","t":"./files/thumb/232.jpg"},{"l":"./files/mobile/233.jpg","n":"./files/mobile/233.jpg","t":"./files/thumb/233.jpg"},{"l":"./files/mobile/234.jpg","n":"./files/mobile/234.jpg","t":"./files/thumb/234.jpg"},{"l":"./files/mobile/235.jpg","n":"./files/mobile/235.jpg","t":"./files/thumb/235.jpg"},{"l":"./files/mobile/236.jpg","n":"./files/mobile/236.jpg","t":"./files/thumb/236.jpg"},{"l":"./files/mobile/237.jpg","n":"./files/mobile/237.jpg","t":"./files/thumb/237.jpg"},{"l":"./files/mobile/238.jpg","n":"./files/mobile/238.jpg","t":"./files/thumb/238.jpg"},{"l":"./files/mobile/239.jpg","n":"./files/mobile/239.jpg","t":"./files/thumb/239.jpg"},{"l":"./files/mobile/240.jpg","n":"./files/mobile/240.jpg","t":"./files/thumb/240.jpg"},{"l":"./files/mobile/241.jpg","n":"./files/mobile/241.jpg","t":"./files/thumb/241.jpg"},{"l":"./files/mobile/242.jpg","n":"./files/mobile/242.jpg","t":"./files/thumb/242.jpg"},{"l":"./files/mobile/243.jpg","n":"./files/mobile/243.jpg","t":"./files/thumb/243.jpg"},{"l":"./files/mobile/244.jpg","n":"./files/mobile/244.jpg","t":"./files/thumb/244.jpg"},{"l":"./files/mobile/245.jpg","n":"./files/mobile/245.jpg","t":"./files/thumb/245.jpg"},{"l":"./files/mobile/246.jpg","n":"./files/mobile/246.jpg","t":"./files/thumb/246.jpg"},{"l":"./files/mobile/247.jpg","n":"./files/mobile/247.jpg","t":"./files/thumb/247.jpg"},{"l":"./files/mobile/248.jpg","n":"./files/mobile/248.jpg","t":"./files/thumb/248.jpg"},{"l":"./files/mobile/249.jpg","n":"./files/mobile/249.jpg","t":"./files/thumb/249.jpg"},{"l":"./files/mobile/250.jpg","n":"./files/mobile/250.jpg","t":"./files/thumb/250.jpg"},{"l":"./files/mobile/251.jpg","n":"./files/mobile/251.jpg","t":"./files/thumb/251.jpg"},{"l":"./files/mobile/252.jpg","n":"./files/mobile/252.jpg","t":"./files/thumb/252.jpg"},{"l":"./files/mobile/253.jpg","n":"./files/mobile/253.jpg","t":"./files/thumb/253.jpg"},{"l":"./files/mobile/254.jpg","n":"./files/mobile/254.jpg","t":"./files/thumb/254.jpg"},{"l":"./files/mobile/255.jpg","n":"./files/mobile/255.jpg","t":"./files/thumb/255.jpg"},{"l":"./files/mobile/256.jpg","n":"./files/mobile/256.jpg","t":"./files/thumb/256.jpg"},{"l":"./files/mobile/257.jpg","n":"./files/mobile/257.jpg","t":"./files/thumb/257.jpg"},{"l":"./files/mobile/258.jpg","n":"./files/mobile/258.jpg","t":"./files/thumb/258.jpg"},{"l":"./files/mobile/259.jpg","n":"./files/mobile/259.jpg","t":"./files/thumb/259.jpg"},{"l":"./files/mobile/260.jpg","n":"./files/mobile/260.jpg","t":"./files/thumb/260.jpg"},{"l":"./files/mobile/261.jpg","n":"./files/mobile/261.jpg","t":"./files/thumb/261.jpg"},{"l":"./files/mobile/262.jpg","n":"./files/mobile/262.jpg","t":"./files/thumb/262.jpg"},{"l":"./files/mobile/263.jpg","n":"./files/mobile/263.jpg","t":"./files/thumb/263.jpg"},{"l":"./files/mobile/264.jpg","n":"./files/mobile/264.jpg","t":"./files/thumb/264.jpg"},{"l":"./files/mobile/265.jpg","n":"./files/mobile/265.jpg","t":"./files/thumb/265.jpg"},{"l":"./files/mobile/266.jpg","n":"./files/mobile/266.jpg","t":"./files/thumb/266.jpg"},{"l":"./files/mobile/267.jpg","n":"./files/mobile/267.jpg","t":"./files/thumb/267.jpg"},{"l":"./files/mobile/268.jpg","n":"./files/mobile/268.jpg","t":"./files/thumb/268.jpg"},{"l":"./files/mobile/269.jpg","n":"./files/mobile/269.jpg","t":"./files/thumb/269.jpg"},{"l":"./files/mobile/270.jpg","n":"./files/mobile/270.jpg","t":"./files/thumb/270.jpg"},{"l":"./files/mobile/271.jpg","n":"./files/mobile/271.jpg","t":"./files/thumb/271.jpg"},{"l":"./files/mobile/272.jpg","n":"./files/mobile/272.jpg","t":"./files/thumb/272.jpg"},{"l":"./files/mobile/273.jpg","n":"./files/mobile/273.jpg","t":"./files/thumb/273.jpg"},{"l":"./files/mobile/274.jpg","n":"./files/mobile/274.jpg","t":"./files/thumb/274.jpg"},{"l":"./files/mobile/275.jpg","n":"./files/mobile/275.jpg","t":"./files/thumb/275.jpg"},{"l":"./files/mobile/276.jpg","n":"./files/mobile/276.jpg","t":"./files/thumb/276.jpg"},{"l":"./files/mobile/277.jpg","n":"./files/mobile/277.jpg","t":"./files/thumb/277.jpg"},{"l":"./files/mobile/278.jpg","n":"./files/mobile/278.jpg","t":"./files/thumb/278.jpg"},{"l":"./files/mobile/279.jpg","n":"./files/mobile/279.jpg","t":"./files/thumb/279.jpg"},{"l":"./files/mobile/280.jpg","n":"./files/mobile/280.jpg","t":"./files/thumb/280.jpg"},{"l":"./files/mobile/281.jpg","n":"./files/mobile/281.jpg","t":"./files/thumb/281.jpg"},{"l":"./files/mobile/282.jpg","n":"./files/mobile/282.jpg","t":"./files/thumb/282.jpg"},{"l":"./files/mobile/283.jpg","n":"./files/mobile/283.jpg","t":"./files/thumb/283.jpg"},{"l":"./files/mobile/284.jpg","n":"./files/mobile/284.jpg","t":"./files/thumb/284.jpg"},{"l":"./files/mobile/285.jpg","n":"./files/mobile/285.jpg","t":"./files/thumb/285.jpg"},{"l":"./files/mobile/286.jpg","n":"./files/mobile/286.jpg","t":"./files/thumb/286.jpg"},{"l":"./files/mobile/287.jpg","n":"./files/mobile/287.jpg","t":"./files/thumb/287.jpg"},{"l":"./files/mobile/288.jpg","n":"./files/mobile/288.jpg","t":"./files/thumb/288.jpg"}];
var language=[{"language" : "English","btnFirstPage" : "First","btnNextPage" : "Next","btnLastPage" : "Last","btnPrePage" : "Previous","btnGoToHome" : "Home","btnDownload" : "Download","btnSoundOn" : "Sound On","btnSoundOff" : "Sound Off","btnPrint" : "Print","btnThumb" : "Thumbnails","btnBookMark" : "Bookmark","frmBookMark" : "Bookmark","btnZoomIn" : "Zoom In","btnZoomOut" : "Zoom Out","btnAutoFlip" : "Auto Flip","btnStopAutoFlip" : "Stop Auto Flip","btnSocialShare" : "Share","btnHelp" : "Help","btnAbout" : "About","btnSearch" : "Search","btnFullscreen" : "Fullscreen","btnExitFullscreen" : "Exit Fullscreen","btnMore" : "More","frmPrintCaption" : "Print","frmPrintall" : "Print All Pages","frmPrintcurrent" : "Print Current Page","frmPrintRange" : "Print Range","frmPrintexample" : "Example: 2,3,5-10","frmPrintbtn" : "Print","frmShareCaption" : "Share","frmShareLabel" : "Share","frmShareInfo" : "You can easily share this publication to social networks.Just click the appropriate button below","frminsertLabel" : "Insert to Site","frminsertInfo" : "Use the code below to embed this publication to your website.","frmaboutcaption" : "Contact","frmaboutcontactinformation" : "Contact Information","frmaboutADDRESS" : "Address","frmaboutEMAIL" : "Email","frmaboutWEBSITE" : "Website","frmaboutMOBILE" : "Mobile","frmaboutAUTHOR" : "Author","frmaboutDESCRIPTION" : "Description","frmSearch" : "Search","frmToc" : "Table Of Contents","btnTableOfContent" : "Table Of Contents","btnNote" : "Annotation","lblLast" : "This is the last page.","lblFirst" : "This is the first page.","lblFullscreen" : "Click to view in fullscreen","lblName" : "Name","lblPassword" : "Password","lblLogin" : "Login","lblCancel" : "Cancel","lblNoName" : "User name can not be empty.","lblNoPassword" : "Password can not be empty.","lblNoCorrectLogin" : "Please enter the correct user name and password.","btnVideo" : "Video Gallery","btnSlideShow" : "Slideshow","pnlSearchInputInvalid" : "The search text is too short.","btnDragToMove" : "Move by mouse drag","btnPositionToMove" : "Move by mouse position","lblHelp1" : "Drag the page corner to view","lblHelp2" : "Double click to zoom in, out","lblCopy" : "Copy","lblAddToPage" : "Add To Page","lblPage" : "Page","lblTitle" : "Title","lblEdit" : "Edit","lblDelete" : "Delete","lblRemoveAll" : "Remove All","tltCursor" : "Cursor","tltAddHighlight" : "Add highlight","tltAddTexts" : "Add texts","tltAddShapes" : "Add shapes","tltAddNotes" : "Add notes","tltAddImageFile" : "Add image file","tltAddSignature" : "Add signature","tltAddLine" : "Add line","tltAddArrow" : "Add arrow","tltAddRect" : "Add rect","tltAddEllipse" : "Add ellipse","lblDoubleClickToZoomIn" : "Double click to zoom in.","lblPages" : "Pages","infCopyToClipboard" : "Your browser dose not support clipboard, please do it yourself.","lblDescription" : "Title","frmLinkLabel" : "Link","infNotSupportHtml5" : "Your browser does not support HTML5.","frmHowToUse" : "How To Use","lblHelpPage1" : "Move your finger to flip the book page.","lblHelpPage2" : "Zoom in by using gesture or double click on the page.","lblHelpPage3" : "Click to view the table of content, bookmarks and share your books via social networks.","lblHelpPage4" : "Add bookmarks, use search function and auto flip the book.","lblHelpPage5" : "Open the thumbnails to overview all book pages.","frmQrcodeCaption" : "Scan the bottom two-dimensional code to view with mobile phone."}];var pageEditor =[]
var pages_information =[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}