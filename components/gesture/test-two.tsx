import React from "react";
import * as motion from "motion/react-client";
function TestTwo() {
  const images = [
    {
      src: "https://www.bing.com/th?id=OHR.MountRoraima_EN-US9545246453_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      caption: "Mount Roraima, Venezuela",
    },
    {
      src: "https://www.bing.com/th?id=OHR.LofotenSun_EN-US9545246453_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      caption: "Lofoten Islands, Norway",
    },
    {
      src: "https://www.bing.com/th?id=OHR.SwallowtailFlower_EN-US9545246453_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp",
      caption: "Swallowtail butterfly on a flower",
    },
  ];

  return (
    <motion.div className="grid grid-cols-3 gap-2">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="relative w-45 rounded-md overflow-hidden"
        >
          <img src={image.src} alt={image.caption} className="w-full" />
          <motion.div
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 text-white bg-black opacity-0 transition-opacity duration-300 flex items-center justify-center text-center
            py-1"
          >
            <p className="text-lg ">{image.caption}</p>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default TestTwo;
