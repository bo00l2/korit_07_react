import HelloProps from "./types/types.ts";

function HelloComponent({name, age} : HelloProps) {  // 객체 구조분해를 봐야한다. 

  return (
  <>
    Hello {name}, you are {age} years old!
  </>
  );
}

export default HelloComponent;