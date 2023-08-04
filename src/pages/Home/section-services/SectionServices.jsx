//Styles
import "./SectionServices.css";
import './../../../styles/main.css'

//Components
import TextComponent from "../../../components/Layout/TextComponent";
import ImageComponent from "../../../components/Layout/ImageComponent";

//images
import GameDevImg from '../../../images/main/additional/MaskGroup-2.png';
import SDKdevImg from '../../../images/main/additional/MaskGroup-3.png';
import ModelingImg from './../../../images/0_services/>Sdk-3d-Modeling/sdk-3d-modeling_robot.png';
import VrAppDevImg from './../../../images/main/additional/Illustration4.png'

function SectionServices() {
    return (
        <div className='mainPadding'>
            <div>
                <TextComponent content="SERVICES" className="servicesHeaderh2"/>
            </div>
            <div className="serviseNotesBox">
                <div className='contentFlexBox'>
                    <div className='serviceNotesBox-text'>
                        <TextComponent content="GAME DEVELOPMENT" className="servicesHeaderh3"/>
                        <TextComponent
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dapibus purus, viverra porta velit. Nam eleifend, dolor a condimentum ullamcorper, ligula nunc elementum mi, et mollis odio ligula eu felis. Vestibulum a libero lorem. Nulla vestibulum id elit in ullamcorper. Fusce pellentesque tortor velit, eu rutrum nunc eleifend quis. Fusce dignissim, lectus ut tristique convallis, leo justo tempus erat, at volutpat arcu tellus eget sapien. Aliquam non ligula in ligula malesuada venenatis.
Fusce lacus felis, efficitur ut euismod ac, gravida sed tortor. Suspendisse vitae imperdiet elit, at viverra magna. Aenean ut libero ut arcu maximus faucibus ut ut sapien."
                            className="textContent"
                        />
                    </div>
                    <div className='serviceImage'>
                        {/*<img src={GameDevImg} alt="GameDevImage"/>*/}
                        <ImageComponent src={GameDevImg} alt="GameDevImage"/>
                    </div>

                </div>
            </div>
            <div className="serviseNotesBox">
                <div className='contentFlexBox'>
                    <div className='serviceImage'>
                        {/*<img src={GameDevImg} alt="GameDevImage"/>*/}
                        <ImageComponent src={SDKdevImg} alt="SDKDevImage"/>
                    </div>
                    <div className='serviceNotesBox-text'>
                        <TextComponent content="SDK Development" className="servicesHeaderh3"/>
                        <TextComponent
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dapibus purus, viverra porta velit. Nam eleifend, dolor a condimentum ullamcorper, ligula nunc elementum mi, et mollis odio ligula eu felis. Vestibulum a libero lorem. Nulla vestibulum id elit in ullamcorper. Fusce pellentesque tortor velit, eu rutrum nunc eleifend quis. Fusce dignissim, lectus ut tristique convallis, leo justo tempus erat, at volutpat arcu tellus eget sapien. Aliquam non ligula in ligula malesuada venenatis.
Fusce lacus felis, efficitur ut euismod ac, gravida sed tortor. Suspendisse vitae imperdiet elit, at viverra magna. Aenean ut libero ut arcu maximus faucibus ut ut sapien."
                            className="textContent"
                        />
                    </div>

                </div>
            </div>
            <div className="serviseNotesBox">
                <div className='contentFlexBox'>
                    <div className='serviceNotesBox-text'>
                        <TextComponent content="3D Modeling services" className="servicesHeaderh3"/>
                        <TextComponent
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dapibus purus, viverra porta velit. Nam eleifend, dolor a condimentum ullamcorper, ligula nunc elementum mi, et mollis odio ligula eu felis. Vestibulum a libero lorem. Nulla vestibulum id elit in ullamcorper. Fusce pellentesque tortor velit, eu rutrum nunc eleifend quis. Fusce dignissim, lectus ut tristique convallis, leo justo tempus erat, at volutpat arcu tellus eget sapien. Aliquam non ligula in ligula malesuada venenatis.
Fusce lacus felis, efficitur ut euismod ac, gravida sed tortor. Suspendisse vitae imperdiet elit, at viverra magna. Aenean ut libero ut arcu maximus faucibus ut ut sapien."
                            className="textContent"
                        />
                    </div>
                    <div className='serviceImage'>
                        <ImageComponent src={ModelingImg} alt="GameDevImage"/>
                    </div>

                </div>
            </div>
            <div className="serviseNotesBox">
                <div className='contentFlexBox'>
                    <div className='serviceImage'>
                        <ImageComponent src={VrAppDevImg} alt="VrAppDevImg"/>
                    </div>
                    <div className='serviceNotesBox-text'>
                        <TextComponent content="VR App Development" className="servicesHeaderh3"/>
                        <TextComponent
                            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dapibus purus, viverra porta velit. Nam eleifend, dolor a condimentum ullamcorper, ligula nunc elementum mi, et mollis odio ligula eu felis. Vestibulum a libero lorem. Nulla vestibulum id elit in ullamcorper. Fusce pellentesque tortor velit, eu rutrum nunc eleifend quis. Fusce dignissim, lectus ut tristique convallis, leo justo tempus erat, at volutpat arcu tellus eget sapien. Aliquam non ligula in ligula malesuada venenatis.
Fusce lacus felis, efficitur ut euismod ac, gravida sed tortor. Suspendisse vitae imperdiet elit, at viverra magna. Aenean ut libero ut arcu maximus faucibus ut ut sapien."
                            className="textContent"
                        />
                    </div>

                </div>
            </div>

        </div>
    );
}

export default SectionServices;
