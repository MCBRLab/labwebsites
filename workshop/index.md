# Workshop/Talk


<link rel="stylesheet" href="css/font.css">
<link rel="stylesheet" href="css/font-awesome.min.css">
<link rel="stylesheet" href="style.css">
<br>
<!--div align="center"><img src="wordcloud.svg" alt="WordCloud" width="1128" height="470"></div-->

<script src="js/jquery3.1.0.min.js"></script>
BOOKDOWN
Write HTML, PDF, ePub, and Kindle books with R Markdown
<div align="center"><h3>SEMINARS</h3></div>

<!--iframe src='https://view.officeapps.live.com/op/embed.aspx?src=[https://1drv.ms/p/s!AhKB20odnTGikyaeH3YZ37oMJUxH?e=sqotAY]' width='100%' height='600px' frameborder='0'></iframe-->
<!--iframe src="https://onedrive.live.com/embed?resid=A2319D1D4ADB8112%212470&amp;authkey=%21ANfbZteQTA87ZXQ&amp;em=2&amp;wdAr=1.3333333333333333" width="722px" height="565px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>

<iframe src="https://docs.google.com/gview?url=http://cb-majorbiolab.work/posts/Files/nf-core-workflow.pptx&embedded=true" width="722px" height="565px" frameborder="0"></iframe-->

<div class="container">
  <div class="row">
      <div class="youtube_video">
        <iframe src="//www.slideshare.net/slideshow/embed_code/key/gk4rr4qSo4lbgQ" 
        width="800" height="600" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>
      </div>    
  </div> 
      <div class="gallery">
          <div class="item">
              <img src="images/profile_card.jpg" data-id="4DQPhc8n7KULxf">
              <div align="center"><p1>nf-core tools  guidelines - Phil Ewels</p1></div>
              <div class="youtube_icon">
                  <img src="slides.png">
              </div>
              
          </div>
          <div class="item">
              <img src="images/timeline.jpg" target="_blank" data-id="d5rGkEgXFDRN17">
              <div class="youtube_icon">
                  <img src="slides.png">
              </div>
          </div>
          <div class="item">
              <img src="images/mobile_app.jpg" target="_blank" data-id="4DQPhc8n7KULxf">
              <div class="youtube_icon active">
                  <img src="slides.png">
              </div>
          </div>
          <div class="item">
              <img src="images/lazy_load.jpg" data-id="4DQPhc8n7KULxf">
              <div class="youtube_icon">
                  <img src="slides.png">
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
          let newUrl = `//www.slideshare.net/slideshow/embed_code/key/${youtube_id}`;
          $("#video_id").attr("src", newUrl);
      })
      //due to slow connection video is playing slow
      // you can call your playlist using youtube api
  })
</script>

