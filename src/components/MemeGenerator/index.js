import {Component} from 'react'

import {
  AppContainer,
  Heading,
  MemeFormContainer,
  FormContainer,
  InputCard,
  LabelText,
  SelectCard,
  Option,
  GenerateButton,
  MemeContainer,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeOptionIdInput: fontSizesOptionsList[0].optionId,
    imageUrl: '',
    topText: '',
    bottomText: '',
    activeOptionId: '',
  }

  onChangeImgUrl = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeActiveOption = event => {
    this.setState({activeOptionIdInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      activeOptionIdInput,
    } = this.state

    this.setState({
      imageUrl: imageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeOptionId: activeOptionIdInput,
    })
  }

  renderMemeCard = () => {
    const {imageUrl, topText, bottomText, activeOptionId} = this.state
    return (
      <MemeContainer bgImage={imageUrl} data-testid="meme">
        <Text fontSize={activeOptionId}>{topText}</Text>
        <Text fontSize={activeOptionId}>{bottomText}</Text>
      </MemeContainer>
    )
  }

  renderFormContainer = () => {
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      activeOptionIdInput,
    } = this.state
    return (
      <FormContainer onSubmit={this.onSubmitForm}>
        <LabelText htmlFor="image-url">Image URL</LabelText>
        <InputCard
          id="image-url"
          type="text"
          placeholder="Enter the Image URL"
          value={imageUrlInput}
          onChange={this.onChangeImgUrl}
        />
        <LabelText htmlFor="top-text">Top Text</LabelText>
        <InputCard
          id="top-text"
          type="text"
          placeholder="Enter the Top Text"
          value={topTextInput}
          onChange={this.onChangeTopText}
        />
        <LabelText htmlFor="bottom-text">Bottom Text</LabelText>
        <InputCard
          id="bottom-text"
          type="text"
          placeholder="Enter the Bottom Text"
          value={bottomTextInput}
          onChange={this.onChangeBottomText}
        />
        <LabelText htmlFor="font-size">Font Size</LabelText>
        <SelectCard
          id="font-size"
          onChange={this.onChangeActiveOption}
          value={activeOptionIdInput}
        >
          {fontSizesOptionsList.map(eachOption => (
            <Option key={eachOption.optionId}>{eachOption.displayText}</Option>
          ))}
        </SelectCard>
        <GenerateButton type="submit">Generate</GenerateButton>
      </FormContainer>
    )
  }

  render() {
    return (
      <AppContainer>
        <Heading>Meme Generator</Heading>
        <MemeFormContainer>
          {this.renderFormContainer()}
          {this.renderMemeCard()}
        </MemeFormContainer>
      </AppContainer>
    )
  }
}
export default MemeGenerator
