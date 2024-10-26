'use client';

import { useEffect, useRef } from "react";

export default function KakaoMap() {

  const container = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  const onClickEvent = (event:MouseEvent) => {
    console.log('click: ', event);
  }
  useEffect(() => {
    if(!container.current) return;
    if(!process.env.NEXT_PUBLIC_KAKAO_API_KEY) throw new Error("Not Found API KEY");

    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&libraries=services,clusterer,drawing&autoload=false`;

    document.head.appendChild(script);

    script.onload = () => {
      // windows를 any로 형변환하여 kakao에 대한 여부를 통과시키기
      const kakao = (window as any).kakao;
      if(!kakao) {
        console.error("could not found Kakao");
        return
      };

      kakao.maps.load(() => {

        const center = new kakao.maps.LatLng(37.597283172613366, 127.0586311259329)
        console.log('Center: ', center);
        const options = {
          center: center,
          level: 2,
        }
        const map = new kakao.maps.Map(container.current!, options);

        map.addListener('click', onClickEvent);
        mapRef.current = map;
      }); 
    }
    return () => {
      if(!mapRef.current) return;
      mapRef.current.removeListener('click', onClickEvent);
    };
  }, [container]);

  return (
    <div className="w-full h-full" id="container" ref={container} />
  )
}