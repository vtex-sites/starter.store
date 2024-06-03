import { useState, useEffect } from "react";

export default function Sonarqube() {
  const test = false;
  const [testState, setTestState] = useState(false);

  useEffect(() => {
    if (!test) {
      setTestState(true);
    }
  }, []);

  return <>{test}</>;
}
