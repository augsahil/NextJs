import { useRouter } from 'next/router'
import React from 'react'

function Post() {
  const router = useRouter();
  const { sno } = router.query;
  return (
    <p>{sno} </p>
  )
}

export default Post