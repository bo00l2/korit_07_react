import { useState } from "react";

function MyForm4() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');


  // 근데 잘 생각해보면 alert을 띄우는건 학습 상황이라서 그렇지 실제 얘가 하는 역할은 form 태그의 preventDefault()를 쓰기 위해서에 가깝다.
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello, ${firstName} ${lastName}`);  
  }

  return (
    <form onSubmit={handleSubmit}> 
      <label>FirstName : </label>
      <input type="text" onChange={event => { setfirstName(event.target.value)}}/>
      <br />
      <label>LastName : </label>
      <input type="text" onChange={event => { setlastName(event.target.value)}} />
      <br />
      <label>Email : </label>
      <input type="email" onChange={event => { setemail(event.target.value)}} />
      <br />
      <input type="submit" />
    </form>
  );
}

export default MyForm4;