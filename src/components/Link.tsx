import { ReactElement } from "react"

interface LinkProps {
  differentProps: string;
  hover: string;
  icon: ReactElement;
  title: string;
}

export function Link(props: LinkProps) {
  return (
    <a href="#" className={`p-4 text-sm ${props.differentProps} flex items-center rounded font-bold uppercase gap-2 justify-center ${props.hover} transition-colors`}>
      {props.icon}
      {props.title}
    </a>
  )
}