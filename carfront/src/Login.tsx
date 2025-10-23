import { ChangeEvent, useState } from "react"
import axios from "axios"
import { Button, TextField, Stack, Snackbar } from "@mui/material";
import Carlist from "./components/Carlist";


type User = { // AccountCredentials에서 record로 알 수 있다
  username: string;
  password: string;
}

function Login(){
  const [ user, setUser ] = useState<User>({
    username:'',
    password:''
  });

  const [ isAuthenticated, setAuth ] = useState(false);
  const [ open, setOpen ] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({...user, [event.target.name]: event.target.value});
  } 

  const handleLogin = () => {
    // 일부러 템플릿 리터럴(tmeplate literal)로 안씀(하드코딩함)
    axios.post(import.meta.env.VITE_API_URL + "/login", user, {
      headers: {
        'Content-Type':'application/json'
      }
    })
    // 여기까지 로그인이 된 상태임
    .then(res => {  // 그래서 생성된 토큰을 가져옴
      const jwtToken = res.headers.authorization;
      if(jwtToken !== null){
        sessionStorage.setItem("jwt", jwtToken);
        setAuth(true);
      }
    })
    .catch(err => {
      console.log(err)
    });
  }

  if(isAuthenticated){
    return <Carlist />
  }

  else {
    return (
      <Stack spacing={2} alignItems="center" mt={2}>
        <TextField 
          name="username"
          label="Username"
          onChange={handleChange}
        />
        <TextField 
          type="password"
          name="password"
          label="Password"
          onChange={handleChange}
        />
        <Button 
          variant="outlined"
          color="primary"
          onClick={handleLogin}
        >
          Login
        </Button>
        <Snackbar 
          open={open}
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
          message='ID 혹은 비밀번호가 틀렸습니다.'
        />
      </Stack>
    )
  }

}

export default Login