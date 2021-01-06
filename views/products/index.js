const layout = require('../layout');


	module.exports = ({ products }) => {
		const renderedProducts = products
		  .map(product => {
			return `
			<div class="deal-block col-lg-4 col-md-6 col-sm-12">
			<div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
			<div class="image">
				<a href="listing-detail.html"><img src="data:image/png;base64, ${product.image}"/></a>
				<div class="ribbon">New</div>
			</div>
			<div class="lower-content">
				<h4><a href="listing-detail.html">Smart fortwo coupe 1.0 Prime Sport Premium 2dr Auto</a></h4>
				<div class="price">$7,750</div>
				<div class="content">
					<div class="row clearfix">
						<!-- Column -->
						<div class="column col-lg-6 col-md-6 col-sm-12">
							<div class="lower-title">Registration</div>
							<ul>
								<li>MA67NNL</li>
								<li>Mileage 4,015 miles</li>
								<li>Engine Size 1 L</li>
							</ul>
						</div>
						<!-- Column -->
						<div class="column col-lg-6 col-md-6 col-sm-12">
							<div class="lower-title">Transmission</div>
							<ul>
								<li>Automatic</li>
								<li>Fuel Type Petrol</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="btn-box text-center">
					<a href="#" class="theme-btn btn-style-one"><span class="txt">View More</span></a>
				</div>
			</div>
		</div>
	</div> `;
		  })
		  .join('\n');
		
		//   <div class="column is-one-quarter">
			// 	<div class="card product-card">
			// 	  <figure>
			// 	  <a href="/product/${product.id}/details">
			// 	  <input hidden value="${product.id}" name="productIds"/>
			// 		<img src="data:image/png;base64, ${product.image}"/>
				   
			// 		</a>
			// 	  </figure>
			// 	  <div class="card-content">
			// 		<h3 class="subtitle">${product.title}</h3>
			// 		<h5>$${product.price}</h5>
			// 	  </div>
			// 	  <footer class="card-footer">
			// 		<form action="/cart/products" method="POST">
			// 		<input hidden value="${product.id}" name="productId"/>
			// 		  <button class="button has-icon is-inverted">
			// 			<i class="fa fa-shopping-cart"></i> Add to cart
			// 		  </button>
			// 		</form>
			// 	  </footer>
			// 	</div>
			//   </div>

	
//   const renderedProducts = products
//     .map(product => {
//       return `
//         <div class="column is-one-quarter">
//           <div class="card product-card">
//             <figure>
//             <a href="/product/${product.id}/details">
//             <input hidden value="${product.id}" name="productIds"/>
//               <img src="data:image/png;base64, ${product.image}"/>
             
//               </a>
//             </figure>
//             <div class="card-content">
//               <h3 class="subtitle">${product.title}</h3>
//               <h5>$${product.price}</h5>
//             </div>
//             <footer class="card-footer">
//               <form action="/cart/products" method="POST">
//               <input hidden value="${product.id}" name="productId"/>
//                 <button class="button has-icon is-inverted">
//                   <i class="fa fa-shopping-cart"></i> Add to cart
//                 </button>
//               </form>
//             </footer>
//           </div>
//         </div>
//       `;
//     })
//     .join('\n');

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
							<!-- <li><span class="fa fa-map-marker"></span>Find a Dealer</li> -->
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
                        <a href="/signin" class="signin">Sign In</a>
						
                    </div>
                </div>
            </div>
        </div>
		
    	<!-- Header Upper -->
        <div class="header-upper">
        	<div class="auto-container">
            	<div class="clearfix">
                	
                	<div class="pull-left logo-box">
                    	<div class="logo"><a href="index.html"><img src="images/main-slider/midray.png" alt="" title=""></a></div>
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
									<li ><a href="/">Home</a>
										
									</li>
									<li><a href="/about">About Us</a></li>
									<li><a href="/services">Services</a></li>
									
									
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
	
	<!-- Banner Section -->
    <section class="banner-section">
		<div class="banner-carousel owl-theme owl-carousel">
            <!-- Slide Item -->
            <div class="slide-item">
            	<div class="image-layer" style="background-image:url(images/main-slider/highcap.jpg)"></div>
				<div class="icons-layer" style="background-image:url(images/main-slider/icons.png)"></div>
                <div class="auto-container">
                    <div class="content-box">
                        <h1>Your perfect car <br> delivered to your door</h1>
						<div class="text">Cartime is a prestige used car supermarket specialising in quality used cars. We offer a friendly and efficient service in buying and selling second hand vehicles.</div>
                        <div class="btn-box">
							<a href="#" class="theme-btn btn-style-one"><span class="txt">Search for a car</span></a>
							<a href="#" class="theme-btn btn-style-two"><span class="txt">Free car valuations</span></a>
						</div>
						<a class="need" href="#"><span class="fa fa-angle-right"></span> Need some inspiration?</a>
                    </div>  
                </div>
            </div>

            <!-- Slide Item -->
            <div class="slide-item">
				<div class="icons-layer" style="background-image:url(images/main-slider/icons.png)"></div>
            	<div class="image-layer" style="background-image:url(images/main-slider/highcap3.jpg)"></div>
                <div class="auto-container">
                    <div class="content-box">
                        <h1>Your perfect car <br> delivered to your door</h1>
						<div class="text">Cartime is a prestige used car supermarket specialising in quality used cars. We offer a friendly and efficient service in buying and selling second hand vehicles.</div>
                        <div class="btn-box">
							<a href="#" class="theme-btn btn-style-one"><span class="txt">Search for a car</span></a>
							<a href="#" class="theme-btn btn-style-two"><span class="txt">Free car valuations</span></a>
						</div>
						<a class="need" href="#"><span class="fa fa-angle-right"></span> Need some inspiration?</a>
                    </div>   
                </div>
            </div>
			
			<!-- Slide Item -->
            <div class="slide-item">
				<div class="icons-layer" style="background-image:url(images/main-slider/icons.png)"></div>
            	<div class="image-layer" style="background-image:url(images/main-slider/toyota2.jpg)"></div>
                <div class="auto-container">
                    <div class="content-box">
                        <h1>Your perfect car <br> delivered to your door</h1>
						<div class="text">Cartime is a prestige used car supermarket specialising in quality used cars. We offer a friendly and efficient service in buying and selling second hand vehicles.</div>
                        <div class="btn-box">
							<a href="#" class="theme-btn btn-style-one"><span class="txt">Search for a car</span></a>
							<a href="#" class="theme-btn btn-style-two"><span class="txt">Free car valuations</span></a>
						</div>
						<a class="need" href="#"><span class="fa fa-angle-right"></span> Need some inspiration?</a>
                    </div>  
                </div>
            </div>
        </div>
    </section>
    <!-- End Banner Section -->
	
	<!-- About Section -->
	<section class="about-section">
		<!-- Icons -->
		<div class="icons parallax-scene-1">
			<!-- Icon One -->
			<div class="car-icon" style="background-image:url(images/resource/car-icon.png)"></div>
			<!-- Icon Two -->
			<div class="icon-two" style="background-image:url(images/background/2.png)"></div>
			<!-- Icon Three -->
			<div data-depth="0.10" class="icon-three parallax-layer" style="background-image:url(images/icons/icon-1.png)"></div>
			<!-- Icon Four -->
			<div data-depth="0.30" class="icon-four parallax-layer" style="background-image:url(images/icons/icon-2.png)"></div>
			<!-- Icon Five -->
			<div data-depth="0.10" class="icon-five parallax-layer" style="background-image:url(images/icons/icon-3.png)"></div>
		</div>
		<!-- End Icons -->
		<div class="auto-container">
			<div class="row clearfix">
				
				<!-- Form Column -->
				<div class="form-column col-lg-6 col-md-12 col-sm-12">
					<div class="inner-column" style="background-image:url(images/background/1.png)">
						<h3>Search used vehicles</h3>
						
						<!-- Cars Info Tabs -->
						<div class="cars-info-tabs">
							<!-- Cars Tabs -->
							<div class="cars-tabs tabs-box">
							
								<!-- Tab Btns -->
								<ul class="tab-btns tab-buttons clearfix">
									<li data-tab="#prod-cars" class="tab-btn active-btn"><span class="circle"></span>Cars</li>
									<li data-tab="#prod-vans" class="tab-btn"><span class="circle"></span>Vans</li>
								</ul>
								
								<!-- Tabs Container -->
								<div class="tabs-content">
									
									<!-- Tab / Active Tab -->
									<div class="tab active-tab" id="prod-cars">
										<div class="content">
											
											<!-- Default Form -->
											<div class="default-form">
												<form method="post" action="index.html">
													<div class="row clearfix">
														
														<!-- Form Group -->
														<div class="form-group col-lg-6 col-md-6 col-sm-12">
															<select class="custom-select-box">
																<option>Makes</option>
																<option>01</option>
																<option>02</option>
																<option>03</option>
																<option>04</option>
															</select>
														</div>
														
														<!-- Form Group -->
														<div class="form-group col-lg-6 col-md-6 col-sm-12">
															<select class="custom-select-box">
																<option>Model</option>
																<option>2015</option>
																<option>2016</option>
																<option>2019</option>
																<option>2020</option>
															</select>
														</div>
														
														<!-- Form Group -->
														<div class="form-group col-lg-6 col-md-6 col-sm-12">
															<select class="custom-select-box">
																<option>No min price</option>
																<option>1000 to 10000</option>
																<option>10000 to 100000</option>
																<option>100000 to 100000</option>
															</select>
														</div>
														
														<!-- Form Group -->
														<div class="form-group col-lg-6 col-md-6 col-sm-12">
															<select class="custom-select-box">
																<option>No max price</option>
																<option>1000 to 10000</option>
																<option>10000 to 100000</option>
																<option>100000 to 100000</option>
															</select>
														</div>
														
														<!-- Form Group -->
														<div class="form-group col-lg-6 col-md-6 col-sm-12">
															<select class="custom-select-box">
																<option>Postcode</option>
																<option>001</option>
																<option>002</option>
																<option>003</option>
																<option>004</option>
															</select>
														</div>
														
														<!-- Form Group -->
														<div class="form-group col-lg-6 col-md-6 col-sm-12">
															<select class="custom-select-box">
																<option>Distance</option>
																<option>01</option>
																<option>02</option>
																<option>03</option>
																<option>04</option>
															</select>
														</div>
														
														<div class="form-group col-lg-12 col-md-12 col-sm-12">
															<button type="submit" class="theme-btn btn-style-one"><span class="txt">Search</span></button>
														</div>
														
													</div>
												</form>
											</div>
											<div class="stock">Over 10,700 Vehicles in Stock</div>
										</div>
									</div>
									
									<!-- Tab -->
									<div class="tab" id="prod-vans">
										<div class="content">
											
											<!-- Default Form -->
											<div class="default-form">
												<form method="post" action="index.html">
													<div class="row clearfix">
														
														<!-- Form Group -->
														<div class="form-group col-lg-6 col-md-6 col-sm-12">
															<select class="custom-select-box">
																<option>Makes</option>
																<option>01</option>
																<option>02</option>
																<option>03</option>
																<option>04</option>
															</select>
														</div>
														
														<!-- Form Group -->
														<div class="form-group col-lg-6 col-md-6 col-sm-12">
															<select class="custom-select-box">
																<option>Model</option>
																<option>2015</option>
																<option>2016</option>
																<option>2019</option>
																<option>2020</option>
															</select>
														</div>
														
														<!-- Form Group -->
														<div class="form-group col-lg-6 col-md-6 col-sm-12">
															<select class="custom-select-box">
																<option>No min price</option>
																<option>1000 to 10000</option>
																<option>10000 to 100000</option>
																<option>100000 to 100000</option>
															</select>
														</div>
														
														<!-- Form Group -->
														<div class="form-group col-lg-6 col-md-6 col-sm-12">
															<select class="custom-select-box">
																<option>No max price</option>
																<option>1000 to 10000</option>
																<option>10000 to 100000</option>
																<option>100000 to 100000</option>
															</select>
														</div>
														
														<!-- Form Group -->
														<div class="form-group col-lg-6 col-md-6 col-sm-12">
															<select class="custom-select-box">
																<option>Postcode</option>
																<option>001</option>
																<option>002</option>
																<option>003</option>
																<option>004</option>
															</select>
														</div>
														
														<!-- Form Group -->
														<div class="form-group col-lg-6 col-md-6 col-sm-12">
															<select class="custom-select-box">
																<option>Distance</option>
																<option>01</option>
																<option>02</option>
																<option>03</option>
																<option>04</option>
															</select>
														</div>
														
														<div class="form-group col-lg-12 col-md-12 col-sm-12">
															<button type="submit" class="theme-btn btn-style-one"><span class="txt">Search</span></button>
														</div>
														
													</div>
												</form>
											</div>
											<div class="stock">Over 10,700 Vehicles in Stock</div>
											
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
						
						<!-- Sec Title -->
						<div class="sec-title">
							<div class="title">About Company</div>
							<h2>About the Carrpi Group</h2>
						</div>
						<div class="bold-text">We have 15 years of experience</div>
						<div class="text">
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
							<p>laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						</div>
						<div class="product">
							<div class="image">
								<img src="https://via.placeholder.com/575x215" alt="" />
								<div class="overlay-box">
									<div class="room">Now in show room</div>
									<div class="title">New ford puma</div>
									<div class="price">Save $1000</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>
	<!-- End About Section -->
	
	<!-- Services Section -->
	<section class="services-section">
		<div class="auto-container">
			<!-- Sec Title -->
			<div class="sec-title centered">
				<h2>Why choose <span>Cppi</span></h2>
			</div>
			<div class="row clearfix">
				
				<!-- Services Block -->
				<div class="services-block col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="icon-box">
							<span class="icon flaticon-win"></span>
						</div>
						<h4><a href="service.html">Peace of mind</a></h4>
						<div class="text">All our cars come from main dealers and go through rigorous checks and tests before they arrive at your door</div>
					</div>
				</div>
				
				<!-- Services Block -->
				<div class="services-block col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="icon-box">
							<span class="icon flaticon-transportation"></span>
						</div>
						<h4><a href="service.html">Very best prices</a></h4>
						<div class="text">All our cars come from main dealers and go through rigorous checks and tests before they arrive at your door</div>
					</div>
				</div>
				
				<!-- Services Block -->
				<div class="services-block col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="icon-box">
							<span class="icon flaticon-null"></span>
						</div>
						<h4><a href="service.html">Free Vehicle Valuation</a></h4>
						<div class="text">All our cars come from main dealers and go through rigorous checks and tests before they arrive at your door</div>
					</div>
				</div>
				
			</div>
			
			<div class="help">Let us help. Enter your vehicle registration below to begin</div>
			
		</div>
	</section>
	<!-- End Services Section -->
	
	<!-- Deals Section -->
	<section class="deals-section" style="background-image:url(images/background/3.png)">
		<div class="icons">
			<!-- Icon One -->
			<div class="icon-one"></div>
			<!-- Icon Two -->
			<div class="icon-two"></div>
			<!-- Icon Three -->
			<div class="icon-three"></div>
			<!-- Icon Four -->
			<div class="icon-four"></div>
			<!-- Icon Five -->
			<div class="icon-five" style="background-image:url(images/icons/icon-3.png)"></div>
			<!-- Icon Six -->
			<div class="icon-six" style="background-image:url(images/icons/icon-2.png)"></div>
		</div>
		<div class="auto-container">
			<!-- Sec Title -->
			<div class="sec-title">
				<div class="clearfix">
					<div class="pull-left">
						<h2>Deals of the week</h2>
						<div class="text">we're proud to represent the world's most prestigious car brands at over 140 <br> dealerships nationwide</div>
					</div>
					<div class="pull-right">
						<a href="#" class="deals">Check out laest week deals <span class="fa fa-angle-right"></span></a>
					</div>
				</div>
			</div>
			<div class="row clearfix">
			
				<!-- Deal Block -->
				<div class="deal-block col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="image">
							<a href="listing-detail.html"><img src="images/main-slider/toyota.jpg" alt="" /></a>
							<div class="ribbon">New</div>
						</div>
						<div class="lower-content">
							<h4><a href="listing-detail.html">Smart fortwo coupe 1.0 Prime Sport Premium 2dr Auto</a></h4>
							<div class="price">$7,750</div>
							<div class="content">
								<div class="row clearfix">
									<!-- Column -->
									<div class="column col-lg-6 col-md-6 col-sm-12">
										<div class="lower-title">Registration</div>
										<ul>
											<li>MA67NNL</li>
											<li>Mileage 4,015 miles</li>
											<li>Engine Size 1 L</li>
										</ul>
									</div>
									<!-- Column -->
									<div class="column col-lg-6 col-md-6 col-sm-12">
										<div class="lower-title">Transmission</div>
										<ul>
											<li>Automatic</li>
											<li>Fuel Type Petrol</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="btn-box text-center">
								<a href="#" class="theme-btn btn-style-one"><span class="txt">View More</span></a>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Deal Block -->
				<div class="deal-block col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="image">
							<a href="listing-detail.html"><img src="https://via.placeholder.com/370x264" alt="" /></a>
							<div class="ribbon">New</div>
						</div>
						<div class="lower-content">
							<h4><a href="listing-detail.html">Smart fortwo coupe 1.0 Prime Sport Premium 2dr Auto</a></h4>
							<div class="price">$7,750</div>
							<div class="content">
								<div class="row clearfix">
									<!-- Column -->
									<div class="column col-lg-6 col-md-6 col-sm-12">
										<div class="lower-title">Registration</div>
										<ul>
											<li>MA67NNL</li>
											<li>Mileage 4,015 miles</li>
											<li>Engine Size 1 L</li>
										</ul>
									</div>
									<!-- Column -->
									<div class="column col-lg-6 col-md-6 col-sm-12">
										<div class="lower-title">Transmission</div>
										<ul>
											<li>Automatic</li>
											<li>Fuel Type Petrol</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="btn-box text-center">
								<a href="#" class="theme-btn btn-style-one"><span class="txt">View More</span></a>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Deal Block -->
				<div class="deal-block col-lg-4 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="image">
							<a href="listing-detail.html"><img src="https://via.placeholder.com/370x264" alt="" /></a>
							<div class="ribbon">New</div>
						</div>
						<div class="lower-content">
							<h4><a href="listing-detail.html">Smart fortwo coupe 1.0 Prime Sport Premium 2dr Auto</a></h4>
							<div class="price">$7,750</div>
							<div class="content">
								<div class="row clearfix">
									<!-- Column -->
									<div class="column col-lg-6 col-md-6 col-sm-12">
										<div class="lower-title">Registration</div>
										<ul>
											<li>MA67NNL</li>
											<li>Mileage 4,015 miles</li>
											<li>Engine Size 1 L</li>
										</ul>
									</div>
									<!-- Column -->
									<div class="column col-lg-6 col-md-6 col-sm-12">
										<div class="lower-title">Transmission</div>
										<ul>
											<li>Automatic</li>
											<li>Fuel Type Petrol</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="btn-box text-center">
								<a href="#" class="theme-btn btn-style-one"><span class="txt">View More</span></a>
							</div>
						</div>
					</div>
				</div>

				${renderedProducts}
			
			</div>
		</div>
	</section>
	<!-- End Deals Section -->
	
	<!-- Dealer Section -->
	<section class="dealer-section">
		<!-- Icons -->
		<div class="icons">
			<!-- Icon One -->
			<div class="icon-one"></div>
			<!-- Icon Two -->
			<div class="icon-two"></div>
			<!-- Icon Three -->
			<div class="icon-three"></div>
			<!-- Icon Four -->
			<div class="icon-four"></div>
		</div>
		
		<div class="auto-container">
			<div class="row clearfix">
				
				<!-- Content Column -->
				<div class="content-column col-lg-7 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="pattern-layer" style="background-image:url(images/background/4.png)"></div>
						<div class="pattern-layer-two" style="background-image:url(images/background/5.png)"></div>
						<!-- Sec Title -->
						<div class="sec-title">
							<div class="title">Find you local Charles Hurst <br> Dealership</div>
							<h2>Call or visit your <br> local Charles Hurst dealership <br> today for professional service</h2>
						</div>
						<div class="text">
							<p>It's easy to contact any location in our vast network of Charles Hurst dealerships throughout Northern Ireland. No matter which brand you prefer or where you're based, expert support and advice from our teams is never far away. </p>
							<p>Get in touch with us to find out more about the new and approved used cars and vans we offer, as well as the genuine parts and accessories for the manufacturers we represent.</p>
						</div>
						
						<!-- Dealership Form -->
						<div class="dealership-form">
							<form method="post" action="index.html">
								<div class="clearfix">
									
									<!-- Form Group -->
									<div class="form-group col-lg-6 col-md-6 col-sm-12">
										<select class="custom-select-box">
											<option>All Franchise</option>
											<option>01</option>
											<option>02</option>
											<option>03</option>
											<option>04</option>
										</select>
									</div>
									
									<!-- Form Group -->
									<div class="form-group col-lg-6 col-md-6 col-sm-12">
										<input type="text" name="text" placeholder="Enter Postcode" required>
									</div>
									
									<div class="form-group">
										<button type="submit" class="theme-btn submit-btn"><span class="fa fa-angle-right"></span></button>
									</div>
									
								</div>
							</form>
						</div>	
						
					</div>
				</div>
				
				<!-- Image Column -->
				<div class="image-column col-lg-5 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="pattern-layer-three" style="background-image:url(images/background/6.png)"></div>
						<div class="pattern-layer-four" style="background-image:url(images/background/6.png)"></div>
						<div class="image">
							<img src="https://via.placeholder.com/927x471" alt="" />
							<a href="https://www.youtube.com/watch?v=kxPCFljwJws" class="lightbox-image video-box"><span class="fa fa-play"><i class="ripple"></i></span></a>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>
	<!-- End Dealer Section -->
	
	<!-- Counter Section -->
	<section class="counter-section">
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
	
	<!-- Seller Section -->
	<section class="seller-section" style="background-image:url(images/background/7.jpg)">
		<div class="icons">
			<!-- Icon One -->
			<div class="icon-one"></div>
			<!-- Icon Two -->
			<div class="icon-two"></div>
			<!-- Icon Three -->
			<div class="icon-three"></div>
			<!-- Icon Four -->
			<div class="icon-four"></div>
			<!-- Icon Five -->
			<div class="icon-five" style="background-image:url(images/icons/icon-3.png)"></div>
			<!-- Icon Six -->
			<div class="icon-six" style="background-image:url(images/icons/icon-2.png)"></div>
		</div>
		<div class="auto-container">
			<!-- Sec Title -->
			<div class="sec-title">
				<div class="clearfix">
					<div class="pull-left">
						<h2>Best seller cars</h2>
						<div class="text">we're proud to represent the world's most prestigious car brands at over 140 <br> dealerships nationwide</div>
					</div>
					<div class="pull-right">
						<a href="#" class="deals">Check out laest week deals <span class="fa fa-angle-right"></span></a>
					</div>
				</div>
			</div>
		</div>
		<div class="outer-container">
			<div class="row clearfix">
			
				<!-- Deal Block -->
				<div class="deal-block style-two col-lg-3 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="image">
							<a href="listing-detail.html"><img src="https://via.placeholder.com/370x264" alt="" /></a>
							<div class="ribbon">New</div>
						</div>
						<div class="lower-content">
							<h4><a href="listing-detail.html">Smart fortwo coupe 1.0 Prime Sport Premium 2dr Auto</a></h4>
							<div class="price">$7,750</div>
							<div class="content"></div>
							<div class="btn-box text-center">
								<a href="listing-detail.html" class="theme-btn btn-style-one"><span class="txt">View More</span></a>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Deal Block -->
				<div class="deal-block style-two col-lg-3 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInLeft" data-wow-delay="150ms" data-wow-duration="1500ms">
						<div class="image">
							<a href="listing-detail.html"><img src="https://via.placeholder.com/370x264" alt="" /></a>
							<div class="ribbon">used</div>
						</div>
						<div class="lower-content">
							<h4><a href="listing-detail.html">Smart fortwo coupe 1.0 Prime Sport Premium 2dr Auto</a></h4>
							<div class="price">$7,750</div>
							<div class="content"></div>
							<div class="btn-box text-center">
								<a href="listing-detail.html" class="theme-btn btn-style-one"><span class="txt">View More</span></a>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Deal Block -->
				<div class="deal-block style-two col-lg-3 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
						<div class="image">
							<a href="listing-detail.html"><img src="https://via.placeholder.com/370x264" alt="" /></a>
							<div class="ribbon">New</div>
						</div>
						<div class="lower-content">
							<h4><a href="listing-detail.html">Smart fortwo coupe 1.0 Prime Sport Premium 2dr Auto</a></h4>
							<div class="price">$7,750</div>
							<div class="content"></div>
							<div class="btn-box text-center">
								<a href="listing-detail.html" class="theme-btn btn-style-one"><span class="txt">View More</span></a>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Deal Block -->
				<div class="deal-block style-two col-lg-3 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInLeft" data-wow-delay="450ms" data-wow-duration="1500ms">
						<div class="image">
							<a href="listing-detail.html"><img src="https://via.placeholder.com/370x264" alt="" /></a>
							<div class="ribbon">used</div>
						</div>
						<div class="lower-content">
							<h4><a href="listing-detail.html">Smart fortwo coupe 1.0 Prime Sport Premium 2dr Auto</a></h4>
							<div class="price">$7,750</div>
							<div class="content"></div>
							<div class="btn-box text-center">
								<a href="listing-detail.html" class="theme-btn btn-style-one"><span class="txt">View More</span></a>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Deal Block -->
				<div class="deal-block style-two col-lg-3 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="image">
							<a href="listing-detail.html"><img src="https://via.placeholder.com/370x264" alt="" /></a>
							<div class="ribbon">New</div>
						</div>
						<div class="lower-content">
							<h4><a href="listing-detail.html">Smart fortwo coupe 1.0 Prime Sport Premium 2dr Auto</a></h4>
							<div class="price">$7,750</div>
							<div class="content"></div>
							<div class="btn-box text-center">
								<a href="listing-detail.html" class="theme-btn btn-style-one"><span class="txt">View More</span></a>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Deal Block -->
				<div class="deal-block style-two col-lg-3 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInRight" data-wow-delay="150ms" data-wow-duration="1500ms">
						<div class="image">
							<a href="listing-detail.html"><img src="https://via.placeholder.com/370x264" alt="" /></a>
							<div class="ribbon">used</div>
						</div>
						<div class="lower-content">
							<h4><a href="listing-detail.html">Smart fortwo coupe 1.0 Prime Sport Premium 2dr Auto</a></h4>
							<div class="price">$7,750</div>
							<div class="content"></div>
							<div class="btn-box text-center">
								<a href="listing-detail.html" class="theme-btn btn-style-one"><span class="txt">View More</span></a>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Deal Block -->
				<div class="deal-block style-two col-lg-3 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInRight" data-wow-delay="300ms" data-wow-duration="1500ms">
						<div class="image">
							<a href="listing-detail.html"><img src="https://via.placeholder.com/370x264" alt="" /></a>
							<div class="ribbon">New</div>
						</div>
						<div class="lower-content">
							<h4><a href="listing-detail.html">Smart fortwo coupe 1.0 Prime Sport Premium 2dr Auto</a></h4>
							<div class="price">$7,750</div>
							<div class="content"></div>
							<div class="btn-box text-center">
								<a href="listing-detail.html" class="theme-btn btn-style-one"><span class="txt">View More</span></a>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Deal Block -->
				<div class="deal-block style-two col-lg-3 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInRight" data-wow-delay="450ms" data-wow-duration="1500ms">
						<div class="image">
							<a href="listing-detail.html"><img src="https://via.placeholder.com/370x264" alt="" /></a>
							<div class="ribbon">used</div>
						</div>
						<div class="lower-content">
							<h4><a href="listing-detail.html">Smart fortwo coupe 1.0 Prime Sport Premium 2dr Auto</a></h4>
							<div class="price">$7,750</div>
							<div class="content"></div>
							<div class="btn-box text-center">
								<a href="listing-detail.html" class="theme-btn btn-style-one"><span class="txt">View More</span></a>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>
				
	<!-- Services Section Two -->
	<section class="services-section-two">
		<div class="outer-container">
			<div class="three-item-carousel owl-carousel owl-theme">
				
				<!-- Services Block Two -->
				<div class="services-block-two">
					<div class="inner-box">
						<div class="image">
							<img src="https://via.placeholder.com/620x635" alt="" />
							<div class="overlay-box">
								<div class="content">
									<h4><a href="service.html">Car servicing in turriff, aberdeen</a></h4>
									<div class="text">Servicing is important to keep your car in optimum condition and maintain its resale value. Having your used car serviced at regular intervals allows potential problems to be spotted </div>
									<a href="service.html" class="view-more">View More Info</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Services Block Two -->
				<div class="services-block-two">
					<div class="inner-box">
						<div class="image">
							<img src="https://via.placeholder.com/620x635" alt="" />
							<div class="overlay-box">
								<div class="content">
									<h4><a href="service.html">Book Your Service or MOT Online</a></h4>
									<div class="text">Servicing is important to keep your car in optimum condition and maintain its resale value. Having your used car serviced at regular intervals allows potential problems to be spotted </div>
									<a href="service.html" class="view-more">View More Info</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Services Block Two -->
				<div class="services-block-two">
					<div class="inner-box">
						<div class="image">
							<img src="https://via.placeholder.com/620x635" alt="" />
							<div class="overlay-box">
								<div class="content">
									<h4><a href="service.html">Free Vehicle Valuation</a></h4>
									<div class="text">Servicing is important to keep your car in optimum condition and maintain its resale value. Having your used car serviced at regular intervals allows potential problems to be spotted </div>
									<a href="service.html" class="view-more">View More Info</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>
	<!-- End Services Section Two -->
	
	<!-- Testimonial Section -->
	<section class="testimonial-section">
		<!-- Icons -->
		<div class="icons">
			<!-- Icon One -->
			<div class="icon-one"></div>
			<!-- Icon Two -->
			<div class="icon-two"></div>
			<!-- Icon Three -->
			<div class="icon-three" style="background-image:url(images/icons/icon-4.png)"></div>
			<!-- Icon Four -->
			<div class="icon-four" style="background-image:url(images/icons/icon-5.png)"></div>
		</div>
		<div class="car-icon" style="background-image:url(https://via.placeholder.com/339x448)"></div>
		<div class="auto-container">
			<div class="row clearfix">
				
				<!-- Image Column -->
				<div class="image-column col-lg-7 col-md-12 col-sm-12">
					<div class="inner-column wow slideInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="image">
							<img src="https://via.placeholder.com/1080x540" alt="" />
						</div>
					</div>
				</div>
				
				<!-- Carousel Column -->
				<div class="carousel-column col-lg-5 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="title-box">
							<h2>Client <span>Feedback</span></h2>
						</div>
						<div class="single-item-carousel owl-carousel owl-theme">
							
							<!-- Testimonial Block -->
							<div class="testimonial-block">
								<div class="inner-box">
									<div class="text">I really had my doubts at first. I asked for a quote online and the next day I was contacted by a sales representative. The quote came out high so the salesman did a good job to find me a good deal</div>
									<div class="author-info">
										<div class="author-image">
											<img src="https://via.placeholder.com/46x46" alt="" />
										</div>
										<h4>Coper Maxel</h4>
										<div class="designation">Ux & Product Designer</div>
									</div>
								</div>
							</div>
							
							<!-- Testimonial Block -->
							<div class="testimonial-block">
								<div class="inner-box">
									<div class="text">I really had my doubts at first. I asked for a quote online and the next day I was contacted by a sales representative. The quote came out high so the salesman did a good job to find me a good deal</div>
									<div class="author-info">
										<div class="author-image">
											<img src="https://via.placeholder.com/46x46" alt="" />
										</div>
										<h4>Coper Maxel</h4>
										<div class="designation">Ux & Product Designer</div>
									</div>
								</div>
							</div>
							
							<!-- Testimonial Block -->
							<div class="testimonial-block">
								<div class="inner-box">
									<div class="text">I really had my doubts at first. I asked for a quote online and the next day I was contacted by a sales representative. The quote came out high so the salesman did a good job to find me a good deal</div>
									<div class="author-info">
										<div class="author-image">
											<img src="https://via.placeholder.com/46x46" alt="" />
										</div>
										<h4>Coper Maxel</h4>
										<div class="designation">Ux & Product Designer</div>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>
	<!-- End Testimonial Section -->
	
	<!-- Call To Action Section -->
	<section class="call-to-action-section">
		<div class="auto-container">
			<div class="inner-container">
				<div class="row clearfix">
					<div class="column col-lg-9 col-md-12 col-sm-12">
						<h3>Search 1,000 cars across 3 locations instantly right here</h3>
					</div>
					<div class="btn-column col-lg-3 col-md-12 col-sm-12">
						<a href="service.html" class="theme-btn btn-style-one"><span class="txt">Book a Servics</span></a>
					</div>
				</div>
				<div class="car-icon" style="background-image:url(images/icons/car-icon.png)"></div>
			</div>
		</div>
	</section>
	<!-- End Call To Action Section -->
	
	<!-- News Section -->
	<section class="news-section">
		<!-- Icons -->
		<div class="icons">
			<!-- Icon One -->
			<div class="icon-one"></div>
			<!-- Icon Two -->
			<div class="icon-two"></div>
			<!-- Icon Three -->
			<div class="icon-three"></div>
			<!-- Icon Four -->
			<div class="icon-four"></div>
			<!-- Icon Five -->
			<div class="icon-five" style="background-image:url(images/icons/icon-6.png)"></div>
			<!-- Icon Six -->
			<div class="icon-six"></div>
		</div>
		<div class="auto-container">
			<div class="row clearfix">
				
				<!-- Title Column -->
				<div class="title-column col-lg-4 col-md-12 col-sm-12">
					<div class="inner-column">
						<!-- Sec Title -->
						<div class="sec-title">
							<h2>All the latest news</h2>
							<div class="text">Browse our selection of news stories below to keep up with the latest information from Crown Motors.​</div>
						</div>
						<a href="#" class="theme-btn news-btn">Gel All News</a>
						<div class="bold-text">Saic advanced london design studio marks first anniversary with stunning mg zs art car</div>
						<div class="text">Your donation to Children in Crossfire will make a huge difference in the lives of the children we work with in Tanzania... </div>
					</div>
				</div>
				
				<!-- Blocks Column -->
				<div class="blocks-column col-lg-8 col-md-12 col-sm-12">
					<div class="inner-column">
						<div class="row clearfix">
							
							<!-- News Block -->
							<div class="news-block col-lg-6 col-md-6 col-sm-12">
								<div class="inner-box">
									<div class="image">
										<a href="blog-single.html"><img src="https://via.placeholder.com/330x250" alt="" /></a>
									</div>
									<div class="lower-content">
										<h4><a href="blog-single.html">Mg motor uk expands further into west wales with third oc davies site</a></h4>
										<div class="text">Your donation to Children in Crossfire will make a huge difference in the lives of the children we work with in Tanzania...</div>
									</div>
								</div>
							</div>
							
							<!-- News Block -->
							<div class="news-block col-lg-6 col-md-6 col-sm-12">
								<div class="inner-box">
									<div class="image">
										<a href="blog-single.html"><img src="https://via.placeholder.com/330x250" alt="" /></a>
									</div>
									<div class="lower-content">
										<h4><a href="blog-single.html">Mg expands with stoneacre and reaches landmark of 100 uk dealerships</a></h4>
										<div class="text">Your donation to Children in Crossfire will make a huge difference in the lives of the children we work with in Tanzania...</div>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</section>
	<!-- End News Section -->
	
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
  });
};