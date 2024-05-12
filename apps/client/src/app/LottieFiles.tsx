import Lottie from "lottie-react";
import animationData from "../../public/animation.json";
import animationData1 from "../../public/loading.json";

export const LottieFiles = () => {

  const style = {
    width: 350,
    height: 350,
  };

  return (
    <div>
      <Lottie style={style} animationData={animationData} />
      <Lottie style={style} animationData={animationData1} />
    </div>
  );
}
