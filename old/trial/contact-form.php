<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Windward Flutes | Contact</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
    <link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic' rel='stylesheet' type='text/css'>
	<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">
	<link rel="stylesheet" href="css/style.css"> 
    <style type="text/css">
      body {
        padding-top: 0px;
        padding-bottom: 40px;
      }
     
    </style>

    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="../assets/js/html5shiv.js"></script>
    <![endif]-->

 <link rel="shortcut icon" href="../assets/ico/favicon.png">
  </head>

  <body>

    <div class="navbar transparent navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="brand" href="index.html">Windward Flutes / <small>Contact</small></a>
          <div class="nav-collapse collapse">
            <ul class="nav pull-right">
              <li><a href="index.html">Home</a></li>
              <li class="dropdown">
                <a href="" class="dropdown-toggle" data-toggle="dropdown">Flutes <b class="caret"></b></a>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="pratten.html">The Windward Pratten</a></li>
                  <li><a href="keylesspratten.html">&emsp;Keyless Pratten</a></li>
                  <li><a href="combo.html">&emsp;Windward Combo</a></li>
				  <li><a href="keyedpratten.html">&emsp;Keyed Pratten</a></li>
                  <li class="divider"></li>
                  <li><a href="windwardc.html">Windward C Flute</a></li>
                </ul>
              </li>
              <li class="dropdown">
                <a href="" class="dropdown-toggle" data-toggle="dropdown">About <b class="caret"></b></a>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="makers.html">The Makers</a></li>
                  <li><a href="design.html">Design</a></li>
                  <li><a href="craftsmanship.html">Craftsmanship</a></li>
				  <li><a href="restoration.html">Restoration &amp; Repairs</a></li>
                  <li><a href="wood.html">Wood and Materials</a></li>
                  <li><a href="faq.html">FAQ</a></li>
                </ul>
              </li>

              <li class="dropdown">
              	<a href="" class="dropdown-toggle" data-toggle="dropdown">Contact<b class="caret"></b></a>
              	<ul class="dropdown-menu" role="menu">
                  <li class="active"><a href="contact.html">Contact Us</a></li>
                  <li><a href="order.html">Order &amp; Info</a></li>
                  <li><a href="links.html">Links &amp; Events</a></li>
                  <li><a href="credits.html">Credits</a></li>
              	</ul>              	             	
              </li>
              <li><a data-iconcolor="#3b5998" href="https://www.facebook.com/FlutesbyWindward" target="_blank"><i class="icon-facebook"></i></a></li>             
          </ul>

          </div><!--/.nav-collapse -->
        </div>
      </div>
    </div>


       <div class="row">
        <ul class="rslides">
          <li><img src="img/assets/contact/01.jpg" alt="" /></li>
          <li><img src="img/assets/contact/02.jpg" alt="" /></li>
          <li><img src="img/assets/contact/03.jpg" alt="" /></li>
          <li><img src="img/assets/contact/04.jpg" alt="" /></li>
          <li><img src="img/assets/contact/05.jpg" alt="" /></li>
          <li><img src="img/assets/contact/06.jpg" alt="" /></li>
          <li><img src="img/assets/contact/07.jpg" alt="" /></li>
          <li><img src="img/assets/contact/08.jpg" alt="" /></li>
          <li><img src="img/assets/contact/09.jpg" alt="" /></li>
          <li><img src="img/assets/contact/10.jpg" alt="" /></li>
          <li><img src="img/assets/contact/11.jpg" alt="" /></li>
          <li><img src="img/assets/contact/12.jpg" alt="" /></li>
          <li><img src="img/assets/contact/13.jpg" alt="" /></li>
          </ul>	
      </div>
     
<div class="container">          
        
    	<div class="header"><hr><h2>Contact Us</h2></div>


      <div class="row">
   	
       	<div class="span6">
         <p class="lead">Thank you for visiting our website. We welcome your comments and feedback, and we will respond to any inquiries.</p><p>If you would like to buy a Windward instrument, we will try to assist you in the choice of flute that best fulfills your expectations. We care about our customers as we do our flutes, and like any good matchmaker, we want the player and the flute to have a long and happy relationship!</p><p>Feel free to <a href="mailto:info@windwardflutes.com">contact us</a> about the available options. 
         </div>
         <div class="well span4 offset1">
         <?php  
  
        // check for a successful form post  
        if (isset($_GET['s'])) echo "<div class=\"alert alert-success\">".$_GET['s']."</div>";  
  
        // check for a form error  
        elseif (isset($_GET['e'])) echo "<div class=\"alert alert-error\">".$_GET['e']."</div>";  
  
?>  
         	<form method="POST" action="contact-form-submission.php" class="form-inline">  
            <div class="control-group">  
                <label class="control-label" for="input1">Name</label>  
                <div class="controls">  
                    <input type="text" name="contact_name" id="input1" placeholder="Your name">  
                </div>  
            </div>  
            <div class="control-group">  
                <label class="control-label" for="input2">Email Address</label>  
                <div class="controls">  
                    <input type="text" name="contact_email" id="input2" placeholder="Your email address">  
                </div>  
            </div>  
            <div class="control-group">  
                <label class="control-label" for="input3">Message</label>  
                <div class="controls">  
                    <textarea name="contact_message" id="input3" rows="8" class="span4" placeholder="The message you want to send to me."></textarea>  
                </div>  
            </div>  
            <div class="form-actions">  
                <input type="hidden" name="save" value="contact">  
                <button type="submit" class="btn">Send</button>  
            </div>  
        </form>  
		</div>
		<br><br>
		</div>
		</div><br><br>


      <footer>
        <div class="container">
        	<div class="span3">
        		<p>CONTACT:<br><ul class="unstyled inline">
              <h3>
              <li>
                <a href="http://www.youtube.com/user/flutesbywindward">
                  <i class="icon-youtube"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/FlutesbyWindward">
                  <i class="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a href="mailto:info@windwardflutes.com?Subject=Hello">
                  <i class="icon-envelope"></i>
                </a>
              </li>
            </ul></h3>
    <address>
        phone: 902-875-3207<br>
        <a href=mailto:info@windwardflutes.com?Subject=Hello>info@windwardflutes.com</a>
    </address>
	<address>
        11 Charlotte Lane<br>
        Box 1777<br>
        Shelburne Nova Scotia<br>
		B0T 1W0, Canada</p>
	</address>
	</div>
		
      </footer>

    </div> <!-- /container -->

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="js/jquery.min.js"></script>
    <script src="js/min/bootstrap.min.js"></script>
	<script src="js/min/responsiveslides.min.js"></script>
	
    <script>
  $(function() {
    $(".rslides").responsiveSlides();
  });
</script>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-28515852-1']);
  _gaq.push(['_setDomainName', 'windwardflutes.com']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>  
  </body>
</html>
