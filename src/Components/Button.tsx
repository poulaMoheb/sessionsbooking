import { type ComponentPropsWithoutRef } from "react"
import { Link } from "react-router-dom";


// Type can be applied on this component 
type AnchorTypeProps = {
    to?: string
} & ComponentPropsWithoutRef<typeof Link>;

type ButtonTypeProps = {
    to?: never,
} & ComponentPropsWithoutRef<'button'>;

// Component Type 
type ButtonProps = { textOnly: boolean } & (ButtonTypeProps | AnchorTypeProps)



function Button(props: ButtonProps) {
    function isLink(props: ButtonProps): props is AnchorTypeProps & { textOnly: boolean } {
        return 'to' in props
    }

    if (isLink(props))
        return (
            <Link className={`button button${props.textOnly && '--text-only'}`} {...props} >{props.children}</Link>
        )

    return (
        <button className={`button button${props.textOnly && '--text-only'}`} {...props} >{props.children}</button>
    )
}

export default Button