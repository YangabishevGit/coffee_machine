<!doctype html>
<html lang="ru">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Кофе-машина</title>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-6 coffee-list d-flex flex-column justify-content-around">
          <div class="coffee-item" onclick = "makeCoffee('Американо', 50, this)">
            <img src="img/americano.png" alt="Американо">
            <span>Американо - 50 руб.</span>
          </div>
          <div class="coffee-item" onclick = "makeCoffee('Капучино', 73, this)">
            <img src="img/cappuccino.png" alt="Капучино">
            <span>Капучино - 73 руб.</span>
          </div>
          <div class="coffee-item" onclick = "makeCoffee('Эспрессо', 61, this)">
            <img src="img/espresso.png" alt="Эспрессо">
            <span>Эспрессо - 61 руб.</span>
          </div>
          <div class="coffee-item" onclick = "makeCoffee('Латте', 112, this)">
            <img src="img/latte.jpg" alt="Латте">
            <span>Латте - 112 руб.</span>
          </div>
        </div>
        <div class="col-6 coffee-oper">
          <div class="row">
            <div class="col-6">
              <div class="display">
                <p class="display-text">Выбирите кофе</p>
                <div class="progress">
                  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
                </div>
              </div>
              <div class="cup-container">
                <img src="img/-кофе-3-e1579515626713.png" alt="" class="cup">
              </div>
            </div>
            <div class="col-6">
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Баланс">
                <div class="input-group-append">
                  <span class="input-group-text">&#8381;</span>
                </div>
              </div>
              <div class="atm-container">
                <img src="img/bill_acc.png" alt="" class="atm">
              </div>
              <button class="btn btn-primary btn-block my-2">Сдача</button>
              <div class="change-container"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="script.js"></script>
    <!--<script src="lesson.js"></script>-->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </body>
</html>