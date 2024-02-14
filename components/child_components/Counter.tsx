import React, { useState, useEffect, useCallback, useMemo, memo } from "react";

interface CounterProps {
  className?: string;
  end: number;
}

const Counter: React.FC<CounterProps> = ({className, end }) => {
  const [count, setCount] = useState<number>(0);

  const incrementValue = useMemo(() => {
    if (end === 20000) {
      return 97;
    } else {
      return 2;
    }
  }, [end]);

  const updateCounter = useCallback(() => {
    setCount((prevCount) => {
      if (prevCount < end) {
        const newValue = prevCount + incrementValue;
        return newValue > end ? end : newValue;
      }
      return prevCount;
    });
  }, [end, incrementValue]);

  useEffect(() => {
    const interval = setInterval(updateCounter, 0);

    return () => {
      clearInterval(interval);
    };
  }, [updateCounter]);

  const formattedCount = useMemo(() => {
    return count.toLocaleString();
  }, [count]);

  return (
    <div className="countNum">
      {formattedCount}
      {count !== 0 && "+"}
    </div>
  );
}
export default memo(Counter)