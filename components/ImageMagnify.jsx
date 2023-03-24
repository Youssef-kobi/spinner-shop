import { useState } from 'react'
const ImageMagnify = ({
  src,
  width,
  height,
  magnifierHeight = 100,
  magnifierWidth = 100,
  zoomLevel = 1.3,
}) => {
  const [showMagnifier, setShowMagnifier] = useState(false)
  const [[imgWidth, imgHeight], setSize] = useState([0, 0])
  const [[x, y], setXY] = useState([0, 0])
  return (
    // the container
    <div
      style={{
        position: 'relative',
        height: height,
        width: width,
      }}
    >
      {/*eslint-disable-next-line , @next/next/no-img-element */}
      <img
        src={src}
        style={{ height: height, width: width }}
        alt={'img'}
        onMouseEnter={(e) => {
          const elem = e.currentTarget
          const { width, height } = elem.getBoundingClientRect()
          setSize([width, height])
          setShowMagnifier(true)
        }}
        onMouseLeave={() => {
          setShowMagnifier(false)
        }}
        onMouseMove={(e) => {
          // update cursor position
          const elem = e.currentTarget
          const { top, left } = elem.getBoundingClientRect()

          // calculate cursor position on the image
          const x = e.pageX - left - window.pageXOffset
          const y = e.pageY - top - window.pageYOffset
          setXY([x, y])
        }}
      />

      <div
        style={{
          display: showMagnifier ? '' : 'none',
          position: 'absolute',
          // cursor: 'not-allowed',
          // prevent magnifier blocks the mousemove event of img
          pointerEvents: 'none',
          // set size of magnifier
          height: `${magnifierHeight}px`,
          width: `${magnifierWidth}px`,
          // move element center to cursor pos
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifierWidth / 2}px`,
          opacity: '1', // reduce opacity so you can verify position
          border: '1px solid lightgray', // show the border of magnifier
          backgroundColor: 'transparent',
          backgroundImage: `url('${src}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,
          backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        }}
      />
    </div>
  )
}
export default ImageMagnify
