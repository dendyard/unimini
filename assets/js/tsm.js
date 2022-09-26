

var where = window.location.host;
if(where == 'localhost:8888' || where == 'localhost'){
    var base_url = window.location.protocol + "//" + window.location.host + "/unimini";
}
else{
    var base_url = window.location.protocol + "//" + window.location.host + "/";
}

  
$('.promos-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    centerMode: true,
    initialSlide: 1,
    prevArrow: '<img src="' + base_url + '/assets/images/leftarr.png" class="arrsld3">',
    nextArrow: '<img src="' + base_url + '/assets/images/rightarr.png" class="arrsld4">',
    
});
    
    
$('.promos-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.sld_tsm_.slick-slide').each(function() {
        $(this).addClass('hide');
        $(this).removeClass('whitebg');
        
        $(this).find('.sld_tsm_txtpromo').css('opacity','0');
        $(this).find('.sld_tsm_txtpromodate').css('opacity','0');
        $(this).find('.desc-promo').css('opacity','0');
        
        
    });

    $('.sld_tsm_.slick-active').each(function() {
        $(this).removeClass('hide');
        $(this).addClass('whitebg');
        $(this).find('.sld_tsm_txtpromo').css('opacity','1');
        $(this).find('.sld_tsm_txtpromodate').css('opacity','1');
        $(this).find('.desc-promo').css('opacity','1');
    });
    
});

