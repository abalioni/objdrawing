(function () {
  'use strict';
  var c = document.getElementById("canvas"),
      ctx = c.getContext("2d");
      $(".scl").hide();
      $(".rtate").hide();
  var options = $(".objtype");
    options.change( function() {
      var val = $(".objtype option:selected").index();
      console.log(val);
  var x1 = $('#x1').val(),
      y1 = $('#y1').val(),
      x2 = $('#x2').val(),
      y2 = $('#y2').val(),
      r = $("#r").val(),
      color = $("#colorpick").val();

        switch (val) {
          case 0:
            $(".circle").show();
            $(".hidden").show();
            break;
          case 1:
            $(".circle").show();
            $(".hidden").hide();
            break;
          case 2:
            $(".circle").hide();
            $(".hidden").show();
            break;
          case 3:
            $(".circle").hide();
            $(".hidden").show();

            break;
          default:
            $(".circle").show();
            $(".hidden").show();

        }
      });

    $('#sclView').click( function () {
        $(".scl").show();
        $(".rtate").hide();
    });

    $('#rotView').click( function () {
        $(".scl").hide();
        $(".rtate").show();
        console.log("sclView");
    });



  $('#btnDraw').click( function () {
    var x1 = $('#x1').val(),
        y1 = $('#y1').val(),
        x2 = $('#x2').val(),
        y2 = $('#y2').val(),
        r = $("#r").val(),
        color = $("#colorpick").val();

    var val = $(".objtype option:selected").index();
      if (val === 1) {
        if (val && x1 && y1 && r) {
          ctx.beginPath();
          ctx.fillStyle = color;
          ctx.strokeStyle = color;
          ctx.arc(x1, y1, r, 0, Math.PI*2, true);
          ctx.stroke();
          ctx.fill();
          console.log("Circulo desenhado");
        }
      } else if (val === 2) {
        if (x1 && x2 && y1 && y2) {
          ctx.beginPath();
          ctx.fillStyle= color;
          ctx.fillRect(x1 , y1, x2, y2);
          ctx.stroke();
        };
      } else if (val === 3) {
        if (x1 && x2 && y1 && y2) {
          ctx.beginPath();
          ctx.strokeStyle= color;
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        };
      };


    });


    //here
    $("#scaleBtn").click( function () {
      var x1 = $('#x1').val(),
          y1 = $('#y1').val(),
          x2 = $('#x2').val(),
          y2 = $('#y2').val(),
          r = $("#r").val(),
          color = $("#colorpick").val();

      var val = $(".objtype option:selected").index();
      var scale = $("#scale").val();
      if (val === 1) {
        if (val && x1 && y1 && r) {
          ctx.beginPath();
          ctx.fillStyle = color;
          ctx.strokeStyle = color;
          ctx.scale(scale, scale);
          ctx.arc(x1, y1, r, 0, Math.PI*2, true);

          ctx.stroke();
          ctx.fill();
          console.log("Circulo desenhado");
        }
      } else if (val === 2) {
        if (x1 && x2 && y1 && y2) {
          ctx.beginPath();
          ctx.fillStyle= color;
          ctx.fillRect(x1 , y1, x2, y2);
          ctx.scale(scale, scale);
          ctx.fillRect(x1 , y1, x2, y2);
          ctx.stroke();
        };
      } else if (val === 3) {
        if (x1 && x2 && y1 && y2) {
          ctx.beginPath();
          ctx.strokeStyle= color;
          ctx.scale(scale, scale);
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        };
      };

    });

    $("#rotateBtn").click( function () {
      var x1 = $('#x1').val(),
          y1 = $('#y1').val(),
          x2 = $('#x2').val(),
          y2 = $('#y2').val(),
          r = $("#r").val(),
          color = $("#colorpick").val(),
          dg = $("#degrees").val();

      var val = $(".objtype option:selected").index();
      var rotate = $("#rotate").val();
      if (val === 1) {
        if (val && x1 && y1 && r) {
          ctx.beginPath();
          ctx.fillStyle = color;
          ctx.strokeStyle = color;
          ctx.rotate(dg*Math.PI/180);
          ctx.arc(x1, y1, r, 0, Math.PI*2, true);
          ctx.stroke();
          ctx.fill();
          console.log("Circulo desenhado");
        }
      } else if (val === 2) {
        if (x1 && x2 && y1 && y2) {
          ctx.beginPath();
          ctx.fillStyle= color;
          ctx.rotate(dg*Math.PI/180);
          ctx.fillRect(x1 , y1, x2, y2);
          ctx.stroke();
        };
      } else if (val === 3) {
        if (x1 && x2 && y1 && y2) {
          ctx.beginPath();
          ctx.strokeStyle= color;
          ctx.rotate(dg*Math.PI/180);
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        };
      };

    });

    // $("#translateBtn").click( function () {
    //   var x1 = $('#x1').val(),
    //       y1 = $('#y1').val(),
    //       x2 = $('#x2').val(),
    //       y2 = $('#y2').val(),
    //       r = $("#r").val(),
    //       color = $("#colorpick").val();
    //
    //   var val = $(".objtype option:selected").index();
    //   var translateX = $("#translateX").val(),
    //       translateY = $("#translateY");
    //
    //   if (val === 1) {
    //     if (val && x1 && y1 && r) {
    //       ctx.beginPath();
    //       ctx.fillStyle = color;
    //       ctx.strokeStyle = color;
    //       ctx.arc(x1, y1, r, 0, Math.PI*2, true);
    //       ctx.moveTo(translateX, translateY);
    //       ctx.arc(x1, y1, r, 0, Math.PI*2, true);
    //       ctx.stroke();
    //       ctx.fill();
    //       console.log("Circulo desenhado");
    //     }
    //   } else if (val === 2) {
    //     if (x1 && x2 && y1 && y2) {
    //       ctx.beginPath();
    //       ctx.fillStyle= color;
    //       ctx.fillRect(x1 , y1, x2, y2);
    //       ctx.translate(translateX, translateY);
    //       ctx.fillRect(translateX , translateX, x2, y2);
    //       ctx.stroke();
    //       console.log("click");
    //     };
    //   } else if (val === 3) {
    //     if (x1 && x2 && y1 && y2) {
    //       ctx.beginPath();
    //       ctx.strokeStyle= color;
    //     //   ctx.translate(translateX, translateY);
    //       ctx.moveTo(x1, y1);
    //       ctx.lineTo(translateX, translateY);
    //       ctx.stroke();
    //     };
    //   };
    //
    // });

    // $("#transformBtn").click( function () {
    //   var x1 = $('#x1').val(),
    //       y1 = $('#y1').val(),
    //       x2 = $('#x2').val(),
    //       y2 = $('#y2').val(),
    //       r = $("#r").val(),
    //       color = $("#colorpick").val();
    //
    //   var val = $(".objtype option:selected").index();
    //   var a = $("#transformA").val(),
    //       b = $("#transformB").val(),
    //       c = $("#transformC").val(),
    //       d = $("#transformD").val(),
    //       e = $("#transformE").val(),
    //       f = $("#transformF").val();
    //
    //   if (val === 1) {
    //     if (val && x1 && y1 && r) {
    //       ctx.beginPath();
    //       ctx.fillStyle = color;
    //       ctx.strokeStyle = color;
    //       ctx.arc(x1, y1, r, 0, Math.PI*2, true);
    //       ctx.transform(a,b,c,d,e,f);
    //       ctx.arc(x1, y1, r, 0, Math.PI*2, true);
    //       ctx.stroke();
    //       ctx.fill();
    //       console.log("Circulo desenhado");
    //     }
    //   } else if (val === 2) {
    //     if (x1 && x2 && y1 && y2) {
    //       ctx.beginPath();
    //       ctx.fillStyle= color;
    //       ctx.fillRect(x1 , y1, x2, y2);
    //       ctx.transform(a,b,c,d,e,f);
    //       ctx.fillRect(x1, y1, x2, y2);
    //       ctx.stroke();
    //       console.log("click");
    //     };
    //   } else if (val === 3) {
    //     if (x1 && x2 && y1 && y2) {
    //       ctx.beginPath();
    //       ctx.strokeStyle= color;
    //       ctx.transform(a,b,c,d,e,f);
    //       ctx.moveTo(x1, y1);
    //       ctx.lineTo(translateX, translateY);
    //       ctx.stroke();
    //     };
    //   };
    //
    // });

        $("#clear").click( function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            console.log("clear canvas");
        });


}());
