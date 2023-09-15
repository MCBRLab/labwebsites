# Resource


<link rel="stylesheet" href="css/font.css">
<link rel="stylesheet" href="css/font-awesome.min.css">
<!--link rel="stylesheet" href="style.css"-->
<br>
<!--div align="center"><img src="wordcloud.svg" alt="WordCloud" width="1128" height="470"></div-->

<script src="js/jquery3.1.0.min.js"></script>
<link rel="stylesheet" href="style.css">
<div align="center"><h3><a href="https://seqera.io/training/" target="_blank"> Nextflow Training Workshop</a></h3></div>
<br>
<p>This guide complements the full Nextflow documentation - if you ever have any doubts, head over to the docs located <a href="https://www.nextflow.io/docs/latest/">here.</a> </p>
<p> By the end of this course you should:</p>
<li>Be proficient in writing Nextflow pipelines</li> 
<li>Know the basic Nextflow concepts of Channels, Processes and Operators</li>  
<li>Have an understanding of containerised workflows</li> 
<li>Understand the different execution platforms supported by Nextflow</li> 
<li>Be introducted to the Nextflow community and ecosystem</li>
<br>

<div class="container">
    <div class="row">
        <div class="youtube_video">
            <iframe width="150%" height="250%" id="video_id" src="//player.bilibili.com/player.html?aid=378956828&bvid=BV17f4y1u71J&cid=435831906&page=1"
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
        </div>    
    </div> 
        <div class="gallery">
            <div class="item">
                <img src="images/nextflow/day1.png" data-id="378956828&bvid=BV17f4y1u71J&cid=435831906&page=1">
                <div align="center"><p1>Nextflow Training Workshop - July 2020 - Day 1</p1></div>
                <div class="youtube_icon">
                    <img src="bilibili.svg">
                </div>
                
            </div>
            <div class="item">
                <img src="images/nextflow/day2.png" target="_blank" data-id="463932223&bvid=BV1xL41137GF&cid=435832808&page=1">
                <div align="center"><p1>Nextflow Training Workshop - July 2020 - Day 2</p1></div>
                <div class="youtube_icon">
                    <img src="bilibili.svg">
                </div>
            </div>
            <div class="item">
                <img src="images/nextflow/day3.png" target="_blank" data-id="548941506&bvid=BV1mq4y1g7bx&cid=435833331&page=1">
                <div align="center"><p1>Nextflow Training Workshop - July 2020 - Day 3</p1></div>
                <div class="youtube_icon active">
                    <img src="bilibili.svg">
                </div>
            </div>
            <div class="item">
                <img src="images/day4.png" target="_blank" data-id="506648966&bvid=BV1og411K71x&cid=443032863&page=1">
                <div align="center"><p1>Nextflow Training Workshop - July 2020 - Day 4</p1></div>
                <div class="youtube_icon">
                    <img src="bilibili.svg">
                </div>
            </div>
        </div>
        <div class="gallery">
            <div class="item">
                <img src="images/day5.png" data-id="891657323&bvid=BV1hP4y157w9&cid=443034356&page=1">
                <div align="center"><p1>Nextflow Training Workshop - July 2020 - Day 5</p1></div>
                <div class="youtube_icon">
                    <img src="bilibili.svg">
                </div>
            
            </div>
            
        </div>
</div>

<br>
<br>


<div align="center"><h3><a href="../videos/nfcore" target="_blank">nf-core online courses</a></h3></div>

<br>

<div align="center"><h3><a href="../videos/cbw" target="_blank">CBW's Machine LEarning workshop</a></h3></div>


<br>



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


