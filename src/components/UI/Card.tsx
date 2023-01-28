import './Card.css';
import React from 'react';

type cardProps = {
    children: React.ReactNode,
    className?: string // for some reason, this is required so that `Card` can be used to other classes
}

const Card = ({ children, className="" }: cardProps) => {
    const classes = "card " + className
    return (
        <div className={ classes }>
            {children}
        </div>
    )
}

export default Card;