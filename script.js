var x=1;
    
    function show()
    {
        document.getElementById("cross").style.display="flex";
        document.getElementById("menu").style.display="none";
        document.getElementById("menu-opt").style.display = 'flex';

    }
    function hide()
    {
        document.getElementById("cross").style.display="none";
        document.getElementById("menu").style.display="flex"; 
        document.getElementById("menu-opt").style.display = 'none';
  
    }