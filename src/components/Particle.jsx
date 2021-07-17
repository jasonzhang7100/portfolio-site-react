import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  particle__canvas: {
    position: 'fixed',
  },
});

const Particle = () => {
  const classes = useStyles();
  return (
    <Particles
      canvasClassName={classes.particle__canvas}
      params={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          size: {
            value: 8,
            random: true,
            anim: {
              enable: false,
              speed: 3,
              size_min: 0,
              sync: true,
            },
          },
          opacity: {
            value: 0.2,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
        },
      }}
    />
  );
};

export default Particle;
