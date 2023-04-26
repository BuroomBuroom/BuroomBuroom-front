import React, { useEffect, useState } from "react";
import { route, school } from "../../../constants/route";
import * as S from "./RouteMap.style";

declare global {
  interface Window {
    kakao: any;
  }
}

const { kakao } = window;
type PropsType = {
  idx: number;
  select: number;
  setSelect: React.Dispatch<React.SetStateAction<number>>;
};

export const RouteMap = ({ idx, setSelect, select }: PropsType) => {
  const [linePath, setLinePath] = useState<any[]>([new kakao.maps.LatLng(school[0], school[1])]);

  useEffect(() => {
    if (linePath.length < route[idx].length + 1) {
      route[idx].map((r) => {
        setLinePath((prev: any) => [...prev, new kakao.maps.LatLng(r.latlng[0], r.latlng[1])]);
      });
    }
  }, []);

  useEffect(() => {
    const midOfRoute = route[idx][Math.floor(route[0].length / 2)].latlng;
    const container = document.getElementById(`map${idx}`);
    const options = {
      center: new kakao.maps.LatLng(midOfRoute[0], midOfRoute[1]),
      level: 10,
    };

    let map = new kakao.maps.Map(container, options);

    if (linePath.length === route[idx].length + 1) {
      var polyline = new kakao.maps.Polyline({
        path: linePath,
        strokeWeight: 5,
        strokeOpacity: 0.8,
        strokeColor: "#ff2050",
        strokeStyle: "solid",
      });

      polyline.setMap(map);
    }
  }, [linePath]);

  return (
    <S.Map>
      <S.CheckBox
        onClick={() => {
          setSelect(idx + 1);
        }}
        checked={idx + 1 !== select}>
        {idx + 1 === select && <img src="/assets/check.svg" />}
      </S.CheckBox>
      <div
        id={`map${idx}`}
        style={{
          width: "100%",
          height: "80%",
          zIndex: -1,
        }}></div>
      <S.RouteInfo>
        <span>
          <b>{idx + 1}호차</b> {route[idx][0].name} - {route[idx][route[idx].length - 1].name}
        </span>
        <S.Routes>
          {route[idx].map((r, id) => (
            <>
              <S.RouteItem>
                {r.name}
                <span>{r.arrivedAt}</span>
              </S.RouteItem>
              {id !== route[idx].length - 1 && <img src="/assets/right-arrow.svg" />}
            </>
          ))}
        </S.Routes>
      </S.RouteInfo>
    </S.Map>
  );
};
