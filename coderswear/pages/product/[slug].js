import { useRouter } from 'next/router'
import React from 'react'

function Post() {
    const router = useRouter();
    const {slug} = router.query;

  return (
    <div>our slug is: {slug} </div>
  )
}

export default Post