var DataModelLunchBox = (function() {
    'use strict';
    // Just so you can see what "this" refers to. It's the global window object.
    // Never attach anything to "this" because then it's a global var/method
    // and you start polluting the global namespace.
  

    // This pattern gives you closure privacy. This is self executing which
    // means you don't have to use the new operator but this is a static/singleton
    // class. Only one instance is created.

    // All methods are private. You don't have to worry about scoping or using
    // "this". If you were to trace out "this", you would get an instance of
    // the global window object. Never use "this" within the module pattern.
    


   
    var dataHeroArray = [];


   
    var themeData = [];
    var contenSubData = [];
   

    var _GlobalData = {};

  
    _GlobalData.dataHeroArray = [];
    _GlobalData.contenSubData = [];
   

    _GlobalData.deeplinkData = [ "/" , "/WindwardPratten"     , "/KeylessPratten"  ,    "/WindwardCombo"       ,    "/KeyedPratten"  ,  "/WindwardCFlute" , /*  "/WindwardDRuddall"  , "/WindwardFFlute"  , */  "/TheMakers" , "/Design"  , "/Craftsmanship"  ,  "/restoration" ,  "/WoodAndMaterials" , "/FAQ" , "/ContactUs"  , "/Orders" , "/Links" , "/PressEvents" , "/Credits" ];

    _GlobalData.menuTitle = [ "/ " , "/ The Windward Pratten"  , "/ Keyless Pratten",    "/ Windward Combo"  ,    "/ Keyed Pratten"   ,  "/ Windward C Flute" , /*"/ Windward D Ruddall and Rose"  , "/ Windward F Flute"  , */  "/ The Makers" , "/ Design"  , "/ Craftsmanship" ,  "/ Restoration &#38; Repair" ,  "/ Wood and Materials"  , "/ FAQ" , "/ Contact Us"  , "/ Orders" , "/ Links" , "/ Press &#38; Events" , "/ Credits"  ];

    _GlobalData.menuNames = [ { btnName:"The Windward Pratten"  , menugroup:"flutes" } ,  { btnName:"&emsp;Keyless Pratten" , menugroup:"flutes" }  ,  { btnName:"&emsp;Windward Combo" , menugroup:"flutes" } ,  { btnName:"&emsp;Keyed Pratten" , menugroup:"flutes" }  , { btnName:"Windward C Flute" , menugroup:"flutes" } /* , { btnName:"Windward D Rudall &#38; Rose" , menugroup:"flutes" } , { btnName:"Windward F Flute" , menugroup:"flutes" }  */ ,  { btnName:"The Makers" , menugroup:"about" }  ,  { btnName:"Design" , menugroup:"about" }   ,   { btnName:"Craftsmanship" , menugroup:"about" } ,  { btnName:"Restoration &#38; Repairs" , menugroup:"about" } ,   { btnName:"Wood and Materials" , menugroup:"about" } ,   { btnName:"FAQ" , menugroup:"about" } , { btnName:"Contact Us" , menugroup:"contact" },  { btnName:"Order" , menugroup:"contact" }, { btnName:"Links" , menugroup:"contact" }, { btnName:"Press &#38; Events" , menugroup:"contact" } , { btnName:"Credits" , menugroup:"contact" }  ]; 

    _GlobalData.menuAlphas = [ /*home*/ .8  , /*windward pratten*/ .6 , /*keyless*/ .8  , /* combo */ .6  , /* keyed*/.4 , /* cflute*/ .8 , /* makers */ .8, /* design */ .8  , /* craftsmanship*/ .8 , /* restorations */ .8 , /* woods */ .8   , /* FAQ */ .6 , /* contact */ .8 ,  /* order */ .8   ,  /* links */ .8   , /* press */ .8 , /* credit */ .8];

     var HeroDataHome = [
            //{ image: SwissArmyKnife.getBaseURL() + "home/Home01.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "home/H01.jpg"   } ,	 
            { image: SwissArmyKnife.getBaseURL() + "home/H02.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "home/H03.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "home/H04.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "home/H05.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "home/H06.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "home/H07.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "home/H08.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "home/H09.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "home/H10.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "home/H11.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "home/H12.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "home/H13.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "home/H14.jpg"   } 
            
            
                
    ];

    var flute1 = [
            
            { image: SwissArmyKnife.getBaseURL() + "home/H03.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "wPratten/P02.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "wPratten/P03.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "wPratten/P04.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "wPratten/P05.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "wPratten/P07.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "wPratten/P08.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "woodoptions/08.jpg"  } ,
            { image: SwissArmyKnife.getBaseURL() + "combo/combo01.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "wPratten/P11.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "wPratten/P12.jpg"   },
            { image: SwissArmyKnife.getBaseURL() + "home/H12.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "home/H02.jpg"   } 

           
                
    ];

     var flute2 = [
           
            { image: SwissArmyKnife.getBaseURL() + "keylessp/p01.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "keylessp/p02.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "keylessp/p03.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "keylessp/p04.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "keylessp/p05.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "keylessp/p06.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "keylessp/p07.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "keylessp/p08.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "keylessp/p09.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "keylessp/p10.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "keylessp/p11.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "keylessp/p12.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "keylessp/p13.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "keylessp/p14.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "keylessp/p15.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "keylessp/p16.jpg"   } 
            
                
    ];

     var flute3 = [
           
            { image: SwissArmyKnife.getBaseURL() + "combo/combo01.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "combo/combo02.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "combo/combo03.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "combo/combo04.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "combo/combo05.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "combo/combo06.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "combo/combo07.jpg"   } 
                
    ];

    var flute4 = [
           
            { image: SwissArmyKnife.getBaseURL() + "Keyed/K01.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Keyed/K02.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Keyed/K03.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Keyed/K04.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Keyed/K05.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Keyed/K06.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Keyed/K07.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Keyed/K08.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Keyed/K09.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Keyed/K10.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Keyed/K11.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Keyed/K12.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Keyed/K13.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Keyed/K14.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Keyed/K15.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Keyed/K16.jpg"   } 
            
                
    ];
         var flute5 = [
           
            { image: SwissArmyKnife.getBaseURL() + "Cflute/cf01.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Cflute/cf02.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Cflute/cf03.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Cflute/cf04.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Cflute/cf05.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Cflute/cf06.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Cflute/cf07.jpg"   } 
                
    ];
     var flute6 = [
           
            { image: SwissArmyKnife.getBaseURL() + "Pratten/P01.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Pratten/P02.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Pratten/P03.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Pratten/P04.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Pratten/P05.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Pratten/P07.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Pratten/P08.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Pratten/P09.jpg"   } 
            
                
    ];
     var flute7 = [
           
            { image: SwissArmyKnife.getBaseURL() + "Pratten/P01.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Pratten/P02.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Pratten/P03.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Pratten/P04.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Pratten/P05.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Pratten/P07.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Pratten/P08.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "Pratten/P09.jpg"   } 
            
                
    ];


    var theMakers = [

            { image: SwissArmyKnife.getBaseURL() + "creators/yofo.png"  } ,	
            { image: SwissArmyKnife.getBaseURL() + "creators/anvil_and_hammer.jpg"  } ,
            { image: SwissArmyKnife.getBaseURL() + "creators/cutting_vice.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "creators/forbes_lathe.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "creators/melting.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "creators/yola_keys.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "creators/yola_keys2.jpg"   } 
            
                
    ];

    var Design = [
            
            { image: SwissArmyKnife.getBaseURL() + "design/D01.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "design/D02.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "design/D03.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "design/D04.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "design/D05.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "design/D06.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "design/D07.jpg"   } 
            
                
    ];

    var craftsmanship = [
            
            { image: SwissArmyKnife.getBaseURL() + "craftsmanship/C01.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "craftsmanship/C02.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "craftsmanship/C03.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "craftsmanship/C04.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "craftsmanship/C05.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "craftsmanship/C06.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "craftsmanship/C07.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "craftsmanship/C08.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "craftsmanship/C09.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "craftsmanship/C10.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "craftsmanship/C11.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "craftsmanship/C12.jpg"   } 
            
                
    ];
	
    var restoration = [
            
            { image: SwissArmyKnife.getBaseURL() + "restorations/R01.png"   } ,
            { image: SwissArmyKnife.getBaseURL() + "restorations/R02.png"   } 
                
    ];	

    var WoodAndMaterials = [
            
            { image: SwissArmyKnife.getBaseURL() + "woodoptions/01.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "woodoptions/02.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "woodoptions/03.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "woodoptions/04.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "woodoptions/05.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "woodoptions/06.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "woodoptions/07.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "woodoptions/08.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "woodoptions/09.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "woodoptions/10.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "woodoptions/11.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "woodoptions/12.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "woodoptions/13.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "woodoptions/14.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "woodoptions/15.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "woodoptions/16.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "woodoptions/17.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "woodoptions/18.jpg"   } 
            
                
    ];

    var FAQ = [
            
            { image: SwissArmyKnife.getBaseURL() + "bts/bts01.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "bts/bts02.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "bts/bts03.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "bts/bts04.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "bts/bts05.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "bts/bts06.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "bts/bts07.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "bts/bts08.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "bts/bts09.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "bts/bts10.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "bts/bts11.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "bts/bts12.jpg"   } 
            
                
    ];

    var contactUs = [
            
            { image: SwissArmyKnife.getBaseURL() + "contact/01.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/02.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/03.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/04.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/05.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/06.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/07.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/08.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/09.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/10.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/11.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/12.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/13.jpg"   } 
            
                
    ];

    var order = [
            
            { image: SwissArmyKnife.getBaseURL() + "order/01.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "order/02.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "order/03.jpg"   } 
                
    ];

    var links = [
            
            { image: SwissArmyKnife.getBaseURL() + "contact/01.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/02.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/03.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/04.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/05.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/06.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/07.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/08.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/09.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/10.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/11.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/12.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/13.jpg"   } 
            
                
    ];

    var press = [
            
            { image: SwissArmyKnife.getBaseURL() + "contact/01.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/02.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/03.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/04.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/05.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/06.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/07.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/08.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/09.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/10.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/11.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/12.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/13.jpg"   } 
            
                
    ];    
    var credits = [
            
            { image: SwissArmyKnife.getBaseURL() + "contact/01.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/02.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/03.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/04.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/05.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/06.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/07.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/08.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/09.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/10.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/11.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/12.jpg"   } ,
            { image: SwissArmyKnife.getBaseURL() + "contact/13.jpg"   } 
            
                
    ];    


    _GlobalData.dataHeroArray[0] = HeroDataHome;
    _GlobalData.dataHeroArray[1] = flute1;
    _GlobalData.dataHeroArray[2] = flute2;
    _GlobalData.dataHeroArray[3] = flute3;
    _GlobalData.dataHeroArray[4] = flute4;
    _GlobalData.dataHeroArray[5] = flute5;
    _GlobalData.dataHeroArray[6] = theMakers;
    _GlobalData.dataHeroArray[7] = Design;
    _GlobalData.dataHeroArray[8] = craftsmanship;
    _GlobalData.dataHeroArray[9] = restoration;
    _GlobalData.dataHeroArray[10] = WoodAndMaterials;
    _GlobalData.dataHeroArray[11] = FAQ;
    _GlobalData.dataHeroArray[12] = contactUs;
    _GlobalData.dataHeroArray[13] = order;
    _GlobalData.dataHeroArray[14] = links;
    _GlobalData.dataHeroArray[15] = press;
    _GlobalData.dataHeroArray[16] = credits;

 
 
    _GlobalData.contenSubData = [

        { type:"3ColumnView" , rowCount:'1' , hasVideo0: "false" , youtubeid0: "u1zgFlCw8Aw" , header0: "Welcome" , img0:SwissArmyKnife.getBaseURL() +"homethumb.jpg"  , subHeader0: "Welcome to Windward Flutes  makers of fine Celtic flutes, located in the historic heart of Shelburne, on the Southwest shore of Nova Scotia. Windward also repairs and restores antique wooden flutes to a museum standard. </p><p class='p1s'> Windward Flutes started in 2001 as a small company repairing conical bore simple system wooden flutes. Forbes and Yola Christie moved operations to Nova Scotia in 2004, built a new flutemaking workshop and began developing the finely crafted Irish flutes that Windward makes today for musicians worldwide.</p>" ,  copy0: "Forbes had previously spent fourteen years working in the metal flute industry, first at Brannen Brothers Flutemakers, then as manager of the body department at V. Q. Powell Flutes.</p><p>Yola is a graduate of the Rhode Island School of Design, studied with British and American silversmiths, and ran her own silversmithing business in Massachusetts. </p><p>Together they design and manufacture their own flutes. Forbes does the machining, makes jigs and tools and carves the embouchures; Yola executes keywork and finish, makes the flute blanks, and runs production. </p><p>The aim of the company is to develop and produce consistently excellent taper-bore wooden flutes to modern tuning and in various pitches. </p> " } , 


        { type:"3ColumnView" , rowCount:'4' , hasVideo0: "true" , youtubeid0: "3njLgqOQ37c", header0: "The Windward Pratten" , img0:SwissArmyKnife.getBaseURL() +"Pratten/pratten.jpg"  , subHeader0: "The Windward Pratten is available in D or Eb, and can be ordered as a keyed or keyless flute, as can the Windward Combo (patent pending) which is an Eb/D convertible pitch flute. All share the same bore.</p><p class='p1s'>We derived the measurements for the Windward Pratten centre-joint reamer from three Hawkes Pratten flutes and two Boosey Prattens that were typical of the English taper bore flutes circa 1860. These old survivors still make a great sound, but to the modern ear they display a few flaws in common. The A is sharp, the F# is flat, the E is weak, and sometimes the flute has been tuned to English High Pitch with A as high as 456. </p> ", copy0: "<p>In developing the Windward version of the Pratten flute, our goals were to retain the best qualities of the original instruments, to set the pitch at 440, to eliminate tuning irregularities, and to improve the octave balance. If we are to believe the feedback from our players, we have achieved what we set out to do.</p><p>Our head-joints are unlined to show-off the inherent resonance in the tone wood, and the tuning-slides are made of Cupro-Nickel, which is a more durable metal than silver.</p><p>We designed four main embouchure cuts to suit different playing styles. Each one is easy to sound though it can take a lot of air, and each one enables rapid articulation. This allows the player to achieve a wide dynamic range with a broad tone palette and to stretch his or her potential. The embouchure can be custom cut if the player attends the ceremony! </p><p>We believe that a well formed embouchure is to the flute, what a good bow is to the violin. It allows the player to pull from the instrument what it is capable of giving. The Windward Pratten is an accessible instrument for the beginner and still rewards the advanced player.</p>"    } ,


        { type:"3ColumnView" , rowCount:'1' , hasVideo0: "true" , youtubeid0: "bmy60BGdlMU", header0: "Keyless Pratten" , img0:SwissArmyKnife.getBaseURL() +"end.jpg"   , subHeader0: "This excellent sessions flute has a wide dynamic range. It is sweet and soulful on the slow airs, articulate and quick on jigs and reels, and loud when its called for. </p>" ,   copy0:"The flute’s strong bottom-end allows the the player to punch a good hard D, and the intrinsic stability of the Windward bore facilitates crans, rolls and other ornamentation. Our keyless Pratten has an easily accessible 2½ octave range.</p><p>The flute has a tuning slide and a stopper which can be adjusted by rotating the end-cap, thus making it possible to fine tune the octaves, or explore other modalities with ease. This sessions flute can be ordered in either D or Eb. Some of the options available include a C thumb hole, offset finger holes, a single Eb key on the foot-joint,  a choice between various combinations of flute-wood and trim, and in woods other than Grenadilla, which doesn’t demand it, grain-matched flute sections, cut from one single long billet of Mopane, African Olive, or Pink Ivory, for example.</p>" } ,

	
		
        { type:"3ColumnView" , rowCount:'1' , hasVideo0: "true" , youtubeid0: "u0a5Q3RGx74", header0: "Windward Combo" , img0:SwissArmyKnife.getBaseURL() +"combo/combothumb.jpg"   , subHeader0: "The Windward Eb/D convertible pitch flute (patent pending) with an accurate scale in both D and Eb is a terrific instrument for the player who enjoys performing in both pitches.</p><p class ='p1s'></p>" ,   copy0:" This is a six piece instrument, with a head-joint and centre joint, two tuning-slides and two foot-joints. Simply by switching the D tuning slide for the Eb slide, and the D foot-joint for the Eb foot, the player transforms the D Pratten into an E-flat Pratten.</p><p>The exceptional tuning in both Eb and D is made possible by design elements in the bore and acoustic engineering in the foot-joint. It is further assisted by skillful undercutting during the final tuning process.</p><p>Although the centre-joint and head-joint are retained for both iterations of the Combo, it is curious to note that the tone character of the Eb combo often sounds playful and quite different from the more serious D combo.</p> " } ,



        { type:"3ColumnView" , rowCount:'1' , hasVideo0: "true" , youtubeid0: "ZY1ZH6xGGm0", header0: "Keyed Pratten" , img0:SwissArmyKnife.getBaseURL() +"end.jpg"   , subHeader0: "The Windward “simple system” keyed Pratten is a versatile, richly toned flute with all the qualities of our keyless Pratten. It spans a full three octaves, and is a fine instrument for most genres of music... Celtic and Jazz, as well as chamber and orchestral performance.</p>" ,   copy0:"The keys are hand-forged in sterling silver, mounted on integral wood key-blocks, and sprung using the traditional phosphor-bronze flat springs. Because each key is individually hand forged, the keys can be custom formed to suit the player’s hand, which may be helpful for those players with smaller hands or past injuries. The aesthetic of our keys complements the spare elegance of the standard Windward flute. By special order, we make brass, bronze or silver seat inserts for each keyed tone-hole. Our pads are white or black Valentino Greenbacks, custom made for us by J. L. Smith & Co." } ,
  
   
        { type:"3ColumnView" , rowCount:'1' , hasVideo0: "false" , youtubeid0: "ZY1ZH6xGGm0", header0: "Windward C Flute" , img0:SwissArmyKnife.getBaseURL() +"Cflute/endcap.jpg"   , subHeader0: "What is outstanding about the Windward C flute is the rich bell note, solid lower register and sonority of tone throughout the available three octaves. </p>" ,   copy0:"We copied the bore design of a fine old Dutch baroque instrument, modifying it slightly to increase the volume in the right hand. By repositioning and opening the tone-holes and by cutting a more aggressive embouchure we were able to bring the tuning up to date and increase the overall volume of the flute.</p><p>Our C flute bore is responsive with any embouchure cut, and the flute’s appearance displays the standard Windward simple and streamlined exterior. It can currently be ordered without keys, or with one foot-joint key." } ,
                
  
         { type:"3ColumnView" , rowCount:'3' , hasVideo0: "false" , youtubeid0: "u1zgFlCw8Aw", header0: "Windward Flutes" , img0:SwissArmyKnife.getBaseURL() +"creators/teamwork.jpg"   , subHeader0: "Windward Flutes, owned by Forbes and Yola Christie, has been making and restoring wooden flutes in Nova Scotia since 2004. Prior to this, Forbes was a flutemaker in Boston and Yola ran her own silversmithing business.</p>" ,   copy0:"As a flutemaking team, they are complementary craftsmen and well matched. Forbes has been making flutes for 20 years and brings machining and tool making skills to the work, and Yola, a silversmith with 30 years of experience, brings a talent for design in metal and a sound knowledge of materials. Windward combines the quality of the Boston flutemaking tradition with Forbes’s and Yola’s passion for the 19th century wooden flute. Their instruments are enjoyed by Celtic, Jazz and Classical musicians.</p>"
         
        , hasVideo1: "false" , youtubeid1: "u1zgFlCw8Aw", header1: "Forbes" , img1:SwissArmyKnife.getBaseURL() +"creators/forbes.png"   , subHeader1: "Forbes’s lifelong fascination with airflow and his RAF background in general engineering and machining were a suitable growth medium for the flutemaker. </p>" ,   copy1:"Forbes began his ﬂutemaking career at Brannen Brothers Flutemakers in Boston, where he apprenticed with Conrad Marvin. After ten years at Brannen, he moved to V.Q. Powell where he headed the body department, running production and training apprentices.  While he was still working for Powell, he and Yola started to collect and restore 19th century wooden flutes, and this led to the inception of their company. </p>"
        
        , hasVideo2: "false" , youtubeid2: "u1zgFlCw8Aw", header2: "Yola" , img2:SwissArmyKnife.getBaseURL() +"creators/yola.png"   , subHeader2: "Yola’s early interest in design, tools and materials blossomed during her years at the Rhode Island School of Design, where she was fortunate to study with teachers like Harry Callahan for photography, Tage Frid for wood, and Jack Prip for silver.</p> " ,   copy2:"<p>Yola worked for several years as a graphic designer for Librairie Hachette in Paris, then moved to Scotland to teach art and design and to pursue further studies in silversmithing. This led to a spell in the magical Orkney Islands to study with David Hodge, Silversmith to the Queen and an old friend of Forbes’s family. It was there that she met Forbes and a year later they married in Scotland.</p><p>They spent their first years together in Wales and England, and moved to the United States in 1984 with their three children. Once the kids had flown the coop, Forbes and Yola moved to Canada, and settled in Nova Scotia. Their only regret, looking back, is that they did not begin collecting simple system flutes in the 1970’s, when you could buy one for a song!</p>" } ,



        { type:"3ColumnView" , rowCount:'1' , hasVideo0: "false" , youtubeid0: "u1zgFlCw8Aw", header0: "Design" , img0:SwissArmyKnife.getBaseURL() +"design/design.jpg"   , subHeader0: "The acoustic component in the design of each Windward flute is borrowed from a particular instrument made in the 1800&apos;s.</p><p class='p1s'>To develop a flute in a given pitch, we meticulously measure a 19th century instrument in the desired pitch, choosing one with a good pedigree and track record!  Then we make minor modifications to those measurements, where we think acoustic improvement is possible, and draw those changes into the design for the new reamer.</p>" ,   copy0:"</p><p>By experimenting on prototypes cut with the new reamer, we work out any change in size or position of the new tone-holes. We shape the embouchure, and undercut the tone-holes to bring the new flute into focus, letting us know if further adjustments are needed before launching the production instrument.</p><p>Tonality is certainly the most important element in the design a flute, but if the sound delights, so too should the look and feel of the instrument. We celebrate the beauty of the wood through simple lines, reserved detailing and a assiduous finishing system.</p><p>Our aim is to make a flute that is a joy to play, that will stand up to the demands of a serious musician over time, and though it may be sturdy, is also lovely in appearance.</p> " } ,

	
	
		
        { type:"3ColumnView" , rowCount:'6' , hasVideo0: "false" , youtubeid0: "u1zgFlCw8Aw", header0: "Craftsmanship" , img0:SwissArmyKnife.getBaseURL() +"craftsmanship/craftfan.jpg"   , subHeader0: " To successfully pursue the flutemaker's craft, one needs good tools and hand skills, an understanding of airflow, a knowledge of materials, an eye for proportion, and the trained ear of an experienced musician and flute player.</p><p class='p2E'>Every flutemaker's workshop is distinct from any other, and is shaped by the background interests and training of the makers, as well as the priorities of that particular shop. </p> <p class='p2E'>Because makers come to flutemaking from different disciplines, their strengths and weaknesses in the craft are in different areas. The diversity of knowledge and the proficiencies involved in flutemaking lead each maker to discover his own methods and tools. The influences on every maker are different as are the connections they build with players, suppliers, other makers with whom they share ideas and so on. </p>" ,   copy0:"For the most part, flutemakers must figure out for themselves how to get from the billet to the flute, and to that end, they invent their own methods, devise tools and jigs, find their preferred materials sources, and use what is available to them in order to arrive at the finished instrument.</p><p>In our shop, procedures are constantly evolving as we seek quicker and more accurate approaches to production problems. When we implement a different method of tooling, design a new jig, or buy that new tool-post or that upgrade for the lathe, any one of these changes can revolutionize our process, while improving quality and reducing production time. A new tool often redefines the process.</p><p>It is in part because of modern manufacturing methods that our flutes are aesthetically so different from their forebears. Facilitated by tools like digital calipers and flexible shaft drills and by new materials like epoxies and carbon fibre, design and manufacturing methods free us to go in new directions. Still, in some areas of flutemaking we embrace traditional materials and old methods of working when they continue to prove unbeatable. A few examples of our design and manufacturing choices are listed below.</p>"

	, hasVideo1: "false" , youtubeid1: "u1zgFlCw8Aw", header1: "" , img1:SwissArmyKnife.getBaseURL() +"craftsmanship/profile.jpg"   , subHeader1: "<p class='p1c'>Flute Profile</p><p class='p2E'> Flush rings at the joints along the flute require an exact concentric alignment of flute sections. Any eccentric anomalies where the flute sections meet, would be more obvious with flush detail rings, particularly where the head-joint meets tuning-slide. </p>" ,   copy1:" <p class='p1c'>Grain Match</p><p> Matching the grain and colour along the length of the flute, in wood other than Grenadilla, requires patience, focus, imagination and luck! We make the flute sections from several carefully matched pieces of wood, or from one long billet. Our “single billet” flute is matched perfectly from head to foot, but long billets of tropical hardwood are costly and not always easy to obtain, thus we take pains to find close matching pieces of similar grain and colour, when using more than one billet to make the flute. </p>" 

         , hasVideo2: "false" , youtubeid2: "u1zgFlCw8Aw", header2: "" , img2:SwissArmyKnife.getBaseURL() +"craftsmanship/windings.jpg"   , subHeader2: "<p class='p1c'>Waxed Silk Thread</p><p class='p2E'> Waxed silk thread is Windward’s choice for wrapping the tenons. Windings add strength to the tenon, and the wax maintains the wrap and further protects against standing moisture. Unlike cork, silk thread windings can be adjusted when the joint moves in response to changes in ambient conditions. If waxed silk thread of the proper gauge is applied with a modicum of common sense and maintained with care, windings will not distort the tenons over time, but will only add strength. Judiciously adjusting the fit of the tenon mitigates the possibility of a cracked socket. </p>" ,   copy2:"<p class='p1c'>Contrasting Wood Rings</p><p>The contrasting wood detail rings are reinforced with carbon fibre, making them  more time consuming to fit, but this allows us to safely detail the flute in lovely wood, achieving a subtle and distinctive aesthetic. </p>" 

	 , hasVideo3: "false" , youtubeid3: "u1zgFlCw8Aw", header3:"" , img3:SwissArmyKnife.getBaseURL() +"craftsmanship/mouth.jpg"   , subHeader3: "<p class='p1c'>The Embouchure<p class='p2E'>This starts as a small drilled hole and is carefully hand carved, with attention to every angle, radius, sharp edge and surface that will be left to form the embouchure. Being hand cut, each one is unique, but the knowledge of over/undercutting and the thinking behind them gives a certain signature to our embouchures. They are made to respond easily, project well, and offer the player a range of colour options and dynamic possibilities.</p>" ,   copy3:"<p class='p1c'>Out of Sight</p><p>The hidden elements like the cork face or combings, are made with the same attention to detail as any external feature seen on the flute. We imagine this offers a pleasant surprise for anyone who more closely inspects the construction of the instrument." 

	 , hasVideo4: "false" , youtubeid4: "u1zgFlCw8Aw", header4: "" , img4:SwissArmyKnife.getBaseURL() +"craftsmanship/crowns.jpg"   , subHeader4: "<p class='p1c'>Finishing Touch</p><p class='p2E'>Our finish protects the instrument, brings out the colour and grain of the wood, feels smooth and pleasant to touch, has no apparent smell and is easily maintained. The finish we have developed is not a simple surface application to the wood at the end of its manufacture, but rather it is the result of a series of treatments, in which a natural hardening oil is applied, soaks into the wood, is fine sanded and allowed to “rest” between treatments. This process is ongoing from start to finish, treating the wood during the whole period of the flute’s manufacture. </p>" ,   copy4:"<p class='p1c'>The Crown</p><p>The detail on the endcap playfully expresses the character of the wood and accent material of a given flute. Though it is a small part of the instrument, the endcap is nevertheless the “crown” and deserving of attention. Making the adjustable end-cap is an opportunity to have a little fun, and though it is disproportionately time consuming to make, we feel it to be worthwhile. </p> " 

         , hasVideo5: "true" , youtubeid5: "uyOqPRpy1Gg", header5: "Testing and Voicing the Flute" , img5:SwissArmyKnife.getBaseURL() +"craftsmanship/testing.jpg"   , subHeader5: "We work with an orchestral player and professor of flute performance to objectively test and evaluate our flutes, when they are ready for voicing. She plays a crucial role in achieving consistency in the tuning of the instruments." ,   copy5:" Her objective approach, disciplined embouchure and ability to resist the natural urge to correct “off” notes, is partnered with Forbes’s skill, as he undercuts the tone-holes, refines the embouchure and vents the foot-joint to ensure tonal accuracy.</p><p>Many flutes come off the workbench needing little adjustment, as can be seen in the video under this heading. These flutes are quick to sing, and require only minor amendment during the final tuning session. Others put up a fight, and demand that we take more adventurous measures to bring out the voice of the flute.</p>" },
	


		
        { type:"3ColumnView" , rowCount:'1' , hasVideo0: "false" , youtubeid0: "u1zgFlCw8Aw", header0: "Restoration" , img0:SwissArmyKnife.getBaseURL() +"restorations/repair.jpg"  , subHeader0:"<p class='p1s'>In restoring an historically valuable flute, our goal is to return it to its former playable condition while limiting repairs so as to retain as much of the original flute as possible. </p> ", copy0:"This conservation strategy takes into consideration the instructions of the customer as well as the historical significance of the instrument. We inspect and evaluate the instrument, making a list of repairs needed, and discuss the work with the owner before beginning any work on the flute.<p> When restoring an instrument, we first stabilize the wood if necessary to prevent further deterioration, then we begin repairs which may include such things as removing oxidation and dirt from the bore and mechanism, revitalizing the wood with appropriate oils, separating jammed sections of the flute, closing and bonding cracks, repairing key-work, rebuilding broken and missing parts.  "  },
	


		
         { type:"3ColumnView" , rowCount:'2' , hasVideo0: "true" , youtubeid0: "D-Yo_hZOeDo", header0: "Wood" , img0:SwissArmyKnife.getBaseURL() +"woods.jpg"  , subHeader0: "Our flutes are made of dense tropical woods, selected for their tone quality, integrity and beauty. We do not use endangered species of wood.</p><p class='p1s'>We use primarily African Olive, Grenadilla and Mopane, but flutes in Kingwood, Pink Ivory wood, Tulipwood or Verawood can be specially ordered, if we have seasoned billets in stock.  In our shop, boxwood is mainly used for detailing and restoration. </p>" ,  copy0:"We store the wood in a controlled environment for three or more years, to season and stabilize the billets, before they are gun-drilled and cut into flute blanks. Then, to prepare it for the real world, each blank lives through a year in ambient conditions while it is made into a flute.</p><p>Grenadilla is the favourite of the traditional player, but we also recommend Mopane and African Olive, not just for their tone quality and appearance but also for their hypoallergenic attributes. Mopane and African Olive woods compete well with African Blackwood in sound quality, and sometimes demonstrate a richer tone, once the flute is well played-in.</p><p>There are several tropical hardwoods like cocus and cocobolo that we do not stock despite their recognized use for wind instruments, because they are commonly the cause of allergy.</p><p>We import our the African tonewoods directly from a certified wood cutter in South Africa, who offers a consistently reliable music grade timber. Non-African tropical hardwoods like Kingwood, Tulipwood and Verawood, we obtain from suppliers in the US and Canada.</p>"
		
        , hasVideo1: "false" , youtubeid1: "u1zgFlCw8Aw", header1: 'Other materials' , img1:SwissArmyKnife.getBaseURL() +"end.jpg"   , subHeader1: "For a given application, we seek the best available material, and keep an open mind to its performance and to alternative product options.</p>  " ,   copy1:" For example, we test the epoxies for flexion, strength and endurance, and we analyze pure hardening oils for in-depth wood protection, speed of hardening, surface sheen and the ability to preserve and enhance the natural colour of the wood.</p><p>The keys are sterling silver. The rings are made of sterling silver, contrasting flute wood reinforced with carbon fibre, or bronze which is lighter and stronger than silver. </p><p>To care for the flute and properly maintain the bore, cork and tuning-slide, we recommend the products of Alisyn Lubricants.  We make Windward’s own windings wax to hold the waxed silk thread on our tenon windings.  </p>" } ,

        { type:"3ColumnView" , rowCount:'2' , hasVideo0: "false" , youtubeid0: "u1zgFlCw8Aw", header0: "" , img0:SwissArmyKnife.getBaseURL() +"end.jpg"   , subHeader0: "<p class='p1l'>FAQ</p>" ,   copy0:"<p class='p1c'>How long does it take to make a flute?</p><p class='p2'>You could say that it takes around 45 hours to make, finish and tune a keyless flute. That is, if you only count production “man hours” for making the flute sections and all the small parts that make up instrument, like tuning slide tubes, rings, adjustable stoppers, inlaid end-caps, etc. But if you also include the time for seasoning the wood billets, and the weeks for the blank to settle each time a section has been cut, turned, gun-drilled or reamed, and the days to allow the toughened epoxies to cure after parts are bonded, and time needed for the finishing oils to soak into the wood and harden after each treatment during the months of manufacture, then the total time would be closer to four years.<\p><p class='p2'>For a keyed flute add another few months... for block mount milling and drilling, key-making, fitting, padding and polishing!</p><p class='p1s'>What is the wait time for a flute?<p class='p2'> There are usually keyless flutes in stock. If the flute you want is not in stock, we can fill and order within a period four to eight months depending on available seasoned wood in our stores. Keyed flutes are only made on commission and take an average of 24 months from the date of order to shipping. </p><p class='p1s'>How do I play-in my new flute properly?</p><p class='p2'>One of the most important things you can do in caring for your new instrument is to follow our playing-in schedule. Here is a flute teacher’s more detailed version which you can check off and make notes as you go.<p class='p1s'>How do I care for my new flute?</p><p class='p2'> Please take a good look at the pdf entitled <b><a href='assets/2013WindwardCare.pdf' target='_blank'>Windward Care</a></b>. When your flute is brand new, be sure to follow the “playing-in” schedule and instructions. This will add many years to the life of instrument and will prevent the risk of cracking the flute by over-playing it, before it has had a chance to slowly season with moisture and bore oil. Good maintenance habits also help you get to know your instrument, and your flute will give back tenfold when it is well cared for.</p> <p class='p1s'>I am a beginner, is this an appropriate flute for me?</p><p class='p2'>Every Windward flute is accessible to the beginner. The embouchure cut requires minimal air, and new players are often surprised at how easy our flutes are to sound. Yet the flute will give more of its complexity, nuance and colour as it is played-in, and as the player improves. We are frequently told that the Windward instrument itself gets better and better the more it is played, and we do not argue that this is entirely due the player’s developing ability. The flute improves with the player, and it seems the player does not outgrow the flute.</p><p class='p1s'>Keyed flute or keyless?</p><p class='p2'>Flute teachers often recommend to beginners, that they learn to play a keyless Irish flute before they start playing one with keys. We do not retrofit keys onto a keyless flute. Many players order a keyed flute as a second Windward, and continue to play both in their repertoire. </p><p class='p1s'>Can I come to Nova Scotia to pick up my flute?</p><p class='p2'>Anyone who wishes to visit the Windward workshop will be made welcome, but please make an appointment so we know you are coming. On the Saturday of the Boxwood Festival in Lunenburg, we often open the workshop to participants at the festival who might want to see how the flutes are made, visit the town of Shelburne, and perhaps dine at the <a href='http://www.charlottelane.ca'>Charlotte Lane Cafe</a> next door, which was recently awarded “Best Small Restaurant in the Maritimes” !</p><p class='p1s'>How does the Nova Scotia sales tax compare to the cost of shipping? </p><p class='p2'>If a customer wants to pick up their flute at the Windward workshop, it is important that they inform themselves about the Nova Scotia sales tax (HST), which we must charge on any inhouse sale. then they can weigh the pros and cons of paying that tax when picking up the flute instead of having it shipped.</p><p class='p1s'>What is the difference between the various woods?</p><p class='p2'> What is the difference between the various woods? The answer is somewhat subjective when discussing the part that wood type plays in tone quality, and tone  depends on other factors as well, like the embouchure, the bore, and the player.</p><p class='p2'><b>Grenadilla</b>, also known as African blackwood, has been the favourite flute wood for the trad player. It is dense and resinous, and a Grenadilla flute gives a good “bark” and has plenty of volume. One drawback is that the resins in this wood can cause contact dermatitis.</p><p class='p2'><b>Mopane</b> is equal to Grenadilla, and often takes on a richer and more complex tone than its rival, after a few months of playing. Mopane flutes come in many shades of brown, with different grain patterns. The wood has a rich tone quality, and is hypo-allergenic.</p><p class='p2'><b>African Olive</b> is another hypo-allergenic flute wood. It’s density varies more from tree to tree than does Mopane or Grenadilla, so its potential is less easy to categorize. A flute can be sweet, yet a real honker. It can play whisper tones, then blow you out of your seat. Whatever the case, an African Olive flute gives the most tactile feedback in the player’s hands. </p><p class='p2'>A flute made of any one of these three can dominate a session with a good embouchure and in the right hands.</p> <p class='p1s'>  If you have a question, please <a href=mailto:info@windwardflutes.com?Subject='web questions'>email it to us.</a>  </p>" 
        
        , hasVideo2: "false" , youtubeid2: "u1zgFlCw8Aw", header2: '' , img2:SwissArmyKnife.getBaseURL() +"w.jpg"   , subHeader2: "If you have a question you, please <a href='mailto:info@windwardflutes.com?Subject=Question'>email it to us</a>." , copy2:"" 
/*        
        , hasVideo8: "false" , youtubeid8: "u1zgFlCw8Aw", header8: '' , img8:SwissArmyKnife.getBaseURL() +"g2.png"   , subHeader8: "  " , copy8:""        
*/                
        
        } ,


        { type:"3ColumnView" , rowCount:'1' , hasVideo0: "false" , youtubeid0: "u1zgFlCw8Aw", header0: "Contact Us" , img0:SwissArmyKnife.getBaseURL() +"creators/yofothumb.png"   , subHeader0: "Thank you for visiting our website. We welcome your comments and feedback, and we will respond to any inquiries.</p><p class='p1s'>If you would like to buy a Windward instrument, we will try to assist you in the choice of flute that best fulfills your expectations. We care about our customers as we do our flutes, and like any good matchmaker, we want the player and the flute to have a long and happy relationship!</p><p class='p1s'>Feel free to <a href=mailto:info@windwardflutes.com?Subject='>contact us</a> about the available options. </p>" ,   copy0:"phone: 902-875-3207<br><a href=mailto:info@windwardflutes.com?Subject=>info@windwardflutes.com</a> <br><br>  11 Charlotte Lane<br>Box 1777<br>Shelburne Nova Scotia<br>B0T 1W0, Canada<br>" 
        
        
        } ,

		{ type:"3ColumnView" , rowCount:'2' , hasVideo0: "false" , youtubeid0: "u1zgFlCw8Aw", header0: "Order" , img0:SwissArmyKnife.getBaseURL() +"creators/yofothumb.png"   , subHeader0: " You may order a flute to your exact specifications or ask us about flutes we have in our inventory. Please send us an <a href='mailto:info@windwardflutes.com?Subject=order'>email if you would like more information.</a></p> " ,   copy0:"<p class='p1s'> Please view our latest <b><a href='assets/2013Prices.pdf' target='_blank'> price list </a></b></p> <p class='p1s'> Please view our <b><a href='assets/2013WarrantyPolicy.pdf' target='_blank'> warranty and policy pdf </a></b></p> <p class='p1s'> Please view our <b><a href='assets/2013WindwardCare.pdf' target='_blank'> Flute Care pdf </a></b></p>" 
 
		, hasVideo1: "false" , youtubeid1: "u1zgFlCw8Aw", header1: 'Sellers' , img1:SwissArmyKnife.getBaseURL() +"woods.jpg"   , subHeader1: "  " , copy1:"For customers living in the States, flutes available for purchase, and expert advice on our flutes can be obtained from Patrick Jones at the Irish flute Store in Buhl, Idaho, Hanz Araki in Portland Oregon, and David Stimson in Boothbay, Maine.</p><p> <a href='http://shop.irishflutestore.com/' target='_blank'>Patrick Jones</a></p><p><a href='mailto:davidstimson@gwi.net?subject=Windward Flutes Order'>David Stimson near Portland, Maine</a></p><p><a href='mailto:hanzaraki@gmail.com?subject=Windward Flutes Order'>Hanz Araki in Portland Oregon</a></p>"   
  
  } ,

 
  { type:"3ColumnView" , rowCount:'1' , hasVideo0: "false" , youtubeid0: "u1zgFlCw8Aw", header0: "" , img0:SwissArmyKnife.getBaseURL() +"creators/yofothumb.png"   , subHeader0: "<p>Links</p><p class='p1s'><a href='http://www.firescribble.net/' target='_blank'> Website on the Irish flute </a></p><p class='p1s'> <a href='http://www.canadaflute.com/' target='_blank'>The Canadian Flute Association</a></p><p class='p1s'><a href='http://www.boxwood.org/canada_schedule' target='_blank'> The Boxwood Festival in Lunenburg NS </a></p><p class='p1s'><a href='http://www.nfaonline.org' target='_blank'> The National Flute Association, USA</a></p>" ,   copy0:"<p class='p1c'>Video and other links </p><p><a href='http://youtu.be/1m0oeWEFdN4' target='_blank'> Daniel Payne </a></p><p><a href='http://youtu.be/HwtdsQ3ylVw' target='_blank'>Hanz Araki </a></p> <p>  <a href='http://youtu.be/ZY1ZH6xGGm0' target='_blank'>Andra Bohnet </a></p>" } ,
  
{ type:"3ColumnView" , rowCount:'2' , hasVideo0: "false" , youtubeid0: "u1zgFlCw8Aw", header0: "press" , img0:SwissArmyKnife.getBaseURL() +"creators/yofothumb.png"   , subHeader0: "  " ,   copy0:" <a href='http://www.robertbigio.com/windward.htm' target='_blank'>Robert Bigio's Article</a>'"
  
   , hasVideo1: "false" , youtubeid1: "u1zgFlCw8Aw", header1: 'Events' , img1:SwissArmyKnife.getBaseURL() +"g2.png"   , subHeader1: "  " , copy1:"<b>Canadian Flute Association convention</b> -  June 29, 30, July 1, Oakville ON (Toronto)</p><p><b>Boxwood Festival</b> - July 21-27, Lunenburg, Nova Scotia</p><p><b>National Flute Association Convention</b> - August 8-11, New Orleans."  } ,
   
   
{ type:"3ColumnView" , rowCount:'1' , hasVideo0: "false" , youtubeid0: "u1zgFlCw8Aw", header0: "Credits" , img0:SwissArmyKnife.getBaseURL() +"creators/yofothumb.png"   , subHeader0: "  " ,   copy0:"The website is the design and construction of <a href='http://ourvice.com' target='_blank'>Destin Young of Ourvice</a><p>The photographs are the work of <a href='http://sohierchristiephotography.com/' target='_blank'>Sohier Christie</a></p><p>Our thanks to <a href=' http://www.sylvainbarou.com/' target='_blank'>Sylvain Barou</a> for kindly allowing us to show video of him testing our flutes at the Boxwood Festival in 2011.<p><p>Thanks to Garrick Filewod for his video contributions. </p>"
  }    

    ]


    function getHeroDataById( id )
    {

        return _GlobalData.dataHeroArray[ id ];


    }

    function getHeroDataLength()
    {
        return _GlobalData.dataHeroArray.length;
    }

    function getDeepLinkData()
    {
        return _GlobalData.deeplinkData;
    }

   
    function getMenuTitleById( id )
    {

        return _GlobalData.menuTitle[ id ];

    }

    function getMenuBtnNames()
    {

        return _GlobalData.menuNames;

    }


    

 
    function getContentSubDataById( id )
    {

        return _GlobalData.contenSubData[id];

    }

    function getMenuAlphasById( id )
    {

        return _GlobalData.menuAlphas[id];

    }
    // Because I don't have public variables, I can just return an object instead
    // of an object api var. Whether you return an object api var or just return
    // an object, it's the same thing and a matter of preference.
    return {

    	// public functions
        getHeroDataById: getHeroDataById,
        getHeroDataLength: getHeroDataLength,
        getDeepLinkData: getDeepLinkData,
        getMenuBtnNames: getMenuBtnNames,
        
        
        getMenuTitleById: getMenuTitleById,
        getContentSubDataById: getContentSubDataById,
        getMenuAlphasById: getMenuAlphasById
       
        // public vars

        //retina: retina
    };

})();
