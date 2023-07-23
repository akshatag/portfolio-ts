import type { NextPage } from 'next'
import Head from 'next/head'
import Main from './components/Main';
import Particles from "react-tsparticles";
import { motion } from 'framer-motion';

const Home: NextPage = () => {
 
  return (
    <>
      <Head>
          <meta name="title" content="Akshat Agrawal" />
          <meta name="description" content="Akshat Agrawal" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Akshat Agrawal" />
          <meta property="og:description" content="Akshat Agrawal" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Akshat Agrawal" />
          <meta property="twitter:description" content="Akshat Agrawal" />
          <title>Akshat Agrawal</title>
      </Head>
      <motion.div
        animate={{
            opacity: [0, 1]
        }}
        transition={{
            duration: 0.5,
            delay: 0.25
        }}
      >
        <Particles
              options={{
                fullScreen: {
                  enable: true,
                  zIndex: 0
                },
                particles: {
                  number: {
                    value: 25,
                    limit: 300,
                    density: {
                      enable: true,
                      value_area: 800
                    }
                  },
                  color: {
                    value: "#ffffff"
                  },
                  opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                      enable: true,
                      speed: 1,
                      opacity_min: 0.5,
                      sync: false
                    }
                  },
                  size: {
                    value: 5,
                    random: true,
                    anim: {
                      enable: true,
                      speed: 2,
                      size_min: 1,
                      sync: false
                    }
                  },
                  line_linked: {
                    enable: true,
                    distance: 100,
                    color: "#ffffff",
                    opacity: 1,
                    width: 1
                  },
                  move: {
                    enable: true,
                    speed: 0.5,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                      enable: false,
                      rotateX: 600,
                      rotateY: 1200
                    }
                  }
                },
                retina_detect: true,
                fps_limit: 60
              }}
        />
      </motion.div>
      <Main/>
    </>

  )
}

export default Home;
