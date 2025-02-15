import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {Header} from "../components/Dashboard/Header.jsx";
import {Profile} from "../pages/Profile.jsx";
import {Registration} from "../pages/Registration.jsx";
import {MainBoard} from "../components/Dashboard/MainBoard.jsx";
import {TeamMain} from "../components/Dashboards/Team/TeamMain.jsx";
import {NinetyMinPicker} from "../components/Dashboards/Team/NinetyMinPicker.jsx";
import {FullBlock} from "../components/Dashboard/FullBlock.jsx";
import {PlayersMain} from "../components/Dashboards/Players/PlayersMain.jsx";
import {BigCalendar} from "../components/Common/BigCalendar.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Header">
                <Header/>
            </ComponentPreview>
            <ComponentPreview path="/Profile">
                <Profile/>
            </ComponentPreview>
            <ComponentPreview path="/Registration">
                <Registration/>
            </ComponentPreview>
            <ComponentPreview path="/MainBoard">
                <MainBoard/>
            </ComponentPreview>
            <ComponentPreview path="/TeamMain">
                <TeamMain/>
            </ComponentPreview>
            <ComponentPreview path="/NinetyMinPicker">
                <NinetyMinPicker/>
            </ComponentPreview>
            <ComponentPreview path="/FullBlock">
                <FullBlock/>
            </ComponentPreview>
            <ComponentPreview path="/PlayersMain">
                <PlayersMain/>
            </ComponentPreview>
            <ComponentPreview path="/BigCalendarComponent">
                <BigCalendar/>
            </ComponentPreview>
            <ComponentPreview path="/ComponentPreviews">
                <ComponentPreviews/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews