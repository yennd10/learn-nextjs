'use client'

import WaveTrack from "@/components/track/wave.track";
import { Container } from "@mui/material";
import { use } from "react";

export default function DetailTrackPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) 
    {
    
    const { slug } = use(params);
    const query  = use(searchParams);
    const search = query.audio;

    // console.log(">>> check params: ", slug);
    // console.log(">>> check searchParams: ", search);
    return(
      <Container>
        <WaveTrack/>
      </Container>         
    )
}