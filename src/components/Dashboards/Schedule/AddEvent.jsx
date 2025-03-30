import {useJWT} from "../../../hooks/useJWT.js";
import {useState} from "react";
import PropTypes from "prop-types";

export function AddEvent({chosenDate}) {
    const {axiosInstance} = useJWT();
    const [type, setType] = useState("match");

    const addEvent = async (formData) => {
        switch (type) {
            case "match":
                await axiosInstance.post("events/matches/", formData);
                break;
            case "training":
                await axiosInstance.post("events/trainings/", formData);
                break;
            case "custom":
                await axiosInstance.post("events/customs/", formData);
                break;
        }

    }

    const renderFormGroup = () => {
        switch (type) {
            case "match":
                return (
                    <div>
                        <label htmlFor="opponent">Opponent</label>
                        <input type="checkbox" id="is_home"/>
                        <label htmlFor="opponent">Opponent</label>
                        <input type="text" id="opponent"/>
                    </div>
                );
            case "training":
                return (
                    <div>
                        <label htmlFor="opponent">Opponent</label>
                        <input type="checkbox" id="is_home"/>
                        <label htmlFor="opponent">Opponent</label>
                        <input type="text" id="opponent"/>
                    </div>
                );
            case "custom":
                return (
                    <div>
                        <label htmlFor="opponent">Opponent</label>
                        <input type="checkbox" id="is_home"/>
                        <label htmlFor="opponent">Opponent</label>
                        <input type="text" id="opponent"/>
                    </div>
                );
            default:
                return null;
        }
    }

    return (
        <div>
            <h1>Add Event</h1>
            <form action={addEvent}>
                <select name="type" id="type" onChange={(e) => setType(e.target.value)}>
                    <option value="match">Match</option>
                    <option value="training">Training</option>
                    <option value="custom">Custom</option>
                </select>
                <input type="date" id="date" defaultValue={chosenDate}/>
                <input type="time" id="time"/>
                <input type="text" id="location"/>
                <div className="form-group">
                    {renderFormGroup()}
                </div>
                <button type="submit">Dodaj</button>
            </form>
        </div>
    )
}

AddEvent.propTypes = {
    chosenDate: PropTypes.string.isRequired
}