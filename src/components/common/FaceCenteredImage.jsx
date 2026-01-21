import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "@vladmandic/face-api";

const FaceCenteredImage = ({ src, className }) => {
  const imgRef = useRef(null);
  const [objectPosition, setObjectPosition] = useState("50% 20%");

  useEffect(() => {
    const load = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");

      const img = imgRef.current;
      if (!img) return;

      const detection = await faceapi.detectSingleFace(
        img,
        new faceapi.TinyFaceDetectorOptions()
      );

      if (detection) {
        const { x, y, width, height } = detection.box;

        const centerX = ((x + width / 2) / img.naturalWidth) * 100;
        const centerY = ((y + height / 2) / img.naturalHeight) * 100;

        setObjectPosition(`${centerX}% ${centerY}%`);
      }
    };

    load();
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt=""
      className={className}
      style={{ objectPosition }}
    />
  );
};

export default FaceCenteredImage;
