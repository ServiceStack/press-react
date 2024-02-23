import { combinePaths } from "@servicestack/client"
import { Icon } from "@iconify/react"
import SrcLink from "./SrcLink"

type Props = {
    path: string
}

export default ({ path }:Props) => (
    <SrcLink href={combinePaths('/example/react-press/src',path)}>
        <Icon icon="mdi:react" className="w-5 h-5 text-link-dark inline" />
    </SrcLink>
)