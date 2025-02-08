import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import {Header} from "../components/Dashboard/Header.jsx";
import {Profile} from "../pages/Profile.jsx";
import {Registration} from "../pages/Registration.jsx";
import {MainBoard} from "../components/Dashboard/MainBoard.jsx";
import {TeamMain} from "../components/Dashboards/Team/TeamMain.jsx";
import {NinetyMinPicker} from "../components/Dashboards/Team/NinetyMinPicker.jsx";

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
        </Previews>
    )
}

export default ComponentPreviews