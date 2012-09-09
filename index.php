<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset=utf-8>
        <title>jQuery CountDown &amp; Redirec page</title>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
        <script type="text/javascript" src="js/jquery.countdownRedirect.js"></script>
        <script type="text/javascript">
        $(function () {
            $('<div />').countdownRedirect({
                seconds : 10,           // Count down max time in second.
                css : {                 // Css set coundown box position.
                    position: 'absolute',
                    bottom: 5,
                    left: 5
                }
            });
        });
        </script>
        <style type="text/css">
            .box {
                padding: 8px 35px 8px 14px;
                margin-bottom: 5px;
                color: #468847;
                text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
                background-color: #DFF0D8;
                border: solid 1px #D6E9C6;
                -webkit-border-radius: 4px;
                 -moz-border-radius: 4px;
                      border-radius: 4px;
            }
        </style>
    </head>

<body>
</body>

</html>