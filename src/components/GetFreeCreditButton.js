// import { Button } from "@mui/material";
// import React from "react";
// import GetStartedWith from "../views/creditScore/GetStartedWith";

// const GetFreeCreditButton = () => {
//   const handleButtonClick = () => {
//     GetStartedWith();
//   };
//   return (
//     <>
//       <Button
//         sx={{
//           width: "248px",
//           height: "55px",
//           background: "#75A54C 0% 0% no-repeat padding-box",
//           boxShadow: "0px 3px 6px #00000029",
//           border: "1px solid #79B86F",
//           opacity: 1,
//           borderRadius: "10px",
//           color: "white",
//           marginTop: "30px",
//           textTransform: "capitalize ",
//           "&:hover": {
//             background: "#75A54C",
//           },
//         }}
//         onClick={handleButtonClick}
//       >
//         Get Free Credit Score
//       </Button>
//     </>
//   );
// };

// export default GetFreeCreditButton;

import { Button } from "@mui/material";
import React, { useState } from "react";
import GetStartedWith1 from "../views/creditScore/GetStartedWith1";
import GetStartedWith2 from "../views/creditScore/GetStartedWith2";

const GetFreeCreditButton = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleButtonClick1 = () => {
    setOpenModal(true);
  };

  const handleCloseModal1 = () => {
    setOpenModal(false);
  };

  const [openModal2, setOpenModal2] = useState(false);

  const handleButtonClick2 = () => {
    setOpenModal(false);
    setOpenModal2(true);
  };

  const handleCloseModal2 = () => {
    setOpenModal2(false);
  };

  return (
    <>
      <Button
        sx={{
          width: "248px",
          height: "55px",
          background: "#75A54C 0% 0% no-repeat padding-box",
          boxShadow: "0px 3px 6px #00000029",
          border: "1px solid #79B86F",
          opacity: 1,
          borderRadius: "10px",
          color: "white",
          marginTop: "30px",
          textTransform: "capitalize ",
          "&:hover": {
            background: "#75A54C",
          },
        }}
        onClick={handleButtonClick1}
      >
        Get Free Credit Score
      </Button>
      {openModal && (
        <GetStartedWith1 openModal={openModal} onClose={handleCloseModal1} handleButtonClick2={handleButtonClick2} />
      )}
      {openModal2 && (
        <GetStartedWith2
          openModal2={openModal2}
          handleCloseModal2={handleCloseModal2}
        />
      )}
    </>
  );
};

export default GetFreeCreditButton;
