const capteur = document.querySelector(".capteur");

capteur.addEventListener("change", (event) => {
    const description = document.querySelector(".description");
    switch (event.target.value) {
        case 'camera':
            description.textContent = `La caméra est utilisée par le téléphone pour prendre des photos et des vidéos.`;
            break;
        case 'tactile':
            description.textContent = `L’écran tactile sert pour naviguer dans le smartphone. Il nous permet de taper sur un clavier lorsqu’on souhaite envoyer un message ou d'interagir avec nos applications.`;
            break;
        case 'microphone':
            description.textContent = `Le microphone permet d’enregistrer la voix.`;
            break;
        case 'lumiere':
            description.textContent = `Le capteur de lumière permet au smartphone d’ajuster la luminosité de l’écran. Il fonctionne sur le même principe que les panneaux photovoltaïques : quand les photons arrivent sur le capteur, elle est absorbée et déclenche le mouvement des électrons, ce qui crée un courant électrique. Plus il y a de lumière, plus le courant est fort. En mesurant ce courant, on mesure l’intensité lumineuse qui arrive sur le capteur.`;
            break;
        case 'accelerometre':
            description.textContent = `L'accéléromètre est constitué d’une plateforme suspendue au reste du smartphone. Quand le smartphone est agité, la plateforme suit le mouvement avec un peu de retard à cause de son inertie mécanique. En mesurant ce retard, on mesure l’accélération du mouvement. Il permet au smartphone de basculer entre l’affichage en mode portrait ou paysage par exemple.<br>Il y a trois directions possibles dans l’espace donc trois accéléromètres.`;
            break;
        case 'gyroscope':
            description.textContent = `Le gyroscope permet au smartphone de réagir au mouvement. Il est constitué d’une plateforme mobile qui fait en permanence un mouvement d’aller-retour grâce à un petit moteur. Une partie de cette plateforme est suspendue.<br>Quand le smartphone est tourné, cette dernière est déviée latéralement : c’est l’effet Coriolis qui affecte tout mouvement sur un support en rotation, comme sur un manège. En mesurant cet écart latéral, on mesure la vitesse de rotation du smartphone et le sens de la rotation.<br> Il y a trois directions possibles dans l’espace, donc trois gyroscopes pour les mesurer.`;
            break;
        case 'barometre':
            description.textContent = `Le baromètre est une petite boîte étanche fermée par une membrane souple. La pression atmosphérique appuie et déforme cette membrane. Plus la pression de l’air est élevée, plus la membrane sera déformée. En mesurant cette déformation, on mesure la pression atmosphérique. Ce capteur permet au smartphone d’améliorer la mesure de l’altitude du GPS.`;
            break;
        case 'proximite':
            description.textContent = `Le capteur de proximité comprend un composant émetteur et un composant récepteur de lumière. Les rayons infrarouges du composant électroluminescent analysent la lumière réfléchie par les objets et mesurent la distance entre l'objet et l'appareil.`;
            break;
        case 'magnetometre':
            description.textContent = `Le magnétomètre sert de boussole pour le smartphone. Quand un courant électrique traverse un fil en présence d’un champ magnétique, ce courant est légèrement dévié sur le côté. Plus le champ magnétique est fort, plus le courant est dévié. En mesurant cette déviation et son sens, on mesure l’intensité et le sens du champ magnétique. Pour mesurer les trois directions du champ magnétique, il y a trois magnétomètres.`;
            break;
        case 'gps':
            description.textContent = `Le GPS permet de localiser le smartphone en se basant sur les signaux émis par un réseau de satellites afin de déterminer la position géographique. Sa précision est estimée de 15 à 100 mètres.`;
            break;
    }
});