'use client';

import { Player } from '@lottiefiles/react-lottie-player';
import successAnimation from '@/lottie/success.json';

export default function SuccessLottie() {
  return (
    <Player autoplay keepLastFrame src={successAnimation} style={{ height: 250, width: 250 }} />
  );
}
