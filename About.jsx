import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h2>About Us</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum diam nec eros fringilla, vitae fermentum odio convallis. Donec ultrices bibendum ligula, nec luctus mi tincidunt eget. Phasellus maximus lectus id ante scelerisque, nec scelerisque nunc ultricies. Duis tincidunt, magna sit amet cursus malesuada, mi lectus cursus odio, a ullamcorper odio felis eu turpis. Integer eu bibendum sapien. Ut pellentesque viverra dolor, at varius odio faucibus non. Duis id eros arcu. Sed at lacinia odio. Sed fermentum mauris eget nulla sodales, nec ultricies mi varius. Nulla facilisi. Proin fringilla ante velit, nec tempus lectus tristique ut. Aliquam erat volutpat. Mauris a felis vel enim varius blandit vel nec est. Sed sollicitudin, mauris ut posuere varius, leo mauris scelerisque nulla, nec auctor nulla magna a purus.
            </p>
            <p>
                Nulla facilisi. Integer luctus, orci nec varius viverra, sem erat commodo justo, non euismod quam neque ac ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In eu urna rhoncus, consequat odio non, facilisis lorem. Sed vitae velit rhoncus, scelerisque nunc non, cursus enim. Maecenas accumsan enim ut elit convallis dapibus. Integer sagittis ex eu libero eleifend pulvinar. Curabitur volutpat justo at odio ultrices, a sodales eros sollicitudin.
            </p>
            <NavLink to="/">Go to Home</NavLink>
        </div>
    );
}

export default About;
