import React from 'react'
import { AppLink } from '@/app/components/atoms/appLink'

export default function Home() {
  return (
    <main className="container p-16">
      <h1 className="text-3xl font-bold">Ryota Ikezawa</h1>
      <AppLink href='/'>internal</AppLink><br />
      <AppLink href='https://www.google.com'>external</AppLink><br />
      <AppLink external href='/'>with external option</AppLink><br />
    </main>
  )
}
