<!DOCTYPE html>
  <html lang="ru">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Favicons -->
        <link rel="shortcut icon" href="/favicon.png">
        <title>Project Basic Tpl</title>
        <!-- Bootstrap -->
        <link rel="stylesheet" href="/assets/bootstrap/dist/css/bootstrap.min.css">
        <!--<link rel="stylesheet" href="/assets/bootstrap/dist/css/bootstrap-theme.min.css">-->
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
        <link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
        <!-- Template -->
        <link rel="stylesheet" href="/css/style.min.css">

        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->

	</head>
	<body>
  
      <div id="wrap" class="container">
          <a id="logo" href="/"></a>

          <nav class="navbar navbar-default" role="navigation">
            <div class="container-fluid">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Brand</a>
              </div>

              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                  <li class="active"><a href="#">Link</a></li>
                  <li><a href="#">Link</a></li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                      <li class="divider"></li>
                      <li><a href="#">One more separated link</a></li>
                    </ul>
                  </li>
                </ul>
                <form class="navbar-form navbar-left" role="search">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search">
                    <span class="input-group-btn">
                      <button class="btn btn-default" type="button"><i class="fa fa-search"></i></button>
                    </span>
                  </div><!-- /input-group -->
                </form>
                <ul class="nav navbar-nav navbar-right">
                  <li><a href="#">Link</a></li>
                  <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </li>
                </ul>
              </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
          </nav>

          <br />

          <!-- Modal -->
          <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog"><!--  .modal-sm  .modal-lg -->
              <div class="modal-content">

                  <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only"><i class="fa fa-lg ion-android-close"></i></span></button>
                      <h4 class="modal-title" id="myModalLabel">Форма</h4>
                  </div>
                  <div class="modal-body">

                      <form role="form">
                          <div class="form-group">
                              <label for="exampleInputEmail1">Email address</label>
                              <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
                          </div>
                          <div class="form-group">
                              <label for="exampleInputPassword1">Password</label>
                              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                          </div>
                          <div class="form-group">
                              <label for="exampleInputFile">File input</label>
                              <input type="file" id="exampleInputFile">
                              <p class="help-block">Example block-level help text here.</p>
                          </div>
                          <div class="checkbox">
                              <label>
                                  <input type="checkbox"> Check me out
                              </label>
                          </div>
                          <button type="submit" class="btn btn-default">Submit</button>
                      </form>

                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                  </div>


              </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
          </div><!-- /.modal -->

          <button type="button" data-target="#myModal" data-toggle="modal" class="btn btn-primary btn-lg">Обратный звонок</button>

          <br />

          <div class="row"><!--xs sm md lg-->
            <div class="col-sm-6"></div><!--.col-*-->
            <div class="col-sm-6"></div><!--.col-*-->
          </div><!--.row-->

          <br />

          <div id="content">
          <?php
            if( isset($_GET['page']) )
            {
              if ( file_exists('inc'.DIRECTORY_SEPARATOR.'pages'.DIRECTORY_SEPARATOR.$_GET['page'].'.php'))
              {
                $page = $_GET['page'];
              }
              else
              {
                $page = '404';
              }
            }
            else
            {
              $page = 'home';
            }?>
            <?php include 'inc/pages/'.$page.'.php';?>

            <div class="clearfix"></div>

          </div><!-- #content -->


	  </div><!-- /#wrap -->
    
      <footer>
        <div class="container">
            <small>Copyright © <?=date('Y');?> Компания </small>
        </div>
      </footer>
    
    
      <!-- Jquery -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
      <script>window.jQuery || document.write('<script src="/js/jquery.min.js"><\/script>')</script>
      <!-- Bootstrap -->
      <script src="/assets/bootstrap/dist/js/bootstrap.min.js"></script>
      <!-- Retina Graphics -->
      <script src="/assets/retina.js/dist/retina.min.js"></script>
      <!-- Nicescroll Scrollbars -->
      <script src="/assets/jquery.nicescroll/dist/jquery.nicescroll.min.js"></script>
      <!-- Маска для поля -->
      <script src="/assets/jquery.inputmask/dist/min/jquery.inputmask.bundle.min.js"></script>
      <!-- Маска для поля -->
      <script src="/js/jquery.mailto.js"></script>
      <!-- Custom -->
      <script src="/js/main.min.js"></script>
      <script>
		$(function() {
			});
      </script>
  </body>
</html>