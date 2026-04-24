import { useState } from 'react'

interface TeamBadgeProps {
    name: string
    shieldUrl: string
}

function getInitials(name: string) {
    return name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0]?.toUpperCase() ?? '')
        .join('')
}

export function TeamBadge({ name, shieldUrl }: TeamBadgeProps) {
    const [imageError, setImageError] = useState(false)

    if (!shieldUrl || imageError) {
        return <div className="team-badge" aria-hidden="true">{getInitials(name)}</div>
    }

    return (
        <div className="team-badge">
            <img src={shieldUrl} alt={`Escudo de ${name}`} onError={() => setImageError(true)} />
        </div>
    )
}