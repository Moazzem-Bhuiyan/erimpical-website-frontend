'use client';

import { Player } from '@lottiefiles/react-lottie-player';
import confettiAnimation from '@/lottie/confetti.json';

export default function ConfettiLottie() {
  return (
    <Player
      autoplay
      src={confettiAnimation}
      loop={false}
      style={{
        position: 'absolute',
        inset: 0,
        height: '100%',
        width: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
