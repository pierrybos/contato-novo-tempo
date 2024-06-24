import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Apresentacao from "../src/components/Apresentacao";
import Controlador from "../src/components/Controlador";

export default () => {
  const [controlls, setControlls] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const searchParams = useSearchParams();

  function afterRender() {
    if (searchParams.get("painel")) {
      setControlls(true);
      setIsVisible(true);
    } else {
      setControlls(false);
      setIsVisible(false);
    }
  }

  useEffect(() => {
    afterRender();
  }, [searchParams]);

  return (
    <>
      {controlls && <Controlador />}
      {!controlls && <Apresentacao />}
    </>
  );
};
