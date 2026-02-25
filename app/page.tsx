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

  const chill = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: {category: "CHILL", limit: 10}
  });

  const workout = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: {category: "WORKOUT", limit: 10}
  });

  const party = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: {category: "PARTY", limit: 10}
  });
  
  //console.log("Chill:", chill?.data?.[0]?.title);

  return (
    <>
      <Container>
        <MainSlider data={chill?.data ?? []}/>
        <MainSlider data={workout?.data ?? []}/>
        <MainSlider data={party?.data ?? []}/>
      </Container>
    </>
  );
}
