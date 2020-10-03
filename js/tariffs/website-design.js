var b = document.forms.calc;
      b.onchange = function() {
       var q = b.querySelectorAll(':checked'),
       itog = 200;
       for(var t=0; t<q.length; t++)
        itog += +q[t].value||0;
       document.getElementById('sum').innerHTML = itog + 'BYN';}