//RMB Slider
$('.promos-slider2').slick({
    autoplay: false,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    centerMode: true,
    initialSlide: 1,
    prevArrow: '<img src="' + base_url + '/assets/images/leftarr.png" class="arrsld3">',
    nextArrow: '<img src="' + base_url + '/assets/images/rightarr.png" class="arrsld4">',
    
});
    
    
$('.promos-slider2').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.sld_tsm_.slick-slide').each(function() {
        $(this).addClass('hide');
        $(this).removeClass('whitebg');
        
        $(this).find('.sld_tsm_txtpromo').css('opacity','0');
        $(this).find('.sld_tsm_txtpromodate2').css('opacity','0');
        $(this).find('.desc-promo').css('opacity','0');
        
        
    });

    $('.sld_tsm_.slick-active').each(function() {
        $(this).removeClass('hide');
        $(this).addClass('whitebg');
        $(this).find('.sld_tsm_txtpromo').css('opacity','1');
        $(this).find('.sld_tsm_txtpromodate2').css('opacity','1');
        $(this).find('.desc-promo').css('opacity','1');
    });
    
});


    
    let togglefs = false;
    fstg.addEventListener('click', function() { 
        if (!togglefs) {
            document.documentElement.requestFullscreen();
            togglefs = true;
        }else{
            document.exitFullscreen();
            togglefs = false;
        }
    });

    
    //Open Desc
    $('#pickm').on('click', function(){
        showmalls(1,'1');
    });

    $('#pickm2').on('click', function(){
        showmalls(1,'2');
    });
    
    $('#pickm3').on('click', function(){
        showmalls(1,'3');
    });


    // RMB Template preview
    $('#rmb1').on('click', function(){
        showrmb(1,'1');
    });
    $('#rmb2').on('click', function(){
        showrmb(1,'2');
    });
    $('#rmb3').on('click', function(){
        showrmb(1,'3');
    });



    //End of Open Desc
    $('#clstn2').on('click', function(){
        showmalls(0);
    })
    $('#clstn2x').on('click', function(){
        showrmb(0);
    })

    $('#clstn3').on('click', function(){
        showoption(0);
        closeallpopupcontent();
        })

    cccanel.addEventListener('click', ()=>{
        showoption(0);
        closeallpopupcontent();
    });

    ccupdate.addEventListener('click', ()=>{
        updateValues('acc');
        showoption(0);
        closeallpopupcontent();
    });
    
    $('#srcbtn').on('click', function(){
        showSearch(1);
        
    });
    
    $('#bbsrc').on('click', function(){
        showSearch(0);
    })
    
    $('#closesearch').on('click', function(){
        showSearch(0);
    })
    
    

    

    ac1.addEventListener('click', pickNews);
    ac2.addEventListener('click', pickNews);
    ac3.addEventListener('click', pickNews);
    ac4.addEventListener('click', pickNews);
    ac5.addEventListener('click', pickNews);
    ac6.addEventListener('click', pickNews);
    ac7.addEventListener('click', pickNews);
    ac8.addEventListener('click', pickNews);

    lo1.addEventListener('click', pickLoc);
    lo2.addEventListener('click', pickLoc);
    lo3.addEventListener('click', pickLoc);
    lo4.addEventListener('click', pickLoc);
    lo5.addEventListener('click', pickLoc);
    lo6.addEventListener('click', pickLoc);
    lo7.addEventListener('click', pickLoc);
    lo8.addEventListener('click', pickLoc);

    pr1.addEventListener('click', pickPro);
    pr2.addEventListener('click', pickPro);
    pr3.addEventListener('click', pickPro);
    pr4.addEventListener('click', pickPro);
    pr5.addEventListener('click', pickPro);
    
    vd1.addEventListener('click', pickVid);
    vd2.addEventListener('click', pickVid);
    vd3.addEventListener('click', pickVid);
    vd4.addEventListener('click', pickVid);
    vd5.addEventListener('click', pickVid);
    
    
    ge1.addEventListener('click', pickGen);
    ge2.addEventListener('click', pickGen);
    ge3.addEventListener('click', pickGen);
    
    agf1.addEventListener('click', pickAge);
    agf2.addEventListener('click', pickAge);
    agf3.addEventListener('click', pickAge);
    agf4.addEventListener('click', pickAge);
    agf5.addEventListener('click', pickAge);
    agf6.addEventListener('click', pickAge);
    agf7.addEventListener('click', pickAge);
    agf8.addEventListener('click', pickAge);
    agf9.addEventListener('click', pickAge);
    agf10.addEventListener('click', pickAge);
    
    agt1.addEventListener('click', pickAge2);
    agt2.addEventListener('click', pickAge2);
    agt3.addEventListener('click', pickAge2);
    agt4.addEventListener('click', pickAge2);
    agt5.addEventListener('click', pickAge2);
    agt6.addEventListener('click', pickAge2);
    agt7.addEventListener('click', pickAge2);
    agt8.addEventListener('click', pickAge2);
    agt9.addEventListener('click', pickAge2);
    agt10.addEventListener('click', pickAge2);
   
    inf1.addEventListener('click', pickIn);
    inf2.addEventListener('click', pickIn);
    inf3.addEventListener('click', pickIn);
    inf4.addEventListener('click', pickIn);
    inf5.addEventListener('click', pickIn);
    inf6.addEventListener('click', pickIn);
    inf7.addEventListener('click', pickIn);
    inf8.addEventListener('click', pickIn);
    inf9.addEventListener('click', pickIn);
    inf10.addEventListener('click', pickIn);
    
    int1.addEventListener('click', pickIn2);
    int2.addEventListener('click', pickIn2);
    int3.addEventListener('click', pickIn2);
    int4.addEventListener('click', pickIn2);
    int5.addEventListener('click', pickIn2);
    int6.addEventListener('click', pickIn2);
    int7.addEventListener('click', pickIn2);
    int8.addEventListener('click', pickIn2);
    int9.addEventListener('click', pickIn2);
    int10.addEventListener('click', pickIn2);
    
    
    cpcalc3.addEventListener('click', openstep2);
    bckc.addEventListener('click', backstep);


    function displynone(id, st = true){
        if (st) {
            document.getElementById(id).style.display = 'none';
        }else{
            document.getElementById(id).style.display = 'block';
        }
        
    }
    
    let steppost = 0;

    TweenMax.to(cpcalc3,0,{scale:0,ease:Back.easeOut});
    TweenMax.to(bckc,0,{scale:0,ease:Back.easeOut});

    // TweenMax.to(stp1, 0,{y:100, alpha:0, ease:Sine.easeOut});
    // TweenMax.to(stp2, 0,{y:100, alpha:0, ease:Sine.easeOut});
    TweenMax.to(stp3, 0,{y:100, alpha:0, ease:Sine.easeOut});
    TweenMax.to(stp4, 0,{y:100, alpha:0, ease:Sine.easeOut});


    function backstep(){
        switch(steppost) {
            case 1:
                steppost = 0;
                displynone('bckc');
                displynone('step2');
                displynone('csimulation1', false);
                
                TweenMax.to(csimulation1, .2,{alpha:1, ease:Sine.easeOut});
                TweenMax.to(bckc,.1,{scale:0, ease:Back.easeOut});
                // TweenMax.to(stp1, 0,{y:100, alpha:0, ease:Sine.easeOut});
                // TweenMax.to(stp2, 0,{y:100, alpha:0, ease:Sine.easeOut});
                TweenMax.to(stp3, 0,{y:100, alpha:0, ease:Sine.easeOut});
                TweenMax.to(stp4, 0,{y:100, alpha:0, ease:Sine.easeOut});
            break;
        }
    }

    function openstep2() {
        steppost = 1;
        displynone('bckc', false);
        
        TweenMax.to(csimulation1, .2,{alpha:0,ease:Sine.easeOut, onComplete: ()=>{
            displynone('csimulation1');
        }});

        TweenMax.to(bckc,.3,{scale:1,ease:Expo.easeOut, delay:0.2, onComplete:()=>{
            displynone('step2',false);
            // TweenMax.to(stp1, .3,{y:0, alpha:1, ease:Sine.easeOut});
            // TweenMax.to(stp2, .3,{y:0, alpha:1, ease:Sine.easeOut, delay:.1});
            TweenMax.to(stp3, .3,{y:0, alpha:1, ease:Sine.easeOut, delay:.2});
            TweenMax.to(stp4, .3,{y:0, alpha:1, ease:Sine.easeOut, delay:.3});
        }});
        
    }


    function pickAge(e) {
        let lsp = e.target.id;

        for (let i=0; i <= 10; i++) {
            $('#agf' + i).removeClass('inlinepickupactive');
        }
        $('#' + lsp).toggleClass('inlinepickupactive');
    }
    
    function pickAge2(e) {
        let lsp = e.target.id;

        for (let i=0; i <= 10; i++) {
            $('#agt' + i).removeClass('inlinepickupactive');
        }
        $('#' + lsp).toggleClass('inlinepickupactive');
    }
   
    function pickIn(e) {
        let lsp = e.target.id;

        for (let i=0; i <= 10; i++) {
            $('#inf' + i).removeClass('inlinepickupactive');
        }
        $('#' + lsp).toggleClass('inlinepickupactive');
    }
    
    
    function pickIn2(e) {
        let lsp = e.target.id;

        for (let i=0; i <= 10; i++) {
            $('#int' + i).removeClass('inlinepickupactive');
        }
        $('#' + lsp).toggleClass('inlinepickupactive');

    }

    
    function pickNews(e) {
        let lsp = e.target.id;

        $('#' + lsp).toggleClass('inlinepickupactive');
        console.log(e.target.classList.contains('inlinepickupactive'));

    }
    
    function pickPro(e) {
        let lsp = e.target.id;

        $('#' + lsp).toggleClass('inlinepickupactive');
        console.log(e.target.classList.contains('inlinepickupactive'));

    }
    
    function pickVid(e) {
        let lsp = e.target.id;

        $('#' + lsp).toggleClass('inlinepickupactive');
        console.log(e.target.classList.contains('inlinepickupactive'));

    }
    
    function pickLoc(e) {
        let lsp = e.target.id;

        $('#' + lsp).toggleClass('inlinepickupactive');
        console.log(e.target.classList.contains('inlinepickupactive'));

    }
    
    function pickGen(e) {
        $('#ge1').removeClass('inlinepickupactive');
        $('#ge2').removeClass('inlinepickupactive');
        $('#ge3').removeClass('inlinepickupactive');

        let lsp = e.target.id;
        $('#' + lsp).toggleClass('inlinepickupactive');
        console.log(e.target.classList.contains('inlinepickupactive'));
    }

    function closeallpopupcontent() {
        articleslist.style.display = 'none';
        genderlist.style.display = 'none';
        agelist.style.display = 'none';
        inlist.style.display = 'none';
        lolist.style.display = 'none';
        prlist.style.display = 'none';
        vdlist.style.display = 'none';

    }

    
    function updateValues(opt='') {
        if (popupopen == 'ac') {
            acarr = [];
            for (let i = 0; i <= 7; i++){
                if (document.getElementById('ac' + (i+1)).classList.contains('inlinepickupactive'))
                acarr.push(document.getElementById('ac' + (i+1)).innerHTML);
            }
            
        }
        
        if (popupopen == 'lo') {
            loarr = [];
            for (let i = 0; i <= 7; i++){
                if (document.getElementById('lo' + (i+1)).classList.contains('inlinepickupactive'))
                loarr.push(document.getElementById('lo' + (i+1)).innerHTML);
            }
            
        }
        
        if (popupopen == 'pr') {
            prarr = [];
            for (let i = 0; i <= 4; i++){
                if (document.getElementById('pr' + (i+1)).classList.contains('inlinepickupactive'))
                prarr.push(document.getElementById('pr' + (i+1)).innerHTML);
            }
            
        }
        
        if (popupopen == 'vd') {
            vdarr = [];
            for (let i = 0; i <= 4; i++){
                if (document.getElementById('vd' + (i+1)).classList.contains('inlinepickupactive'))
                vdarr.push(document.getElementById('vd' + (i+1)).innerHTML);
            }
            
        }
        
        if (popupopen == 'ge') {
            gearr = [];
            for (let i = 0; i <= 2; i++){
                if (document.getElementById('ge' + (i+1)).classList.contains('inlinepickupactive'))
                gearr.push(document.getElementById('ge' + (i+1)).innerHTML);
            }
            
        }
        
        if (popupopen == 'ag') {
            strage = '';
            agarr = [];

            for (let i = 0; i <= 9; i++){
                if (document.getElementById('agf' + (i+1)).classList.contains('inlinepickupactive')) {
                    agarr[0] = document.getElementById('agf' + (i+1)).innerHTML;
                }
                if (document.getElementById('agt' + (i+1)).classList.contains('inlinepickupactive')) {
                    agarr[1] = document.getElementById('agt' + (i+1)).innerHTML;
                }
                    
            }

            strage = 'From ' + agarr[0] + ' to ' + agarr[1];
            
        }
        
        if (popupopen == 'in') {
            strin = '';
            inarr = [];

            for (let i = 0; i <= 9; i++){
                if (document.getElementById('inf' + (i+1)).classList.contains('inlinepickupactive')) {
                    inarr[0] = document.getElementById('inf' + (i+1)).innerHTML;
                }
                if (document.getElementById('int' + (i+1)).classList.contains('inlinepickupactive')) {
                    inarr[1] = document.getElementById('int' + (i+1)).innerHTML;
                }
                    
            }

            strin = 'From ' + inarr[0] + ' to ' + inarr[1];
            
        }

        updateFEAUD();
        
    }

    function updateFEAUD(){
        let dd = '';
        let dt = '';
        if (popupopen == 'ge') { 
            f1.innerHTML = "Gender <span class='filterval'>" + gearr[0] + "</span>"
        }

        if (popupopen == 'ac') { 

            dd = "Articles Channel They Engage ";
            for (let i=0; i < acarr.length; i++) {
                dt += "<span class='filterval'>" + acarr[i] + "</span>";
            }
            dd += dt;
            f6.innerHTML = dd;
        }
        
        if (popupopen == 'pr') { 

            dd = "Category Product Interest ";
            for (let i=0; i < prarr.length; i++) {
                dt += "<span class='filterval'>" + prarr[i] + "</span>";
            }
            dd += dt;
            f5.innerHTML = dd;
        }
        
        if (popupopen == 'vd') { 

            dd = "Video Category They Watch ";
            for (let i=0; i < vdarr.length; i++) {
                dt += "<span class='filterval'>" + vdarr[i] + "</span>";
            }
            dd += dt;
            f7.innerHTML = dd;
        }
        
        if (popupopen == 'lo') { 

            dd = "Locations ";
            for (let i=0; i < loarr.length; i++) {
                dt += "<span class='filterval'>" + loarr[i] + "</span>";
            }
            dd += dt;
            f4.innerHTML = dd;
        }
        
        if (popupopen == 'ag') { 

            dd = "Age Range ";
            
            f2.innerHTML = dd + "<span class='filterval'>" + strage + "</span>";
        }
        
        if (popupopen == 'in') { 

            dd = "Income Range ";
            
            f3.innerHTML = dd + "<span class='filterval'>" + strin + "</span>";
        }

        recalculate();
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    let isfirst = true;
    function recalculate(){
        let newcal = 0;
        let rcal = 4540000;

        newcal = rcal - 100;
        if (!isfirst) {
            cpcalc3.innerHTML = "Calculating...";
            TweenMax.to(cpcalc3,0.1,{backgroundColor:"#000", color:"#fff", width:150, y:-45,ease:Expo.easeOut});
        }

        //
        let rec = setInterval(()=>{
            newcal++;
            calcuses.innerHTML = numberWithCommas(newcal);
            if (newcal >= rcal) {
                clearInterval(rec);
                TweenMax.to(calcuses,0.3,{scale:1.4, color:"red",ease:Expo.easeOut, onComplete:()=>{
                    cpcalc3.innerHTML = "Use this Custom Audience ";
                }});
                TweenMax.to(calcuses,0.5,{scale:1, color:"#282828",ease:Back.easeOut, delay:.3});

                if (!isfirst) {                        
                    TweenMax.to(cpcalc3,0.3,{backgroundColor:"#0845a4", color:"#fff", width:350, y:0,ease:Expo.easeOut, delay:0.3, onComplete:()=>{
                        
                    }});
                    
                }else{
                    cpcalc3.style.display = "block";
                    isfirst = false;
                    TweenMax.to(cpcalc3,0.3,{scale:1, backgroundColor:"#0845a4", y:0,ease:Back.easeOut, delay:0.3});
                }
                
            }
        }, 0);

        qrres.innerHTML = "Total User : " + numberWithCommas(newcal) + " users <br>" + "Emails : 300 users"
        
    }


    function showrmb(v, inf=''){
        if (v){
           
            getcontentrmb(inf);

            TweenMax.to(dimmerModal,0.5,{opacity:1, display:"block",ease:Expo.easeOut});
            TweenMax.to(modalpickmall2,0.5,{opacity:1, display:"block",ease:Expo.easeOut});
            
        }else{
            
            TweenMax.to(dimmerModal,0,{opacity:0, display:"none",ease:Expo.easeOut});
            TweenMax.to(modalpickmall2,0,{opacity:0, display:"none",ease:Expo.easeOut});   
        }
    }

    function getcontentrmb(id) {
        let the_desc = ``;

        let the_img = ``;
        
        switch(id) {
            case '1':
                the_desc = `<p class="ttltext">
                            Tiles Galery Ads
                                <p class='desctext'>
                                Display your products in unique and attractive way, support until 5 images and you can customize this template easly from our Creative Builder.
                                </p> 
                                <p class='qrrmb'>
                                See on your mobile :<br>
                                <img src='` + base_url + `/assets/template/tiles.png' id='qrimg'>
                                </p>
                           </p>`;
                the_img = `<iframe src='` + base_url + `/assets/template/tiles/' > </iframe>`;

                break;
            case '2':
                the_desc = `<p class="ttltext">
                            Standard Template Type 1
                                <p class='desctext'>
                                A Simple and very flexible ads format contain image and text, create your custom message and image via our Creative Builder 
                                </p> 
                                <p class='qrrmb'>
                                See on your mobile :<br>
                                <img src='` + base_url + `/assets/template/tiles.png' id='qrimg'>
                                </p>
                           </p>`;
                the_img = `<iframe src='` + base_url + `/assets/template/template1/' > </iframe>`;
                break;
            case '3':
                the_desc = `<p class="ttltext">
                            3D Cube Type 1
                                <p class='desctext'>
                                Display your products in unique and attractive way, support until 6 images and you can customize this template easly from our Creative Builder.
                                </p> 
                                <p class='qrrmb'>
                                See on your mobile :<br>
                                <img src='` + base_url + `/assets/template/tiles.png' id='qrimg'>
                                </p>
                           </p>`;
                the_img = `<iframe src='` + base_url + `/assets/template/3dcube/' > </iframe>`;
                break;

        }

        imgoopx.innerHTML = the_img;
        doopx.innerHTML = the_desc;
    }


    function showmalls(v, inf=''){
        if (v){
           
            getcontent(inf);

            TweenMax.to(dimmerModal,0.5,{opacity:1, display:"block",ease:Expo.easeOut});
            TweenMax.to(modalpickmall,0.5,{opacity:1, display:"block",ease:Expo.easeOut});
            
        }else{
            
            TweenMax.to(dimmerModal,0,{opacity:0, display:"none",ease:Expo.easeOut});
            TweenMax.to(modalpickmall,0,{opacity:0, display:"none",ease:Expo.easeOut});   
        }
    }

    function getcontent(id) {
        let the_desc = ``;

        let the_img = ``;
        
        switch(id) {
            case '1':
                the_desc = `<p class="ttltext">
                            Shopping Interest
                                <p class='desctext'>
                                User who read articles on Food Channel or have intentional to buy some product, some of them also visit our lounge hotels, coffee house etc. <br><br>
                                This people mostly at 18 y.o to 45 y.o, they life in big city's, spending time on digital platform avg. 2-4 hours a day.<br><br>
                                This Audience Segment also might ideal for campaign that promoted new FMCG Product launch, Promoting Discount on your Store etc.<br><br>
                                Combine your audience with Richmedia Creative might increase your campaign performance. 
                                </p> 
                            <p class='userinfo'>
                            <br>
                                Est. User on our Data Platform<br>3.000.000 Users<br><br>
                                Active User<br>70%-80%
                            </p>`;

                the_img = `<img src="` + base_url + `/assets/thumb/small/2.png" alt="" id="audimg">`;
                break;
            case '2':
                the_desc = `<p class="ttltext">
                            Beauty Interest
                                <p class='desctext'>
                                User who read articles on Food Channel or have intentional to buy some product, some of them also visit our lounge hotels, coffee house etc. <br><br>
                                This people mostly at 18 y.o to 45 y.o, they life in big city's, spending time on digital platform avg. 2-4 hours a day.<br><br>
                                This Audience Segment also might ideal for campaign that promoted new FMCG Product launch, Promoting Discount on your Store etc.<br><br>
                                Combine your audience with Richmedia Creative might increase your campaign performance. 
                                </p> 
                            <p class='userinfo'>
                            <br>
                                Est. User on our Data Platform<br>3.000.000 Users<br><br>
                                Active User<br>70%-80%
                            </p>`;

                the_img = `<img src="` + base_url + `/assets/thumb/small/3.png" alt="" id="audimg">`;
                break;
            case '3':
                the_desc = `<p class="ttltext">
                            Food &amp; Bevarage
                                <p class='desctext'>
                                User who read articles on Food Channel or have intentional to buy some product, some of them also visit our lounge hotels, coffee house etc. <br><br>
                                This people mostly at 18 y.o to 45 y.o, they life in big city's, spending time on digital platform avg. 2-4 hours a day.<br><br>
                                This Audience Segment also might ideal for campaign that promoted new FMCG Product launch, Promoting Discount on your Store etc.<br><br>
                                Combine your audience with Richmedia Creative might increase your campaign performance. 
                                </p> 
                            <p class='userinfo'>
                            <br>
                                Est. User on our Data Platform<br>3.000.000 Users<br><br>
                                Active User<br>70%-80%
                            </p>`;

                the_img = `<img src="` + base_url + `/assets/thumb/small/4.png" alt="" id="audimg">`;
                break;

        }

        imgoop.innerHTML = the_img;
        doop.innerHTML = the_desc;
    }
    
                
    function showSearch(v){
        
        if (v){
            TweenMax.to(modalsearch,0.5,{opacity:1, display:"block",ease:Expo.easeOut, onComplete:()=>{
                document.getElementById("txtsearch").focus();
            }})    
            TweenMax.to(dimmerModal,0.5,{opacity:1, display:"block",ease:Expo.easeOut});
            
        }else{
            TweenMax.to(modalsearch,0,{opacity:0, display:"none",ease:Expo.easeOut})    
            TweenMax.to(dimmerModal,0,{opacity:0, display:"none",ease:Expo.easeOut})   
        }

    }
    
    $('#txtsearch').on('keypress', (e)=>{   
        if(e.which == 13) {
            TweenMax.to(resboard,0,{y:2000, display:"none",ease:Expo.easeOut}); 
            getSearch(txtsearch.value);
        }
    });
    
    $('#icossrc').on('click', (e)=>{
        TweenMax.to(resboard,0,{y:2000, display:"none",ease:Expo.easeOut}); 
            getSearch(txtsearch.value);
    });
    
    TweenMax.to(resboard,0,{y:2000, display:"none",ease:Expo.easeOut}) 
    
    
    
    var oprg = false;
    