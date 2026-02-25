import MainSlider from "@/components/main/main.slider";
import { Category } from "@mui/icons-material";
import { Container } from "@mui/material";

import { sendRequest } from "@/utils/api";

export default async function Home() {
  // const res = await fetch("http://localhost:8000/api/v1/tracks/top",{
  //   method: "POST",
  //   headers: {
  //     "Content-Type":"application/json"
  //   },
  //   body: JSON.stringify({
  //     category: "CHILL",
  //     limit: 10
  //   })
  // });

  // console.log(">>>data:", await res.json());  

  const res = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: {category: "CHILL", limit: 1}, 

  });

  console.log(">>>data:", res?.data[0]?.title);  

  return (
    <>
      <Container>
        <MainSlider/>
        <MainSlider/>
        <MainSlider/>
      </Container>
    </>
  );
}
