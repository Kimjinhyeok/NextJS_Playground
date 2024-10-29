'use client';

import { useEffect, useRef } from "react";

const CenterLatlng = {
  lat : 37.596832367611604,
  lng: 127.0592507392781,
};
export default function KakaoMap() {

  const container = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);
  const pritnRef = useRef<HTMLDivElement>(null);
  const onClickEvent = (event:any) => {
    console.log(event);
    const latLng = event.latLng;
    const div = document.createElement('div');
    div.innerHTML = `lat: ${latLng.getLat()}, lng: ${latLng.getLng()}`;

    pritnRef.current?.appendChild(div);
  }
  useEffect(() => {
    if(!container.current) return;
    if(!process.env.NEXT_PUBLIC_KAKAO_API_KEY) throw new Error("Not Found API KEY");

    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&libraries=services,clusterer,drawing&autoload=false`;

    document.head.appendChild(script);

    script.onload = () => {
      if(mapRef.current) return;
      // windows를 any로 형변환하여 kakao에 대한 여부를 통과시키기
      const kakao = (window as any).kakao;
      if(!kakao) {
        console.error("could not found Kakao");
        return
      };

      kakao.maps.load(() => {

        const center = new kakao.maps.LatLng(CenterLatlng.lat, CenterLatlng.lng)
        console.log('Center: ', center);
        const options = {
          center: center,
          level: 3,
          mapTypeId: kakao.maps.MapTypeId.HYBRID,
          draggable: true,
        }
        const map = new kakao.maps.Map(container.current!, options);

        map.addListener('click', onClickEvent);
        map.removeOverlayMapTypeId.OVERLAY
        mapRef.current = map;
      }); 
    }
    return () => {
      if(!mapRef.current) return;
      mapRef.current.removeListener('click', onClickEvent);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 w-full h-full" id="container" ref={container}/>
      <div ref={pritnRef} className="h-[20%] w-full overflow-auto bg-zinc-100 text-gray-900 px-2" />
    </div>
  )
}