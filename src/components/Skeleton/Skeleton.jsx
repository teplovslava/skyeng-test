import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={450}
    height={170}
    viewBox="0 0 450 170"
    backgroundColor="#d6d6d6"
    foregroundColor="#ababab"
    {...props}
  >
    <rect x="341" y="14" rx="8" ry="8" width="102" height="92" />
    <rect x="9" y="16" rx="8" ry="8" width="252" height="20" />
    <rect x="9" y="82" rx="9" ry="9" width="172" height="21" />
    <rect x="10" y="52" rx="8" ry="8" width="115" height="12" />
    <rect x="9" y="126" rx="8" ry="8" width="435" height="32" />
  </ContentLoader>
)

export default Loader