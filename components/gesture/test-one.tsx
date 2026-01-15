import * as motion from "motion/react-client";

function TestOne() {
  return (
    <motion.div
      whileHover={{
        scale: 1.06,
        rotate: 3,
      }}
      whileTap={{
        scale: 0.8,
        rotate: 0,
      }}
      drag
      whileDrag={{
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30,
        },
      }}
      dragElastic={0.2}
      dragConstraints={{
        top: -50,
        bottom: 50,
        left: -50,
        right: 50,
      }}
      className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg"
    >
      <img
        src="https://www.bing.com/th/id/OIP.AYW4q9pRTJUkQsNiIVLDngHaEP?w=271&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
        alt="bing"
        className="h-40 w-full object-cover"
      />
      <div className="p-4 text-black font-medium space-y-2">
        <h1 className="text-2xl font-bold">Lorem, ipsum dolor.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur,
          eaque!
        </p>
        <button className="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </motion.div>
  );
}

export default TestOne;
