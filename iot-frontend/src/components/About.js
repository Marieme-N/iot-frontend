import React from 'react';
import '../index.css';

const About = () => {
    return (
        <div>
            <h1>Faire de vos pauses de vrais moments de plaisir</h1>
            <div>
                <div id="prez">
                    <p>
                        Nous avons créé Notember pour résoudre un problème simple et pourtant universel auprès des buveurs de
                        thé et de café. Grâce à sa toute nouvelle technologie, Notember réinvente la manière de boire des boissons
                        chaudes en les gardant à la température optimale.
                        <br></br>
                        <br></br>
                        “Aimant tout particulièrement le café et le thé, nous connaissons bien la déception de boire une gorgée froide.
                        <br></br>
                        C’est pourquoi nous avons trouvé la nécessité de créer un produit esthétique qui chauffe votre boisson à la parfaite
                        température. Connectez, buvez, appréciez”
                    </p>
                </div>
                <div id="video">
                    <video width="100%" height="400" autoplay="autoplay" loop="true" controls>
                        <source src="/Videos/notember_pub.mp4" type="video/mp4"></source>
                    </video>
                </div>
            </div>

            <h1>About the team</h1>
            <p>
                L’équipe Patronus est une équipe de 5 étudiants passionnés d’innovation. Suite à de nombreux projets, ils se lancent dans l’iOT
                avec la tasse connectée Notember, et passent de nombreux mois à perfectionner le produit. A sa sortie, Notember reçoit un succès
                franc et place la jeune équipe d’entrepreneurs dans la liste des start-ups montantes.
            </p>
        </div>
    );
}

export default About;