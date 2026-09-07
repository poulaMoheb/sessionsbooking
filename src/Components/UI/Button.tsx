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

    // Extra Type Validation 
    if (isLink(props)) {
        const { textOnly, ...linkProps } = props;
        return (
            <Link className={`button button${textOnly && '--text-only'}`} {...linkProps} >{props.children}</Link>
        )
    }
    const { textOnly, ...buttonProps } = props;
    return (
        <button className={`button button${textOnly && '--text-only'}`} {...buttonProps} >{props.children}</button>
    )
}

export default Button