const layout = require('../layout')
const {getError} = require('../helper');


module.exports = ({ errors }) => {
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
									<li><a href="/">Home</a>
										
									</li>
									<li><a href="about.html">About Us</a></li>
									<li><a href="service.html">Services</a></li>
									<li class="dropdown"><a href="#">Listing</a>
										<ul>
											<li><a href="listing-left.html">Listing Left Sidebar</a></li>
											<li><a href="listing-right.html">Listing Right Sidebar</a></li>
											<li><a href="listing-grid.html">Listing Grid</a></li>
											<li><a href="listing-detail.html">Listing Detail</a></li>
										</ul>
									</li>
									<li class="dropdown"><a href="#">Blog</a>
										<ul>
											<li><a href="blog-grid.html">Blog Grid</a></li>
											<li><a href="blog-list.html">Blog List</a></li>
											<li><a href="blog-single.html">Blog Single</a></li>
										</ul>
									</li>
									<li class="current"><a href="contact.html">Contact us</a></li>
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
	
	
	
	<!-- Contact Page Section -->
    <div class="contact-page-section">
    	<div class="auto-container">
			<div class="sec-title centered">
			</div>
        	
	

	
	
		
	
	
</div>
<!--End pagewrapper-->

<!--Scroll to top-->
<div class="scroll-to-top scroll-to-target" data-target="html"><span class="fa fa-arrow-circle-up"></span></div>

  

        <div class="container">
          <div class="columns is-centered">
            <div class="column is-one-quarter">
              <form method="POST" enctype="multipart/form-data">
                <h1 class="title">Sign in</h1>
                <div class="field">
                  <label class="label">Email</label>
                  <input required class="input" placeholder="Email" name="email" />
                  <p class="help is-danger">${getError(errors, 'email')}</p>
                </div>
                <div class="field">
                  <label class="label">Password</label>
                  <input required class="input" placeholder="Password" name="password" type="password" />
                  <p class="help is-danger">${getError(errors, 'password')}</p>
                </div>
                <button class="button is-primary">Submit</button>
              </form>
              <a href="/signup">Need an account? Sign Up</a>
            </div>
          </div>
        </div>
      `
    });
  };
  



// module.exports = ({ errors })=>{
//     return layout({ 
//         content: `
//             <div>
//             <h1>Welcome to AishaStore Login Page</h1>
//                 </div>
//              <div>
//                  <form method="POST">
//                <input name="email" placeholder="email"/>
//                ${getError(errors, 'email')}
//                <input name="password" placeholder="password"/>
//                ${getError(errors, 'password')}
//                <button>Sign In</button>
//            </form>
//             </div>
//     `})
// }