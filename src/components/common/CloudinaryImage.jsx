import { AdvancedImage } from "@cloudinary/react";
import { CloudinaryImage as Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity, focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";

export default function CloudinaryImage({
  src,
  width = 400,
  height = 400,
  alt = "",
  className = "",
  face = true,
}) {
  if (!src) return null;

  // ✅ Extract publicId from full Cloudinary URL OR accept publicId directly
  const getPublicId = (url) => {
    if (!url.includes("cloudinary.com")) return url;

    const parts = url.split("/upload/");
    if (!parts[1]) return url;

    return parts[1]
      .replace(/^v\d+\//, "") // remove version
      .replace(/\.[^/.]+$/, ""); // remove extension
  };

  const publicId = getPublicId(src);

  const img = new Cloudinary(publicId, {
    cloudName: "dwbcjcqdt",
  });

  img
    .resize(
      fill()
        .width(width)
        .height(height)
        .gravity(face ? focusOn(FocusOn.face()) : autoGravity())
    )
    .format("auto")
    .quality("auto:best"); // 🔥 HIGH QUALITY FIX

  return (
    <AdvancedImage
      cldImg={img}
      alt={alt}
      loading="lazy"
      className={className}
    />
  );
}
