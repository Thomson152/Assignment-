import { FaStar } from "react-icons/fa";

const RatingIcon = ({ rating }) => {
  const maxRating = 5;
  return (
    <div>
      {Array.from({ length: maxRating }, (_, index) => (
        <FaStar
          key={index}
          color={index < rating ? "gold" : "gray"} // Fill stars up to the rating
          size={24} // Adjust the size of the stars as needed
        />
      ))}
    </div>
  );
};

export default RatingIcon;
