import { useParams } from 'react-router-dom';

export function Team() {
    const { id } = useParams();

    return (
        <div>
            <h1>Team Details for {id}</h1>
            {/* Szczegóły drużyny */}
        </div>
    );
}
