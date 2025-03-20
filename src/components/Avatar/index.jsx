import PropTypes from "prop-types";

const Avatar = ({ src, alt = "Avatar", size, isRounded = true }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{
        borderRadius: isRounded ? "50%" : "0",
        objectFit: "cover",
      }}
    />
  );
};

export default Avatar;

Avatar.PropTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.number,
  isRounded: PropTypes.bool,
};
