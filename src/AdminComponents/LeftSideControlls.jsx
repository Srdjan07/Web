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
const SwitchLabel = styled.label`
    position: relative;
    bottom: 9px;
    left: 5px;
`;
const RadiobuttonLabel = styled.label`
    cursor: pointer;
    bottom: 7px;
    position: relative;
    left: 5px;
    user-select: none;
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
    width: 45%;
    margin-left: 15px;
    margin-bottom: 10px;
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
            // checkboxF: [],
            sortCpuBy: "",
            sortGpuBy: "",
            sortStorageBy: "",
            sortRamBy: "",
            cpuRadiobutton: "",
            gpuRadiobutton: "",
            ramRadiobutton: "",
            storageRadiobutton: "",
        }
    }

    sortBy = (event) => {

        switch (event.target.id) {
            case "CpuSpeed":
                this.setState({ sortCpuBy: event.target.id });
                break;
            case "CpuCores":
                this.setState({ sortCpuBy: event.target.id });
                break;
            case "CpuLithography":
                this.setState({ sortCpuBy: event.target.id });
                break;
            case "GpuSpeed":
                this.setState({ sortGpuBy: event.target.id });
                break;
            case "GpuMemory":
                this.setState({ sortGpuBy: event.target.id });
                break;
            case "GpuType":
                this.setState({ sortGpuBy: event.target.id });
                break;
            case "RamSpeed":
                this.setState({ sortRamBy: event.target.id });
                break;
            case "RamMemory":
                this.setState({ sortRamBy: event.target.id });
                break;
            case "RamType":
                this.setState({ sortRamBy: event.target.id });
                break;
            case "StorageCapacity":
                this.setState({ sortStorageBy: event.target.id });
                break;
            case "StorageType":
                this.setState({ sortStorageBy: event.target.id });
                break;
            case "StorageConnection":
                this.setState({ sortStorageBy: event.target.id });
                break;
        }
        if (event.target.id === this.state.cpuRadiobutton) {
            this.setState({ RadiobuttonLabel: "" });
        }
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
    onLabelClick = (event) => {
        switch (event.target.id) {
            case "CpuSpeedLabel":
                this.setState({ cpuRadiobutton: "CpuSpeed" });
                break;
            case "CpuCoresLabel":
                this.setState({ cpuRadiobutton: "CpuCores" });
                break;
            case "CpuLithographyLabel":
                this.setState({ cpuRadiobutton: "CpuLithography" });
                break;
            case "GpuSpeedLabel":
                this.setState({ gpuRadiobutton: "GpuSpeed" });
                break;
            case "GpuMemoryLabel":
                this.setState({ gpuRadiobutton: "GpuMemory" });
                break;
            case "GpuTypeLabel":
                this.setState({ gpuRadiobutton: "GpuType" });
                break;
            case "RamSpeedLabel":
                this.setState({ ramRadiobutton: "RamSpeed" });
                break;
            case "RamMemoryLabel":
                this.setState({ ramRadiobutton: "RamMemory" });
                break;
            case "RamTypeLabel":
                this.setState({ ramRadiobutton: "RamType" });
                break;
            case "StorageCapacityLabel":
                this.setState({ storageRadiobutton: "StorageCapacity" });
                break;
            case "StorageTypeLabel":
                this.setState({ storageRadiobutton: "StorageType" });
                break;
            case "StorageConnectionLabel":
                this.setState({ storageRadiobutton: "StorageConnection" });
                break;

        }
    }
    /*sliderCollection = (switchStateCheck, name) => {
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
    }*/

    sliderButtonS = () => {
        this.setState({ sliderButton: !this.state.sliderButton })
    }

    render() {
        const { cpu, gpu, ram, storage, changeGpu, changeRam, changeStorage, changeCpu, cpuSorted, gpuSorted, ramSorted, storageSorted } = this.props;
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
                            }}
                            checked={this.sliderButton}
                            offColor="#FF0000"
                            checked={cpu}
                            name="cpu" />
                        <SwitchLabel>cpu</SwitchLabel><br />
                    </FirstFilterCheckboxIndWrapper>
                    <FirstFilterCheckboxIndWrapper>
                        <Switch
                            onChange={() => {
                                changeGpu();
                            }}
                            checked={this.state.sliderButton}
                            offColor="#FF0000"
                            checked={gpu}
                            name="cpu" />
                        <SwitchLabel>gpu</SwitchLabel><br />
                    </FirstFilterCheckboxIndWrapper>
                    <FirstFilterCheckboxIndWrapper>
                        <Switch
                            onChange={() => {
                                changeRam();
                            }}
                            checked={this.state.sliderButton}
                            offColor="#FF0000"
                            checked={ram}
                            name="ram" />
                        <SwitchLabel>ram</SwitchLabel><br />

                    </FirstFilterCheckboxIndWrapper>
                    <FirstFilterCheckboxIndWrapper>
                        <Switch
                            onChange={() => {
                                changeStorage();
                            }}
                            checked={this.state.sliderButton}
                            offColor="#FF0000"
                            checked={storage}
                            name="storage" />
                        <SwitchLabel>storage</SwitchLabel><br />
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
                        <CheckboxWrapper>
                            <FilterCheckbox
                                onChange={(event) => { this.sortBy(event); }}
                                onClick={() => { this.setState({ cpuRadiobutton: "CpuSpeed" }) }}
                                checked={this.state.cpuRadiobutton === "CpuSpeed"}
                                id="CpuSpeed"
                                name="cpu"
                                type="radio" />
                            <RadiobuttonLabel id="CpuSpeedLabel" onClick={(event) => { this.onLabelClick(event) }}>Speed</RadiobuttonLabel>
                        </CheckboxWrapper>
                        <CheckboxWrapper>
                            <FilterCheckbox
                                onChange={(event) => { this.sortBy(event); }}
                                onClick={() => { this.setState({ cpuRadiobutton: "CpuCores" }) }}
                                checked={this.state.cpuRadiobutton === "CpuCores"}
                                id="CpuCores"
                                name="cpu"
                                type="radio" />
                            <RadiobuttonLabel id="CpuCoresLabel" onClick={(event) => { this.onLabelClick(event) }}>Cores</RadiobuttonLabel>
                        </CheckboxWrapper>
                        <CheckboxWrapper>
                            <FilterCheckbox
                                onChange={(event) => { this.sortBy(event); }}
                                onClick={() => { this.setState({ cpuRadiobutton: "CpuLithography" }) }}
                                checked={this.state.cpuRadiobutton === "CpuLithography"}
                                id="CpuLithography"
                                name="cpu"
                                type="radio" />
                            <RadiobuttonLabel id="CpuLithographyLabel" onClick={(event) => { this.onLabelClick(event) }}>Lithography</RadiobuttonLabel>
                        </CheckboxWrapper></>}
                />
                <DropMenu
                    dropMenuName={"Sort gpu by"}
                    checkBoxes={<>
                        <CheckboxWrapper>
                            <FilterCheckbox
                                onChange={(event) => { this.sortBy(event); }}
                                onClick={() => { this.setState({ gpuRadiobutton: "GpuSpeed" }) }}
                                checked={this.state.gpuRadiobutton === "GpuSpeed"}
                                id="GpuSpeed"
                                name="gpu"
                                type="radio" />
                            <RadiobuttonLabel id="GpuSpeedLabel" onClick={(event) => { this.onLabelClick(event) }}>Speed</RadiobuttonLabel>
                        </CheckboxWrapper>
                        <CheckboxWrapper>
                            <FilterCheckbox
                                onChange={(event) => { this.sortBy(event); }}
                                onClick={() => { this.setState({ gpuRadiobutton: "GpuMemory" }) }}
                                checked={this.state.gpuRadiobutton === "GpuMemory"}
                                id="GpuMemory"
                                name="gpu"
                                type="radio" />
                            <RadiobuttonLabel id="GpuMemoryLabel" onClick={(event) => { this.onLabelClick(event) }}>Memory</RadiobuttonLabel>
                        </CheckboxWrapper>
                        <CheckboxWrapper>
                            <FilterCheckbox
                                onChange={(event) => { this.sortBy(event); }}
                                onClick={() => { this.setState({ gpuRadiobutton: "GpuType" }) }}
                                checked={this.state.gpuRadiobutton === "GpuType"}
                                id="GpuType"
                                name="gpu"
                                type="radio" />
                            <RadiobuttonLabel id="GpuTypeLabel" onClick={(event) => { this.onLabelClick(event) }}>Type</RadiobuttonLabel>
                        </CheckboxWrapper></>}
                />
                <DropMenu
                    dropMenuName={" Sort ram by"}
                    checkBoxes={<>
                        <CheckboxWrapper
                        ><FilterCheckbox
                                onChange={(event) => { this.sortBy(event); }}
                                onClick={() => { this.setState({ ramRadiobutton: "RamSpeed" }) }}
                                checked={this.state.ramRadiobutton === "RamSpeed"}
                                id="RamSpeed"
                                name="ram"
                                type="radio" />
                            <RadiobuttonLabel id="RamSpeedLabel" onClick={(event) => { this.onLabelClick(event) }}>Speed</RadiobuttonLabel>
                        </CheckboxWrapper>
                        <CheckboxWrapper>
                            <FilterCheckbox
                                onChange={(event) => { this.sortBy(event); }}
                                onClick={() => { this.setState({ ramRadiobutton: "RamMemory" }) }}
                                checked={this.state.ramRadiobutton === "RamMemory"}
                                id="RamMemory"
                                name="ram"
                                type="radio" />
                            <RadiobuttonLabel id="RamMemoryLabel" onClick={(event) => { this.onLabelClick(event) }}>Memory</RadiobuttonLabel>
                        </CheckboxWrapper>
                        <CheckboxWrapper>
                            <FilterCheckbox onChange={(event) => { this.sortBy(event); }}
                                onClick={() => { this.setState({ ramRadiobutton: "RamType" }) }}
                                checked={this.state.ramRadiobutton === "RamType"}
                                id="RamType"
                                name="ram"
                                type="radio" />
                            <RadiobuttonLabel id="RamTypeLabel" onClick={(event) => { this.onLabelClick(event) }}>Type</RadiobuttonLabel>
                        </CheckboxWrapper></>}
                />
                <DropMenu
                    dropMenuName={"Sort storage by"}
                    checkBoxes={<>
                        <CheckboxWrapper>
                            <FilterCheckbox onChange={(event) => { this.sortBy(event); }}
                                onClick={() => { this.setState({ storageRadiobutton: "StorageCapacity" }) }}
                                checked={this.state.storageRadiobutton === "StorageCapacity"}
                                id="StorageCapacity"
                                name="storage"
                                type="radio" />
                            <RadiobuttonLabel id="StorageCapacityLabel" onClick={(event) => { this.onLabelClick(event) }}>Capacity</RadiobuttonLabel>
                        </CheckboxWrapper>
                        <CheckboxWrapper>
                            <FilterCheckbox onChange={(event) => { this.sortBy(event); }}
                                onClick={() => { this.setState({ storageRadiobutton: "StorageType" }) }}
                                checked={this.state.storageRadiobutton === "StorageType"}
                                id="StorageType"
                                name="storage"
                                type="radio" />
                            <RadiobuttonLabel id="StorageTypeLabel" onClick={(event) => { this.onLabelClick(event) }}>Type</RadiobuttonLabel>
                        </CheckboxWrapper>
                        <CheckboxWrapper>
                            <FilterCheckbox onChange={(event) => { this.sortBy(event); }}
                                onClick={() => { this.setState({ storageRadiobutton: "StorageConnection" }) }}
                                checked={this.state.storageRadiobutton === "StorageConnection"}
                                id="StorageConnection"
                                name="storage"
                                type="radio" />
                            <RadiobuttonLabel id="StorageConnectionLabel" onClick={(event) => { this.onLabelClick(event) }}>Connection</RadiobuttonLabel>
                        </CheckboxWrapper></>}
                />
                <CheckBoxFilterButton onClick={() => {
                    cpuSorted(this.state.sortCpuBy);
                    storageSorted(this.state.sortStorageBy);
                    ramSorted(this.state.sortRamBy);
                    gpuSorted(this.state.sortGpuBy);
                    this.backgroundChange();
                    this.sendSliderValues();
                }} backgroundColor={this.state.backgroundColor} >Sort</CheckBoxFilterButton>
            </Filter>
        </Search>
    }
}