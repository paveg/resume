import React from 'react'
import { AppLink } from '@/components/atoms/appLink'
import Content from './content.mdx'

export default function Home() {
  return (
    <>
      <div id="main-container" className='container mx-auto p-16'>
        <Content />
      </div>
    </>
  )
}
