function Avatar({ imgPath, className }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imgPath}
      alt="profile pic"
      className={`h-10 w-10 object-cover rounded-full cursor-pointer duration-150 hover:scale-110 ${className}`}
    />
  );
}

export default Avatar;
