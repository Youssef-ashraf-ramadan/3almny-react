import { useEffect, useState } from "react";

const UIComponents = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {/* Preloader */}
      {isLoading && (
        <div className="preloader">
          <img src="assets/images/icons/preloader.gif" alt="Loading..." />
        </div>
      )}

      {/* Overlay */}
      <div className="overlay"></div>
 {/* Sidebar Overlay */}
          <div className="side-overlay"></div>


      {/* Scroll to Top */}
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  );
};

export default UIComponents;
