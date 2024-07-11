import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp end={amount} decimal="," decimals={2} prefix="&#x20B9;" />
    </div>
  );
};

export default AnimatedCounter;
