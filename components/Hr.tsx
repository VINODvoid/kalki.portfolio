import { motion } from "framer-motion";

interface HrProps {
  variant?: "short" | "long";
}

export default function Hr({ variant = "short" }: HrProps) {
  return (
    <>
      {variant === "long" ? (
        <>
          <motion.div
            className="bg-gray-700 w-28 h-1 rounded-full mb-3 self-start "
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: "spring" }}
          />
          <motion.div
            className="bg-gray-700 w-28 h-1 rounded-full "
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: -50 }}
            transition={{ delay: 0.4, type: "spring" }}
          />
        </>
      ) : (
        <div className="flex justify-center items-center flex-col my-5">
          <motion.div
            className="bg-gray-700 w-20 h-1 rounded-full mb-2 "
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          />
          <motion.div
            className="bg-gray-700 w-20 h-1 rounded-full "
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 40 }}
            transition={{ delay: 0.3, type: "spring" }}
          />
        </div>
      )}
    </>
  );
}
