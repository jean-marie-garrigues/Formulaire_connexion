e=true;
eye.addEventListener('click', () => {

    if(e){
      document.getElementById("mdp").setAttribute("type", "text");
      document.getElementById("eye").src="eye.png";
      e=false
    }
    else
    {
      document.getElementById(("mdp")).setAttribute("type", "password");
      document.getElementById("eye").src="eye-off.png";
      e=true
    }
})
