e=true;
eye.addEventListener('click', () => {

    if(e){
      document.getElementById("mdp").setAttribute("type", "text");
      document.getElementById("eye").src="/eye.png";
      e=false
    }
    else
    {
      document.getElementById(("mdp")).setAttribute("type", "password");
      document.getElementById("eye").src="/eye-off.png";
      e=true
    }
})

e2=true;
eye2.addEventListener('click', () => {

    if(e2){
      document.getElementById("mdp2").setAttribute("type", "text");
      document.getElementById("eye2").src="/eye.png";
      e2=false
    }
    else
    {
      document.getElementById(("mdp2")).setAttribute("type", "password");
      document.getElementById("eye2").src="/eye-off.png";
      e2=true
    }
})

