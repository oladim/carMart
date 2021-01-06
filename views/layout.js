module.exports = ({ content }) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>Cppi HTML Template | Homepage</title>
    <!-- Stylesheets -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
    <link href="css/responsive.css" rel="stylesheet">
    
    <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon">
    <link rel="icon" href="images/favicon.png" type="image/x-icon">
    
    <!-- Responsive -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    
    <!--[if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script><![endif]-->
    <!--[if lt IE 9]><script src="js/respond.js"></script><![endif]-->

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
          <link href="/css/mains.css" rel="stylesheet">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"></link>
    </head>
    
    <body>
          
          
            ${content}
         
          <script src="js/jquery.js"></script>
          <script src="js/popper.min.js"></script>
          <script src="js/bootstrap.min.js"></script>
          <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
          <script src="js/jquery.fancybox.js"></script>
          <script src="js/appear.js"></script>
          <script src="js/owl.js"></script>
          <script src="js/wow.js"></script>
          <script src="js/parallax.min.js"></script>
          <script src="js/jquery-ui.js"></script>
          <script src="js/script.js"></script>
          
          </body>
          </html>
    `;
  };