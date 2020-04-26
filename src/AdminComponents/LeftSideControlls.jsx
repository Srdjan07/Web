import React from 'react';
import styled from "styled-components";
import ReactSlider from 'react-slider';
import DropMenu from '../AdminComponents/DropDownFilterMenu';
import Switch from "react-switch";


const Search = styled.div`
   width: 305px;
   height: 90%;
   background-color: #cecece;
   margin-left: 80px;
   margin-top: 80px;
//    overflow-y: scroll;
//    overflow-x: hidden;
   border-radius: 20px;
`;
const Filter = styled.div`
    width: 100%;
    height: 200px;
`;
const FilterTextCont = styled.div`
    position: relative;
    background: orangered;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    text-align:center;
    border-bottom: solid 1px;
    height: 30px;
`;
const FilterText = styled.label`
`;
const CheckBoxCon = styled.div`
    position: relative;
    top: 25px;
    height: 100px;
`;
const CheckBoxFilterButton = styled.button`
    width: 90%;
    height: 30px;
    margin-top: 5px;
    margin-left: 5%;
    margin-bottom: 10px;
    border: #4CAF50;
    border-width: 1px;
    border-style: solid;
    border-radius: 7px;
    outline: none !important;
    outline-offset: none !important;
    background-color: ${props => props.backgroundColor};
    :hover {
        transition-duration: 0.7s;
		background-color: #4CAF50;
		cursor: pointer;
	}
`;
const SliderValueBox1 = styled.input`
    width: 100px;
    height: 30px;
    margin-right: 15px;
    margin-top: 20px;
    margin-left: 25px;
`;
const SliderValueBox2 = styled.input`
    margin-top: 20px;    
    height: 30px;
    width: 100px;
    margin-left: 15px;
`;
const SliderDiv = styled.div`
    width: 98%;
    height: 150px;
    margin-top: 30px;
    border-style: ridge;
    border-bottom-left-radius: 30px;
    border-top-right-radius: 30px;
    border-color: orange;
`;
const SliderWrapper = styled.div`
    width: 90%;
    margin-top: 25px;
    margin-left: 15px;
`;
const CheckboxWrapper = styled.div`

`;
const FilterCheckbox = styled.input`
    position: relative;
    cursor: pointer;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #000000;
`;
const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 25px;
`;
const StyledThumb = styled.div`
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    background-color: #000;
    color: #fff;
    border-radius: 50%;
    cursor: grab;
`;
const FirstFilterCheckboxIndWrapper = styled.div`
    display: inline-block;
    width: 50%;
`;
const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${props => props.index === 2 ? '#2AFF00' : props.index === 1 ? '#FFFFFF' : '#F6970E'};
    border-radius: 999px;
`;
const Thumb = (props) => <StyledThumb {...props} ></StyledThumb>;
const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

