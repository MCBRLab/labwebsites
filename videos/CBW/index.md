# CBW


<link rel="stylesheet" href="../css/font.css">
<link rel="stylesheet" href="../css/font-awesome.min.css">
<!--link rel="stylesheet" href="style.css"-->
<br>
<!--div align="center"><img src="wordcloud.svg" alt="WordCloud" width="1128" height="470"></div-->

<script src="../js/jquery3.1.0.min.js"></script>
<link rel="stylesheet" href="../style.css">

<div align="center"><h3><a href="https://bioinformaticsdotca.github.io/ML_2020">CBW's Machine LEarning workshop</a></h3></div>

<p>
    The course schedule can be found <a href="https://bioinformaticsdotca.github.io//ML_2020_schedule">here</a>.</p>
    
   <p>Pre-work including programs to install can be found <a href="https://bioinformaticsdotca.github.io//ML_2020_prework">here</a>.</p> 
    

    
<br>
<br>

<div class="container">
    <div class="row">
        <div class="youtube_video">
            <iframe width="150%" height="250%" id="video_id" src="//player.bilibili.com/player.html?aid=719317072&bvid=BV16Q4y1U7tx&cid=444178001&page=1"
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
        </div>    
    </div> 
        <div class="gallery">
            <div class="item">
                <img src="../CBW/DAY1.png" data-id="719317072&bvid=BV16Q4y1U7tx&cid=444178001&page=1">
                <div align="center"><p1>CBW's Machine LEarning workshop - 01 Introduction to Machine Learning</p1></div>
                <div class="youtube_icon">
                    <img src="../bilibili.svg">
                </div>  
            </div>
            <div class="item">
                <img src="../CBW/DAY2.png" data-id="421790450&bvid=BV1t3411t7wc&cid=444750681&page=1">
                <div align="center"><p1>CBW’s Machine LEarning workshop - 02 Lecture & Lab_ Decision Trees</p1></div>
                <div class="youtube_icon">
                    <img src="../bilibili.svg">
                </div>
                
            </div>
            <div class="item">
                <img src="../CBW/DAY3.png" data-id="464348058&bvid=BV1wL411M78o&cid=445325551&page=1">
                <div align="center"><p1>CBW's Machine LEarning workshop - 03 Lecture - Neural Networks</p1></div>
                <div class="youtube_icon">
                    <img src="../bilibili.svg">
                </div>
                
            </div>
            <div class="item">
                <img src="../CBW/DAY4.png" data-id="891816521&bvid=BV1zP4y1G7Tq&cid=445326057&page=1">
                <div align="center"><p1>CBW's Machine LEarning workshop - 04 Lab Neural Networks for secondary structure</p1></div>
                <div class="youtube_icon">
                    <img src="../bilibili.svg">
                </div>
                
            </div>          
        </div>
        <div class="gallery">
            <div class="item">
                <img src="../CBW/DAY5.png" data-id="591854237&bvid=BV1mq4y167Ew&cid=445346615&page=1">
                <div align="center"><p1>CBW's Machine LEarning workshop - 05 Lecture  Hidden Markov Models</p1></div>
                <div class="youtube_icon">
                    <img src="../bilibili.svg">
                </div>
                
            </div> 
            <div class="item">
                <img src="../CBW/DAY6.png" data-id="976841254&bvid=BV1M44y1Y7MV&cid=445346810&page=1">
                <div align="center"><p1>CBW's Machine LEarning workshop - 06 Lab  Gene Finding with NNs and HMMs</p1></div>
                <div class="youtube_icon">
                    <img src="../bilibili.svg">
                </div>
                
            </div> 
            <div class="item">
                <img src="../CBW/DAY7.png" data-id="379313150&bvid=BV14f4y1M7Ef&cid=445347019&page=1">
                <div align="center"><p1>CBW's Machine LEarning workshop - 08 Lab Machine Learning with Keras & Scikit-Learn</p1></div>
                <div class="youtube_icon">
                    <img src="../bilibili.svg">
                </div>
            
            </div>        
        </div>
</div>

<script>
    $(document).ready(function () {
        $(".item").click(function () {
            let youtube_id = $(this).children("img").attr("data-id");
            $(this).children(".youtube_icon")
                .addClass("active").parent()
                .siblings()
                .children(".youtube_icon")
                .removeClass("active")
            let newUrl = `//player.bilibili.com/player.html?aid=${youtube_id}`;
            $("#video_id").attr("src", newUrl);
        })
        //due to slow connection video is playing slow
        // you can call your playlist using youtube api
    })
</script>


