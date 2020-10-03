var a = document.forms.calc1;
      a.onchange = function() {
       var n = a.querySelectorAll(':checked'),
       itog = 400;
       for(var j=0; j<n.length; j++)
        itog += +n[j].value||0;
       document.getElementById('sum_1').innerHTML = itog + 'BYN';}
      
      var b = document.forms.calc2;
      b.onchange = function() {
       var k = b.querySelectorAll(':checked'),
       itog = 600;
       for(var j=0; j<k.length; j++)
        itog += +k[j].value||0;
       document.getElementById('sum_2').innerHTML = itog + 'BYN';}