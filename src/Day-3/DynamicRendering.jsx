import React from "react";
const DynamicRendering = () => {
  let clickedFramework = -1;
  const stateArr = useState(-1);
  const arr = ["ReactJS", "AngularJS", "VueJS", "NextJS", "JavaScript"];
  return (
    <>
      <h1 className="text-2xl font-bold">
        Clicked FrameWork{clickedFramework}
      </h1>
      <ul>
        {arr.map((element, index) => (
          <li>{element}</li>
        ))}
      </ul>
    </>
  );
};
export default DynamicRendering;