export default class AdminsLeftSideControlls extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inputValue1: 0,
            inputValue2: 30000,
            backgroundColor: "white",
            checkboxF: [],
            sortCpuBy: "",
            sortGpuBy: "",
            sortStorageBy: "",
            sortRamBy: "",
        }
    }

    sortBy = (event) => {
        switch (event.target.name) {
            case "CpuSpeed":
                this.setState({ sortCpuBy: event.target.name });
                break;
            case "CpuCores":
                this.setState({ sortCpuBy: event.target.name });
                break;
            case "CpuLithography":
                this.setState({ sortCpuBy: event.target.name });
                break;
            case "Cpu":
                this.setState();
                break;
        }
    }
    checkedCheckbox = () => {

    }

    sendSliderValues = () => {
        this.props.changedValueSlider(this.state.inputValue1, this.state.inputValue2)
    }
    sliderToInputOnChange = (event) => {
        this.setState({ inputValue1: event[0] * 500, inputValue2: event[1] * 500 })
    }
    backgroundChange = () => {
        if (this.state.backgroundColor === "white") {
            this.setState({ backgroundColor: "yellow" })
        }
        else {
            this.setState({ backgroundColor: "white" })
        }
        setTimeout(() => {
            this.setState({ backgroundColor: "white" });
        }, 1000)
    }
    sliderCollection = (switchStateCheck, name) => {
        console.log(!switchStateCheck)
        if (!switchStateCheck) {
            this.setState({ checkboxF: this.state.checkboxF.concat(name) });
        }
        else {
            var array = [...this.state.checkboxF];
            var index = array.indexOf(name)
            if (index > -1) {
                array.splice(index, 1);
                this.setState({ checkboxF: array });
            }
        }
    }

    sliderButtonS = () => {
        this.setState({ sliderButton: !this.state.sliderButton })
    }

    render() {
        const { cpu, gpu, ram, storage, changeGpu, changeRam, changeStorage, changeCpu } = this.props;
        console.log(this.state)
        return <Search
            individualCheckboxSearch={this.state.checkboxF}
        >
            <Filter>
                <FilterTextCont>
                    <FilterText> - Show only - </FilterText>
                </FilterTextCont>
                <CheckBoxCon>
                    <FirstFilterCheckboxIndWrapper>
                        <Switch
                            onChange={() => {
                                changeCpu();
                                this.sliderCollection(cpu, "cpu");
                            }}
                            checked={this.sliderButton}
                            offColor="#FF0000"
                            checked={cpu}
                            name="cpu" />
                        <label>cpu</label><br />
                    </FirstFilterCheckboxIndWrapper>
                    <FirstFilterCheckboxIndWrapper>
                        <Switch
                            onChange={() => {
                                changeGpu();
                                this.sliderCollection(gpu, "gpu");
                            }}
                            checked={this.state.sliderButton}
                            offColor="#FF0000"
                            checked={gpu}
                            name="cpu" />
                        <label>gpu</label><br />
                    </FirstFilterCheckboxIndWrapper>
                    <FirstFilterCheckboxIndWrapper>
                        <Switch
                            onChange={() => {
                                changeRam();
                                this.sliderCollection(ram, "ram");
                            }}
                            checked={this.state.sliderButton}
                            offColor="#FF0000"
                            checked={ram}
                            name="ram" />
                        <label>ram</label><br />

                    </FirstFilterCheckboxIndWrapper>
                    <FirstFilterCheckboxIndWrapper>
                        <Switch
                            onChange={() => {
                                changeStorage();
                                this.sliderCollection(storage, "storage");
                            }}
                            checked={this.state.sliderButton}
                            offColor="#FF0000"
                            checked={storage}
                            name="storage" />
                        <label>storage</label><br />
                    </FirstFilterCheckboxIndWrapper>
                </CheckBoxCon>
                <SliderDiv>
                    <SliderValueBox1 type="number" value={this.state.inputValue1} onChange={(event) => this.setState({ inputValue1: event.target.value })} />to
                    <SliderValueBox2 type="number" value={this.state.inputValue2} onChange={(event) => this.setState({ inputValue2: event.target.value })} />
                    <SliderWrapper>
                        <StyledSlider
                            defaultValue={[0, 70]}
                            renderTrack={Track}
                            renderThumb={Thumb}
                            onChange={this.sliderToInputOnChange}
                        />
                    </SliderWrapper>
                </SliderDiv>
                <DropMenu
                    dropMenuName={"Sort cpu by"}
                    checkBoxes={<>
                        <CheckboxWrapper><FilterCheckbox onChange={(event) => { this.sortBy(event); this.checkedCheckbox(event) }} name="CpuSpeed" type="checkbox" /> <label>Speed</label></CheckboxWrapper>
                        <CheckboxWrapper><FilterCheckbox onChange={(event) => { this.sortBy(event); }} name="CpuCores" type="checkbox" /> <label>Cores</label></CheckboxWrapper>
                        <CheckboxWrapper><FilterCheckbox onChange={(event) => { this.sortBy(event); }} name="CpuLithography" type="checkbox" /> <label>Lithography</label></CheckboxWrapper></>}
                />
                <DropMenu
                    dropMenuName={"Sort gpu by"}
                    checkBoxes={<>
                        <CheckboxWrapper><FilterCheckbox name="Speed" type="checkbox" /> <label>Speed</label></CheckboxWrapper>
                        <CheckboxWrapper><FilterCheckbox name="Memory" type="checkbox" /> <label>Memory</label></CheckboxWrapper>
                        <CheckboxWrapper><FilterCheckbox name="Type" type="checkbox" /> <label>Type</label></CheckboxWrapper></>}
                />
                <DropMenu
                    dropMenuName={" Sort ram by"}
                    checkBoxes={<>
                        <CheckboxWrapper><FilterCheckbox name="Speed" type="checkbox" /> <label>Speed</label></CheckboxWrapper>
                        <CheckboxWrapper><FilterCheckbox name="Memory" type="checkbox" /> <label>Memory</label></CheckboxWrapper>
                        <CheckboxWrapper><FilterCheckbox name="Type" type="checkbox" /> <label>Type</label></CheckboxWrapper></>}
                />
                <DropMenu
                    dropMenuName={"Sort storage by"}
                    checkBoxes={<>
                        <CheckboxWrapper><FilterCheckbox name="Capacity" type="checkbox" /> <label>Capacity</label></CheckboxWrapper>
                        <CheckboxWrapper><FilterCheckbox name="Type" type="checkbox" /> <label>Type</label></CheckboxWrapper>
                        <CheckboxWrapper><FilterCheckbox name="Connection" type="checkbox" /> <label>Connection</label></CheckboxWrapper></>}
                />
                <CheckBoxFilterButton onClick={() => {
                    this.backgroundChange();
                    this.sendSliderValues()
                }} backgroundColor={this.state.backgroundColor} >Sort</CheckBoxFilterButton>
            </Filter>
        </Search>
    }
}