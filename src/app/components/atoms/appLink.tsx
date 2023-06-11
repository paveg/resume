import React, { FC } from "react";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}
export const AppLink: FC<Props> = ({ href, children, external }) => {
  const styles = "underline text-blue-500 hover:text-blue-800"
  const isExternal = (): boolean => {
    if (external || href.startsWith('http://') || href.startsWith('https://')) return true
    return false
  }

  return (
    isExternal() ?
      <Link className={styles} href={href} target="_blank" rel="noopener noreferrer">{children}</Link> :
      <Link className={styles} href={href}>{children}</Link>
  )
}
