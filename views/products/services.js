const layout = require('../layout');

module.exports = () => {
    return layout({
        content: `
        <div class="page-wrapper">
 	
    <!-- Preloader -->
    <div class="preloader"></div>
 	
    <!-- Main Header-->
    <header class="main-header header-style-one">
    	
		<!-- Header Top -->
        <div class="header-top">
            <div class="auto-container">
                <div class="clearfix">
                    <!--Top Left-->
                    <div class="top-left clearfix">
						<ul class="list">
							<li><span class="fa fa-map-marker"></span>Find a Dealer</li>
							<li><span class="fa flaticon-call"></span>123-456-7890</li>
							<li><span class="fa flaticon-clock-3"></span>Mon - Sat: 8.30am To 9.00pm</li>
						</ul>
                    </div>

                    <!--Top Right-->
                    <div class="top-right clearfix">

						<!-- Social Nav -->
						<ul class="social-nav">
							<li><a href="#"><span class="fa fa-facebook-f"></span></a></li>
							<li><a href="#"><span class="fa fa-google-plus"></span></a></li>
							<li><a href="#"><span class="fa fa-twitter"></span></a></li>
							<li><a href="#"><span class="fa fa-skype"></span></a></li>
						</ul>
						
						<!-- Phone -->
                        <a href="signin.html" class="signin">Sign In</a>
						
                    </div>
                </div>
            </div>
        </div>
		
    	<!-- Header Upper -->
        <div class="header-upper">
        	<div class="auto-container">
            	<div class="clearfix">
                	
                	<div class="pull-left logo-box">
                    	<div class="logo"><a href="index.html"><img src="https://via.placeholder.com/160x90" alt="" title=""></a></div>
                    </div>
                   	
                   	<div class="nav-outer clearfix">
						<!-- Mobile Navigation Toggler -->
                        <div class="mobile-nav-toggler"><span class="icon flaticon-menu"></span></div>
						<!-- Main Menu -->
						<nav class="main-menu navbar-expand-md">
							<div class="navbar-header">
								<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>
							</div>

							<div class="navbar-collapse show collapse clearfix" id="navbarSupportedContent">
								<ul class="navigation clearfix">
									<li class="dropdown"><a href="/">Home</a>
										
									</li>
									<li><a href="/about">About Us</a></li>
								
									
									
									<li><a href="/contact">Contact us</a></li>
								</ul>
							</div>
							
						</nav>
						
						<!-- Outer Box -->
						<div class="outer-box">
							<a href="#" class="cart-box flaticon-shopping-cart-3"><span class="icon">0</span></a>
						</div>
						
					</div>
                   
                </div>
            </div>
        </div>
        <!--End Header Upper-->
        
		<!-- Mobile Menu  -->
        <div class="mobile-menu">
            <div class="menu-backdrop"></div>
            <div class="close-btn"><span class="icon fa fa-remove"></span></div>
            
            <nav class="menu-box">
                <div class="nav-logo"><a href="index.html"><img src="https://via.placeholder.com/160x90" alt="" title=""></a></div>
                <div class="menu-outer"><!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--></div>
            </nav>
        </div><!-- End Mobile Menu -->
		
    </header>
    <!--End Main Header -->
	
	<!-- Page Title -->
	<section class="page-title" style="background-image:url(https://via.placeholder.com/1170x455)">
		<!-- Icons -->
		<div class="icons parallax-scene-3">
			<!-- Icon One -->
			<div data-depth="0.30" class="icon-one parallax-layer" style="background-image:url(images/icons/icon-7.png)"></div>
			<!-- Icon Two -->
			<div data-depth="0.20" class="icon-two parallax-layer" style="background-image:url(images/icons/icon-8.png)"></div>
			<!-- Icon Three -->
			<div data-depth="0.50" class="icon-three parallax-layer" style="background-image:url(images/icons/icon-9.png)"></div>
			<!-- Icon Four -->
			<div data-depth="0.30" class="icon-four parallax-layer" style="background-image:url(images/icons/icon-10.png)"></div>
			<!-- Icon Five -->
			<div data-depth="0.10" class="icon-five parallax-layer" style="background-image:url(images/icons/icon-11.png)"></div>
		</div>
		<div class="auto-container">
			<h2>Services</h2>
			<div class="text">The Leading Retailer of Prestige Cars</div>
		</div>
	</section>
	<!-- End Page Title -->
	
	<!-- Sidebar Page Container -->
    <div class="sidebar-page-container">
    	<div class="auto-container">
        	<div class="row clearfix">
				
				<!--Sidebar Side-->
                <div class="sidebar-side col-lg-3 col-md-12 col-sm-12">
                	<aside class="sidebar">
						
						<!-- Select Car -->
						<div class="sidebar-widget select-car">
							<div class="widget-content">
								<h4>New Cars For Sale</h4>
								
								<!-- Default Form -->
								<div class="default-form">
									<form method="post" action="index.html">
										
										<!-- Form Group -->
										<div class="form-group">
											<select class="custom-select-box">
												<option>Makes</option>
												<option>01</option>
												<option>02</option>
												<option>03</option>
												<option>04</option>
											</select>
										</div>
										
										<!-- Form Group -->
										<div class="form-group">
											<select class="custom-select-box">
												<option>Any Model</option>
												<option>2015</option>
												<option>2016</option>
												<option>2019</option>
												<option>2020</option>
											</select>
										</div>
										
										<!-- Form Group -->
										<div class="form-group">
											<select class="custom-select-box">
												<option>Min price</option>
												<option>1000 to 10000</option>
												<option>10000 to 100000</option>
												<option>100000 to 100000</option>
											</select>
										</div>
										
										<!-- Form Group -->
										<div class="form-group">
											<select class="custom-select-box">
												<option>Max price</option>
												<option>1000 to 10000</option>
												<option>10000 to 100000</option>
												<option>100000 to 100000</option>
											</select>
										</div>
										
										<!-- Form Group -->
										<div class="form-group">
											<select class="custom-select-box">
												<option>Year</option>
												<option>1990</option>
												<option>2000</option>
												<option>2010</option>
												<option>2020</option>
											</select>
										</div>
										
										<div class="form-group">
											<button type="submit" class="theme-btn btn-style-one"><span class="txt">Search used cars</span></button>
										</div>
										
									</form>
								</div>
								
							</div>
						</div>
						
					</aside>
				</div>
				
				<!--Content Side-->
                <div class="content-side col-lg-9 col-md-12 col-sm-12">
					<div class="our-services">
						
						<div class="row clearfix">
					
							<!-- Services Block / Style Two -->
							<div class="services-block style-two col-lg-6 col-md-6 col-sm-12">
								<div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
									<div class="icon-box">
										<span class="icon flaticon-brake-disc"></span>
									</div>
									<h4><a href="service.html">Brake Inspection</a></h4>
									<div class="text">All our cars come from main dealers and go through rigorous checks and tests before they arrive at your door</div>
								</div>
							</div>
							
							<!-- Services Block / Style Two -->
							<div class="services-block style-two col-lg-6 col-md-6 col-sm-12">
								<div class="inner-box wow fadeInRight" data-wow-delay="150ms" data-wow-duration="1500ms">
									<div class="icon-box">
										<span class="icon flaticon-fan"></span>
									</div>
									<h4><a href="service.html">Cooling system</a></h4>
									<div class="text">All our cars come from main dealers and go through rigorous checks and tests before they arrive at your door</div>
								</div>
							</div>
							
							<!-- Services Block / Style Two -->
							<div class="services-block style-two col-lg-6 col-md-6 col-sm-12">
								<div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
									<div class="icon-box">
										<span class="icon flaticon-car-1"></span>
									</div>
									<h4><a href="service.html">Air conditioner</a></h4>
									<div class="text">All our cars come from main dealers and go through rigorous checks and tests before they arrive at your door</div>
								</div>
							</div>
							
							<!-- Services Block / Style Two -->
							<div class="services-block style-two col-lg-6 col-md-6 col-sm-12">
								<div class="inner-box wow fadeInRight" data-wow-delay="150ms" data-wow-duration="1500ms">
									<div class="icon-box">
										<span class="icon flaticon-car-service"></span>
									</div>
									<h4><a href="service.html">Oil change</a></h4>
									<div class="text">All our cars come from main dealers and go through rigorous checks and tests before they arrive at your door</div>
								</div>
							</div>
							
							<!-- Services Block / Style Two -->
							<div class="services-block style-two col-lg-6 col-md-6 col-sm-12">
								<div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
									<div class="icon-box">
										<span class="icon flaticon-car-4"></span>
									</div>
									<h4><a href="service.html">Courtesy cars available</a></h4>
									<div class="text">All our cars come from main dealers and go through rigorous checks and tests before they arrive at your door</div>
								</div>
							</div>
							
							<!-- Services Block / Style Two -->
							<div class="services-block style-two col-lg-6 col-md-6 col-sm-12">
								<div class="inner-box wow fadeInRight" data-wow-delay="150ms" data-wow-duration="1500ms">
									<div class="icon-box">
										<span class="icon flaticon-car-3"></span>
									</div>
									<h4><a href="service.html">Car servicingr wash</a></h4>
									<div class="text">All our cars come from main dealers and go through rigorous checks and tests before they arrive at your door</div>
								</div>
							</div>
							
						</div>
						
					</div>
				</div>
				
			</div>
		</div>
	</div>
	
	<!-- Counter Section -->
	<section class="counter-section style-two">
		<div class="auto-container">
			<div class="row clearfix">
				
				<!-- Counter Column -->
				<div class="counter-column col-lg-6 col-md-12 col-sm-12">
					<div class="inner-column">
						
						<!-- Fact Counter -->
						<div class="fact-counter">
							<div class="row clearfix">

								<!--Column-->
								<div class="column counter-column col-lg-4 col-md-4 col-sm-12">
									<div class="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
										<div class="content">
											<div class="icon flaticon-medal-1"></div>
											<div class="counter-title">Get awards</div>
											<div class="count-outer count-box">
												<span class="count-text" data-speed="4000" data-stop="315">0</span>
											</div>
										</div>
									</div>
								</div>

								<!--Column-->
								<div class="column counter-column col-lg-4 col-md-4 col-sm-12">
									<div class="inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
										<div class="content">
											<div class="icon flaticon-sold"></div>
											<div class="counter-title">Sold car per month</div>
											<div class="count-outer count-box alternate">
												<span class="count-text" data-speed="200" data-stop="1">0</span>K
											</div>
										</div>
									</div>
								</div>

								<!--Column-->
								<div class="column counter-column col-lg-4 col-md-4 col-sm-12">
									<div class="inner wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
										<div class="content">
											<div class="icon flaticon-car"></div>
											<div class="counter-title">Total barnds</div>
											<div class="count-outer count-box">
												<span class="count-text" data-speed="3000" data-stop="20">0</span>+
											</div>
										</div>
									</div>
								</div>
								
							</div>
							
						</div>
						
					</div>
				</div>
				
				<!-- Content Column -->
				<div class="content-column col-lg-6 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="text">
							<p>Along with 1000s of cars to choose from, you can apply for finance online and value your existing car all from the comfort of your favourite armchair</p>
							<p>In line with our commitment to treating customers fairly, you can find more information about Charles Hurst complaints policy here</p>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>
	<!-- End Counter Section -->
	
	<!--Main Footer-->
    <footer class="main-footer">
		<div class="auto-container">
			<!-- Upper Box -->
			<div class="upper-box">
				<div class="row clearfix">
					<!-- Nav Column -->
					<div class="nav-column col-lg-5 col-md-12 col-sm-12">
						<ul class="footer-nav">
							<li><a href="#">PRIVACY POLICY</a></li>
							<li><a href="#">SITE MAP</a></li>
							<li><a href="#">CUSTOMER SERVICE</a></li>
						</ul>
					</div>
					<!-- Email Column -->
					<div class="email-column col-lg-7 col-md-12 col-sm-12">
						<div class="inner-column">
							
							<!-- email Form -->
							<div class="email-form">
								<form method="post" action="contact.html">
									<div class="form-group clearfix">
										<input type="email" name="email" value="" placeholder="Enter Your Email Address" required>
										<button type="submit" class="theme-btn btn-style-one"><span class="txt">Join Us Now</span></button>
									</div>
								</form>
							</div>
							
						</div>
					</div>
				</div>
			</div>
			
        	<!-- Widgets Section -->
            <div class="widgets-section">
				<!-- Car Icon Left -->
				<div class="car-icon-left wow slideInLeft" data-wow-delay="0ms" data-wow-duration="1500ms" style="background-image:url(images/resource/car-icon-2.png)"></div>
				<!-- Car Icon Right -->
				<div class="car-icon-right wow slideInRight" data-wow-delay="0ms" data-wow-duration="1500ms" style="background-image:url(images/resource/car-icon-3.png)"></div> 
				
            	<div class="row clearfix">
				
					<!-- Big Column -->
                    <div class="big-column col-lg-6 col-md-12 col-sm-12">
                        <div class="row clearfix">
							
							<!-- Footer Column -->
                            <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div class="footer-widget logo-widget">
									<div class="logo">
                                    	<a href="index.html"><img src="https://via.placeholder.com/110x42" alt="" /></a>
                                    </div>
									<div class="text">Reg. Office: 2 Penman Way, Grove Park, Leicester, LE19 1ST Registered in England</div>
									<!-- Social Nav -->
									<ul class="social-nav">
										<li><a href="#"><span class="fa fa-facebook-f"></span></a></li>
										<li><a href="#"><span class="fa fa-google-plus"></span></a></li>
										<li><a href="#"><span class="fa fa-pinterest-p"></span></a></li>
										<li><a href="#"><span class="fa fa-linkedin"></span></a></li>
										<li><a href="#"><span class="fa fa-twitter"></span></a></li>
									</ul>
								</div>
							</div>
							
							<!-- Footer Column -->
                            <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div class="footer-widget links-widget">
									<h5>Useful links</h5>
									<ul class="footer-list">
										<li><a href="#">Privacy statement</a></li>
										<li><a href="#">Tax strategy</a></li>
										<li><a href="#">Modern slavery statement</a></li>
										<li><a href="#">Gender pay gap report</a></li>
										<li><a href="#">Cookie policy</a></li>
										<li><a href="#">Disclaimer</a></li>
										<li><a href="#">Perrys past & present</a></li>
										<li><a href="#">Careers</a></li>
									</ul>
								</div>
							</div>
						
						</div>
					</div>
					
					<!-- Big Column -->
                    <div class="big-column col-lg-6 col-md-12 col-sm-12">
                        <div class="row clearfix">
							
							<!--Footer Column-->
                            <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div class="footer-widget links-widget">
									<h5>Perrys group</h5>
									<ul class="footer-list">
										<li><a href="#">New cars</a></li>
										<li><a href="#">New car offers</a></li>
										<li><a href="#">New vans</a></li>
										<li><a href="#">New van offers</a></li>
										<li><a href="#">Used cars</a></li>
										<li><a href="#">Used vans</a></li>
									</ul>
								</div>
							</div>
							
							<!--Footer Column-->
                            <div class="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div class="footer-widget news-widget">
									<h5>Update News</h5>
									<div class="widget-content">
										<div class="news-box">
											<h5><a href="blog-single.html">Volkswagen Design Car Charging Robot</a></h5>
										</div>
										<div class="news-box">
											<h5><a href="blog-single.html">we're proud to represent the world's most prestigious car</a></h5>
										</div>
										<div class="news-box">
											<h5><a href="blog-single.html">In our state-of-the-art dealerships across the UK</a></h5>
										</div>
									</div>
								</div>
							</div>
							
						</div>
					</div>
					
				</div>
			
				<div class="car-icon-one" style="background-image:url(images/icons/car-icon.png)"></div>
				<div class="car-icon-two" style="background-image:url(images/icons/car-icon.png)"></div>
				
			</div>
		
		</div>
		
		<!-- Footer Bottom -->
		<div class="footer-bottom">
			<div class="copyright">© 2019 All Rights Reserved Terms of Use</div>
		</div>
		
	</footer>
	
</div>
<!--End pagewrapper-->

<!--Scroll to top-->
<div class="scroll-to-top scroll-to-target" data-target="html"><span class="fa fa-arrow-circle-up"></span></div>
        
        `
    })
    }