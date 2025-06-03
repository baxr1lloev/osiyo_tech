"use client"

import { useEffect, useRef } from "react"

export default function YandexMap({
  center = [41.253032, 69.189723], 
  zoom = 10,
  width = "100%",
  height = "260px",
  className = "",
}) {
  const mapRef = useRef(null)
  const mapInstanceRef = useRef(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.ymaps) {
      initializeMap()
    } else {
      loadYandexMapsAPI()
    }

    return () => {

      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy()
      }
    }
  }, [])

  const loadYandexMapsAPI = () => {
    if (document.querySelector('script[src*="api-maps.yandex.ru"]')) {
      return
    }

    const script = document.createElement("script")
    script.src = "https://api-maps.yandex.ru/2.1/?apikey=9be4447b-3cc8-4c14-bbd6-4e8892e06209&lang=en_US"
    script.async = true
    script.onload = () => {
      window.ymaps.ready(initializeMap)
    }
    document.head.appendChild(script)
  }

  const initializeMap = () => {
    if (!mapRef.current || mapInstanceRef.current) return

    mapInstanceRef.current = new window.ymaps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
      controls: ["zoomControl", "fullscreenControl"],
    })

    const placemark = new window.ymaps.Placemark(
      center,
      {
        balloonContent: "TopTech Company<br/>123 Tech Street, Silicon Valley, CA 94000",
        hintContent: "TopTech Office",
      },
      {
        preset: "islands#redDotIcon",
      },
    )

    mapInstanceRef.current.geoObjects.add(placemark)
  }

  return <div ref={mapRef} style={{ width, height }} className={`rounded-xl ${className}`} />
}
