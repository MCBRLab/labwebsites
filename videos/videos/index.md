# nf-core


<link rel="stylesheet" href="../css/font.css">
<link rel="stylesheet" href="../css/font-awesome.min.css">
<!--link rel="stylesheet" href="style.css"-->
<br>
<!--div align="center"><img src="wordcloud.svg" alt="WordCloud" width="1128" height="470"></div-->

<script src="../js/jquery3.1.0.min.js"></script>
<link rel="stylesheet" href="style.css">

<div align="center"><h3><a href="https://nf-co.re/">nf-core online courses</a></h3></div>

<p>nf-core is a community effort to collect a curated set of analysis pipelines built using Nextflow. Find out more at <a href="https://nf-co.re/">here</a>.</p> 
<br>
<br>

<div class="container">
    <div class="row">
        <div class="youtube_video">
            <iframe width="150%" height="250%" id="video_id" src="//player.bilibili.com/player.html?aid=676746736&bvid=BV1XU4y1M7cR&cid=440534185&page=1"
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
        </div>    
    </div> 
        <div class="gallery">
            <div class="item">
                <img src="images/nf_core/day1.png" data-id="676746736&bvid=BV1XU4y1M7cR&cid=440534185&page=1">
                <div align="center"><p1>Where do I start writing my own DSL2 pipeline  (nf-core_bytesize)</p1></div>
                <div class="youtube_icon">
                    <img src="bilibili.svg">
                </div>  
            </div>
            <div class="item">
                <img src="images/nf_core/day2.png" data-id="548897553&bvid=BV17q4y1V7GK&cid=435390384&page=1">
                <div align="center"><p1>Development Environments and Workflows nf-corebytesize</p1></div>
                <div class="youtube_icon">
                    <img src="bilibili.svg">
                </div>
            
            </div>
            <div class="item">
                <img src="images/nf_core/day3.png" data-id="464164500&bvid=BV1dL411u7di&cid=440533679&page=1">
                <div align="center"><p1>nf-core tools guidelines - Phil Ewels</p1></div>
                <div class="youtube_icon">
                    <img src="bilibili.svg">
                </div>
            
            </div>
            <div class="item">
                <img src="images/nf_core/day4.png" data-id="209603508&bvid=BV1Ph411x7EA&cid=452865254&page=1">
                <div align="center"><p1>nf-corecoproid nf-corebytesize #1</p1></div>
                <div class="youtube_icon">
                    <img src="bilibili.svg">
                </div>
            
            </div>          
        </div>
        <div class="gallery">
            <div class="item">
                <img src="images/nf_core/day5.png" data-id="209540454&bvid=BV11h411s7GR&cid=452864836&page=1">
                <div align="center"><p1>nf-coresarek nf-corebytesize #2</p1></div>
                <div class="youtube_icon">
                    <img src="bilibili.svg">
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


