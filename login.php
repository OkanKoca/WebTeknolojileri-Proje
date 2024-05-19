<?php
$numara = $_POST['numara'];
$sadeceNumara = substr($_POST['numara'],0 , 10);
$sifre = $_POST['sifre'];
if (isset($_POST['submit']))
{
    if($numara == "b231210016@sakarya.edu.tr" && $sifre == "b231210016")
    {
        
    }
    else if ($numara == "" || $sifre == "")
    {
        echo "<script>window.location.href = 'login.html';
        </script>";
        exit;
    }
    else
    {
        echo "<script>window.location.href = 'login.html';
        </script>";
        exit;
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giriş Başarılı</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
    <div class="container" style="padding: 8rem;">
        
        <div class="row">
            <div class="col">

            </div>
            <div class="col d-flex align-items-center justify-content-center" style = "flex-direction:column;">
                <h3 style="text-align:center;font-weight:200">
                GİRİŞ BAŞARILI
                </h3> 
                <h3 style="text-align:center; font-weight: 300;">
                Hoşgeldiniz <b><?php echo $sadeceNumara ?></b>
                </h3>
                <a href="index.html"><button type="button" class="btn btn-primary" style="margin-top: 1.5rem; width:16rem; height:4rem; text-align:center;">Geri Dön</button></a>
            </div>
            <div class="col"></div>
        </div>        
    </div>
</body>
</html>