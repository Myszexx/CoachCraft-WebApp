import { useAppContext } from '../context/AppContext';

export function Profile() {
    const { user } = useAppContext();

    return (
        <div>
            <h1>Your Profile</h1>
            <p>{user.name}</p>
            {/* Formularz edycji */}
        </div>
    );
}
