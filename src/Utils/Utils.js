import img1 from "../Assets/Images/19258.jpeg";
import img2 from "../Assets/Images/362619.jpeg";
import img3 from "../Assets/Images/2690549.jpeg";
import img4 from "../Assets/Images/6688142.jpeg";
import img5 from "../Assets/Images/1407953244000-177513283.jpeg";
import img6 from "../Assets/Images/hotel-lobby-luxury-staircases-fountain-39479289.jpeg";
import img7 from "../Assets/Images/hotel-room-beautiful-orange-sofa-included-43642330.jpeg";
import img8 from "../Assets/Images/hotel-sign-stars-3d-illustration-260nw-195879770.webp";
import img9 from "../Assets/Images/istockphoto-627892060-612x612.jpeg";
import img10 from "../Assets/Images/istockphoto-1066999762-612x612.jpeg";

export { img1, img2, img3, img4, img5, img6, img7, img8, img9, img10 };

export function dateFormat(inputDate, format) {
  //parse the input date
  const date = new Date(inputDate);

  //extract the parts of the date
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  //replace the month
  format = format.replace("MM", month.toString().padStart(2, "0"));

  //replace the year
  if (format.indexOf("yyyy") > -1) {
    format = format.replace("yyyy", year.toString());
  } else if (format.indexOf("yy") > -1) {
    format = format.replace("yy", year.toString().substr(2, 2));
  }

  //replace the day
  format = format.replace("dd", day.toString().padStart(2, "0"));

  return format;
}
